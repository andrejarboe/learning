// call anonymous function
(function () {
  console.log('Bookmarklet Starting...');
  let par = document.getElementsByTagName('p');
  for (let i = 0; i < par.length; i++) {
    par[1].innerHTML = 'Andre is Da Man!';
  }
});

// // call anonymous function
(function () {
  // make a an element so we can add it to the web page
  let script = document.createElement('script');
  // change script source
  script.src = 'app.js';
  // add script to file
  document.body.appendChild(script);
})();
// call anonymous function
// make one line and add to index: 
// (function () {let script = document.createElement('script');script.src = 'app.js';document.body.appendChild(script);})();
