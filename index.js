const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

// =====================middleware=================================
app.use(cors());
app.use(express.json());

// ToDoApp;
// hwOZshV4SsUb93ca;
// ================================================================

const uri = `mongodb+srv://ToDoApp:hwOZshV4SsUb93ca@cluster0.fmvmv30.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // =======================All collections are here ==========================================

    const AllUserTasksCollection = client
      .db("ToDoList")
      .collection("AllUserTasks");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// ================================================================
app.get("/", (req, res) => {
  res.send("To-do App is Running");
});
app.listen(port, () => {
  console.log(`TO-DO App is Running on port ${port}`);
});
