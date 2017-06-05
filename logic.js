const config = require('./config');
const robot = require('robotjs');

module.exports = {
    scanScreen: function() {
        robot.setKeyboardDelay(10);

        const colors = config.colors;

        var gPixel = robot.getPixelColor(colors.green.x, colors.green.y);
        var rPixel = robot.getPixelColor(colors.red.x, colors.red.y);
        var bPixel = robot.getPixelColor(colors.blue.x, colors.blue.y);
        var yPixel = robot.getPixelColor(colors.yellow.x, colors.yellow.y);
        var oPixel = robot.getPixelColor(colors.orange.x, colors.orange.y);

        if (gPixel == '009800') {
            robot.keyTap('a');
        }

        if (rPixel == 'ff0000') {
            robot.keyTap('s');
        }

        if (yPixel == 'f4f402') {
            robot.keyTap('j');
        }

        if (bPixel == '0098ff') {
            robot.keyTap('k');
        }

        if (oPixel == 'ff6500') {
            robot.keyTap('l');
        }

    }
};