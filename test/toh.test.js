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

  test('should move 1 disk from A to C', () => {
    tohIterative(1, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
  })

  test('should move 2 disks from A to C', () => {
    tohIterative(2, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to C')
  })

  test('should move 3 disks from A to C', () => {
    tohIterative(3, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to A')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
  })
})

describe('Test tower of hanoi recursive', () => {
  let logSpy

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  test('should move 1 disk from A to C', () => {
    tohRecursive(1, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
  })

  test('should move 2 disks from A to C', () => {
    tohRecursive(2, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to C')
  })

  test('should move 3 disks from A to C', () => {
    tohRecursive(3, 'A', 'C', 'B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from A to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from C to B')
    expect(logSpy).toHaveBeenCalledWith('Move disk 3 from A to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from B to A')
    expect(logSpy).toHaveBeenCalledWith('Move disk 2 from B to C')
    expect(logSpy).toHaveBeenCalledWith('Move disk 1 from A to C')
  })
})
