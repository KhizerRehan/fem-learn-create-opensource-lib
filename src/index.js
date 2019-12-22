const starwarsNames = require("./starwars.json");
const uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: starwarsNames,
	random: uniqueRandomArray(starwarsNames)
};
