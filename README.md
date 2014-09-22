SudoKu
======

> SudoKu is one of the most popular puzzle games of all time. The goal of SudoKu is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, SudoKu is also an excellent brain game. If you play SudoKu daily, you will soon start to see improvements in your concentration and overall brain power.

## Table of Contents

1. [Usage](#usage)
2. [Development](#development)
3. [Installing Dependencies](#installing-dependencies)
3. [Architecture](#architecture)
4. [Reasoning behind technical choices](#reasoning-behind-technical-choices)
5. [Changes will be implemented in future](#changes-will-be-implemented-in-future)
6. [Author](#author)

## Usage

> To use SudoKu, please follow these three steps

1. Clone this repo into your local.
2. Follow [Installing dependencies](#Installing Dependencies)
3. Open your favorate browser and go to localhost:3000

## Development
- vanilla JS
- Jade
- CSS3
- jQuery 
- mocha/chai
- gulp
- express.js (localhost:3000)

## Installing Dependencies

First you need to have node.js installed in your computer.
Then From within the root directory:

```sh
npm install -g bower
npm install
bower install
node server.js
```

##Architecture
- Singleton: Used singleton data structure for game board, generate one board at one time. (Notice that I would have to do more work to make some function public when testing, I might try other ways when design data structure if have more time.)
- Game board: Game board is created with DOM element. Each input DOM element stored in one value of $cellMatrix:

```javascript
{
	0: {
			0: {input element},
			1: {input element},
			2: {input element},
			......
			8: {input element}
		},
	1: {
			0: {input element},
			1: {input element},
			2: {input element},
			......
			8: {input element}
		},
	.....
	8: {
			0: {input element},
			1: {input element},
			2: {input element},
			......
			8: {input element}
	}
}
```
Also the $sectMatrix stores each sections using section Key(Math.floor(cellIndex/3)):

```javascript
{
	'00': [
			$cellMatrix[0][0],
			$cellMatric[0][1],
			$cellMatrix[0][2],
			$cellMatrix[1][0],
			$cellMatrix[1][1],
			...
			$cellMatrix[2][2]
			]
	'01': [
			$cellMatrix[0][3],
			$cellMatrix[0][4],
			$cellMatrix[0][5],
			$cellMatrix[1][3],
			...
			$cellMatrix[2][5]
			]
	...
	'22': [
			$cellMatrix[6][6],
			$cellMatrix[6][7],
			$cellMatrix[6][8],
			...
			$cellMatrix[8][8]
			]
}
``` 
## Reasoning behind technical choices
- jQuery: It almost does everything in my main.js. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. 
- Jade: Jade is a templating language for html, it makes writing html less verbose and easier. It supports template inheritance and one can compile templates into re-usable functions.
- gulp: For minify use.
- CSS3: Will be replaced by Sass if have more time, but still super powerful for style and animation.
- mocha/chai: Used for unit testing. 
- express.js: Used as localhost. For testing layout at http://www.responsinator.com.

## Changes will be implemented in future
1. Make more than one board and implement solution method.
2. Use Sass as Style Sheets.
3. Show winner animation.
4. Make more unit test.

## Author
Xianhui Feng 
