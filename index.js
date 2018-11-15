function produceDrivingRange(range){
  return function(finalRange){
    if (range >= finalRange){ return 
     let diff = range - finalRange
     return `%{diff} blocks with range`
    }
  }
}