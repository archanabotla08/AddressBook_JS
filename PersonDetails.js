var regXName = /^[A-Z]{1}[a-z]{2,}/;
var regXAddress = /^[A-Z]{1}[a-z]{3,}/;
var regXZip = /^[0-9]{6}$/;
var regXPhoneNo = /^[6-9][1][0-9]{9}$/;
var regXEmail = /^[A-Za-z0-9]+([-\\\\.\\\\+\\\\_][0-9A-Za-z]+)*[@][A-Za-z0-9]+.[a-zA-Z]{2,4}([\\\\.\\\\,][a-z]{2,3})?$/;

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

function validatePersonDetails(...personDetails_ObjectAddPerson) {

    var x = Object.keys(personDetails_ObjectAddPerson);

    for (i = 0; i < x.length; i++) {

        if (!regXName.test(personDetails_ObjectAddPerson[i].firstName)) {
            console.log('Enter first name in valid format.');
            return false;
        } if (!regXName.test(personDetails_ObjectAddPerson[i].lastName)) {
            console.log('Enter last name in valid format.');
            return false;
        }

        if (!regXAddress.test(personDetails_ObjectAddPerson[i].address)) {
            console.log('Enter address in valid format.');
            return false;
        }
        if (!regXAddress.test(personDetails_ObjectAddPerson[i].city)) {
            console.log('Enter city in valid format.');
            return false;
        }
        if (!regXAddress.test(personDetails_ObjectAddPerson[i].state)) {
            console.log('Enter state in valid format.');
            return false;
        }


        if (!regXZip.test(personDetails_ObjectAddPerson[i].zip)) {
            console.log('Enter zip in valid format.');
            return false;
        }

        if (regXPhoneNo.test(personDetails_ObjectAddPerson[i].phoneNumber)) {
            console.log('Enter phoneNumber in valid format.');
            return false;
        }

        if (!regXEmail.test(personDetails_ObjectAddPerson[i].email)) {
            console.log('Enter email in valid format.');
            return false;
        }
        else {
            console.log('Given details are valid.');
            return true;
        }

    }

}
//UC3

let AddressBookArray = new Array();

try {
    let personDetails_ObjectAddPerson = new PersonDetails("Archana", "Botla", "Somesh Colony", "Nanded", "Maharashtra", 789182, 9999999999, "abc@gail.com");
    if (validatePersonDetails(personDetails_ObjectAddPerson)) {
        AddressBookArray.push(personDetails_ObjectAddPerson);
    } else {
        throw "Invalid input";
    }

} catch (Exception) {
    console.log(Exception);
}
console.log(AddressBookArray);

