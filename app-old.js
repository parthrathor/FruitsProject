//Using MongoDb native driver

// const { MongoClient, ServerApiVersion } = require("mongodb");

// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://localhost:27017";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("shopDB").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//Using Mongooose



const mongoose = require ("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/personDB');

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String 
});

const Fruit = mongoose.model("Fruit",fruitSchema);

// // const fruit = new Fruit ({
// //     name:"Apple",
// //     rating:9,
// //     review:"Pretty solid as a fruit"
// // });

// // fruit.save();


// // const mongoose = require ("mongoose");
// // mongoose.connect('mongodb://127.0.0.1:27017/personDB');

const personSchema = new mongoose.Schema({
    name : String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person ({
    name:"Bob",
    age:31,
});

//  person.save();

//Delete many person documents

Person.deleteMany({name:"John"}
).then(function(){
    console.log("deleted many documents");
    mongoose.connection.close();
})
.catch(function(err){
    console.log(err);
})


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

// Fruit.find({
// }).then(function (result) {

//     result.forEach(element => {
//         console.log(element.name)
//     });
//     })