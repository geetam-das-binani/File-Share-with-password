import express from "express";
import cors from "cors";

import { router } from "./Routes/route.mjs";
import { connect } from "./Database/connection.mjs";
const app = express();
app.use(cors());
connect();

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
	res.render("index"); 
});
app.use("/", router); 

app.listen(8000, () => console.log("Server is listening on port 8000"));
 