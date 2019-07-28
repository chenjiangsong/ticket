export function getRandom(limit) {
  return Math.floor(Math.random() * limit) + 1
}

export function getSum(arr) {
  return arr.reduce((prev, acc) => {
    return prev + acc
  }, 0)
}

export function angle (num) {
  return Math.PI / 180 * num
}