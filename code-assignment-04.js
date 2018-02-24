// This is an array
let assignmentArray = [
  4,
  'https://assignment4.com',
  'Introduction to JavaScript - Objects and arrays',
  'Put values into an array, and create an object with the same values. In the console, log one of the values from the array, and then log the same value from the object.',
  true,
  ['assignment4-1', 'assignment4-2', 'assignment4-3']
]

// This is an object. Each value is paired with a property.
let assignmentObject = {
  assignmentNumber: 4,
  url: 'https://assignment4.com',
  title: 'Introduction to JavaScript - Objects and arrays',
  desc: 'Put values into an array, and create an object with the same values. In the console, log one of the values from the array, and then log the same value from the object.',
  thumb: true,
  keywords: [
    'keyword here',
    'buzzword',
    'another keyword'
  ]
}

console.log("")
console.log("assignmentArray")
console.log(assignmentArray[0])
console.log(assignmentArray[1])
console.log(assignmentArray[2])
console.log(assignmentArray[3])
console.log(assignmentArray[4])
console.log(assignmentArray[5][0])
console.log(assignmentArray[5][1])
console.log(assignmentArray[5][2])

console.log("")
console.log("assignmentObject display option 1")
console.log(assignmentObject.assignmentNumber)
console.log(assignmentObject.url)
console.log(assignmentObject.title)
console.log(assignmentObject.desc)
console.log(assignmentObject.thumb)
console.log(assignmentObject.keywords[0])
console.log(assignmentObject.keywords[1])
console.log(assignmentObject.keywords[2])

console.log("")
console.log("assignmentObject display option 2")
console.log(assignmentObject["assignmentNumber"])
console.log(assignmentObject["url"])
console.log(assignmentObject["title"])
console.log(assignmentObject["desc"])
console.log(assignmentObject["thumb"])
console.log(assignmentObject["keywords"][0])
console.log(assignmentObject["keywords"][1])
console.log(assignmentObject["keywords"][2])
