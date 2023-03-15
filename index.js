// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue-42) 

 }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    distanceFromHqInBlocks(someValue)
    return distanceFromHqInBlocks(someValue) * 264
  }
  distanceFromHqInBlocks(someValue = 50)

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return(Math.abs(start - destination ))* 264

  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400)*.02
    }
     else if( distance > 2000 && distance <= 2500){
        return 25
     }
     else return `cannot travel that far`
    
  }
distanceFromHqInFeet(start = 38, destination = 34)

distanceFromHqInBlocks(someValue = 50)

