const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODBURL);

const connectToDatabase = () => {
  try {
    // Here we created a new Database "rentify"
    const database = client.db("rentify");
    // Here we created a "users" collection in "rentify" database
    const usersCollection = database.collection("users");
    // Here we created a "properties" collection in "rentify" database
    const propertyCollection = database.collection("properties");

    const buyerInterestCollection = database.collection("buyerInterests");
    console.log("connected to database successfully");
    return {
      database,
      usersCollection,
      propertyCollection,
      buyerInterestCollection,
    };
  } catch (error) {
    console.error("error = ", error);
    throw new Error(error);
  }
};

const database = connectToDatabase();

module.exports = {
  database,
};
