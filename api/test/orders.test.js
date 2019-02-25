import chai from 'chai'
import chaiHttp from 'chai-http'
import index from '../index'
chai.use(chaiHttp)
const should = chai.should()

// Test /Get route
describe('/Get order', () => {
  it('get orders', done => {
    chai
      .request(index)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.property('status', 200)
        res.body.should.be.a('object')
        console.log(res.body)
        done()
      })
  })
})
