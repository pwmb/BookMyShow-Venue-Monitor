function show1(title, msg) {
  new Notification(title, {
    body: msg
  });
}
let interval = 0
monitor = setInterval(function() {
  interval++
  if (localStorage.isActivated && localStorage.url && localStorage.find && interval >= localStorage.frequency) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", localStorage.url, false);
    xhr.send();
    const result = xhr.responseText;

    const domParser = new DOMParser()
    const domElem = domParser.parseFromString(result, "text/html");
    const childElem = domElem.getElementById("venuelist").children;
    
    if(localStorage.latest_count != childElem.length){
      //something has changed or first time
      const st = "Older: " + localStorage.latest_count+" Now: " + childElem.length
      localStorage.latest_count = childElem.length;
      show1("Something new is added", "You might want to check whats added that you might not be tracking but may be intrested")
    }

    for (let index = 0; index < childElem.length; index++) {
      let movieName = childElem[0].dataset.name.toLowerCase()
      let queryString = localStorage.find.toLowerCase()
      let matches = movieName.match(queryString)
      if (matches) {
        matches.forEach(match => {
          show1("WOW! Its available now", `${match} is now showing your movie`)
        });
      }
    }
    interval = 0
  }
}, 60000);
