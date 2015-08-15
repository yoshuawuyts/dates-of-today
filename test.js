const test = require('tape')
const today = require('./')

test('should return an object with values', function (t) {
  t.plan(5)

  const date = today()

  t.equal(typeof date, 'object')
  t.equal(typeof date.year, 'string')
  t.equal(typeof date.month, 'string')
  t.equal(typeof date.day, 'string')
  t.equal(typeof date.date, 'string')
})
