/**
 * Tower of Hanoi recursive solution
 * @param {number} disks - number of disks
 * @param {string} start - starting pole
 * @param {string} dest - destination pole
 * @param {string} aux - auxiliary pole
 */
function tohRecursive(disks, start, dest, aux) {
  if (disks === 1) {
    console.log(`Move disk 1 from ${start} to ${dest}`)
    return
  }
  tohRecursive(disks - 1, start, aux, dest)
  console.log(`Move disk ${disks} from ${start} to ${dest}`)
  tohRecursive(disks - 1, aux, dest, start)
}

tohRecursive(3, 'A', 'C', 'B')

module.exports = { tohRecursive }
