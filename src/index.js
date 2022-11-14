import { choices, removes } from "./helpers.js";
import fruits from "./foods.js"

const fruit = choices(fruits);
console.log(`I'd like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log("Delicious! May I have another")
removes(fruits, fruit)
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)

