class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

/* const hydrate = (plant) => {  
  return {
    ...plant,   //{ soil: 0, light: 0, water: 0 }
    water: (plant.water || 0) + 1
  }
};

  const feed = (plant) => {
    return {
      ...plant,
      soil: (plant.soil || 0) + 1
    }
  };

  const giveLight = (plant) => {
    return {
      ...plant,
      giveLight: (plant.giveLight || 0) + 1
    }
  } */

// const changeState = (state, property, value) => {
//   return {
//     ...state,
//     [property]: (state[property] || 0) + value
//   }
// }

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

let plant = { soil: 0, light: 0, water: 0}
// console.log(plant)
//console.log(changeState(plant, "soil", 3))
//console.log(plant)

// const feed = changeState("soil")(5)(plant)
// console.log(feed)
const hydrate = changeState("soil")
console.log(hydrate(3)(plant))