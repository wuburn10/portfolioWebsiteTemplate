const arrowButton = document.getElementsByClassName("arrow")[0];
const arrowButton2 = document.getElementsByClassName('arrow2')[0]

var animationRunning = false;

// About Left images
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');

// About/Portfolio select 
const r = document.getElementById("rText");
const r2 = document.getElementById("rText2");
const r3 = document.getElementById("rText3");

// Portfolio option pressed
const pO = document.querySelector('#portOption')
const pO2 = document.querySelector('#portOption2')
const pButton = document.querySelector('#port')

// Contact Page - Home Nav Button
const contactHomeOption = document.querySelector('#contactHomeOption')
var navPressed = false;

// Contact Option is pressed
const contactO = document.querySelector('#contactOption');
contactO.addEventListener('click', () => {
	navPressed = true;
	console.log('Contact Option clicked')
	setTimeout(function() {
		navPressed = false;
	},1500);
});

contactHomeOption.addEventListener('click', function(){
	navPressed = true;
	console.log('Home Option at Contact clicked')
	setTimeout(function() {
		navPressed = false;
	},1500);
});


// function to view portfolio section
function viewPortfolio(){ // [-x-] On the scroll back from this, the animation is glitchy, and I'm assuming it's because it does not first scroll to a2 before a3.
						  // [-x-] For some reason, scrolling back up triggers 'A2 -> A1' even though that's a click event.
	navPressed = true;
	console.log("viewPorfolio()")
	//window.scrollTo({ top: abtContainer.offsetTop, left: 0, behavior: 'smooth' });
	
	abouth1.innerHTML = "Portfolio";

	a1.style.outline = "none";
	a2.style.outline = "none";
	a3.style.outline = "rgb(128, 128, 128) solid 1px";

	r.style.display = "none";
	r2.style.display = "none";
	r3.style.display = "none";

	r3.style.animation = "";
	aL.style.animation = "";
	aR.style.animation = "";
	abouth1.style.animation = "";

	aL.style.visibility = "hidden";

	setTimeout(function() {
		aL.style.visibility = "visible";
		r3.style.display = "block";
		aL.style.animation = "slideInLeft 1.5s ease-in-out forwards";
		aR.style.animation = "slideInRight 1.5s ease-in-out forwards";
	},500);
	arrowButton2.style.display = "block";	
	setTimeout(function() {
		navPressed = false;
	},2000);
}

pO.addEventListener('click', viewPortfolio);
pO2.addEventListener('click', viewPortfolio);
pButton.addEventListener('click', viewPortfolio);

// About option pressed
const aO = document.querySelector('#abtOption')
const aO2 = document.querySelector('#abtOption2')

function viewAbout() {
	resetAbout()
	console.log("aR : " + aR.offsetHeight)
	console.log("r : " + r.offsetHeight)
	navPressed = true;
	arrowButton2.style.display = "block";
	console.log("viewAbout()")
	window.scrollTo({ top: abtContainer.offsetTop, left: 0, behavior: 'smooth' });
	
	abouth1.innerHTML = "About";

	a1.style.outline = "rgb(128, 128, 128) solid 1px";
	a2.style.outline = "none";
	a3.style.outline = "none";

	r.style.display = "none";
	r2.style.display = "none";
	r3.style.display = "none";

	r3.style.animation = "";
	aL.style.animation = "";
	aR.style.animation = "";

	aL.style.visibility = "hidden";

	setTimeout(function() {
		aL.style.visibility = "visible";
		r.style.display = "block";
		aL.style.animation = "slideInLeft 1.5s ease-in-out forwards";
		aR.style.animation = "slideInRight 1.5s ease-in-out forwards";
	},500);
	setTimeout(function() {
		navPressed = false;
	},2000);
}

aO.addEventListener('click', function(){
	arrowButton.click()
})
aO2.addEventListener('click', viewAbout)

// Toggle chatbox
const chatboxToggle = document.querySelector('.chatbox')
const chatClose = document.querySelector('#chatX')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')
const chatboxContact = document.querySelector('#chatMsg')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
});

chatClose.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
});

chatboxContact.addEventListener('click', function () {
	contactO.click()
});


// About transition
const abouth1 = document.querySelector("#about");
const aR = document.querySelector('#aboutRight')
const aL = document.querySelector('#aboutLeft')

arrowButton.addEventListener('click', function() {
	console.log("arrowButton Clicked")
	arrowButton2.style.display = "none"
	resetAbout();
	document.querySelector('.AboutContainer').style.filter = "none";

	abouth1.innerHTML = "About";

	a1.style.outline = "rgb(128, 128, 128) solid 1px";
	a2.style.outline = "none";
	a3.style.outline = "none";

	r2.style.display = "none";
	r3.style.display = "none";

	abouth1.style.animation = "";
	aR.style.animation = "";
	aL.style.animation = "";


	setTimeout(function() {
		r.style.display = "block";
		abouth1.style.animation = "slideInAbout 600ms";
		aR.style.animation = "slideInRight 1.5s ease-in-out forwards";
		aL.style.animation = "slideInLeft 1.5s ease-in-out forwards";
	}, 200);
});



// About Left image pressed
var outlined;

function checkOutlined(){
	if (a1.style.outline === 'rgb(128, 128, 128) solid 1px') {
		outlined = "a1";
	}else if (a2.style.outline === 'rgb(128, 128, 128) solid 1px') {
	outlined = "a2";
	}else if (a3.style.outline === 'rgb(128, 128, 128) solid 1px') {
	outlined = "a3";
	} else{
		outlined = "a1";
	}
}

a1.addEventListener('click', function () {
	console.log("A1 clicked")
	const outline = window.getComputedStyle(a1).getPropertyValue("outline");
	checkOutlined();
	if (!(outline === "rgb(128, 128, 128) solid 1px")) {
		a1.style.outline = "rgb(128, 128, 128) solid 1px";
		a2.style.outline = "none";
		a3.style.outline = "none";
	}
	abouth1.innerHTML = "About";

	if (outlined === "a2"){
		r2.style.animation = "slideOutBottom 1s ease-in-out forwards";  
		setTimeout(function() {
			r2.style.display = "none";
			r.style.display = "block";
			r.style.animation = "slideInTop 1s ease-in-out forwards";
		},800);
	} else if (outlined === "a3"){
		r3.style.animation = "slideOutBottom 1s ease-in-out forwards"; 
		setTimeout(function() {
			r3.style.display = "none";
			r.style.display = "block";
			r.style.animation = "slideInTop 1s ease-in-out forwards";
		},800);
	}

	arrowButton2.style.display = "none";
});
a2.addEventListener('click', function () {
	console.log("A2 clicked")
	const outline = window.getComputedStyle(a2).getPropertyValue("outline");
	checkOutlined();
	if (!(outline === "rgb(128, 128, 128) solid 1px")) {
		a1.style.outline = "none";
		a2.style.outline = "rgb(128, 128, 128) solid 1px";
		a3.style.outline = "none";
	}
	abouth1.innerHTML = "About";

	if (outlined === "a1"){
		r.style.animation = "slideOutTop 1s ease-in-out forwards"; 
		setTimeout(function() {
			r.style.display = "none";
			r2.style.display = "block";
			r2.style.animation = "slideInBottom 1s ease-in-out forwards";
		},800);
	} else if (outlined === "a3"){
		r3.style.animation = "slideOutBottom 1s ease-in-out forwards"; 
		setTimeout(function() {
			r3.style.display = "none";
			r2.style.display = "block";
			r2.style.animation = "slideInTop 1s ease-in-out forwards";
		},800);
	}
	arrowButton2.style.display = "none";
});
a3.addEventListener('click', function () {
	console.log("A3 clicked")
	const outline = window.getComputedStyle(a3).getPropertyValue("outline");
	checkOutlined();

	if (!(outline === "rgb(128, 128, 128) solid 1px")) {
		a1.style.outline = "none";
		a2.style.outline = "none";
		a3.style.outline = "rgb(128, 128, 128) solid 1px";
	}
	abouth1.innerHTML = "Portfolio";

	if (outlined === "a1"){
		r.style.animation = "slideOutTop 1s ease-in-out forwards"; 
		setTimeout(function() {
			r.style.display = "none";
			r3.style.display = "block";
			r3.style.animation = "slideInBottom 1s ease-in-out forwards";
		},800);
	} else if (outlined === "a2"){
		r2.style.animation = "slideOutTop 1s ease-in-out forwards"; 
		setTimeout(function() {
			r2.style.display = "none";
			r3.style.display = "block";
			r3.style.animation = "slideInBottom 1s ease-in-out forwards";
		},800);
	}


	arrowButton2.style.display = "block";
});

// Transition from about/portfolio to contact
arrowButton2.addEventListener('click', function(){
	console.log("ARROW 2 pressed")
	window.scrollTo({ top: contactContainer.offsetTop, left: 0, behavior: 'smooth' });

	const contactHead = document.querySelector('#contactHead')
	const contactLearn = document.querySelector('#contactLearn')
	const contactStill = document.querySelector('#contactStill')
	const contactForm = document.querySelector('#contactForm')
	const abtContainer = document.querySelector('.AboutContainer')


	contactHead.style.animation = "none";
	contactLearn.style.animation = "none";
	contactStill.style.animation = "none";
	contactForm.style.animation = "none";
	abtContainer.style.filter = "none";
	setTimeout(function() {
		abtContainer.style.filter = "blur(10px)";
	},200);

	setTimeout(function() {
		contactHead.style.animation = "slideInBottom 1.5s ease-in-out forwards";
		contactLearn.style.animation = "slideInBottom 1.5s ease-in-out forwards";
		contactStill.style.animation = "slideInBottom 1.5s ease-in-out forwards";
		contactForm.style.animation = "slideInBottom 1.5s ease-in-out forwards";
	},200);

	setTimeout(function() {
		abtContainer.style.filter = "none";
	},800);
});

// For Contact Form (Topic Selection)
const topics = document.querySelectorAll('.topic');

topics.forEach(function(topic) {
	topic.addEventListener('click', function() {
		topics.forEach(function(topic) {
		topic.blur();
		});
		this.focus();
	});
});



// Jquery function taken from the website below
// https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
// This function is used to enable smooth scrolling with a time it takes to scroll
//    as the css "scroll-behavior: smooth;" does not allow us to set a time
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });


var abtContainer = document.querySelector('.AboutContainer');
const contactContainer = document.querySelector('.ContactContainer');
var scrolledOnce = false;
var windowBeingResized = false;
let current = 0;
// $(window).resize(function() { // Recommended to reload after a page resize
// 	windowBeingResized = true;
// 	setTimeout(() => windowBeingResized = false, 1000);
// });

window.addEventListener("scroll", function(event) {
	if (animationRunning){
		console.log(animationRunning + " Scroll Detected : " + current)
	}
	checkOutlined();
	// Prevent the animations from running if the navigation headers were clicked or the page is being resized
	if (windowBeingResized) {
		console.log("1. " + windowBeingResized)
		return;
	}

	
	// Locks the scroll to the top of the about me section when the user is scrolling between the section
	if (window.pageYOffset < abtContainer.offsetTop && animationRunning) { 
		console.log("1.")
		window.scrollTo(0, abtContainer.offsetTop); 
		event.preventDefault(); 
		return; 
	}else if (window.pageYOffset > abtContainer.offsetTop && animationRunning) { 
		console.log("2.")
		//console.log("Lock About from Top = " + (window.pageYOffset > abtContainer.offsetTop && animationRunning))
		window.scrollTo(0, abtContainer.offsetTop); 
		event.preventDefault(); 
		return; 
	}

	
	// Snaps to the about me section when the user does the first scroll from the top of the page
	// HOME
	// Home -> About
	if (current == 0 && window.pageYOffset < abtContainer.offsetTop && !navPressed) {
		event.preventDefault();
		resetAbout();
		console.log("Home -> About")
		arrowButton.click();
	}else if (current == abtContainer.offsetTop && window.pageYOffset < abtContainer.offsetTop && outlined == "a1") {
		console.log("About -> Home");
		event.preventDefault()
		document.querySelector('.AboutContainer').style.filter = "none";
		abouth1.style.animation = "";
		aR.style.animation = "";
		aL.style.animation = "";
		setTimeout(function() {
			contactHomeOption.click()
		}, 200);

	}
	// Snaps to the top of the page when the user scrolls up from the about me section
	//ABOUT
	// Animations
	else if (window.pageYOffset < abtContainer.offsetTop && !scrolledOnce && outlined !== "a1" && !navPressed) {
		event.preventDefault();
		checkOutlined();
		if (outlined == "a2" && !animationRunning) {
			window.scrollTo(0, abtContainer.offsetTop);
			arrowButton2.style.display = "none";

			// transition to a1
			console.log("A2 -> A1");
			a2.style.outline = "none";
			a1.style.outline = "rgb(128, 128, 128) solid 1px";
			abouth1.innerHTML = "About";
			r2.style.animation = "slideOutTop 1s ease-in-out forwards";
			animationRunning = true;
			setTimeout(function() {
				r2.style.display = "none";
				r.style.display = "block";
				r.style.animation = "slideInBottom 1s ease-in-out forwards";
			},800);
			setTimeout(() => animationRunning = false, 2000);
		} else if (outlined == "a3" && !animationRunning) {
			window.scrollTo(0, abtContainer.offsetTop);
			// transition to a2
			arrowButton2.style.display = "none";

			console.log("A3 -> A2");
			a3.style.outline = "none";
			a2.style.outline = "rgb(128, 128, 128) solid 1px";
			abouth1.innerHTML = "About";
			r3.style.animation = "slideOutTop 1s ease-in-out forwards";
			animationRunning = true;
			setTimeout(function() {
				r3.style.display = "none";
				r2.style.display = "block";
				r2.style.animation = "slideInBottom 1s ease-in-out forwards";
			},800);
			setTimeout(() => animationRunning = false, 2000);
		}
	}
	else if (window.pageYOffset > abtContainer.offsetTop && !scrolledOnce && outlined !== "a3" && !navPressed) {
		event.preventDefault();
		checkOutlined();
		if (outlined == "a1" && !animationRunning) {
			window.scrollTo(0, abtContainer.offsetTop);
			arrowButton2.style.display = "none";

			// transition to a2
			console.log("A1 -> A2");
			console.log(window.pageYOffset);
			console.log(abtContainer.offsetTop);
			console.log(scrolledOnce);
			console.log(outlined);
			console.log(!navPressed);
			a1.style.outline = "none";
			a2.style.outline = "rgb(128, 128, 128) solid 1px";
			abouth1.innerHTML = "About";
			r.style.animation = "slideOutTop 1s ease-in-out forwards";
			animationRunning = true;
			setTimeout(function() {
				r.style.display = "none";
				r2.style.display = "block";
				r2.style.animation = "slideInBottom 1s ease-in-out forwards";
			},800);
			setTimeout(() => animationRunning = false, 2000);
		}
		if (outlined == "a2" && !animationRunning) {
			window.scrollTo(0, abtContainer.offsetTop);
			// transition to a3
			console.log("A2 -> A3");
			a2.style.outline = "none";
			a3.style.outline = "rgb(128, 128, 128) solid 1px";
			abouth1.innerHTML = "Portfolio";
			r2.style.animation = "slideOutTop 1s ease-in-out forwards";
			animationRunning = true;
			setTimeout(function() {
				r2.style.display = "none";
				r3.style.display = "block";
				r3.style.animation = "slideInBottom 1s ease-in-out forwards";
			},800);
			setTimeout(() => animationRunning = false, 2000);
			arrowButton2.style.display = "block";
		}
	}


	// Smooth scrolls to the contact page
	// console.log("6. = "+ current)
	// console.log("6. = "+ abtContainer.offsetTop)
	// console.log("6. = "+ window.pageYOffset )
	// console.log("6. = "+ abtContainer.offsetTop)
	else if (current == abtContainer.offsetTop && window.pageYOffset > abtContainer.offsetTop && outlined == "a3") {
		event.preventDefault();
		window.scrollTo({ top: contactContainer.offsetTop, left: 0, behavior: 'smooth' });
		console.log("Portfolio -> Contact")
		const contactHead = document.querySelector('#contactHead')
		const contactLearn = document.querySelector('#contactLearn')
		const contactStill = document.querySelector('#contactStill')
		const contactForm = document.querySelector('#contactForm')
		const abtContainer = document.querySelector('.AboutContainer')
	
	
		contactHead.style.animation = "none";
		contactLearn.style.animation = "none";
		contactStill.style.animation = "none";
		contactForm.style.animation = "none";
		abtContainer.style.filter = "none";
		setTimeout(function() {
			abtContainer.style.filter = "blur(10px)";
		},200);
	
		setTimeout(function() {
			contactHead.style.animation = "slideInBottom 1.5s ease-in-out forwards";
			contactLearn.style.animation = "slideInBottom 1.5s ease-in-out forwards";
			contactStill.style.animation = "slideInBottom 1.5s ease-in-out forwards";
			contactForm.style.animation = "slideInBottom 1.5s ease-in-out forwards";
		},200);
	
		setTimeout(function() {
			abtContainer.style.filter = "none";
		},800);
	}
	// Smooth scrolls back to the about me section from the contact page
	//console.log("7. =" +(current >= contactContainer.offsetTop && window.pageYOffset < contactContainer.offsetTop))
	else if (current >= contactContainer.offsetTop && window.pageYOffset < contactContainer.offsetTop && !navPressed) {
		//window.scrollTo({ top: abtContainer.offsetTop, left: 0, behavior: 'smooth' });
		pO2.click();
		console.log("Contact -> Portfolio")
	}


	current = window.pageYOffset;
	//console.log("current = " + current)
});

function resetAbout(){
	// aR.style.transform = "translate(0, 0)";
	// r.style.transform = "translate(0, 0)";
	// r2.style.transform = "translate(0, 0)";
	// r3.style.transform = "translate(0, 0)";

	aR.style.animation = "none";
	r.style.animation = "none";
	r2.style.aniamtion = "none";
	r3.style.animation = "none";
} 