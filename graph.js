var canvas
var context

window.onload = function () {
  canvas = document.getElementById('plot-canvas')
  context = canvas.getContext('2d')
}

function plot ()
{ // eslint-disable-line no-unused-vars
  var a = slope
	var b = yinter


	document.getElementById('fun-equation').innerHTML = 'y=' + a +'x+' + b

	context.clearRect(0,0, canvas.width, canvas.height)


	var x0 = 0.5 * canvas.width
	var y0 = 0.5 * canvas.height
	var x
  var scale = 0.2
	var y
	var dx = 4
	var xMax = Math.round((canvas.width-x0)/dx)
	var xMin = Math.round(-x0/dx)
	var axes={}
	axes.x0 = x0
	axes.y0 = y0
	axes.scale = scale

	drawAxes(context,axes)
	context.beginPath()
	context.strokeStyle = 'red'
	context.lineWidth = 2
	for (var i=xMin; i<xMax; i++) {
		x=dx*i
		y=(a*x+b)
		
		x /= scale
		y /= scale
		if(i==xMin) {
			context.moveTo(x0+x,y0-y)
		} else {
			context.lineTo(x0+x,y0-y)
		}
	}

	context.stroke()
}

function drawAxes(context, axes)
{
	var x0=axes.x0
	var y0=axes.y0
	var width=context.canvas.width
	var height = context.canvas.height
	var xmin = 0
  var xaxis = 0
  var xaxis2 = 0
  var yaxis = 0
  var yaxis2 = 0
	context.beginPath()
	context.strokeStyle = 'black'
	context.lineWidth = 1
	//----Y axis----
	context.moveTo(xmin, y0)
	context.lineTo(width, y0)
	//----X axis-----
	context.moveTo(x0,0)
	context.lineTo(x0,height)



	// X - signs
  for(var i=x0; i<width; i+=50)
  {
    context.strokeText (xaxis,i,height/2,20)
    xaxis+=10
  }
  for(var i=x0; i>0; i-=50)
  {
    context.strokeText (xaxis2,i,height/2,20)
    xaxis2-=10
  }
  
  // Y - signs
  for(var j=y0; j<height; j+=50)
  {
    context.strokeText (yaxis,(width/2),j,20)
    yaxis-=10
  }
  for(var j=y0; j>0; j-=50)
  {
    context.strokeText (yaxis2,(width/2),j,20)
    yaxis2+=10
  }

	context.stroke()
}
