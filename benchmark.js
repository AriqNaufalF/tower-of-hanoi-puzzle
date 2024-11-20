const { tohIterative } = require('./tohIterative')
const { tohRecursive } = require('./tohRecursive')

const disks = 8

console.time('tohRecursive')
tohRecursive(disks, 'A', 'D', 'B', 'C')
console.timeEnd('tohRecursive')

console.time('tohIterative')
tohIterative(disks, 'A', 'D', 'B', 'C')
console.timeEnd('tohIterative')
