var supertest = require('supertest');
var should = require('should');

// This agent refers to PORT where the program is running.
var server = supertest.agent("http://localhost:4000");
// UNIT test begin
describe("Sample Unit test", function() {
    // #1 should return home page
    it("should return Home Page", function(done) {
        // calling home page
        server
            .get("/")
            .expect("200") // THis is HTTP response
            .expect("content-type", /text/)
            .end(function(err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                done();

            });
    });
});