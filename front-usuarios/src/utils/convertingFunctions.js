export function toNumberString(num) {
  num = round(num)
  if (Number.isInteger(num)) {
    return num + '.00'
  } else {
    return num.toString()
  }
}

function round (num) {
  const m = Number((Math.abs(num) * 100).toPrecision(15))
  return Math.round(m) / 100 * Math.sign(num)
}
