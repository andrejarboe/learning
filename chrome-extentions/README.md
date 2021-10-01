# Chrome extention notes

## needs
- manifest

## list all tables

`
Tables: var i = 1; [].forEach.call(document.querySelectorAll('table'), function(x) { console.log(i++, x); });
Lists: var i = 1; [].forEach.call(document.querySelectorAll('ul,ol'), function(x) { console.log(i++, x); });
`
