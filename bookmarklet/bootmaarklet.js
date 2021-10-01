(function () {
    // make a an element so we can add it to the web page
    let script = document.createElement('script');
    // change script source
    script.src = 'app.js';
    // add script to file
    document.body.appendChild(script);
  })();