let popUp=document.getElementById('popUp');
let butt=document.getElementById('butt');
let forma =document.forms.f;
	 let n=forma.elements.name;
	 let email=forma.elements.mail;
	 let yes=forma.elements.yes;
	 let emailError=document.getElementById('emailError')
	 let noyes=document.getElementById('noYes');
	 let nameError=document.getElementById('nameError');
	 let send=forma.elements.send; 
	 
	 butt.onclick= function()
	 {
		 window.location.hash='#popUp';	
		};
		
		window.onhashchange = function() 
		{ 	if (location.hash === "#popUp")
		{
			popUp.style.display='block';
			if (localStorage.length != 0) 
			{ 
				//Есть данные о предыдущих формах
				n.value = localStorage.namen;
				email.value = localStorage.em;
			}
        }
		else popUp.style.display='none';
	};
	let back=document.getElementById('back');
	 back.onclick= function(){ window.location.href=window.location.href.substr(0, window.location.href.indexOf('#'))}
	
	forma.addEventListener('submit', function(e)
	{
		e.preventDefault();	
		if(n.value!=="")
		nameError.style.display='none';
		else nameError.style.display='block';
		
		
		if(email.value !=="")
		emailError.style.display='none';
		else 
		emailError.style.display='block';
			
		if(yes.checked==false)
		noyes.style.display='block';
		else 
		noyes.style.display='none';

		if(yes.checked == true && n.value!="" && email.value!="" )
		{
			if(n.value!=localStorage.namen || email.value!=localStorage.em ||localStorage.lendth==0 )
			{//запомнить новые значения формы
				localStorage.clear();
				localStorage.namen=n.value;
				localStorage.em= email.value;
			}
			let formData = new FormData(forma);
			$.ajax({
				url: 'https://formcarry.com/s/ZXtrVvHwBpP',
				type: 'post', 
				contentType: false,
				processData: false,
				dataType: "json",
				data: formData
			})
			.done(function (){ alert("Форма отправлена"); forma.reset();})
			.fail(function(){alert("Ошибка приотправлении Формы!");});
			
		}
		return false;
	});
	
