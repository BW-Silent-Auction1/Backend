const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbconfig.js');



describe("server.js", () => {
    it("should set testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });

});

describe("Users table and endpoints work as expected", () => {
    it("doesn't return users if not logged in", () => {
        return request(server)
            .get("/api/auth/users")
            .then(res => {
                expect(res.body.message).toEqual("There was no token sent in the headers");
            });
    })

});

describe('register and login works as expected', () => {
    it('can register a new user', () => {
        return request(server).post('/api/auth/register')
            .send({
                'username': 'Bambam',
                'email': "bambam@gmail.com",
                'password': "123"
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
                
    });

    it('login works', () => {
        return request(server).post('/api/auth/register')
            .send({
                'username': 'Bambam',
                'email': "bambam@gmail.com",
                'password': "123"
            })
            .set('Content-Type', 'application/json')
            .then(res => {
                return request(server).post('/api/auth/login')
                .send({'username': 'Bambam','password': '123'})
                .set('Content-Type', 'application/json')
                .then(res2=> {
                    expect(res2.status).toBe(200)
                })
            })

    })
})

beforeEach(async () => {
    await db("users").truncate();
  });