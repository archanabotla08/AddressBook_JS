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
let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function edit(firstName) {
    var arrayOfInputs = 0;
    readInput.question("Enter person name to edit :", function (input) {
        firstName = input.trim().split(' ');
  
    for (i = 0; i < AddressBookArray.length; i++) {
        if (AddressBookArray[i].firstName == firstName) {
            let listPerson = firstName;
            readInput.question("Enter field and updated value :", function (input) {
                arrayOfInputs = input.trim().split(' ');
                console.log(arrayOfInputs[1]);
                let choice = arrayOfInputs[0];
                let newvalue = arrayOfInputs[1];
                switch (choice) {
                    case "lastName": let lastName = newvalue;
                        listPerson.lastName = lastName;
                        console.log("Updated Successfully");
                        break;
                    case "address": let address = newvalue;
                        listPerson.address = address;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    case "city": let city = newvalue;
                        listPerson.city = city;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    case "state": let state = newvalue;
                        listPerson.state = state;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    case "zip": let zip = parseInt(newvalue);
                        listPerson.zip = zip;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    case "phone number": let phoneNumber = parseInt(newvalue);
                        listPerson.phoneNumber = phoneNumber;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    case "email": let email = newvalue;
                        listPerson.email = email;
                        console.log("Updated Successfully");
                        deletePerson();
                        break;
                    default:
                        throw "Invalid choice";
                }
            });
     
        } else {
            //   console.log("person Doesn't exists");
        }
   
    }
});

}

//UC5
function deletePerson(){
    let arrayOfInputs = 0;
    readInput.question("Enter person name to delete :", function (input) {
        arrayOfInputs = input.trim().split(' ');
        readInput.close();
   
    AddressBookArray.forEach(person => {
        if (person.firstName == arrayOfInputs[0]){
            AddressBookArray.pop();
            console.log("Delete Successfully");
        }else{console.log("person doesn't exists")}
    });

});
}
//UC3

let AddressBookArray = new Array();

try {
    let personDetails_ObjectAddPerson1 = new PersonDetails("Archana", "Botla", "Somesh Colony", "Nanded", "Maharashtra", 789182, 9999999999, "abc@gail.com");
    let personDetails_ObjectAddPerson2 = new PersonDetails("Sweety", "Botla", "Somesh Colony", "Mumbai", "Maharashtra", 789182, 9999999999, "abc@gail.com");

    if (validatePersonDetails(personDetails_ObjectAddPerson1) && validatePersonDetails(personDetails_ObjectAddPerson2)) {
        AddressBookArray.push(personDetails_ObjectAddPerson1);
        AddressBookArray.push(personDetails_ObjectAddPerson2);
        let choice = 0;
        let result  = edit();
    } else {
        throw "Invalid input";
    }


} catch (Exception) {
    console.log(Exception);
}
//console.log(AddressBookArray);
