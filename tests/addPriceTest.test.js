"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;
// Create a new schema that accepts a 'test_price_guitar' object.
// 'test_price_guitar' is a required field
const testSchema = new Schema({
	test_price_guitar: { type: String, required: true },
});
//Create a new collection called 'testPrice'
const testPrice = mongoose.model("testPrice", testSchema);
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
		//Save object with 'test_price_guitar' value of '1200"
		it("New test_price_guitar saved to test database", function(done) {
			var testName = testPrice({
				test_price_guitar: "1200",
			});
			testName.save(done);
		});
		it("Dont save incorrect format to database", function(done) {
			//Attempt to save with wrong info. An error should trigger
			var wrongSave = testPrice({
				notName: "Not 1200",
			});
			wrongSave.save(err => {
				if (err) {
					return done();
				}
				throw new Error("Should generate error!");
			});
		});
		it("Should retrieve data from test database", function(done) {
			//Look up the '1200' object previously saved.
			testPrice.find(
				{ test_price_guitar: "1200" },
				(err, test_price_guitar) => {
					if (err) {
						throw err;
					}
					if (test_price_guitar.length === 0) {
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
