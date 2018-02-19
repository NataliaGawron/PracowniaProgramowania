"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;
// Create a new schema that accepts a 'model_guitar' object.
// 'model_guitar' is a required field
const testSchema = new Schema({
	model_guitar: { type: String, required: true },
});
//Create a new collection called 'ModelGuitar'
const ModelGuitar = mongoose.model("ModelGuitar", testSchema);
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
		//Save object with 'model_guitar' value of 'akustyczna"
		it("New model_guitar saved to test database", function(done) {
			var testName = ModelGuitar({
				model_guitar: "akustyczna",
			});
			testName.save(done);
		});
		it("Dont save incorrect format to database", function(done) {
			//Attempt to save with wrong info. An error should trigger
			var wrongSave = ModelGuitar({
				notName: "Not akustyczna",
			});
			wrongSave.save(err => {
				if (err) {
					return done();
				}
				throw new Error("Should generate error!");
			});
		});
		it("Should retrieve data from test database", function(done) {
			//Look up the 'akustyczna' object previously saved.
			ModelGuitar.find(
				{ model_guitar: "akustyczna" },
				(err, model_guitar) => {
					if (err) {
						throw err;
					}
					if (model_guitar.length === 0) {
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
