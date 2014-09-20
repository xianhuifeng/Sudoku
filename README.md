SudoKu
======

> SudoKu is one of the most popular puzzle games of all time. The goal of SudoKu is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, SudoKu is also an excellent brain game. If you play SudoKu daily, you will soon start to see improvements in your concentration and overall brain power.

## Table of Contents

1. [Usage](#usage)
2. [Development](#development)
3. [Installing Dependencies](#installing-dependencies)
4. [Reasoning behind technical choices](#Reasoning behind technical choices)
5. [Changes will be implemented in future](#Changes will be implemented)
6. [Author](#Author)

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

## Reasoning behind technical choices
- jQuery: jQuery is a fast, small and feature-rich JS library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. 
- Jade: Jade is a templating language for html, it makes writing html less verbose and easier. It supports template inheritance and one can compile templates into re-usable functions.
- express.js: express.js is a web application framework for node.It provides a thin layer of features fundamental to web application. The use of express APIs are more user-friendly and quick. 

## Changes will be implemented
1. Make more than one board and implement solution method.
2. Use Sass as Style Sheets
3. Modify when user input is invalid, the game board should show the hint(why it is invalid, which cell has the same data which current cell).

## Author
Xianhui Feng 

