/**
 * 4 pegs Tower of Hanoi recursive solution
 * @param {number} disks - number of disks
 * @param {string} start - starting pole
 * @param {string} dest - destination pole
 * @param {string} aux - first auxiliary pole
 * @param {string} aux2 - second auxiliary pole
 */
function tohRecursive(disks, start, dest, aux, aux2, print = false) {
  const message = []
  function recursiveCall(disks, start, dest, aux, aux2) {
    if (disks === 0) return
    if (disks === 1) {
      message.push(`Move disk 1 from ${start} to ${dest}`)
      return
    }

    recursiveCall(disks - 2, start, aux, aux2, dest)

    message.push(`Move disk ${disks - 1} from ${start} to ${aux2}`)
    message.push(`Move disk ${disks} from ${start} to ${dest}`)
    message.push(`Move disk ${disks - 1} from ${aux2} to ${dest}`)

    recursiveCall(disks - 2, aux, dest, start, aux2)
  }

  recursiveCall(disks, start, dest, aux, aux2)
  if (print) message.forEach((msg) => console.log(msg))
}

module.exports = { tohRecursive }
