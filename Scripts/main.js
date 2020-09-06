const myHeading = document.querySelector('h1');
myHeading.textContent = 'Marksheet!'

function show()
{
	var marks = document.getElementById("marks");
	var total=0;
	for(var i=1;i<marks.rows.length-1;i++)
	{
		var objcells=marks.rows.item(i).cells;
		total= total+parseInt(objcells.item(1).innerHTML);
		
	}
	return(total);
	

}
function myCreateFunction() {
  var table = document.getElementById("marks");
  var row = table.insertRow(marks.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Total";
  a=show();
  cell2.innerHTML = a;
  var row = table.insertRow(marks.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Average";
  cell2.innerHTML = a/3;
}
var a=3;
var b=5;
    document.getElementById("power").innerHTML = "Power="+Math.pow(a,b);
	document.getElementById("squareroot").innerHTML = "Square root="+Math.sqrt(a);
	document.getElementById("absolute").innerHTML = "Absolute Value="+Math.abs(b);
var x=Math.random();
	document.getElementById("ceil").innerHTML = "Ceil Value="+Math.ceil(x);
	document.getElementById("round").innerHTML = "Rounded Value="+Math.round(x);
	document.getElementById("floor").innerHTML = "Floored Value="+Math.floor(a+x);
	document.getElementById("trigno").innerHTML = "Cosine Value="+Math.cos(30*Math.PI/180);

var dt= new Date();
console.log(dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate());


function printfibo()
{
	var n = document.getElementById("fibonum").value;
	var a=0, b=1;
	document.write("The fibonacci series is : ");
	document.write("",a," ");
	document.write("",b," ");
	var i, sum;
	for(i=2; i<n;i++)
	{
	sum=a+b;
	document.write("",sum," ");
	a=b;
	b=sum;
}

}