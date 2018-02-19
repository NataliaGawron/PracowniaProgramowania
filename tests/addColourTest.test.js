"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;
// Create a new schema that accepts a 'test_colour_guitar' object.
// 'test_colour_guitar' is a required field
const testSchema = new Schema({
	test_colour_guitar: { type: String, required: true },
});
//Create a new collection called 'testColour'
const testColour = mongoose.model("testColour", testSchema);
describe("Database Tests", function() {
	//Before starting the test, create a sandboxed database connection
	//Once a connection is established invoke done()
	before(function(done) {
		mongoose.connect("mongodb://localhost/testDatabase");
		const db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error"));
		db.once("open", function() {
			console.log("We are connected to test database!");
			done();
		});
	});
	describe("Test Database", function() {
		//Save object with 'test_colour_guitar' value of 'natural"
		it("New test_colour_guitar saved to test database", function(done) {
			var testName = testColour({
				test_colour_guitar: "natural",
			});
			testName.save(done);
		});
		it("Dont save incorrect format to database", function(done) {
			//Attempt to save with wrong info. An error should trigger
			var wrongSave = testColour({
				notName: "Not natural",
			});
			wrongSave.save(err => {
				if (err) {
					return done();
				}
				throw new Error("Should generate error!");
			});
		});
		it("Should retrieve data from test database", function(done) {
			//Look up the 'natural' object previously saved.
			testColour.find(
				{ test_colour_guitar: "natural" },
				(err, test_colour_guitar) => {
					if (err) {
						throw err;
					}
					if (test_colour_guitar.length === 0) {
						throw new Error("No data!");
					}
					done();
				}
			);
		});
	});
	//After all tests are finished drop database and close connection
	after(function(done) {
		mongoose.connection.db.dropDatabase(function() {
			mongoose.connection.close(done);
		});
	});
});
