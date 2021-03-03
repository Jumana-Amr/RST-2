var canvas;
var context;

window.onload = function() {
  canvas = document.getElementById('plotCanvas');
  context = canvas.getContext('2d');
}

function plot()
{
	var a = slope1;
	var b = yinter1;
  var a1 = slope2;
	var b1 = yinter2;


	document.getElementById('funEquation').innerHTML = 'y=' + a +'x+' + b;
  document.getElementById('funEquation2').innerHTML = 'y=' + a1 +'x+' + b1;

	context.clearRect(0,0, canvas.width, canvas.height);


	var x0 = 0.5 * canvas.width;
	var y0 = 0.5 * canvas.height;
  var x;
	var scale = 0.2;  //40px per 1 unit
	var y;
  var x1
  var y1
	var dx = 4;
	var xMax = Math.round((canvas.width-x0)/dx);
	var xMin = Math.round(-x0/dx);
	var axes={};
	axes.x0 = x0;
	axes.y0 = y0;
	axes.scale = scale;

	drawAxes(context,axes);

	context.beginPath();
	context.strokeStyle = 'red';
	context.lineWidth = 2;

	for (var i = xMin; i < xMax; i++)
	{
		x=dx*i;
		y=(a*x+b);
		x /= scale;
		y /= scale;
		if(i === xMin) {
			context.moveTo(x0 + x, y0 - y);
		} else {
			context.lineTo(x0 + x, y0 - y);
		}
	}

	context.stroke();

  	for (var i=xMin; i<xMax; ++i)
	{
		x1=dx*i;
		y1=(a1*x1+b1);
		
		x1 /= scale;
		y1 /= scale;
		if(i == xMin) {
			context.moveTo(x0 + x1, y0 - y1);
		} else {
			context.lineTo(x0+x1,y0-y1);
		}
	}

	context.stroke();
}

function drawAxes(context, axes) {
	var x0 = axes.x0;
	var y0 = axes.y0;
	var width = context.canvas.width;
	var height = context.canvas.height;
	var xmin = 0;
  var xaxis = 0
  var xaxis2 = 0
  var yaxis = 0
  var yaxis2 = 0
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	//----Y axis----
	context.moveTo(xmin, y0);
	context.lineTo(width, y0);
	//----X axis-----
	context.moveTo(x0,0);
	context.lineTo(x0,height);


	//X - signs
	for (let i = x0; i < width; i += 50) {
    context.strokeText (xaxis, i, height / 2, 20)
    xaxis += 10
  }
  for (let i = x0; i > 0; i -= 50) {
    context.strokeText (xaxis2, i, height / 2, 20)
    xaxis2 -= 10
  }
  // Y - signs
  for (let j = y0; j < height; j += 50) {
    context.strokeText (yaxis, (width / 2), j, 20)
    yaxis -= 10
  }
  for (let j = y0; j > 0; j -= 50) {
    context.strokeText (yaxis2, (width / 2), j, 20)
    yaxis2 += 10
  }
  context.stroke()
}
