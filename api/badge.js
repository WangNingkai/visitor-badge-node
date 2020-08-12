const { renderBadge } = require('../src/utils')
const md5 = require('md5')
const countapi = require('countapi-js')
module.exports = async (req, res) => {
  const { page_id, color } = req.query
  if (typeof page_id === 'undefined') {
    key = 'undefined'
  } else {
    key = page_id
  }
  countapi.hit('visitor-badge', md5(key)).then((result) => {
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(renderBadge('visitors', result.value, color))
  })
}
