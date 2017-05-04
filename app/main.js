import {controller} from './js/controller/controller.js'

$(window).on('load', () => {
    console.log("Page loaded");
    TweenMax.delayedCall(1, () => {
        controller.init();
    })

});
