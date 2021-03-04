# ParkingLotManagement

The code has been developed in 2 ways as -
1. Initialize the code by running "npm install" or 
2. execute npm run devStart command

To execute the program as console based please run the main program "node index.js"

# Tesing via rest client
The collection is under the route.rest

Inputs and Outputs:
----------------------
park KA-01-HH-1234 1 <br />
park KA-01-HH-9999 2 <br />
park KA-01-BB-0001 3 <br />
park KA-01-HH-7777 4 <br />
park KA-01-HH-2701 5 <br />
park KA-01-HH-3141 6 Allocated slot number: 6 <br />
Allocated slot number: 1 <br />
Allocated slot number: 2 <br />
Allocated slot number: 3 <br />
Allocated slot number: 4 <br />
Allocated slot number: 5 <br />

> leave 4 <br />
Slot number 4 is free <br />
> status
Slot No.        Registration No <br />
1                KA-01-HH-1234 <br />
2                KA-01-HH-9999 <br />
3                KA-01-BB-0001 <br />
5                KA-01-HH-2701 <br />


Not found <br />
