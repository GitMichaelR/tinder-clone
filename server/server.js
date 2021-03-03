import express from "express";
import mongoose from "mongoose";
import dbCards from "./dbCards.js";
import cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 5000;
const conncetion_url =
  "mongodb+srv://michidb:michidb123@cluster0.cg1rl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(conncetion_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.post("/cards", (req, res) => {
  const dbCard = req.body;

  dbCards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  dbCards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
