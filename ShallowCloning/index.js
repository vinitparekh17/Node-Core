const Obj1 = {
    name: "John",
    hobbies: ["Reading", "Writing", "Coding"],
}

const Obj2 = Object;

Obj2.name = "Doe";

console.log(Object.name); // Output: Doe

// In this case, the value of the name property of the Object object is changed to Doe.
// This is because the Obj2 object is a reference to the obj1 object.
// So, when we change the value of the name property of the Obj2 object,
// the value of the name property of the Object object is also changed.
// In simlple words, the Obj2 object is a reference to the Obj1 object not a copy of it.

// To avoid this, we can use the spread operator to create a copy of the object.

const Obj3 = {
    name: "Johnny",
    hobbies: ["Reading", "Writing", "Coding"],
}

const Obj4 = { ...Obj3 };

Obj4.name = "Ganesh";

console.log(Obj3.name); // Output: John

// Now let's go one level deeper and see what happens when we have an object inside an object.

const Obj5 = {
    name: "John",
    hobbies: ["Reading", "Writing", "Coding"],
    address: {
        city: "Surat",
        zip: 12345,
    }
}

const Obj6 = { ...Obj5 };

Obj6.address.city = "Los Angeles";

console.log(Obj5);
// The value of city changed but why?
// This is because the Obj6 object is copy of the Obj5 object but
// not a deep copy. It only copies the first level of the object. so nested 
// objects are still references to the original object.
console.log(Obj5.address === Obj6.address); // Output: true
console.log(Obj5 === Obj6); // Output: false

// SO how we can copy all levels of the object? which is called deep cloning.
// We can use the JSON.stringify() method to do that.

const Obj7 = {
    name: "John",
    hobbies: ["Reading", "Writing", "Coding"],
    address: {
        city: "Ahmedabad",
        zip: 12345,
        landMark: {
            name: "Gandhi Statue",
            distance: 2 // km
        }
    }
}

const Obj8 = JSON.parse(JSON.stringify(Obj7));

Obj8.address.city = "Los Angeles";
Obj8.address.landMark.name = "Hollywood Sign";

console.log(Obj7);

// So entire object and nested objects of the Obj7 is now immutable.
// We can also use the lodash library to do the same thing.

const _ = require("lodash");

const Obj9 = {
    name: "JIMMY",
    hobbies: ["Reading", "Writing", "Dancing"],
    address: {
        city: "Gandhinagar",
        zip: 12345,
        landMark: {
            name: "Manek Chowk",
            distance: 5 // km
        }
    },
    func: function () {
        console.log("Hello World");
    }
}

const Obj10 = _.cloneDeep(Obj9);

Obj10.address.city = "Bhavnagar";

console.log(Obj10);