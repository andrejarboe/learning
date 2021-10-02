/*
    background loads when you launch chrome
    listens for events
    example
        when a user clicks a button 
        do this
*/

console.log('Background script!!!');

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
  console.log(tab);
}

