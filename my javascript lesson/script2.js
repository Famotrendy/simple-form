// let person = {
//     fullname: "faremi michael", age: 19, "first name": "faremi", 19: "age",
// };
// console.log(person.fullname);
// console.log(person ["fullname"]);
// console.log(person ["first name"]);

// // assigning updating value in object 
// person.age = 90 ;
// console.log(person);
// person.gender = "f";
// console.log(person)

// person.children = new Array(
//     {
//         name : "lola1",
//         age: 2,
//     },
//     {
//         name: " lola2",
//         age: 7,

//     }

// )

// person.spouse = {
//     fullname : "papa grey" ,
//     age: 90,
//     "first name" : "papa",90: "age"
// };
// console.log(person);
// console.log(person.spouse.fullname);
// console.log(person.children[1].age);
// console.log(person.children[0].age);



// let extension = {
//     port: 5,
//     voltage: '20volts',

// }

// let Phone = {
//     color: "",
//     set_color: function(specific_color){
//         this.color = specific_color;
//     },
//     brand: "",
//     set_brand_name: function(brand_name){
//         this.brand = brand_name;
//     },
//     model: "",
//     set_model: function(specific_model){
//         this.model = specific_model;
//     },
//     annual_uptime: 0,
//     update_annual_update: function(specific_model){
//         this.annual_uptime++;
//     },
// };

// let samsung = Phone;
// samsung.set_brand_name("samsung");
// samsung.set_color("black");
// samsung.set_model("50");
// console.log(samsung,"samsung");



class Phone {
    constructor(owner,color) {
        this.owner = owner;

        this.manufacture_timestamp = Date.now();

        this.color = color;
        this.brand_name = ""

    }

update_brand_name = (brand_name) => {
    this.brand_name = brand_name;
};

update_color = (color) =>{
    this.color = color;
};

}

let phone1 = new Phone ("michael", "pink");
let phone2 = new Phone ("adura", "blue");

console.log(phone1);
console.log(phone2);

phone1.update_color("grey");
console.log(phone1);
console.log(phone2);

// phone1.set_brand_name("samsung");
// phone2.set_brand_name("iphone");
// console.log(phone1);
// console.log(phone2);





