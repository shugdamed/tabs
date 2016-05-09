
/*
window.addEventListener('load', function(){
	
	//recuperer les elts
	var liList = document.querySelectorAll('#tabs ul li');


	for(var i=0; i < liList.length; i++){
		liList[i].addEventListener('click', function(){

			var link = this.children[0]; //Recupere le 1er enfant
			var targetId = link.getAttribute('href');
			var targetDiv = document.querySelector(targetId);
			hideAllDiv();
			targetDiv.style.display = 'block';
			this.classList.add('active');
		});
	}

	function hideAllDiv(){
		for(var i=0; i < liList.length; i++){
			liList[i].classList.remove('active');
		}

		var divList = document.querySelectorAll('#tabs div');
		for(var i=0; i < divList.length; i++){
			divList[i].style.display = 'none';
		}
	}

	//classList
	//=> renvoie un tableau de class
	// 3 methodes : add, remove , contains
});*/

$(function(){


$('#tabs ul li').click(function(){
//alert('yo');
var divActive = $(this).children().attr('href');
	$('#tabs .active').removeClass('active').fadeToggle();
	$(divActive).addClass('active').fadeToggle();

});

});