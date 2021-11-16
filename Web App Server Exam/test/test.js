//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
chai.use(chaiHttp);

describe('Test', function () {
    it('/GET index.html');
    it('/GET 404');
    it('/GET customers');
    it('/GET a customer');
});
it('it should GET the index.html file', (done) => {
    chai.request(server)
        .get('/index.html')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
});
t('it should return 404', (done) => {
    chai.request(server)
        .get('/index2.html')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
});
describe('/GET widgets', () => {
    it('it should GET all the widgets', (done) => {
        chai.request(server)
            .get('/widgets')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
    });
});
describe('/GET a widget', () => {
    it('it should GET a widget', (done) => {
        chai.request(server)
            .get('/widgets/ross')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.id.should.equal('ross');
                done();
            });
    });
});