const express = require("express");
const router = express.Router();
const countryController = require("../controller/countryController");

router.get("/list", countryController.getAllCountry);

router.post("/add", countryController.createCountry);

router.get("/show/:id", countryController.getCountryById);

router.put("/edit/:id", countryController.updateCountryById);

router.delete("/delete/:id", countryController.deleteCountryById);

module.exports = router;