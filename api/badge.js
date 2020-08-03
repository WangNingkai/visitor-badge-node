const { renderBadge } = require('../src/utils')
const md5 = require('md5')
module.exports = async (req, res) => {
  const { page_id, color } = req.query
  if (typeof page_id === 'undefined') {
    key = 'undefined'
  } else {
    key = page_id
  }

  const countapi = require('countapi-js')
  countapi.visits(md5(key)).then((result) => {
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(renderBadge('visitors', result.value, color))
  })
}
