// Alat bantu untuk mendukung kebutuhan internal API di Node JS
const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('hello from foo [%d]', 123)
