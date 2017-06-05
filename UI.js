const blessed = require('blessed');
const contrib = require('blessed-contrib');
const screen = blessed.screen();
const logic = require('./logic');
const config = require('./config');

var UI = {};

UI.start = function() {
    screen.title = 'GuitarFlash.j';

    // Create a box perfectly centered horizontally and vertically. 
    var box = blessed.box({
        top: 'center',
        left: 'center',
        width: '70%',
        height: '50%',
        content: 'Click on the box to start the colors setup.',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'magenta',
            border: {
                fg: '#f0f0f0'
            }
        }
    });

    // Append our box to the screen. 
    screen.append(box);

    // If our box is clicked, change the content. 
    box.on('click', function(data) {

    });

    // Quit on Escape, q, or Control-C. 
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
        return process.exit(0);
    });

    // Focus our element. 
    box.focus();

    // Render the screen. 
    screen.render();
}


module.exports = UI;