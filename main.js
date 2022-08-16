//create a variable of clay
//iterate through array
//push 'coffee mug' to the end of each string
//console.log 'Clay coffee mug'

const clay = [ "Clay", "Clay", "Clay", "Clay" ]
const toFireInKiln = []

for (const object of clay) {
   const mug = `${object} coffee mug`
   toFireInKiln.push(mug)
}

console.log(toFireInKiln)