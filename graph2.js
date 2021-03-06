let canvas
let context

window.onload = function () { // eslint-disable-line no-unused-vars
  canvas = document.getElementById('plotcanvas')
  context = canvas.getContext('2d')
}

function plot () { // eslint-disable-line no-unused-vars
  /* global slope1, slope2, yinter1, yinter2 */
  const a = slope1 // eslint-disable-line no-unused-vars
  const b = yinter1 // eslint-disable-line no-unused-vars
  const a1 = slope2 // eslint-disable-line no-unused-vars
  const b1 = yinter2 // eslint-disable-line no-unused-vars
  document.getElementById('funequation').innerHTML = 'y=' + a + 'x+' + b
  document.getElementById('funequation2').innerHTML = 'y=' + a1 + 'x+' + b1
  context.clearRect(0, 0, canvas.width, canvas.height)
  const x0 = 0.5 * canvas.width
  const y0 = 0.5 * canvas.height
  let x
  const scale = 0.2
  let y
  let x1
  let y1
  const dx = 4
  const xMax = Math.round((canvas.width - x0) / dx)
  const xMin = Math.round(-x0 / dx)
  const axes = {}
  axes.x0 = x0
  axes.y0 = y0
  axes.scale = scale
  drawAxes(context, axes)
  context.beginPath()
  context.strokeStyle = 'red'
  context.lineWidth = 2
  for (let i = xMin; i < xMax; i++) {
    x = dx * i
    y = (a * x + b)
    x /= scale
    y /= scale
    if (i === xMin) {
      context.moveTo(x0 + x, y0 - y)
    } else {
      context.lineTo(x0 + x, y0 - y)
    }
  }
  context.stroke()
  context.closePath()
  context.beginPath()
  context.strokeStyle = 'blue'
  context.lineWidth = 2
  for (let i = xMin; i < xMax; ++i) {
    x1 = dx * i
    y1 = (a1 * x1 + b1)
    x1 /= scale
    y1 /= scale
    if (i === xMin) {
      context.moveTo(x0 + x1, y0 - y1)
    } else {
      context.lineTo(x0 + x1, y0 - y1)
    }
  }
  context.stroke()
}

function drawAxes (context, axes) { // eslint-disable-line no-unused-vars
  const x0 = axes.x0
  const y0 = axes.y0
  const width = context.canvas.width
  const height = context.canvas.height
  const xmin = 0
  let xaxis = 0
  let xaxis2 = 0
  let yaxis = 0
  let yaxis2 = 0
  context.beginPath()
  context.strokeStyle = 'black'
  context.lineWidth = 1
  // ----Y axis----
  context.moveTo(xmin, y0)
  context.lineTo(width, y0)
  // ----X axis-----
  context.moveTo(x0, 0)
  context.lineTo(x0, height)
  // X - signs
  for (let i = x0; i < width; i += 50) {
    context.strokeText(xaxis, i, height / 2, 20)
    xaxis += 10
  }
  for (let i = x0; i > 0; i -= 50) {
    context.strokeText(xaxis2, i, height / 2, 20)
    xaxis2 -= 10
  }
  // Y - signs
  for (let j = y0; j < height; j += 50) {
    context.strokeText(yaxis, (width / 2), j, 20)
    yaxis -= 10
  }
  for (let j = y0; j > 0; j -= 50) {
    context.strokeText(yaxis2, (width / 2), j, 20)
    yaxis2 += 10
  }
  context.stroke()
}
