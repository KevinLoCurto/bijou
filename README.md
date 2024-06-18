# s'Bijou!!
usually there would be some sort of documentation explaining the code in here but i decided to just do that inside of the code itself. go take a look if you're interested! 

## current refactored main code (version 3.0+)

in the folder labeled "scripts" you can find all the current code that i'm working with. all the commented out areas have information about the code, the logic behind it, how it works and experiences i might have made with it. 

## old code (version 2.4)

in the folder "old code" you can take a look at the abomination that was my old game code. you'll quickly realize why the refactoring was absolutely necessary. collisions.js, index.html and style.css are the three documents that are missing, that's because nothing really changed there so it'd be kinda unnecessary.

## refactoring of the old code in update 3.0

the past few months i've been refactoring the entirety of the game's code and now i'm finally done with that. in each of the different sections i'll be noting down in comments how many lines of code were saved. i'll also note it down in a more coherent fashion below. 

# stats

note: comments are excluded in this calculation.

## version 2.4

- main.js: 3'225 lines at 109 KB 
- classes.js: 77 lines at 1.84 KB
- imageadder.js: 289 lines at 12.4 KB
- utils.js: 101 lines at 3.03 KB
- audio.js: 146 lines at 3.5 KB
- collisions.js: 165 lines at 43.3 KB
- index.html: 549 lines at 19.9 KB
- style.css: 248 lines at 4.32 KB

- total lines of javascript code: 4'003
- total data amount from javascript code: 173.07 KB

- total lines of code: exactly 4'800
- total data amount (exclusively counting code): 197.29 KB

## version 3.0

- main.js: 899 lines at 50.5 KB
- classes.js: 54 lines at 2.14 KB
- utils.js: 52 lines at 4.19 KB
- player.js: 88 lines at 1.85 KB
- environment.js: 138 lines at 4.53 KB
- interactables.js: 146 lines at 3.62 KB
- audio.js: 124 lines at 3.89 KB
- collisions.js: 165 lines at 43.4 KB
- index.html: 566 lines at 21 KB
- style.css: 249 lines at 4.33 KB

- total lines of javascript code: 1'666
- total data amount from javascript code: 114.12 KB

- total lines of code: 2'481
- total data amount: 139.45 KB

# refactoring results

- total lines of code saved: 2'337
  
if you add up the following numbers, the result will be higher than 2'337. this is because i of course also added a lot of additional code. that only accounts for 300 to 400 lines of code though.

- completely got rid of imageadder.js, 289 lines saved
- player character creation: 90 lines saved
- NPC creation: 32 lines saved
- creation of decorative objects: 63 lines saved
- creation of interactable objects: 241 lines saved
- creation of trash-related objects: 101 lines saved
- trash logic: 37 lines saved
- object grouping, image rendering and assigning of attributes: 261 lines saved
- player selection image logic: 59 lines saved
- player end audio, image drawing and stat assigning: 86 lines saved
- distance calculation: 27 lines saved
- distance calculation functions: 48 lines saved
- player movement: 794 lines saved
- interaction logic: 488 lines saved
- removal of Interactable class: 23 lines saved
- audio storage: 22 lines saved
- plus remaining savings from a wide range of various random sources










