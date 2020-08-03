const { makeBadge, ValidationError } = require('badge-maker')
/**
 * @param {string} message
 * @param {string} secondaryMessage
 */
const renderError = (message, secondaryMessage = 'Opps!') => {
  return `
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport"content="width=device-width, initial-scale=1"><title>Error</title><!--Fonts--><link rel="dns-prefetch"href="//fonts.gstatic.com"><link href="https://fonts.lug.ustc.edu.cn/css?family=Nunito"rel="stylesheet"><!--Styles--><style>html,body{background-color:#fff;color:#636b6f;font-family:'Nunito',sans-serif;font-weight:100;height:100vh;margin:0}.full-height{height:100vh}.flex-center{align-items:center;display:flex;justify-content:center}.position-ref{position:relative}.code{border-right:2px solid;font-size:26px;padding:0 15px 0 15px;text-align:center}.message{font-size:18px;text-align:center}</style></head><body><div class="flex-center position-ref full-height"><div class="code">${secondaryMessage}</div><div class="message"style="padding: 10px;">${message}</div></div></body></html>
  `
}

/**
 *
 * @param {string} name
 * @param {string} string
 * @param {string} color
 */
const renderBadge = (name = 'visitors', string = '1', color = 'blue') => {
  const format = {
    label: name,
    message: string,
    color: color,
  }

  try {
    const svg = makeBadge(format)
    return svg
  } catch (e) {
    console.error(e) // ValidationError: Field `message` is required
    return renderError(e.message)
  }
}

module.exports = {
  renderError,
  renderBadge,
}
