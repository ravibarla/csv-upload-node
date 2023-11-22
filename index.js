import express , { urlencoded } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { router } from "./routes/index.js";
import path from "path"


//create server
const app = express();
const port = process.env.PORT || 3100;

// // Set the view engine to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

//set up express ejs layout
app.use(expressEjsLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up url encoded
app.use(urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log("app is running successfully on port :", port);
});

app.use("/",router)
