function produceDrivingRange(range){
  return function(finalRange){
    return range >= finalRange
  }
}