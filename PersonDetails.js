class PersonDetails {
    firstName; lastName; address; city; state; zip; phoneNumber; email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function validatePersonDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    var regXName = /^[A-Z]{1}[a-z]{2,}/;
    var regXAddress = /^[A-Z]{1}[a-z]{3,}/;
    var regXZip = /^[0-9]{6}$/;
    var regXPhoneNo = /^[6-9][1][6-9]{1}[0-9]{9}$/;
    var regXEmail = /^[A-Za-z0-9]+([-\\\\.\\\\+\\\\_][0-9A-Za-z]+)*[@][A-Za-z0-9]+.[a-zA-Z]{2,4}([\\\\.\\\\,][a-z]{2,3})?$/;

    if (!regXName.test(firstName)) {
        console.log('Enter first name in valid format.');
        return false;
    } if (!regXName.test(lastName)) {
        console.log('Enter last name in valid format.');
        return false;
    }

    if (!regXAddress.test(address)) {
        console.log('Enter address in valid format.');
        return false;
    }
    if (!regXAddress.test(city)) {
        console.log('Enter city in valid format.');
        return false;
    }
    if (!regXAddress.test(state)) {
        console.log('Enter state in valid format.');
        return false;
    }


    if (!regXZip.test(zip)) {
        console.log('Enter zip in valid format.');
        return false;
    }

    if (!regXPhoneNo.test(phoneNumber)) {
        console.log('Enter phoneNumber in valid format.');
        return false;
    }

    if (!regXEmail.test(email)) {
        console.log('Enter email in valid format.');
        return false;
    }
    else {
        console.log('Given details are valid.');
        return true;
    }

}
let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter firstName , lastName , address, city, state, zip , phoneNumber , email : ", function (input) {
    arrayOfInputs = input.trim().split(' ');
    console.log(arrayOfInputs[1]);
    readInput.close();
    var firstName = arrayOfInputs[0];
    var lastName = arrayOfInputs[1];
    var address = arrayOfInputs[2];
    var city = arrayOfInputs[3];
    var state = arrayOfInputs[4];
    var zip = parseInt(arrayOfInputs[5]);
    var phoneNumber = parseInt(arrayOfInputs[6]);
    var email = arrayOfInputs[7];
    let resultValidation = validatePersonDetails(firstName, lastName, address, city, state, zip, phoneNumber, email);

    console.log("Validation: ", resultValidation);
});

