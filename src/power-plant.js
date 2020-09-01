// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }
// }

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
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState); //const newState = blueFood(currentState);
    currentState = {...newState}; //{soil:5} 
    return newState;
  }
}

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

// let plant = { soil: 0, light: 0, water: 0}
// const blueFood = changeState("soil")(5)  //{soil:5}
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)

// const fedPlant = stateControl(blueFood);

// const plantFedAgain = stateControl(greenFood);

// console.log(fedPlant)
// console.log(plantFedAgain)


// console.log(plant)
//console.log(changeState(plant, "soil", 3))
//console.log(plant)

// const feed = changeState("soil")(5)(plant)
// console.log(feed)
// const hydrate = changeState("soil")
// console.log(hydrate(3)(plant))