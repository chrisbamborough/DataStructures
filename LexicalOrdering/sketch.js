var vals = [0, 1, 2, 3];


function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  console.log(vals);

  // step 1 - find the largest I
  var largestI = -1;
  for (var i = 0; i < vals.length-1; i++) {
    if (vals[i] < vals[i + 1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    noLoop();
    console.log("finished");
  }

  //step 2
  var largestJ = -1;
  for (var j = 0; j < vals.length; j++) {
    if (vals[largestI] < vals[j]) {
      largestJ = j;
    }
  }

  // Step 3
  swap(vals, largestI, largestJ);


  //step 4 - reverse from largestI + 1 to the end
  var endArray = vals.splice(largestI + 1);
  endArray.reverse();
  vals = vals.concat(endArray);

  background(0);
  textSize(64);
  var s = '';
  for (var i = 0; i < vals.length; i++) {
    s += vals[i]
  }
  fill(255);
  text(s,20,height / 2);
}


function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
