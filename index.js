import express from "express";
import mongoose from "mongoose";

const app = express();

const con = mongoose.createConnection("mongodb+srv://ROBERCINO:gigistelistul23@cluster0.jo4v67g.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "Flori"
});

con.on("connected", async () => {
    console.log("Connected to mongodb")
});

const flowerSchema = new mongoose.Schema({}, { collection: "Specii" });

const flowers = con.model("Specii", flowerSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const result = await flowers.find({});
    res.render("index", { result })
})

app.listen(3000)