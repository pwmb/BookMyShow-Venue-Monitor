window.addEventListener('load', function() {
  if(localStorage.isActivated){
    options.isActivated.checked = localStorage.isActivated;
  }
  if (localStorage.frequency) {
    options.frequency.value = localStorage.frequency;  
  }
  if (localStorage.url) {
    options.urlInp.value = localStorage.url;  
  }
  if (localStorage.find) {
    options.find.value = localStorage.find;  
  }
  options.isActivated.onchange = function() {
    localStorage.isActivated = options.isActivated.checked;
  };
  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };
  options.urlInp.onchange = function() {
    localStorage.url = options.urlInp.value;
  };
  options.find.onchange = function() {
    localStorage.find = options.find.value;
  };
});
