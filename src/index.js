"use strict";
var starwarsNames = require("./starwars.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: starwarsNames,
	random: uniqueRandomArray(starwarsNames)
};
