//compose2 :: fn => function (a: fn,b: fn) => fn
//                                          (c: x) => a(b(c))
export const compose2 = (a, b) => (c) => a(b(c))
// filter :: ([],fn) => []
export const filter = (arr, predic) => {
  return arr.filter(predic)
}
// mapObj :: ({}, fn) => fn(obj)
export const mapObj = (obj, fn) => {
  let nObj = {}
  for (let key of Object.keys(obj)) {
    nObj = { ...nObj, [key]: fn(obj[key]) }
  }
  return nObj
}
// test :: (a: x, b: x) => Bollean
export const test = (a, b) => {
  const regexp = RegExp(String(b).toLowerCase())
  return regexp.test(String(a).toLowerCase())
}
// testObj :: ({}, v: x) => bollean
export const testObj = (a, b) => {
  let flag = false
  for (let key of Object.keys(a)) {
    if (test(a[key], b)) flag = true
  }
  return flag
}
export const rango = (arr, cant, ini) => {
  const fin = ini > arr.length - cant ? arr.length : ini - 1 + cant
  return arr.slice(ini - 1, fin)
}
//console.log( mapObj(arr[0], console.log) )
//console.log(test(arr[0].age, 3))
//console.log(arr[2])
//console.log(testObj(arr[2],'bar'))
//console.log(filter(arr, valor => testObj(valor,'e')))
