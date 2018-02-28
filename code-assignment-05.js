let assignmentObject1 = {
  id: 1,
  assignmentNumber: 5,
  title: 'Introduction to JavaScript - Loops and conditional statements',
  desc: 'Step 1. Create a new JavaScript file, create at least two objects with at least three properties and values each.'
}

let assignmentObject2 = {
  id: 2,
  assignmentNumber: 5,
  title: 'Introduction to JavaScript - Loops and conditional statements',
  desc: 'Step 2. In the JavaScript file, create at least two objects with at least three properties and values each.'
}

let assignmentArray1 = [
  assignmentObject1,
  assignmentObject2
]

for (let i = 0; i < assignmentArray1.length; i++) {
  if (assignmentArray1[i].id === 1) {
    console.log(i);
    console.log('Element ' + i + ' description: ' + assignmentArray1[i].desc);
  }
}
