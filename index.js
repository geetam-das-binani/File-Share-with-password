import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./Routes/route.mjs";
import { connect } from "./Database/connection.mjs";
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.render("index");
});
app.use("/", router);

Promise.all([connect(process.env.DB_USERNAME,process.env.DB_PASSWORD)])
.then((data)=>{
	console.log('Successfully connected')
	app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

})
.catch(e=>console.log(e.message))


