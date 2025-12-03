const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const url = "mongodb://localhost:27017/";
const dbName = "todo";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const todoCollection = db.collection("todo");

  // Seed initial data
  todoCollection.insertMany([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    { id: 3, title: "Task 3", description: "Description 3" }
  ], (err) => {
    if (err) throw err;
    console.log("Sample data inserted");
  });

  //
