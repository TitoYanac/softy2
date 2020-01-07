window.onload=function () {
	cargarFunciones();
};
window.onresize = function(event) {
	resizeHome();
};
function cargarFunciones() {
	loadingScreen();
	linkactivo();
	resizeHome();
};
function loadingScreen() {
	var contendor =document.getElementById('loadScreen');
	contendor.style.display="none";
	contendor.style.opacity="0";
};
function linkactivo() {
	var link = window.location.href;
	var nav_list= document.getElementsByClassName("list-item");
	switch(link){
		case "http://localhost/softy2/index.php":
			var menu_active = nav_list[0].classList.add("activo");
			break;
		case "http://localhost/softy2/nosotros.php":
			var menu_active = nav_list[1].classList.add("activo");
			break;
		case "http://localhost/softy2/web.php":
			var menu_active = nav_list[2].classList.add("activo");
			var menu_active = nav_list[3].classList.add("activo");
			break;
		case "http://localhost/softy2/mobile.php":
			var menu_active = nav_list[2].classList.add("activo");
			var menu_active = nav_list[4].classList.add("activo");
			break;
		case "http://localhost/softy2/marketing.php":
			var menu_active = nav_list[2].classList.add("activo");
			var menu_active = nav_list[5].classList.add("activo");
			break;
	}
};
function resizeHome() {
	var x = document.getElementById('cabecera').offsetHeight;
	var y = document.getElementById('flechaHome').offsetHeight;
	var z=x+y;
	var contendor =document.getElementById('flechaHome');
	contendor.style.marginTop="-"+z+"px";
};
// var visible=0;
document.getElementById("btn-servicios").addEventListener("click", function() {
	var contendor =document.getElementById('dropdown-header');
	if (!contendor) {
		visible++;
		contendor.style.display="inline-block";
	} else {
		visible--;
		contendor.style.display="none";
	}
 }, false);
// document.getElementById("dropdownflecha").addEventListener("click", showDropdownHeader(), false);
