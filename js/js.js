window.onload=function () {
	cargarFunciones();
}
function cargarFunciones() {
	loadingScreen();
	linkactivo();
	function loadingScreen() {
		var contendor =document.getElementById('loadScreen');
		contendor.style.visibility="hidden";
		contendor.style.opacity="0";
	}
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
	}
}

