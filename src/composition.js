const canPaint = function() {
  const obj = {
    paints: function(color) {
      return `Paints ${color}`
    }
  }
  return obj
}
const artist = canPaint()
console.log(artist.paints("green"))

const makesSound = function() {
  const obj = {
    sound: function(noise) {
      return `${noise}`;
    }
  }
  return obj
}

const faucet = makesSound()
console.log(faucet.sound("Drip drip drip."))

const canThrow = function(speed) {
  return function(distance){
    return function(bodyrolls){
      return function(hipthrusts){
    const obj = {
        throw: function() {
              return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`
            },
        dance: function () {
              return `the dance robot can dance the robot at ${bodyrolls} steps at ${hipthrusts} miles per song!`
            }
          }
          return obj
        }
      }
    }
  }

// const battlerobot1 = canThrow(200)(100)
//console.log(battlerobot1.throw());
// "The battle robot throws the spear 100 yards at 200 miles per hour!"
const battlerobot1 = canThrow()()(69)(420)
console.log(battlerobot1.dance());