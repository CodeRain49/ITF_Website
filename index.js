const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const currenciesDropdown = document.getElementById("currenciesDropdown")

let mock_data = []

app.listen(3000, () => {
    console.log("Listening Port 3000")
})
