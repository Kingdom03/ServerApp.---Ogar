var number;
number = prompt("Please give game number:")
while (number == null)
	number = prompt("Please give game number:")
while (number == "")
	number = prompt("Please give game number:")
var link = "http://www.agar.io/?ip=e.grappl.io:"+number
var link2 = "http://www.agar.io/?ip=n.grappl.io:"+number
console.log(link)
console.log("BACKUP_MIRROR ~~~ "+link2)
document.getElementById("Link").setAttribute("href",link);
document.getElementById("LinkAdvanced").setAttribute("href",link2);
