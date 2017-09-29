const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/index');
const should = chai.should();

chai.use(chaiHttp);

describe('Homepage', function() {
    it('should get homepage GET /', (done) => {
        chai.request(server)
        .get('/')   
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
  });
  