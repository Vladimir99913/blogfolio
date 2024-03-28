export function calcSum(a,b) {
  return a + b
}

export function rgb (r, g, b) {
  if (r < 0 || g < 0 || b < 0) return null
  if (r > 255 || g > 255 || b > 255) return null
  return `rgb(${r}, ${g}, ${b})`
}

export function positiveNumbers (arr){
  return arr
  .map(item => Number(item))
  .filter(item => item > 0 )
}

