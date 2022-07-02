const request = require("supertest");
const app = requeire("../app");


describe("API test" , () => {



    test("GET /users/all", (done) => {
        request(app)
            .get("/users/all")
            .expect(200)

    });

});