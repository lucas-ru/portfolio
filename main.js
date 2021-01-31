// class Carousel{

// 		 // @param {HTMLElement} element
// 		 // @param {Object} option
// 		 // @param {Object} option.slidesVisible 
// 		 // @param {Object} option.slidesToScroll 
	

// 	constructor(element, option = {}) {
// 		this.element = element
// 		this.option = Object.assign({},{
// 			slidesToScroll:1,
// 			slidesVisible:1,

// 		},option)
// 		this.children = [].slice.call(element.children)
// 		let ratio = this.children.lenght/this.option.slidesVisible
// 		let car = createDivWithClass('carousel')
// 		let container = createDivWithClass('carousel_container')
// 		container.style.width = (ratio*100)+ "%"
// 		car.appendChild(container)
// 		this.element.appendChild(car)
// 		this.children.forEach( (child) =>
// 		{
// 			document.querySelectorAll(".item").style.width = ((100 / this.option.slidesVisible)/ ratio)+ "%"
// 			container.appendChild(child)
// 		})
// 	}
// }


document.onbeforeunload = function(){ window.scrollTo(0,0)}

document.addEventListener("DOMContentLoaded", function() {
	n=1
	
	// Evenement changement menu fixé via scrolling
	let levels = document.querySelectorAll("#levels .lvl")	

	//declaration bouton pour scroll

	Lienaccueil = document.querySelector(".titre")
	LienAboutMe = document.querySelector(".titre2")
	LienSkills = document.querySelector(".titre3")
	LienQualifications = document.querySelector(".titre4")
	LienMiscellaneous = document.querySelector(".titre5")
	LienReferences = document.querySelector(".titre6")

	//Fin declaration bouton pour scroll


	//declaration cale pour limiter le scrollTo

	ScreenAboutme = document.querySelector("#calA").getBoundingClientRect()
	ScreenSkills = document.querySelector("#calS").getBoundingClientRect()
	ScreenQualifications = document.querySelector("#calQ").getBoundingClientRect()
	ScreenMiscellaneous = document.querySelector("#calM").getBoundingClientRect()
	ScreenReferences = document.querySelector("#calR").getBoundingClientRect()

	//Fin declaration cale pour limiter le scrollTo

	console.log(ScreenAboutme)
	// Fin Evenement changement menu fixé via scrolling
	Lienaccueil.addEventListener("click",function(){
		LienAboutMe.classList.remove("active")
		LienSkills.classList.remove("active")
		LienQualifications.classList.remove("active")
		LienMiscellaneous.classList.remove("active")
		LienReferences.classList.remove("active")

		Lienaccueil.classList.add("active")

		window.scrollTo(0,0);

		decharger(levels);
	})

	LienAboutMe.addEventListener("click",function(){
		Lienaccueil.classList.remove("active")
		LienSkills.classList.remove("active")
		LienQualifications.classList.remove("active")
		LienMiscellaneous.classList.remove("active")
		LienReferences.classList.remove("active")

		LienAboutMe.classList.add("active")

		window.scrollTo(ScreenAboutme.left,ScreenAboutme.top);

		decharger(levels);
		
	})

	LienSkills.addEventListener("click",function(){
		Lienaccueil.classList.remove("active")
		LienAboutMe.classList.remove("active")
		LienQualifications.classList.remove("active")
		LienMiscellaneous.classList.remove("active")
		LienReferences.classList.remove("active")

		LienSkills.classList.add("active")

		window.scrollTo(ScreenSkills.left,ScreenSkills.top);

		for(let level of levels) {
			let span = level.querySelector("span")
			level.style.width = "400px"
			let levelValue = span.innerText
				setTimeout(function() {
					span.style.width = levelValue
				}, 2500)
		}
		
		
	})

	LienQualifications.addEventListener("click",function(){
		Lienaccueil.classList.remove("active")
		LienAboutMe.classList.remove("active")
		LienSkills.classList.remove("active")
		LienMiscellaneous.classList.remove("active")
		LienReferences.classList.remove("active")

		LienQualifications.classList.add("active")

		window.scrollTo(ScreenQualifications.left,ScreenQualifications.top);

		decharger(levels);
		
	})

	LienMiscellaneous.addEventListener("click",function(){
		Lienaccueil.classList.remove("active")
		LienAboutMe.classList.remove("active")
		LienSkills.classList.remove("active")
		LienQualifications.classList.remove("active")
		LienReferences.classList.remove("active")

		LienMiscellaneous.classList.add("active")

		window.scrollTo(ScreenMiscellaneous.left,ScreenMiscellaneous.top);	

		decharger(levels);
	})

	LienReferences.addEventListener("click",function(){	
		Lienaccueil.classList.remove("active")
		LienAboutMe.classList.remove("active")
		LienSkills.classList.remove("active")
		LienQualifications.classList.remove("active")
		LienMiscellaneous.classList.remove("active")

		LienReferences.classList.add("active")

		window.scrollTo(ScreenReferences.left,ScreenReferences.top);

		decharger(levels);	
	})

	// Evenement de l'aura sur la souris

	document.addEventListener("mousemove", function(event){
		var x = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
		var y = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop)	
		var element = document.querySelector('.souris')
	  	element.style.left = x + 'px'
	 	element.style.top = y + 'px'
	})

	// Fin Evenement de l'aura sur la souris

	imageBrady = document.querySelectorAll(".MiseEnPage2")[2]
	imagePizz = document.querySelectorAll(".MiseEnPage2")[3]
	imageMac = document.querySelectorAll(".MiseEnPage2")[4]
	imageSolike = document.querySelectorAll(".MiseEnPage2")[5]
	imageUnity = document.querySelectorAll(".MiseEnPage2")[6]
	imageSfml = document.querySelectorAll(".MiseEnPage2")[7]
	let compteur_imageB = 0;
	let compteur_imageP = 0;
	let compteur_imageM = 0;
	let compteur_imageS = 0;
	let compteur_imageU = 0;
	let compteur_imageSf = 0;


	imageBrady.addEventListener("click",function(){
		if (compteur_imageB ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[0].style.display ="contents"
		document.querySelectorAll(".texteD")[0].style.display ="contents"
		compteur_imageB += 1
		console.log(compteur_imageB)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[0].style.display ="none"
		document.querySelectorAll(".texteD")[0].style.display ="none"
		compteur_imageB -= 1
		console.log(compteur_imageB + "oui")
		}
	})

	imagePizz.addEventListener("click",function(){
		if (compteur_imageP ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[1].style.display ="contents"
		document.querySelectorAll(".texteD")[1].style.display ="contents"
		compteur_imageP += 1
		console.log(compteur_imageP)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[1].style.display ="none"
		document.querySelectorAll(".texteD")[1].style.display ="none"
		compteur_imageP -= 1
		console.log(compteur_imageP + "oui")
		}
	})

	imageMac.addEventListener("click",function(){
		if (compteur_imageM ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[2].style.display ="contents"
		document.querySelectorAll(".texteD")[2].style.display ="contents"
		compteur_imageM += 1
		console.log(compteur_imageM)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[2].style.display ="none"
		document.querySelectorAll(".texteD")[2].style.display ="none"
		compteur_imageM -= 1
		console.log(compteur_imageM + "oui")
		}
	})

	imageSolike.addEventListener("click",function(){
		if (compteur_imageS ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[3].style.display ="contents"
		document.querySelectorAll(".texteD")[3].style.display ="contents"
		compteur_imageS += 1
		console.log(compteur_imageS)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[3].style.display ="none"
		document.querySelectorAll(".texteD")[3].style.display ="none"
		compteur_imageS -= 1
		console.log(compteur_imageS + "oui")
		}
	})

	imageUnity.addEventListener("click",function(){
		if (compteur_imageU ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[4].style.display ="contents"
		document.querySelectorAll(".texteD")[4].style.display ="contents"
		compteur_imageU += 1
		console.log(compteur_imageU)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[4].style.display ="none"
		document.querySelectorAll(".texteD")[4].style.display ="none"
		compteur_imageU -= 1
		console.log(compteur_imageU + "oui")
		}
	})

	imageSfml.addEventListener("click",function(){
		if (compteur_imageSf ==0) 
		{
		console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[5].style.display ="contents"
		document.querySelectorAll(".texteD")[5].style.display ="contents"
		compteur_imageSf += 1
		console.log(compteur_imageSf)
		}
		else
		{
			console.log( document.querySelectorAll(".texte"))
		document.querySelectorAll(".AlineaD")[5].style.display ="none"
		document.querySelectorAll(".texteD")[5].style.display ="none"
		compteur_imageSf -= 1
		console.log(compteur_imageSf + "oui")
		}
	})
	


	// Algorithme lucioles
	let v = 1+Math.round(Math.random()*5);
	let lucioles = document.querySelectorAll('.lucioles')
	let AllLucioles = [];
	var Cadre = new Object( {left : 0, right : 1900,bottom : 1000, top : 0})
	for(let luciole of lucioles)
	{
		let newInf = {"balise": luciole, "x": parseInt(luciole.getAttribute("data-x")), "y": parseInt(luciole.getAttribute("data-y"))}
		newInf.v = {"x": 0, "y": 0};
		//x
		if(Math.random() < 0.5){
			newInf.v.x = v;
		}else{
			newInf.v.x = -v;
		}

		//y
		if(Math.random() < 0.5){
			newInf.v.y = v;
		}else{
			newInf.v.y = -v;
		}

		AllLucioles.push(newInf);

		// Evenement click sur lucioles et elle explose

		// luciole.addEventListener("click", function(){
		// 	console.log(luciole)
		// 	luciole.remove()
		// })

		// Fin Evenement click sur lucioles et elle explose
	
	}

	// Mouvement lucioles

	for(let luciole of AllLucioles){
		setInterval(function(){			
	      	luciole.x += luciole.v.x;
	    	luciole.y += luciole.v.y;
	      	if( luciole.x > Cadre.right)
	      	{
	        	luciole.x = Cadre.right;
	        	luciole.v.x = luciole.v.x*-1;
	       		luciole.innerHTML ="<";
	      	}
	      	if( luciole.x < Cadre.left)
	      	{
	        	luciole.x = Cadre.left;
				luciole.v.x = luciole.v.x*-1;
	        	luciole.innerHTML =">";
	      	}
			if( luciole.y > Cadre.bottom)
			{
	        	luciole.y = Cadre.bottom;
				luciole.v.y = luciole.v.y*-1;
	      	}
	      	if( luciole.y < Cadre.top)
	      	{
				luciole.y = Cadre.top;
	        	luciole.v.y = luciole.v.y*-1;
	      	}

	      	if(luciole.v.x < 0){
	      		luciole.v.x = Math.round(Math.random()*-5)-1;
	      	}else{
	      		luciole.v.x = 1+Math.round(Math.random()*5);
	      	}
	      	if(luciole.v.y < 0){
	      		luciole.v.y = Math.round(Math.random()*-5)-1;
	      	}else{
	      		luciole.v.y = 1+Math.round(Math.random()*5);
	      	}

			luciole.balise.style.left = luciole.x +"px";
	      	luciole.balise.style.top = luciole.y +"px";
 	 },50);
	}

	// Fin Mouvement lucioles

	// Fin Algorithme lucioles


	

	document.addEventListener("wheel",function(e){
		e.preventDefault()
	},
	{passive:false})


	// new Carousel(document.querySelector(".carousel1"), {
	// 	slidesToScroll: 3,
	// 	slidesVisible: 3

	// })
	
	

})

let idanchor=0
let listAnchor = document.getElementsByClassName("section")



// Legerement bugger
// window.addEventListener("wheel",event => {
// 	console.log(listAnchor)
// 	let wheeling = Math.sign(event.deltaY);
// 	if (idanchor != listAnchor.lenght-1 && wheeling<0) 
// 	{idanchor=idanchor}	
// 	else if (wheeling>0) 
// 	{
// 		idanchor+=1
// 	}
// 	else if (wheeling<0) 
// 	{
// 		idanchor-=1
// 	}
	
// 	location.hash = "#" + listAnchor[idanchor].id


// })





// Fonction


// fonction aura souris

function aura(){
	console.log(n)
		var element = document.querySelector('.souris')
		if (n==1) {
			console.log(n)
			n=n-1
			return element.classList.add('visible')
		}
		if(n==0)
		{
			console.log(n)
			n=n+1
			return element.classList.remove('visible')
		}
		
	}

// Fin fonction aura souris



// fonction decharger skills
function decharger(levels){
	for(let level of levels) {
			console.log('ty')
			let span = level.querySelector("span")
			level.style.width = "0px"
			let levelValue = span.innerText
			setTimeout(function() {
				span.style.width = "0px"
			}, 500)
	}
}

// Fin fonction decharger skills


// Carousel non fonctionnel

// function nextdiv(){
// 	document.querySelector(".next").addEventListener('click',function(){
// 		console.log(document.querySelector(".item").getBoundingClientRect())
// 		document.querySelector(".carousel1").style.transform = "translate (-"+ document.querySelector(".item").getBoundingClientRect().width+100 + "px);"
		
// 	})
// }




