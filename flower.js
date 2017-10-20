
var data = date;

//width and height of svg element
var width = window.innerWidth;
var height = window.innerHeight;
var petals = 15;
var halfRadius = Math.min(width, height) / 5;
var colour = d3.scaleOrdinal()
    .range(["#FF9E80", "#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#FFFF8D", "#FFE57F", "#FFD180", "#FFCCBC"]);


var svg = d3.select("#flower")
    .append("div")
    .classed("svg-container", true)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("align", "center")
    .classed("svg-content-responsive", true)
    .append("g")
    .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

var pie = d3.pie().value(function (d) { return d.value; }).sort(null);

var path = svg.selectAll("path")
	.data(pie(data))
	.enter()
	.append("path")
	.attr("class", "petal")
    .attr("transform", function (d) { return r((d.startAngle + d.endAngle) / 2); })
    .attr("d", petalPath)
    .attr("fill", function (d, i) { return colour(d.data.action); })
    .style("stroke", "#616161");


function petalPath(d) {
    var angle = (d.endAngle - d.startAngle) / 2,
        s = polarToCartesian(-angle, halfRadius),
        e = polarToCartesian(angle, halfRadius),
        r = d.data.value * 13,
        m = { x: halfRadius + r, y: 0 },
        c1 = { x: halfRadius + r / 2, y: s.y },
        c2 = { x: halfRadius + r / 2, y: e.y };
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



 /*
path = path.data(pie(data));

path.transition().duration(900)
    .attr("transform", function (d) { return r((d.startAngle + d.endAngle) / 2); })
    .attr("d", petalPath);
 */
   
var tip = d3.select("#flower")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "tip");
tip.append("div")
    .attr("class", "action");
tip.append("div")
    .attr("class", "value");
path.on("mouseover", function (d) {
    tip.select(".action").html(d.data.action);
    tip.select(".value").html(d.data.value);
    tip.style("display", "block");
});
path.on("mouseout", function (d) {
    tip.style("display", "none");
});
path.on("mousemove", function (d) {
    tip.style("top", (d3.event.layerY + 95) + "px")
       .style("left", (d3.event.layerX + 10) + "px");
});

