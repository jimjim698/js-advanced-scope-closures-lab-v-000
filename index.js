function produceDrivingRange(range){
  return function(start,finish){
    debugger
    let finalRange = parseFloat(start) - parseFloat(finish) >0 ? start - finish : finish - start
    if (range >= finalRange){
     let diff = range - finalRange
     return `within range by ${diff} blocks`
     }
     else { let diff = finalRange- range
     return `${diff} blocks out of range`
    }
  }
}