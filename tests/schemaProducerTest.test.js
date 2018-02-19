"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;
// Create a new schema that accepts a 'guitar' object.
// 'guitar' is a required field
const testSchema = new Schema({
	guitar: { type: String, required: true },
});
//Create a new collection called 'Guitar'
const Guitar = mongoose.model("Guitar", testSchema);
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
		//Save object with 'guitar' value of 'Epiphone"
		it("New guitar saved to test database", function(done) {
			var testName = Guitar({
				guitar: "Epiphone",
			});
			testName.save(done);
		});
		it("Dont save incorrect format to database", function(done) {
			//Attempt to save with wrong info. An error should trigger
			var wrongSave = Guitar({
				notName: "Not Epiphone",
			});
			wrongSave.save(err => {
				if (err) {
					return done();
				}
				throw new Error("Should generate error!");
			});
		});
		it("Should retrieve data from test database", function(done) {
			//Look up the 'Epiphone' object previously saved.
			Guitar.find({ guitar: "Epiphone" }, (err, guitar) => {
				if (err) {
					throw err;
				}
				if (guitar.length === 0) {
					throw new Error("No data!");
				}
				done();
			});
		});
	});
	//After all tests are finished drop database and close connection
	after(function(done) {
		mongoose.connection.db.dropDatabase(function() {
			mongoose.connection.close(done);
		});
	});
});
