var test = require('tap').test

var falseyJson = require('./sampleJSON/falseyJson.json')
var truthyJson = require('./sampleJSON/truthyJson.json')

test('Gs137', function (t) {
  var falseyResults = require('../')(falseyJson)
  var truthyResults = require('../')(truthyJson)
  t.same(falseyResults, false, 'should return false')
  t.same(truthyResults, true, 'should return true')
  t.end()
})
