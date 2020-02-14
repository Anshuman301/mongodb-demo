//CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const url = 'mongodb+srv://Anshuman:QW6hzPsBidzDerKW@cluster0-zbqq8.mongodb.net/test?retryWrites=true&w=majority'
MongoClient.connect(url,{useUnifiedTopology:true},(error,client) =>{
    if(error)
    return;
    const db = client.db('test');
    // db.collection('user').insertOne({
    //     name:'Anshuman',
    //     age:21
    // })
    // .then(res => console.log(res.ops))
    // .catch(e => console.log(e))

    // db.collection('users').insertMany([
    //     {
    //         name:'Vinay',
    //         age:27
    //     },
    //     {
    //         name:'Ankur',
    //         age:25
    //     }
    // ])
    // .then(res => console.log(res.ops))
    // .catch(e => console.log(e))
    // db.collection('users').findOne({age:27})
    // .then(res => console.log(res))
    // .catch(e => console.log(e))
    // db.collection('users').find({age:24}).toArray()
    // .then(res => console.log(res))
    // .catch(e => console.log(e))
    // db.collection('users').updateOne({age:21},
    //     {
    //         $set:{
    //             age:59
    //         }
    //     })
    // .then(res => console.log(res))
    // .catch(e => console.log(e))

    // db.collection('users').updateMany({},{
    //     $inc:{
    //         age:1
    //     }
    // })
    // .then(res => console.log(res.modifiedCount))
    // .catch(e => console.log(e))

    // db.collection('users').deleteOne({name:'Anshuman'})
    // .then(res => console.log(res))
    // .catch(e => console.log(e))
    db.collection('users').deleteMany({})
    .then(res => console.log(res.deletedCount))
    .catch(e => console.log(e))
})