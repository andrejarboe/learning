// content script does not run until the page has loaded 
console.log("Extension is ready...");

var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
  // elts[i].style['background-color'] = '#F0C';
}