function produceDrivingRange(range){
  return function(start,finish){
    let a = parseFloat(start)
    let b = parseFloat(finish)
    let finalRange = a - b >0 ? a - b : b - a
    if (range >= finalRange){
     let diff = range - finalRange
     return `within range by ${diff}`
     }
     else { let diff = finalRange- range
     return `${diff} blocks out of range`
    }
  }
}