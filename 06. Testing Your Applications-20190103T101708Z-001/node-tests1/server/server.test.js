const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

	describe('GET /', () => {
		it('should return Hello World!', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found.'
					});
				})
				.end(done);
				// .expect({
				// 	error: "Page not found."
				// })
				// .expect('Hello World!')
		});
	});

	describe('GET /user', () => {
		it('should have admin user', (done) => {
			request(app)
				.get('/user')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'shubham',
						age: 25
					});
				})
				.end(done);
		});
	});
});

