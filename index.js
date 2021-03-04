const inputParameter = require('readline');
const parkingLotMainConstant = require('./parkingLot')
const readLine = inputParameter.createInterface({
    input: process.stdin,
    output: process.stdout
});

let parkingLotsMain = () => {

    readLine.on('line', async (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('createParkingLots'):

                try {
                    const result = await parkingLotMainConstant.createParkingLot(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occurred ==> ${e}`);
                }
                break;

            case ('park'):
                try {
                    const result = await parkingLotMainConstant.park(input[1].trim(), input[2].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occurred ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    const result = await parkingLotMainConstant.leave(input[1]);
                    console.log(result);

                } catch (e) {
                    console.log(`error occurred ==> ${e}`);
                }
                break;


            case ('status'):

                try {
                    const result = await parkingLotMainConstant.status();
                    console.log(result);

                } catch (e) {
                    console.log(`error occurred ==> ${e}`);
                }
                break;


            case ('getSlotNumberFromCarNumber'):

                try {
                    const result = await parkingLotMainConstant.getSlotNumberFromCarNumber(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occurred ==> ${e}`);
                }
                break;

            case ('exit'):
                readLine.pause();
                break;

            default:
                console.log('Input Type Is Invalid !!!! ');
        }

    });
}

readLine.on('SIGINT', () => {
    readLine.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) readLine.pause();
    });
});

parkingLotsMain();
