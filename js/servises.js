window.onload = function(){
	document.querySelector('.our-services-list').addEventListener("click", fTabs);
    var tabBody = document.querySelectorAll('.services-list-content-text');
    for (var i = 1; i < tabBody.length; i++) {
    	tabBody[i].style.display = 'none'; //скрываем весь контент, кроме первой позции
    }
function fTabs(event) {
		if (event.target.className == 'services-list-item'){
			var dataIndex = event.target.getAttribute('data-index');
			var tabH = document.getElementsByClassName('services-list-item');
			for (var i = 0; i < tabH.length; i++) {
				tabH[i].classList.remove('services-list-item-active');
			} //удаляем класс active во всех табсах
			event.target.classList.add('services-list-item-active'); //добавляем выбранному
			
			for (var i=0; i < tabBody.length; i++){
				if (dataIndex==i){
					tabBody[i].style.display = 'block'; //показываем конетент для текущего табса
				}
				else {
					tabBody[i].style.display = 'none'; //убираем для остальных
				}
			}
		}
	}
}