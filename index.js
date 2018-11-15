function produceDrivingRange(range){
  return function(start,finish){
    let a = parseFloat(start)
    let b = parseFloat(finish)
    let finalRange = a - b >0 ? start - finish : b - start
    if (range >= finalRange){
     let diff = range - finalRange
     return `within range by ${diff} blocks`
     }
     else { let diff = finalRange- range
     return `${diff} blocks out of range`
    }
  }
}