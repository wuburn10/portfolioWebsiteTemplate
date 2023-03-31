const arrowButton = document.getElementsByClassName("arrow")[0];
const arrowButton2 = document.getElementsByClassName('arrow2')[0]

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

function clicka3(){
	arrowButton.click();
	setTimeout(function() {
		document.getElementById("a3").click()
	},200);
}
function viewPortfolio(){
	document.querySelector('.AboutContainer').style.filter = "none";
	a1.style.outline = "none";
	a2.style.outline = "none";
	a3.style.outline = "rgb(128, 128, 128) solid 1px";

	abouth1.innerHTML = "Portfolio";
	r3.style.animation = "none";
	aL.style.animation = "none";
	r.style.display = "none";
	r2.style.display = "none";
	r3.style.display = "block";
	setTimeout(function() {
		r3.style.animation = "slideInRight 2s ease-in-out forwards";
		aL.style.animation = "slideInLeft 2s ease-in-out forwards";
	}, 200);
	arrowButton2.style.display = "block";
}


pO.addEventListener('click', viewPortfolio);
pO2.addEventListener('click', viewPortfolio);
pButton.addEventListener('click', viewPortfolio);

// About option pressed
const aO = document.querySelector('#abtOption')
const aO2 = document.querySelector('#abtOption2')

function clickarrow() {
	arrowButton.click();
}

aO.addEventListener('click', clickarrow);
aO2.addEventListener('click', clickarrow);


// Toggle chatbox
const chatboxToggle = document.querySelector('.chatbox')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
});


// About transition
const arrow = document.querySelector('.arrow');
const abouth1 = document.querySelector("#about");
const aR = document.querySelector('#aboutRight')
const aL = document.querySelector('#aboutLeft')

arrow.addEventListener('click', function() {
	document.querySelector('.AboutContainer').style.filter = "none";
	abouth1.style.animation = "";
	aR.style.animation = "";
	aL.style.animation = "";
	setTimeout(function() {
		abouth1.style.animation = "slideInAbout 600ms";
		aR.style.animation = "slideInRight 2s ease-in-out forwards";
		aL.style.animation = "slideInLeft 2s ease-in-out forwards";
		}, 200);
	setTimeout(function() {
		document.getElementById("a1").click();
	}, 100);
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
	const outline = window.getComputedStyle(a1).getPropertyValue("outline");
	checkOutlined();
	if (!(outline === "rgb(128, 128, 128) solid 1px")) {
		a1.style.outline = "rgb(128, 128, 128) solid 1px";
		a2.style.outline = "none";
		a3.style.outline = "none";
	}
	abouth1.innerHTML = "About";

	if (outlined === "a2"){
		console.log("A2 -> A1")
		r2.style.animation = "slideOutBottom 1s ease-in-out forwards";  
		setTimeout(function() {
			r2.style.display = "none";
			r.style.display = "block";
			r.style.animation = "slideInTop 1s ease-in-out forwards";
		},800);
	} else if (outlined === "a3"){
		console.log("A3 -> A1")
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

arrowButton2.addEventListener('click', function(){
	const contactHead = document.querySelector('#contactHead')
	const contactLearn = document.querySelector('#contactLearn')
	const contactStill = document.querySelector('#contactStill')
	const contactForm = document.querySelector('#contactForm')
	const abtContainer = document.querySelector('.AboutContainer')
	console.log(abtContainer.style.filter)


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

// For contact Form Submission
const form = document.querySelector('#contactFormSubmission');
console.log(form)

form.addEventListener('submit', (event) => {
	console.log("SUBMITTED")
	event.preventDefault();
	
	const email = document.querySelector('.email').value;
	const topic = document.querySelector('.topic:checked').value;
	const textArea = document.querySelector('.textArea').value;
	
	const a = new XMLHttpRequest();
	a.open('POST', 'https://jkorpela.fi/cgi-bin/echo.cg', true);
	a.setRequestHeader('Content-Type', 'application/json');
	a.send(JSON.stringify({ email, topic, textArea }));
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
