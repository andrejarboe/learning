# Sass notes

npm i sass 0r npm i -g sass

mkdir scss

mkdir css

cd scss

touch main.scss
touch _variables.scss
touch _header.scss
touch _content.scss
touch _footer.scss
touch _reset.scss

 add to main.scss 
@import "reset";
@import "variables";
@import "header";
@import "content";
@import "footer";


cd ..

sass --watch scss:css