'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

// Reference app.js
const app = require('../app.js'); 


describe('API endpoint /', function () {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function () {

    });

    after(function () {

    });


    // Post - Return parsed json
    it('should return valid parsed json', function () {
        return chai.request(app)
            .post('/')
            .send({
                "payload": [
                    {
                        "address": {
                            "buildingNumber": "28",
                            "lat": -33.912542000000002,
                            "lon": 151.00293199999999,
                            "postcode": "2198",
                            "state": "NSW",
                            "street": "Donington Ave",
                            "suburb": "Georges Hall"
                        },
                        "propertyTypeId": 3,
                        "readyState": "init",
                        "reference": "aqsdasd",
                        "shortId": "6Laj49N3PiwZ",
                        "status": 0,
                        "type": "htv",
                        "workflow": "pending"
                    },
                    {
                        "address": {
                            "buildingNumber": "Level 6",
                            "postcode": "2060",
                            "state": "NSW",
                            "street": "146 Arthur Street",
                            "suburb": "North Sydney"
                        },
                        "propertyTypeId": 3,
                        "readyState": "init",
                        "reference": "asdasd",
                        "shortId": "E9eQVYEMkub2",
                        "status": 4,
                        "type": "htv",
                        "valfirm": null,
                        "workflow": "completed"
                    },
                    {
                        "address": {
                            "buildingNumber": "360",
                            "postcode": "3000",
                            "state": "VIC",
                            "street": "Elizabeth St",
                            "suburb": "Melbourne",
                            "unitNumber": "Level 28"
                        },
                        "propertyTypeId": 3,
                        "readyState": "complete",
                        "reference": "asdas",
                        "shortId": "yebZvgdA7FRk",
                        "status": 1,
                        "type": "htv",
                        "workflow": "completed"
                    }
                ]
            })
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.response).to.be.an('array');
            });
    });

    // POST - Empty Request
    it('should return empty response array', function () {
        return chai.request(app)
            .post('/')
            .send({
            })
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.response).that.eql([]);
            })
    });

    // POST - Bad Request
    it('with invalid json returns a 400', function () {
        return chai.request(app)
            .post('/')
            .send('{"invalid"}')
            .type('json')
            .then(function (res) {
                expect('Content-Type', /json/);
                expect(400) ;
                expect(res.error.text).to.eql('{"error":"Could not decode request: JSON parsing failed"}');
            })
    });
}); 