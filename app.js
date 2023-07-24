

const { log } = require("console");
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please enter the fruit name"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit ({
    name : "Mango",
    rating:8,
    review:"Good Fruit"
});

mango.save();


// // const mongoose = require ("mongoose");
// // mongoose.connect('mongodb://127.0.0.1:27017/personDB');

const personSchema = new mongoose.Schema({
    name : String,
    age: Number,
    favouriteFruit: fruitSchema  //embedding fruit schema in person schema
});

const Person = mongoose.model("Person",personSchema);

// const person = new Person ({
//     name:"Amy",
//     age:21,
//     favouriteFruit:pineapple
// });

// person.save();

// const Kiwi = new Fruit ({
//     name:"Kiwi",
//     rating:10,
//     review:"Good fruit"
// });

// const Banana = new Fruit ({
//     name:"Banana",
//     rating:7,
//     review:"Great Fruit"
// });

// const Orange = new Fruit ({
//     name:"Orange",
//     rating:8,
//     review:"Fruit"
// });

// Fruit.insertMany([Kiwi,Orange,Banana])
//     .then(function(){
//         console.log("Successfully saved items to db");
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// const FruitsArray = [Kiwi,Orange,Banana]

//     FruitsArray.forEach(element => {
//         console.log(element.name);
//     });

// Fruit.insertMany([Kiwi,Orange,Banana])
//     .then(function(){
//         console.log("Successfully saved items to db");
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// Fruit.find({
// }).then(function(result){
//     console.log(result)})
//     // return(result);
// // .catch(function(err){
// //     console.log(err);
// // })


//Update Fruit name

// Fruit.updateOne({_id:"64bd35db7dd732cbdf06e612"},{name:"Peach"}
// ).then(function(){
//     console.log("Successfully updated");
// })
// .catch(function(err){
//     console.log(err);
// })

Person.updateOne({name:"John"},{favouriteFruit:mango}
    ).then(function(){
        console.log("Successfully updated");
    })
    .catch(function(err){
        console.log(err);
    })



// Fruit.deleteOne({name:"Peach"}
// ).then(function(){
//     console.log("Successfully deleted Peach");
// })
// .catch(function(err){
//     console.log(err);
// })

// Fruit.find({
// }).then(function (result) {
//     mongoose.connection.close()
//     result.forEach(element => {
//         console.log(element.name)
//     });
//     }).catch(function(err){
//     console.log(err);
//     });


