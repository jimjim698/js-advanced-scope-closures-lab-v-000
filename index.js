function produceDrivingRange(range){
  return function(finalRange){
    if (range >= finalRange){
     let diff = range - finalRange
     return `${diff} blocks within range`
     }
     else { let diff = finalRange- range
     return `${diff} blocks out of range`
    }
  }
}