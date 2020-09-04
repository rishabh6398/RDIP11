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
var x = multi(5, 10);
document.getElementById("multiply").innerHTML = "The value after multiplication operation = " + x;
function multi(a,b=1)
{
 return(a*b);
}





