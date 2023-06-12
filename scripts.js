var nav_btn = document.getElementById("nav_btn");
var nav_container = document.getElementById("nav_container");

var wpw_bg = document.getElementById("wpw_bg");
var wpw = document.getElementById("wpw");
var popup_exit_btn = document.getElementById("popup_exit_btn");

var block_chicken = document.getElementById("block_chicken");
var block_beef = document.getElementById("block_beef");
var block_sushi = document.getElementById("block_sushi");

var block_chicken = document.getElementById("block_chicken");
var block_beef = document.getElementById("block_beef");
var block_sushi = document.getElementById("block_sushi");

var chicken = document.getElementById("chicken");
var beef = document.getElementById("beef");
var sushi = document.getElementById("sushi");
var return_all_brn = document.getElementById("return_all_brn");

popup_exit_btn.onclick = function(){
	if(wpw.style.display == ''){
		wpw.style.display = 'none';
		wpw_bg.style.display = 'none';
	}

}


nav_btn.onclick = function(){
	if(nav_container.style.display == 'none'){
		nav_container.style.display = '';
		nav_container.classList.add("active")
	}else{
		nav_container.style.display = 'none';
		nav_container.classList.remove("active")
	}

}


block_chicken.onclick = function(){
	if(chicken.style.display == 'none'){
		chicken.style.display = '';

		beef.style.display = 'none';

		sushi.style.display = 'none';

		return_all_brn.style.display = '';
	}else if(chicken.style.display == ''){
		chicken.style.display = '';

		beef.style.display = 'none';

		sushi.style.display = 'none';

		return_all_brn.style.display = '';
	}
}

block_beef.onclick = function(){
	if(beef.style.display == 'none'){
		chicken.style.display = 'none';

		beef.style.display = '';

		sushi.style.display = 'none';

		return_all_brn.style.display = '';
	}else if(beef.style.display == ''){
		chicken.style.display = 'none';

		beef.style.display = '';

		sushi.style.display = 'none';

		return_all_brn.style.display = '';
	}
}

block_sushi.onclick = function(){
	if(sushi.style.display == 'none'){
		chicken.style.display = 'none';

		beef.style.display = 'none';

		sushi.style.display = '';

		return_all_brn.style.display = '';
	}else if(sushi.style.display == ''){
		chicken.style.display = 'none';

		beef.style.display = 'none';

		sushi.style.display = '';

		return_all_brn.style.display = '';
	}
}


return_all_brn.onclick = function(){
	chicken.style.display = '';

	beef.style.display = '';

	sushi.style.display = '';

	return_all_brn.style.display = 'none'
}

