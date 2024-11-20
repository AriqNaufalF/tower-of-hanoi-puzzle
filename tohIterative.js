/**
 * 4 pegs Tower of Hanoi iterative solution
 * @param {number} disks - number of disks
 * @param {string} start - starting pole
 * @param {string} dest - destination pole
 * @param {string} aux - first auxiliary pole
 * @param {string} aux2 - second auxiliary pole
 */
function tohIterative(disks, start, dest, aux, aux2) {
  const stack = []
  stack.push({ disks, start, dest, aux, aux2, state: 0 })

  while (stack.length > 0) {
    const frame = stack.pop()

    if (frame.disks === 0) continue

    if (frame.disks === 1) {
      console.log(`Move disk 1 from ${frame.start} to ${frame.dest}`)
      continue
    }

    switch (frame.state) {
      case 0:
        frame.state = 1
        stack.push(frame)
        stack.push({
          disks: frame.disks - 2,
          start: frame.start,
          dest: frame.aux,
          aux: frame.aux2,
          aux2: frame.dest,
          state: 0,
        })
        break
      case 1:
        console.log(
          `Move disk ${frame.disks - 1} from ${frame.start} to ${frame.aux2}`
        )
        frame.state = 2
        stack.push(frame)
        break
      case 2:
        console.log(
          `Move disk ${frame.disks} from ${frame.start} to ${frame.dest}`
        )
        frame.state = 3
        stack.push(frame)
        break
      case 3:
        console.log(
          `Move disk ${frame.disks - 1} from ${frame.aux2} to ${frame.dest}`
        )
        stack.push({
          disks: frame.disks - 2,
          start: frame.aux,
          dest: frame.dest,
          aux: frame.start,
          aux2: frame.aux2,
          state: 0,
        })
        break
    }
  }
}

module.exports = { tohIterative }
