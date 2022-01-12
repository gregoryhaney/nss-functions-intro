
const fillGasTank = (gallons) => {    
    console.log(`I filled the tank with ${gallons} gallons of gas`)
}

fillGasTank(7)




// add a condition to prevent filling the gas tank if the value of
// the parameter is greter than 15.
// if it is, log a message to the console stating such.

const fillGasTank = (gallons) => {
        if (gallons > 15) {
            console.log("You cannot add this much gas to the tank")
        }
        else    
    console.log(`I filled the tank with ${gallons} gallons of gas`)
}

fillGasTank(7)