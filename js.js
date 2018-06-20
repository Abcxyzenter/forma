
window.load = postform();
 
	var wrapposTop=0;
	var wrapposLeft=0;
	var wrapposRight=0;
	var wrapposBottom=0;

	var mobileAd=0;
 
	var geoList=0;
  

	var urlllink = 'http://abc';
	var urlGetGeo = '/api/livetex/';
	var urlPost = '/api/livetex/';
	var alertsPost = '/api/fail/';
	 

	function postform() {

   
	//положение формы
	wrapposTop = getCooka('wrapposTop');
	wrapposLeft = getCooka('wrapposLeft');
	wrapposRight = getCooka('wrapposRight');
	wrapposBottom = getCooka('wrapposBottom');
	mobileAd = getCooka('mobileAd');
 
	

	createForms();



 geoList = getGeo();
}



	function getCooka (name){
	 
	 	var cooka = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	 	 ));
	  	
	  	if (cooka !== null)
		{return decodeURIComponent(cooka[1]);}

	}




 	function showmesecond (){
 		document.getElementById('mobilead').classList.toggle('showadv');

		setCookie('mobileAd', 'closed', 300);
 	}

function showmeNhide(){

       showme();
       showmesecond ();
        
}


	function showme () {

		let mailform = document.getElementById('formwrapper');
		let mailbutton = document.getElementById('translated_wrapper');


		setTimeout( function(){ mailform.classList.toggle('tmptransitor'); mailbutton.classList.toggle('tmptransitor'); setTimeout(

			function(){ mailbutton.classList.toggle('tmptransitor');  mailform.classList.toggle('tmptransitor');},155)},15);
  
		
		mailbutton.classList.contains('mailbuttonclose') ? mailbutton.classList.toggle('mailbuttonclose') : mailbutton.classList.toggle('mailbuttonclose') ;
		mailbutton.classList.contains('mailbuttonclose') ? mailbutton.classList.toggle('mailbuttonshow') : mailbutton.classList.toggle('mailbuttonshow') ;
   
		mailform.classList.contains('mailformclose') ? mailform.classList.toggle('mailformclose') : mailform.classList.toggle('mailformclose') ;
		mailform.classList.contains('mailformclose') ? mailform.classList.toggle('mailformshow') : mailform.classList.toggle('mailformshow') ;

		mailform.classList.contains('mailformclose') ? mailform.style = "" : setTimeout(function(){ positionformset(); },100);
 
	}
 

 	function positionformset() {

 		let sendform = document.getElementById('formwrapper');
 
			sendform.style.left = wrapposLeft;
			sendform.style.top = wrapposTop;
			sendform.style.bottom = wrapposBottom;
			sendform.style.right = wrapposRight;

	}





 

 
	//on mouse down
	function transitter () { document.getElementById('formwrapper').onmousemove = setPositions;	document.getElementById('formwrapper').classList.add('percened');}
 
	function removeEvent() { document.getElementById('formwrapper').classList.remove('percened'); document.getElementById('formwrapper').onmousemove = null;	}
  
  	function setPositions (e) {
 
	  		var pageX = e.pageX;
	  		var pageY = e.pageY;

	  		let sendform = document.getElementById('formwrapper');
 
			wrapposTop = 'auto';
			wrapposLeft = 'auto';
			wrapposRight = Math.round(window.innerWidth - (pageX  + sendform.offsetWidth/2))+ 'px';
			wrapposBottom = Math.round(window.innerHeight - (pageY + (sendform.offsetHeight-35))) + 'px';

			sendform.style.left = wrapposLeft;
			sendform.style.top = wrapposTop;
			sendform.style.bottom = wrapposBottom;
			sendform.style.right = wrapposRight;

			setCookie('wrapposTop', wrapposTop, 300);
			setCookie('wrapposLeft', wrapposLeft, 300);
			setCookie('wrapposRight', wrapposRight, 300);
			setCookie('wrapposBottom', wrapposBottom, 300);

 
	}



	function setCookie(name, value, options) {

		  options = options || {};

		  var expires = options.expires;

		  if (typeof expires == "number" && expires) {
		    var d = new Date();
		    d.setTime(d.getTime() + expires * 1000);
		    expires = options.expires = d;
		  }
		  if (expires && expires.toUTCString) {
		    options.expires = expires.toUTCString();
		  }

		  value = encodeURIComponent(value);

		  var updatedCookie = name + "=" + value;

		  for (var propName in options) {
		    updatedCookie += "; " + propName;
		    var propValue = options[propName];
		    if (propValue !== true) {
		      updatedCookie += "=" + propValue;
		    }
		  }

		  	document.cookie = updatedCookie;
	}


 


	function checkforms (buttonid) {

		let sendarray = checkformss ();
		let inputsList = document.getElementsByClassName('formpart__input_input');

		 
	if (sendarray.length == inputsList.length){

			let noreqs = document.getElementsByClassName('formpart__input_message');
			
			for (let i=0; i<noreqs.length; i++)
			{ 
 					let tmp = []
 					tmp['value'] = noreqs[i].value;
 					tmp['name']  = noreqs[i].name;
			 		 
			 		sendarray.push(tmp) }

			sumbitter (buttonid, sendarray);
			 
		}
 
	}






	function checkformss () {

 		let sendarray = [];

		let inputsList = document.getElementsByClassName('formpart__input_input');

		for (let i=0; i<inputsList.length; i++){

			if (!inputsList[i].value){

			 	setRequired (inputsList[i], 'inpt_'+i);
	 
			 	}
  		  
			else {
 					unsetRequired (inputsList[i], 'inpt_'+i);

 					let tmp = [];
 					tmp['value'] = inputsList[i].value;
 					tmp['name']  = inputsList[i].name;
			 		 
			 		sendarray.push(tmp)

			 	}
 
			if  (inputsList[i].placeholder=='Email')

			 	{checkEmail(inputsList[i], 'inpt_'+i)}
 
		}

		return sendarray;
 	
	}
 
		function setRequired (elem, elid){
			elem.setAttribute('required', true); 
			  
			  let alertmes;
			 	if (!document.getElementById(elid))

			  {alertmes = document.createElement('span');}
			  else { alertmes =  document.getElementById(elid);}

				alertmes.classList.add('alerts');
				alertmes.id = elid;
				alertmes.innerHTML = 'Введите '+elem.placeholder+'';
	 
			elem.parentNode.insertBefore( alertmes, elem.parentNode.firstChild);}


		function unsetRequired (elem, elid){

			elem.removeAttribute('required'); 

			if (document.getElementById(elid)){
			let alertmes = document.getElementById(elid);
				alertmes.classList.toggle('alerts');
				alertmes.innerHTML = '';
			}
	  	}
 
	  	function checkEmail (elem, elid){

	  		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	  		if(reg.test(elem.value) == false) {

     			let alertmes;
			 	
			 	if (!document.getElementById(elid))

			  {alertmes = document.createElement('span');}

			  else { alertmes =  document.getElementById(elid);}

				alertmes.classList.add('alerts');
				alertmes.id = elid;
				alertmes.innerHTML = 'Введите корректный email';
	 
				elem.parentNode.insertBefore( alertmes, elem.parentNode.firstChild);
   			}

	  	}








	function sumbitter (buttonid, sendarray) {
 
 
	  	let tmp = [];

	  	for (let i=0; i<sendarray.length; i++){

	  		tmp.push (sendarray[i]['name']+'='+encodeURIComponent(sendarray[i]['value']));

	  	}
	  		let forPost = tmp.join('&');
 
			 	let http = createRequestObject();
				
				if( http ) {
				
				http.open('POST', urlllink+urlPost, true);
   
				http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		 		

		 		 http.onreadystatechange = function () {	 
				
					if(http.readyState == 4) {
 
						if (http.status !== 200){

						alert ('Форма не отправлена. Что-то пошло не так')
	 
						document.getElementById(buttonid).innerHTML = 'Послать еще раз';

						let alertMessage = JSON.stringify(http.status + ':' + http.statusText)+' formData: '+JSON.stringify(sendarray);
						 
							http.open('POST', urlllink+alertsPost, true);

							http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			  
							http.send(alertMessage);
		 
						}

						else {

						document.getElementById('forminfo').innerHTML='Спасибо!';

						document.getElementById('datapart').innerHTML='<div class="messagepart"><p>Ваше сообщение успешно отправлено</p>\
						<br>\
						<span class="bottomtextpart__sumbit" onclick="showme()">Закрыть окно</span>';
				 
						}
					}
				}
 
				http.send(forPost);

				} else {console.log('something ну совсем не так')}

	}




	function getGeo() {

				let httpget = createRequestObject();

				if( httpget ) {
			 
				httpget.open('GET', urlllink+urlGetGeo, true);
 
				httpget.onreadystatechange = function () {	 
				
					 if(httpget.readyState == 4) {

					 	geoList = httpget.responseText;

					}
				}
		  
				httpget.send(null);
 		}
	} 



	function createRequestObject() {
		try { return new XMLHttpRequest() }
		catch(e) {
			try { return new ActiveXObject('Msxml2.XMLHTTP') }
			catch(e) {
				try { return new ActiveXObject('Microsoft.XMLHTTP') }
				catch(e) { return null; }
			}
		}
	}





function createForms () {

if (mobileAd !== 'closed' && window.innerWidth<600)
{


		setTimeout(function(){document.getElementById('mobilead').classList.toggle('showadv')}, 8000);



let cForm = document.createElement('div');
cForm.classList.add('managerdiv');
cForm.id = 'mobilead';
cForm.innerHTML = '\
\
      <div class="infocontainer"> \
\
        <span onclick="showmesecond()" class="closerbt">X</span>\
\
        <div class="imgpart">\
          <img src="aa.png" >\
        </div>\
 \
        <div class="txtpart">\
           <h5>Наталья Невская</h5>\
          <p>Напишите ваш вопрос, оставьте контактные данные и мы свяжемся с вами с 10 до 18 по рабочим дням.</p>\
        </div>\
      </div>\
\
\
      <div class="buttonspart">\
\
 \
        <div class="bottomtextpart__sumbit"> \
 \
           <span onclick="checkforms"><span id="sendmessage" onclick="showmeNhide()">Форма связи</span></span> \
 \
        </div> \
 \
    </div>\
\
';

document.body.appendChild(cForm);}

let bForm = document.createElement('div');
bForm.classList.add('translated_width');
bForm.innerHTML = '\
\
    <div class="translated_wrapper mailbuttonshow" id="translated_wrapper" onclick="showme()">\
\
      <div class="translated">\
\
        <span class="translated__mailround">\
         \
          <i class="fas fa-envelope"></i>\
        \
        </span>\
\
        <span class="translated__text">Нужно больше информации?</span>\
\
      </div>\
    \
    </div>\
';

document.body.appendChild(bForm);






let aForm = document.createElement('div');
aForm.classList.add('mailformclose');
aForm.id = 'formwrapper';
aForm.innerHTML = '\
\
    <div class="formwrapper">\
\
      <div class="closebtn">\
\
        <span  onclick="showme()"><i class="far fa-times-circle"></i></span>\
\
      </div>\
\
      <div id="movingdiv" class="movingdiv" onmousedown="transitter()" onmouseup="removeEvent()" >\
\
        <span>\
            <span class="movingdiv_icon"><i class="fas fa-envelope"></i></span>\
            <span class="movingdiv_title" id="forminfo"> Нужно больше информации?</span>\
        </span>\
\
      </div>\
\
      <div id="datapart">\
\
        <div class="toptextpart">\
\
          <div class="toptextpart__bubble">\
\
            <p>Сейчас мы офлайн. Задайте свой вопрос, и мы ответим, как только увидим ваше сообщение.</p>\
\
          </div>\
\
        </div>\
\
        <div  class="formpart">\
\
          <div class="formpart__input">\
\
            <span class="formpart_input_icon"><i class="fas fa-user"></i></span>\
\
            <input name="name" class="formpart__input_input" type="text" placeholder="Имя" onkeyup="checkformss()">\
\
          </div>\
\
          <div class="formpart__input">\
\
            <span class="formpart_input_icon"><i class="fas fa-users"></i></span>\
\
            <select class="formpart__input_input" onclick="checkformss()" name="geo" id="geo"><option>Выберите регион</option></select>\
\
          </div>\
\
          <div class="formpart__input">\
\
            <span class="formpart_input_icon"><i class="fas fa-envelope"></i></span>\
\
            <input name="email" class="formpart__input_input" type="text" placeholder="Email" onkeyup="checkformss()">\
\
          </div>\
\
          <div class="formpart__input">\
\
            <input name="message" class="formpart__input_message"  type="text" placeholder="Введите сообщение">\
\
          </div>\
\
        </div>\
\
        <div class="bottomtextpart">\
\
          <div class="bottomtextpart__comment">\
\
            <a href="#"> Пользовательское соглашение</a>\
\
          </div>\
\
          <div class="bottomtextpart__buttons">\
\
            <div class="bottomtextpart__call">\
   \
              <span onclick="checkforms(\'callme\')"><i class="fas fa-phone"></i><span id="callme">Заказать звонок</span></span>\
\
            </div>\
\
            <div class="bottomtextpart__sumbit">\
   \
              <span onclick="checkforms(\'sendmessage\')"><span id="sendmessage">Отправить</span></span>\
\
            </div>\
\
          </div>\
\
          <div class="bottomtextpart__advertising">\
\
            <span>Работает на платформе <a href="#" class="livetexlink">LiveTex</a></span>\
\
          </div>\
\
        </div>\
\
      </div>\
\
    </div>';

document.body.appendChild(aForm);


let selectgeo = document.getElementById('geo');
for (let i=0; i<geoList.length; i++){

	let geoption = document.createElement('option');
	geoption.setAttribute('value', geoList[i]);
	geoption.innerHTML = geoList[i];
	selectgeo.appendChild(geoption);

	}


}