/**
*   createTree() adapted from https://bl.ocks.org/mbostock/4339083
*   petalPath() adapted from http://bl.ocks.org/herrstucki/6199768
*   wrap() adapted from https://bl.ocks.org/mbostock/7555321
**/


var colour = d3.scaleOrdinal()
    .range(["#FFD180", "#FFD180", "#FFCCBC", "#FFCCBC", "#FFCCBC", "#FF9E80", "#FF9E80", "#FF9E80", "#FF8A80", "#FF8A80", "#FF8A80", "#FF80AB", "#FF80AB", "#FF80AB", "#EA80FC", "#EA80FC", "#B388FF", "#B388FF", "#B388FF", "#8C9EFF", "#8C9EFF", "#8C9EFF", "#82B1FF", "#82B1FF", "#82B1FF", "#80D8FF", "#80D8FF", "#80D8FF", "#84FFFF", "#84FFFF", "#84FFFF", "#A7FFEB", "#A7FFEB", "#B9F6CA", "#B9F6CA", "#B9F6CA", "#FFFF8D", "#FFFF8D", "#FFE57F", "#FFE57F", "#FFE57F"]);

var treeData = tdata;

// Set the dimensions and margins of the diagram
var margin = { top: 20, right: 90, bottom: 30, left: 90 };
var width = screen.width;
var height = screen.height;
var halfRadius = Math.min(width, height) / 3.5;


createTree();
createFlower();

function createTree() {
    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#tree")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var i = 0,
        duration = 750,
        root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, function (d) { return d.children; });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    root.children.forEach(collapse);

    update(root);

    // Collapse the node and all it's children
    function collapse(d) {
        if (d.children) {
            d._children = d.children
            d._children.forEach(collapse)
            d.children = null
        }
    }

    function update(source) {

        // Assigns the x and y position for the nodes
        var treeData = treemap(root);

        // Compute the new tree layout.
        var nodes = treeData.descendants(),
            links = treeData.descendants().slice(1);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) { d.y = d.depth * 180 });

        // ****************** Nodes section ***************************

        // Update the nodes...
        var node = svg.selectAll('g.node')
            .data(nodes, function (d) { return d.id || (d.id = ++i); });

        // Enter any new modes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
          .on('click', click);

        // Add Circle for the nodes
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr("id", function (d) { return "node" + d.data.code; })
            .attr('r', 1e-6)
            .style("fill", function (d) {
                return d._children ? "#FF3D00" : "#FAFAFA";
            });

        // Add labels for the nodes
        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
            .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function (d) { return d.data.name; })
            .call(wrap, 150);

        // UPDATE
        var nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
          .duration(duration)
          .attr("transform", function (d) {
              return "translate(" + d.y + "," + d.x + ")";
          });

        // Update the node attributes and style
        nodeUpdate.select('circle.node')
          .attr('r', 10)
          .style("fill", function (d) {
              return d._children ? "#FF3D00" : "#FAFAFA";
          })
          .attr('cursor', 'pointer');


        // Remove any exiting nodes
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
          .attr('r', 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
          .style('fill-opacity', 1e-6);

        // ****************** links section ***************************

        // Update the links...
        var link = svg.selectAll('path.link')
            .data(links, function (d) { return d.id; });

        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 }
                return diagonal(o, o)
            })
              .style("stroke", "#FF3D00");

        // UPDATE
        var linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(duration)
            .attr('d', function (d) { return diagonal(d, d.parent) });

        // Remove any exiting links
        var linkExit = link.exit().transition()
            .duration(duration)
            .attr('d', function (d) {
                var o = { x: source.x, y: source.y }
                return diagonal(o, o)
            })
            .remove();

        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {

            path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

            return path
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
            updateFlower(d.data.code);
            flowerHeader.innerText = d.data.name;
            flowerFooter.innerText = d.data.name;
        }
    }
}


var pie = d3.pie().sort(null);

var svg2 = d3.select("#flower")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + (width / 4) + "," + (height / 2) + ")");

var path = svg2.selectAll("path");

function createFlower() {
    d3.csv("flowerData.csv", function (d) {

            path.data(pie(d))
            .enter()
            .append("path")
            .attr("class", "petal")
            .transition().duration(900)
            .attr("transform", function (d) { return r((d.startAngle + d.endAngle) / 2); })
            .attr("d", petalPath)
            .attr("fill", function (d, i) { return colour(d.data["0"]); })
            .each(function (d) { this._current = d; })
            .style("stroke", "#616161");        
    });
}


function updateFlower(code) {
    //console.log(code);
    pie.value(function (d) { return +d[code]; });

    d3.csv("flowerData.csv", function (d) {
        
        svg2.selectAll(".petal")
            .data(pie(d))
            .transition().duration(600)
            .attr("transform", function (d) { return r((d.startAngle + d.endAngle) / 2); })
            .attr("d", petalPath);

        var unit;
        if ((+code >= 0 && +code <= 25) || (+code >= 24 && +code <= 26) || (+code >=187 && +code <= 189) || +code == 216 || +code == 283 || +code == 284 || +code == 288 || (+code >= 302 && +code <= 306) || (+code >= 311 && +code <= 315) || (+code >= 325 && +code <= 336))
            unit = "ml";
        else if (+code == 117)
            unit = "no.";
        else
            unit = "g";

        var tip = d3.select("body")
        .data(d)
        .enter()
        .append("div")
        .attr("class", "tip");

        tip.append("div")
            .attr("class", "year");
        tip.append("div")
            .attr("class", "value");
        svg2.selectAll(".petal")
            .on("mouseover", function (d) {
            tip.select(".year").html("Year: " + d.data.year);
            tip.select(".value").html("Quantity: " + d.data[code] + " " + unit);
            tip.style("display", "block");
        })
        .on("mouseout", function (d) {
            tip.style("display", "none");
        })
        .on('mousemove', function (d) {
            tip.style('top', (d3.event.layerY - 110) + 'px')
              .style('left', (d3.event.layerX + 10) + 'px');
        });

    });
}

function petalPath(d) {
    var angle = (d.endAngle - d.startAngle) / 2,
        s = polarToCartesian(-angle, halfRadius),
        e = polarToCartesian(angle, halfRadius),
        r = 50,
        m = { x: halfRadius + r, y: 0 },
        c1 = { x: halfRadius + (r / 2), y: s.y },
        c2 = { x: halfRadius + (r / 2), y: e.y };
    return "M0,0L" + s.x + "," + s.y + "Q" + c1.x + "," + c1.y + " " + m.x + "," + m.y + "L" + m.x + "," + m.y + "Q" + c2.x + "," + c2.y + " " + e.x + "," + e.y + "Z";
};


function r(angle) {
    return "rotate(" + (angle / Math.PI * 180) + ")";
}

function polarToCartesian(angle, radius) {
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    };
}

function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr('x'),
            y = text.attr('y'),
            dy = 0, //parseFloat(text.attr('dy')),
            tspan = text.text(null)
                .append('tspan')
                .attr('x', x)
                .attr('y', y)
                .attr('dy', dy + 'em');
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text.append('tspan')
                    .attr('x', x)
                    .attr('y', y)
                    .attr('dy', lineHeight + dy + 'em')
                    .text(word);
            }
        }
    });
}




