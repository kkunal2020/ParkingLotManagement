let Car = [];
let maximumParkingSize = 0;
let availableParkingSlot = [];
const utilFunctions = require('./util/util');


let createParkingLot = async (numberOfParkingLot) => {
    try {
        maximumParkingSize = parseInt(numberOfParkingLot);
    } catch (e) {
        return "Parameter is not a number!";
    }

    for (let i = 1; i <= maximumParkingSize; i++) {
        availableParkingSlot.push(i);
    }
    return `Created a parking lot with ${availableParkingSlot.length} slots`;

}

let park = async (carNumber, slotNumber) => {
    if (maximumParkingSize === 0) {
        return `parking lot is not initiated`;
    } else if (maximumParkingSize === Car.length) {
        return `Parking lot is full`;
    } else {
        let slot = availableParkingSlot[0];
        Car.push({
            'slot': slot,
            'carNumber': carNumber,
            'slotNumber': slotNumber
        });
        availableParkingSlot.shift();
        return `Allocated slot number: ${slot}`
    }
}

let leave = async (slot) => {
    slot = parseInt(slot);
    if (maximumParkingSize === 0) {
        return "parking lot is not initiated";
    } else if (Car.length > 0) {

        if (await utilFunctions.search(slot, 'slot', Car)) {

            Car = await utilFunctions.remove(slot, 'slot', Car);
            availableParkingSlot.push(slot);
            availableParkingSlot.sort();
            return `Slot number ${slot} is free`;

        } else {
            return ` Slot ${slot} is already empty `;
        }

    } else {
        return `Parking lot is empty`
    }
}


let status = async () => {
    if (maximumParkingSize === 0) {
        return "parking lot is not initiated";
    } else if (Car.length > 0) {

        console.log("Slot No.\tRegistration No");
        Car.forEach(function (row) {
            console.log(row.slot + "\t         " + row.carNumber);
        });

    } else {
        return `Parking lot is empty`
    }

}

let getSlotNumberFromCarNumber = async (carNumber) => {
    if (maximumParkingSize === 0) {
        return "parking lot is not initiated";
    } else if (Car.length > 0) {
        let parkingLotsResult;
        Car.forEach(function (row) {
            if (row.carNumber === carNumber) {
                parkingLotsResult = row.slot;
            }
        });
        if (parkingLotsResult === undefined) return 'Not found'
        return parkingLotsResult;
    } else {
        return 'Not found'
    }
}

module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    getSlotNumberFromCarNumber,
}


