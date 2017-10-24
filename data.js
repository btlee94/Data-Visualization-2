
var tdata =
  {
      "name": "Foods",
      "children": [
        {
            "name": "Milk and milk products excluding cheese",
            "code": "0",
            "children": [
              {
                  "name": "Liquid wholemilk, including school and welfare",
                  "code": "1",
                  "children": [
                    {
                        "name": "School milk",
                        "code": "2",
                    },
                    {
                        "name": "Welfare milk",
                        "code": "3",
                    },
                    {
                        "name": "Liquid wholemilk",
                        "code": "4",
                        "children": [
                            {
                                "name": "UHT milk",
                                "code": "5",
                            },
                            {
                                "name": "Sterilized",
                                "code": "6",
                            },
                            {
                                "name": "Pasteurized/homogenized",
                                "code": "7",
                            }
                                ]
                    }
                  ]
              },
              {
                  "name": "Other milk and cream",
                  "children": [
                    {
                        "name": "Skimmed milks",
                        "children": [
                          { "name": "Fully skimmed milks" },
                          { "name": "Semi skimmed milks" }
                        ]
                    },
                    { "name": "Condensed or evaporated milk" },
                    {
                        "name": "Infant milks",
                        "children": [
                          { "name": "Ready to drink" },
                          { "name": "Dried" }
                        ]
                    },
                    { "name": "Instant dried milk" },
                    {
                        "name": "Yoghurt and fromage frais",
                        "children": [
                          { "name": "Yoghurt" },
                          { "name": "Fromage frais" }
                        ]
                    },
                    {
                        "name": "Other milks and dairy desserts",
                        "children": [
                          { "name": "Dairy desserts - not frozen" },
                          { "name": "Dried milk products" },
                          { "name": "Milk drinks and other milks" },
                          { "name": "Non dairy milk substitues" }
                        ]
                    },
                    { "name": "Cream" }
                  ]
              }
            ]
        },
        {  
            "name": "Cheese",
            "children": [
              {
                  "name": "Natural cheese",
                  "children": [
                          { "name": "Hard cheese - cheddar type" },
                          { "name": "Hard cheese - other uk or foreign equivalent" },
                          { "name": "Hard cheese - edam or other foreign" },
                          { "name": "Cottage cheese" },
                          { "name": "Soft natural cheese"}
                  ]
              },
              { "name": "Processed cheese" }
            ]
        },
        {
            "name": "Carcase meat",
            "children": [
              {
                  "name": "Beef and veal",
                  "children": [
                          { "name": "Beef joints - on the bone" },
                          { "name": "Beef joints - boned" },
                          { "name": "Beef steak - less expensive" },
                          { "name": "Beef steak - more expensive" },
                          { "name": "Minced beef" },
                          { "name": "All other beed and veal" }
                  ]
              },
              {
                  "name": "Mutton and lamb",
                  "children": [
                          { "name": "Mutton" },
                          { "name": "Lamb joints" },
                          { "name": "Lamb chops" },
                          { "name": "All other lamb" }
                  ]
              },
              {
                  "name": "Pork",
                  "children": [
                          { "name": "Pork joints" },
                          { "name": "Pork chops" },
                          { "name": "Pork fillets and steaks" },
                          { "name": "All other pork" }
                  ]
              }
            ]
        },
        {
            "name": "Non-carcase meat and meat products",
            "children": [
              {
                  "name": "Liver",
                  "children": [
                          { "name": "Ox liver" },
                          { "name": "Lambs liver" },
                          { "name": "Pigs liver" },
                          { "name": "All other liver" }
                  ]
              },
              {
                  "name": "All offal other than liver"     
              },
              {
                  "name": "Bacon and ham - uncooked",
                  "children": [
                          { "name": "Bacon and ham joints" },
                          { "name": "Bacon and ham rashers" }
                  ]
              },
            {
                  "name": "Bacon and ham - cooked"
            },
              {
                  "name": "Cooked poultry not purchased in cans",
                  "children": [
                          { "name": "Chicken and turkey - cooked" },
                          { "name": "Takeaway chicken" }
                  ]
              },
              {
                  "name": "Corned beef - canned or sliced"
              },
              {
                  "name": "Other cooked meat"
              },
              {
                  "name": "Other canned meat and canned meat products"
              },
              {
                  "name": "Chicken, uncooked - whole chicken or chicken pieces"
              },
              {
                  "name": "Other poultry, uncooked including frozen",
                  "children": [
                          { "name": "Turkey, uncooked - whole turkey or turkey pieces" },
                          { "name": "Poultry other than chicken or turkey, uncooked" }
                  ]
              },
              {
                  "name": "Other fresh, chilled and frozen meat"
              },
              {
                  "name": "Sausages, uncooked - pork"
              },
              {
                  "name": "Sausages, uncooked - beef and other sausages"
              },
              {
                  "name": "Meat pies ans sausage rolls, ready to eat",
                  "children": [
                          { "name": "Meat pies, ready to eat" },
                          { "name": "Sausage rolls, ready to eat" }
                  ]
              },
              {
                  "name": "Meat pies, pastries and puddings, frozen or not frozen"
              },
              {
                  "name": "Burgers"
              },
              {
                  "name": "Ready meals and convenience meat products",
                  "children": [
                          { "name": "Complete meat based ready meals" },
                          { "name": "Other convenience meat products" }
                  ]
              },
              {
                  "name": "Pate and delicatessen type sausage",
                  "children": [
                          { "name": "Pate" },
                          { "name": "Deicatessen typee sausage" }
                  ]
              },
              {
                  "name": "Takeaway meats",
                  "children": [
                          { "name": "Takeaway meat pies and pasties" },
                          { "name": "Takeaway burger and bun" },
                          { "name": "Takeaway kebabs" },
                          { "name": "Takeaway sausage and saveloys" },
                          { "name": "Takeaway meat based meals" },
                          { "name": "Takeaway miscellaneous meats" }
                  ]
              },
            ]
        },
        {
            "name": "Fish",
            "children": [
              {
                  "name": "White fish, fresh",
                  "children": [
                          { "name": "White fish, fressh or chilled" },
                          { "name": "White fish, frozen" }
                  ]
              },
              {
                  "name": "Herrings and other blue fish, fresh",
                  "children": [
                          { "name": "Herrings and other blue fish, fresh or chilled" },
                          { "name": "Herrings and other blue fish, frozen" }
                  ]
              },
              {
                  "name": "Salmon, fresh",
                  "children": [
                          { "name": "Salmon, fresh or chilled" },
                          { "name": "Salmon, frozen" }
                  ]
              },
              {
                  "name": "Blue fish, dried"
              },
              {
                  "name": "White fish, dried"
              },
              {
                  "name": "Shellfish",
                  "children": [
                          { "name": "Shellfish, fresh or chilled" },
                          { "name": "Shellfish, frozen" }
                  ]
              },
              {
                  "name": "Takeaway fish"
              },
              {
                  "name": "Salmon, tinned"
              },
              {
                  "name": "Other tinned or bottled fish"
              },
              {
                  "name": "Ready meals and other fish products"
              },
              {
                  "name": "Takeaway fish meals and fish products",
                  "children": [
                          { "name": "Takeaway fish products" },
                          { "name": "Takeaway fish based meats" }
                  ]
              },
            ]
        },
        {
            "name": "Eggs"
        },
        {
            "name": "Fats",
            "children": [
              {
                  "name": "Butter"
              },
              {
                  "name": "Margarine",
                  "children": [
                          { "name": "Soft margarine" },
                          { "name": "Other margarine" }
                  ]
              },
              {
                  "name": "Lard, cooking fat"
              },
              {
                  "name": "Vegetable and salad oils",
                  "children": [
                          { "name": "Olive oil" },
                          { "name": "Other vegetable and salad oils" }
                  ]
              },
              {
                  "name": "All other fats",
                  "children": [
                          { "name": "Reduced fat spreads" },
                          { "name": "Low fat spreads" },
                          { "name": "Suet and dripping" },
                          { "name": "Imitation cream" }
                  ]
              },
            ]
        },
        {
            "name": "Sugar and preservatives",
            "children": [
              {
                  "name": "Sugar"
              },
              {
                  "name": "James and fruit curds"
              },
              {
                  "name": "Marmalade"
              },
              {
                  "name": "Syrup, treacle"
              },
              {
                  "name": "Honey"
              },
            ]
        },
        {
            "name": "Fresh and processed fruit vegetables, including potatoes"
        },
        {
            "name": "Fresh and processed vegetables, including potatoes"
        },
        {
            "name": "Fresh and processed potatoes",
            "children": [
              {
                  "name": "Fresh potatoes",
                  "children": [
                          { "name": "Fresh new potatoes" },
                          { "name": "Fresh baking potatoes" },
                          { "name": "Other fresh potatoes" }
                  ]
              },
              {
                  "name": "Processed potatoes",
                  "children": [
                          {
                              "name": "Chips and takeaway chips",
                              "children": [
                                  { "name": "Chips" },
                                  { "name": "Takeaway chips" }
                              ]
                          },
                          { "name": "Instant potato" },
                          { "name": "Canned potatoes" },
                          { "name": "Crisps and potato snacks" },
                          { "name": "Other potatoe products"}
                  ]
              },
            ]
        },
        {
            "name": "Fresh and processed fruit vegetables, excluding potatoes"
        },
        {
            "name": "Fresh and processed vegetables, excluding potatoes",
            "children": [
                          {
                              "name": "Fresh green vegetables",
                              "children": [
                                  { "name": "Fresh cabbage" },
                                  { "name": "Fresh brussel sprouts" },
                                  { "name": "Fresh cauliflower" },
                                  {
                                      "name": "Leafy salads fresh",
                                      "children": [
                                         { "name": "Lettuce and leafy salads" },
                                         { "name": "Prepared lettuce salads" }
                                      ]
                                  },
                                  { "name": "Fresh peas" },
                                  { "name": "Fresh beans" },
                                  { "name": "Other fresh vegetables"}
                              ]
                          },
                          {
                              "name": "Other fresh vegetables",
                              "children": [
                                  { "name": "Fresh carrots" },
                                  { "name": "Fresh turnips and swede" },
                                  { "name": "Other fresh root vegetables" },
                                  { "name": "Fresh onions, leeks and shallots" },
                                  { "name": "Fresh cucumbers" },
                                  { "name": "Fresh mushrooms" },
                                  { "name": "Fresh tomatoes" },
                                  {
                                      "name": "Miscellaneous fresh vegetables",
                                      "children": [
                                         { "name": "Fresh vegetable stewpack, stirfry pack" },
                                         { "name": "Fresh stem vegetables" },
                                         { "name": "Fresh marrow, courgettes, aubergine, pumpkin and other vegetables" },
                                         { "name": "Fresh herbs" }
                                      ]
                                  }
                              ]
                          },
                          {
                              "name": "Processed vegetables excluding processed potatoes",
                              "children": [
                                  { "name": "Tomatoes" },
                                  { "name": "Peas, canned" },
                                  {
                                      "name": "Beans, canned",
                                      "children": [
                                         { "name": "Baked beans in sauce" },
                                         { "name": "Other canned beans" }
                                      ]
                                  },
                                  { "name": "Other canned vegetables" },
                                  { "name": "Dried pulses other than air dried" },
                                  { "name": "Air dried vegetables" },
                                  {
                                      "name": "Vegetable juices and purees",
                                      "children": [
                                        { "name": "Tomato and vegetable purees" },
                                        { "name": "Vegetable juices" }
                                      ]
                                  },
                                  {
                                    "name": "Peas, frozen",
                                  },
                                  {
                                    "name": "Beans, frozen",
                                  },
                                  {
                                      "name": "Ready meals and other vegetable products",
                                      "children": [
                                        { "name": "Ready meals and other vegetable products" },
                                        { "name": "All vegetable takeaway products" }
                                      ]
                                  },
                                  {
                                    "name": "Other frozen vegetables",
                                  }
                              ]
                          }
            ]
        },

      ]
  };