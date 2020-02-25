var cnv;
var data;
var graph;
var nodes;
var jsonOrig;

// create a dictionary structure for new data
let dataStruct = {
  "nodes": [],
  "edges": []
};


function preload() {
  jsonOrig = loadJSON('data.json');
}

function setup() {
  // build a canvas
  cnv = createCanvas(900, 450);
  data = jsonOrig.data;

  // create node object list
  // loop through the array of objects
  for (var i = 0; i < data.length; i++) {
    // create a node object
    let nodeDict = new NodeDict(data[i]);
    dataStruct.nodes.push(nodeDict);
  }

  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 1; j < data.length - i; j++) {
      if (data[i].topic == data[i + j].topic) {
        // create an edge object
        let edgeDict = new EdgeDict(data[i].id, data[i + j].id);
        dataStruct.edges.push(edgeDict);
      }
    }
  }
  print(dataStruct);
}
