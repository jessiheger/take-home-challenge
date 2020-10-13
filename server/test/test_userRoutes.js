
const supertest = require("supertest");
const assert = require('assert');
const router = require("../routes/usersRoute");

const expect = require('chai').expect;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
}); 

// describe("GET /", function() {
//     it("it should has status code 200", function(done) {
//       supertest(router)
//         .get("/all")
//         .expect(200)
//         .end(function(err, res){
//           if (err) done(err);
//           done();
//         });
//     });
//   });