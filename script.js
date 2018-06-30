// once window is ready
function windowReady() {
	// 100 ms of interval for the setInterval()
	const interval = 200;

	// start it up
	init();

	function init() {
		// start animation
		startAnimations();
	}

	function startAnimations() {
		animate('kid', 489);
		animate('ghost', 58);
		animate('ghost1', 58);
		animate('ghost2', 58);
		animate('ghost3', 58);
	}

	function animate(elementId, widthStart) {
		// start position for the image slicer
		var movement = widthStart;
		var position = movement;

		setInterval(() => {
			document.getElementById(elementId).style.backgroundPosition = `-${position}px 0`;

			// we use the ES6 template literal to insert the variable "position"
			if (position < 2874) {
				position = position + movement;
			} else {
				// we increment the position by 256 each time
				position = movement;
			}

			// reset the position to 256px, once position exceeds 1536px
		}, interval);
	}

	// lets add the keyboard controls now
	document.onkeydown = function(e) {
		// get key pressed
		var key = e.which;

		// we will add another clause to prevent reverse gear
		if(key == "37" && d != "right") {
			d = "left";
		} else if(key == "38" && d != "down") {
			d = "up";
		} else if(key == "39" && d != "left") {
			d = "right";
		} else if(key == "40" && d != "up") {
			d = "down";
		}
	}

}

// on window ready checker
function onReady(fn) {
	// are we still waiting?
	if (document.readyState != 'loading'){
		// retry
		fn();
	} else {
		// dom content has loaded
		document.addEventListener('DOMContentLoaded', fn);
	}
}

// check are we ready?
onReady(windowReady);
