function updateForm () { // eslint-disable-line no-unused-vars
  const functions = document.getElementById('id-functions').value
  document.getElementById('id-inputs-slope').hidden = true
  document.getElementById('id-inputs-standard').hidden = true
  document.getElementById('id-output-slope').hidden = true
  document.getElementById('id-output-x-intercept').hidden = true
  document.getElementById('id-output-y-intercept').hidden = true
  document.getElementById('id-output-slope1').hidden = true
  document.getElementById('id-output-y-intercept1').hidden = true
  document.getElementById('id-output-x-intercept1').hidden = true
  context.clearRect(0, 0, canvas.width, canvas.height)
  /* global canvas, context */
  /* eslint no-case-declarations: 2 */
  switch (functions) {
    case 'slope': {
      document.getElementById('id-inputs-slope').hidden = false
      break
    }
    case 'standard': {
      document.getElementById('id-inputs-standard').hidden = false
      break
    }
  }
}

let xinter = 0
let yinter = 0
let slope = 0
let xinter1 = 0
let yinter1 = 0
let slope1 = 0
function calculateEquationLin () { // eslint-disable-line no-unused-vars
  const functions = document.getElementById('id-functions').value
  switch (functions) {
    case 'slope': {
      document.getElementById('id-output-slope').hidden = false
      document.getElementById('id-output-x-intercept').hidden = false
      document.getElementById('id-output-y-intercept').hidden = false
      const x1 = document.getElementById('id-x1').value
      const x2 = document.getElementById('id-x2').value
      const y1 = document.getElementById('id-y1').value
      const y2 = document.getElementById('id-y2').value
      slope = (y2 - y1) / (x2 - x1)
      yinter = y2 - slope * x2
      xinter = -(yinter) / slope
      document.getElementById('id-output-slope').innerHTML = 'Slope = ' + slope
      document.getElementById('id-output-y-intercept').innerHTML = 'Y-intercept = ' + yinter
      document.getElementById('id-output-x-intercept').innerHTML = 'X-intercept = ' + xinter
      break
    }
    case 'standard': {
      document.getElementById('id-inputs-standard').hidden = false
      document.getElementById('id-output-slope1').hidden = false
      document.getElementById('id-output-y-intercept1').hidden = false
      document.getElementById('id-output-x-intercept1').hidden = false
      const a = document.getElementById('id-a').value
      const b = document.getElementById('id-b').value
      const c = document.getElementById('id-c').value
      slope1 = -(a) / b
      yinter1 = c / b
      xinter1 = c / a
      document.getElementById('id-output-slope1').innerHTML = 'Slope = ' + slope1
      document.getElementById('id-output-y-intercept1').innerHTML = 'y-intercept = ' + yinter1
      document.getElementById('id-output-x-intercept1').innerHTML = 'x-intercept = ' + xinter1
      break
    }
  }
}

let solvex = 0
let solvey = 0
function calculateEquationLin2 () { // eslint-disable-line no-unused-vars
  /* global slope1:true, yinter2:true, yinter1:true, slope2:true */ // eslint-disable-line no-unused-vars
  document.getElementById('id-output-solvex').hidden = false
  document.getElementById('id-output-solvey').hidden = false
  const xe1 = document.getElementById('id-xe1').value
  const ye1 = document.getElementById('id-ye1').value
  const ce1 = document.getElementById('id-ce1').value
  const xe2 = document.getElementById('id-xe2').value
  const ye2 = document.getElementById('id-ye2').value
  const ce2 = document.getElementById('id-ce2').value
  slope1 = -(xe1) / ye1
  yinter1 = ce1 / ye1
  slope2 = -(xe2) / ye2
  yinter2 = ce2 / ye2
  if (slope1 === slope2) {
    document.getElementById('demo1').innerHTML = 'No solution (Parallel)'
    document.getElementById('id-output-solvex').hidden = true
    document.getElementById('id-output-solvey').hidden = true
  } else {
    solvex = ((ce2 * ye1) - (ce1 * ye2)) / ((xe2 * ye1) - (xe1 * ye2))
    solvey = (ce1 - (xe1 * solvex)) / (ye1)
    document.getElementById('demo1').innerHTML = 'One solution, intersection point coordination is'
    document.getElementById('id-output-solvex').hidden = false
    document.getElementById('id-output-solvey').hidden = false
    document.getElementById('id-output-solvex').innerHTML = 'x = ' + solvex
    document.getElementById('id-output-solvey').innerHTML = 'y = ' + solvey // eslint-disable-line no-unused-vars
  }
  slope1 = -(xe1) / ye1
  yinter1 = ce1 / ye1
  slope2 = -(xe2) / ye2
  yinter2 = ce2 / ye2
}

let discriminant = 0
let root1 = 0
let root2 = 0
let aos = 0
let xvertex = 0
let yvertex = 0
function calculateEquationquad () { // eslint-disable-line no-unused-vars
  document.getElementById('id-output-discriminant').hidden = false
  document.getElementById('id-output-root-1').hidden = false
  document.getElementById('id-output-root-2').hidden = false
  document.getElementById('id-output-aos').hidden = false
  const aq = document.getElementById('id-aq').value
  const bq = document.getElementById('id-bq').value
  const cq = document.getElementById('id-cq').value
  discriminant = bq * bq - 4 * aq * cq
  if (discriminant === 0) {
    document.getElementById('demo').innerHTML = '1 solution'
    document.getElementById('id-output-root-2').hidden = true
    root1 = (-bq + (Math.sqrt((bq * bq) - 4 * aq * cq))) / (2 * aq)
    document.getElementById('id-output-root-1').innerHTML = 'Root 1 = ' + root1
  } else if (discriminant > 0) {
    document.getElementById('demo').innerHTML = '2 solutions'
    root1 = (-bq + (Math.sqrt((bq * bq) - 4 * aq * cq))) / (2 * aq)
    root2 = (-bq - (Math.sqrt((bq * bq) - 4 * aq * cq))) / (2 * aq)
    document.getElementById('id-output-root-1').innerHTML = 'Root 1 = ' + root1
    document.getElementById('id-output-root-2').innerHTML = 'Root 2 = ' + root2
  } else {
    document.getElementById('demo').innerHTML = 'no solution'
    document.getElementById('id-output-root-1').hidden = true
    document.getElementById('id-output-root-2').hidden = true
  }
  aos = -bq / (2 * aq)
  xvertex = -bq / (2 * aq)
  yvertex = (aq * (xvertex * xvertex)) + (bq * xvertex) + parseFloat(cq)
  document.getElementById('id-output-discriminant').innerHTML = 'Discriminant = ' + discriminant
  document.getElementById('id-output-aos').innerHTML = 'Axis of Symetry = ' + aos
  document.getElementById('id-output-vertex').innerHTML = 'vertex = ( ' + xvertex + ' , ' + yvertex + ' )'
}
