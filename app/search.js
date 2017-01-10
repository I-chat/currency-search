var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function QueryService()
{


  var url = "https://openexchangerates.org/api/latest.json?app_id=7011cbb799504a7391af935ef01020ae";

 
  var guest = new XMLHttpRequest();
  guest.open("GET", url, false);
  guest.setRequestHeader("Content-Type", "text/plain");
  guest.send();
  var state = guest.status
  switch(state) {
  	case 200:
  	  console.log("Current currency exchange rates are:\n" + guest.responseText);
  	  break;
  	default:
  	  console.log("The request didn't succeed!\n The response was: " + guest.state + " " + guest.statusText)
  }
};

QueryService()