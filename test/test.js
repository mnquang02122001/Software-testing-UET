var assert = require('assert');
var getScholarship = require('../index');
describe('Scholarship testing', function () {
  describe('Kiem thu bien', function () {
    it('Test 1', function () {
      assert.equal(getScholarship(2, 2.0, 9.0), 'Không được học bổng');
    });
    it('Test 2', function () {
      assert.equal(getScholarship(2, 2.0, 8.5), 'Không được học bổng');
    });
    it('Test 3', function () {
      assert.equal(getScholarship(2, 2.0, 0.0), 'Không được học bổng');
    });
    it('Test 4', function () {
      assert.equal(getScholarship(2, 2.0, 0.5), 'Không được học bổng');
    });
    it('Test 5', function () {
      assert.equal(getScholarship(2, 4.0, 6.5), 'Học bổng 100%');
    });
    it('Test 6', function () {
      assert.equal(getScholarship(2, 3.9, 6.5), 'Học bổng 100%');
    });
    it('Test 7', function () {
      assert.equal(getScholarship(2, 0.0, 6.5), 'Không được học bổng');
    });
    it('Test 8', function () {
      assert.equal(getScholarship(2, 0.1, 6.5), 'Không được học bổng');
    });
    it('Test 9', function () {
      assert.equal(getScholarship(4, 2.0, 6.5), 'Không được học bổng');
    });
    it('Test 10', function () {
      assert.equal(getScholarship(3, 2.0, 6.5), 'Không được học bổng');
    });
    it('Test 11', function () {
      assert.equal(getScholarship(1, 2.0, 6.5), 'Không được học bổng');
    });
    it('Test 12', function () {
      assert.equal(getScholarship(2, 2.0, 6.5), 'Không được học bổng');
    });
  });
  describe('Phan hoach tuong duong yeu', function () {
    it('Test 1', function () {
      assert.equal(getScholarship(-2, -4.0, -5.0), 'Không hợp lệ');
    });
    it('Test 2', function () {
      assert.equal(getScholarship(1, 2.5, 5.0), 'Không được học bổng');
    });
    it('Test 3', function () {
      assert.equal(getScholarship(2, 3.4, 7.5), 'Học bổng 50%');
    });
    it('Test 4', function () {
      assert.equal(getScholarship(4, 3.8, 15.0), 'Không hợp lệ');
    });
    it('Test 5', function () {
      assert.equal(getScholarship(6, 5.0, 6.5), 'Không hợp lệ');
    });
  });
});
