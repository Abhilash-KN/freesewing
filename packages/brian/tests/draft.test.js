const expect = require('chai').expect
const fs = require('fs')
const theme = require('@freesewing/plugin-theme')

const pattern = require('../dist/')
const withoutBreasts = require('@freesewing/models').withoutBreasts
const withBreasts = require('@freesewing/models').withBreasts

// With or without breasts?
let models = {}
let breasts = 'with breasts'
if (pattern.config.department === 'womenswear') models = withBreasts
else {
  models = withoutBreasts
  breasts = 'without breasts'
}

// Load templates
let start = fs.readFileSync('./tests/templates/page-start.html', { encoding: 'utf-8' })
let end = fs.readFileSync('./tests/templates/page-end.html', { encoding: 'utf-8' })
let content = `<h1>${pattern.config.name} test results</h1> <h2>Drafting for different models</h2> <div class="wrapper"> `
for (let m in models) {
  it(`Draft ${pattern.config.name} in ${m} (${breasts})`, () => {
    let start = new Date()
    let draft = new pattern({
      embed: true,
      measurements: models[m]
    })
    draft.use(theme)
    draft.draft()
    let took = new Date() - start
    expect(draft.width).to.equal(0)
    expect(draft.height).to.equal(0)
    expect(draft.is).to.equal('draft')
    content += '<div class="test">'
    content += `<h3>${m} (${breasts})</h3>`
    content += `<div class="svg">${draft.render()}</div>`
    content += `<p>Took ${took} milliseconds</p>`
    content += '</div>'
  })
}
it(`Should save results`, () => {
  content += '</div>'
  fs.mkdirSync('./tests/results', { recursive: true })
  fs.copyFileSync('./tests/templates/style.css', './tests/results/style.css')
  fs.writeFileSync('./tests/results/index.html', start + content + end)
})
