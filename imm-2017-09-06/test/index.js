
global.IMM = require('../')
require('mocha')
require('should')

const path = require('path')
const os = require('os')
global.Config = require(path.join(os.homedir(),'.ak.json'))

//cases
require('./cases/imm.js')
