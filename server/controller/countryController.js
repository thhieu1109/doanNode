const countryModel = require("../model/Country");


const getAllCountry = async (req, res) => {
    const data = req.body;
    const country = await countryModel.getAllCountry(data);
    res.status(200).json(country);
}

const getCountryById = async (req, res) => {
    const id = req.params.id;
    const country = await countryModel.getCountryById(id);
    res.status(200).json(country);
}

const createCountry = async (req, res) => {
    const { name } = req.body;
    const newCountry = await countryModel.createCountry({ name });
    res.status(200).json(newCountry);
}

const updateCountryById = async (req, res) => {
    const data = req.body
    const id = req.params.id
    const country = await countryModel.updateCountryById(id, data);
    res.status(200).json(country);

}

const deleteCountryById = async (req, res) => {

    const id = req.params.id
    const country = await countryModel.deleteCountryById(id);
    res.status(200).json({
        message: `Country with id ${id} has been deleted successfully`
    });
}

module.exports = {
    getAllCountry,
    getCountryById,
    createCountry,
    updateCountryById,
    deleteCountryById
}