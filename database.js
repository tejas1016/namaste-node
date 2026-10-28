const { MongoClient } = require('mongodb');

const url = "";

const client = new MongoClient(url);

// Database Name
const dbName = 'Test';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // Insert
  const data = {
    firstname: "Sachin",
    lastname: "Tendulkar",
    city:"Mumbai",
    phoneNumber:"7845126532"
  }

//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);


  // Read
//   const findResult = await collection.find({}).toArray();
//     console.log('Found documents =>', findResult);

const result = await collection.find({firstname:"Sachin"}).toArray();
console.log('search =>', result); 

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//Notes:
// Go to the mongoDB website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install MongoDB compass