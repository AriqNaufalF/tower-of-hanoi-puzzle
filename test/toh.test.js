const { tohIterative } = require('../tohIterative')
const { tohRecursive } = require('../tohRecursive')

describe('Test tower of hanoi iterative', () => {
  let logSpy

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  test('should move 1 disk from A to D', () => {
    tohIterative(1, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
  })

  test('should move 2 disks from A to D', () => {
    tohIterative(2, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to D')
  })

  test('should move 3 disks from A to D', () => {
    tohIterative(3, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to D')
  })

  test('should move 4 disks from A to D', () => {
    tohIterative(4, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from D to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to D')
  })

  test('should move 5 disks from A to D', () => {
    tohIterative(5, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from D to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 5 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to A')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from B to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
  })
})

describe('Test 4 pegs recursive tower of hanoi', () => {
  let logSpy

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  test('should move 1 disk from A to D', () => {
    tohRecursive(1, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
  })

  test('should move 2 disks from A to D', () => {
    tohRecursive(2, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to D')
  })

  test('should move 3 disks from A to D', () => {
    tohRecursive(3, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to D')
  })

  test('should move 4 disks from A to D', () => {
    tohRecursive(4, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from D to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to D')
  })

  test('should move 5 disks from A to D', () => {
    tohRecursive(5, 'A', 'D', 'B', 'C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from D to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 5 from A to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 4 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to A')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from B to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from C to D')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to D')
  })
})
