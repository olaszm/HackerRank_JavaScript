function minimumDistances(a) {
  let indexes = []

  for(let i = 0; i< a.length; i++){
    for(let k = 0; k< a.length; k++){
      if(a[i] == a[k] && Math.abs(k-i) != 0 ){
        indexes.push(Math.abs(k-i))
      }
    }    
  }

  // return indexes
  return Math.min(...indexes) || -1
}



const result = minimumDistances([7 ,1, 3, 4, 1, 7])
const result = minimumDistances([1, 2, 3 ,4 ,10])


console.log(result)