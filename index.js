function produceDrivingRange(range){
  return function(finalRange){
    if (range >= finalRange){
     let diff = range - finalRange
     return `within range by ${diff} blocks`
     }
     else { let diff = finalRange- range
     return `${diff} blocks out of range`
    }
  }
}