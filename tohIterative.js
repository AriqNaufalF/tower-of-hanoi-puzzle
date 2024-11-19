/**
 * Data structure to store rods and disks
 * @typedef {Object.<string, number[]>} Rods
 *
 */

/**
 * Print disk movement
 * @param {string} from
 * @param {string} to
 * @param {number} disk
 */
function logDiskMovement(from, to, disk) {
  console.log(`Move disk ${disk} from ${from} to ${to}`)
}

/**
 * Move disk from one rod to another
 * @param {Rods} rods
 * @param {string} from
 * @param {string} to
 */
function moveDisk(rods, from, to) {
  const diskFrom = rods[from][rods[from].length - 1]
  const diskTo = rods[to][rods[to].length - 1]

  if (diskTo === undefined || diskFrom < diskTo) {
    rods[from].pop()
    rods[to].push(diskFrom)
    logDiskMovement(from, to, diskFrom)
  } else {
    rods[to].pop()
    rods[from].push(diskTo)
    logDiskMovement(to, from, diskTo)
  }
}

/**
 *
 * @param {number} disks - number of disks
 * @param {string} start - starting rod
 * @param {string} dest - destination rod
 * @param {string} aux - auxiliary rod
 */
function tohIterative(disks, start, dest, aux) {
  /**
   * Count total moves
   * @type {number}
   */
  const totalMoves = Math.pow(2, disks) - 1

  /**
   * @type {Rods}
   */
  const rods = {
    [start]: [],
    [aux]: [],
    [dest]: [],
  }

  // If disks are even, swap destination and auxiliary rods
  if (disks % 2 === 0) {
    ;[aux, dest] = [dest, aux]
  }

  //  Initialize the starting rod with disks
  for (let i = disks; i >= 1; i--) {
    rods[start].push(i)
  }

  // Move the disks
  for (let i = 1; i <= totalMoves; i++) {
    if (i % 3 === 1) {
      moveDisk(rods, start, dest)
    } else if (i % 3 === 2) {
      moveDisk(rods, start, aux)
    } else if (i % 3 === 0) {
      moveDisk(rods, aux, dest)
    }
  }
}

tohIterative(3, 'A', 'C', 'B')

module.exports = { tohIterative }
