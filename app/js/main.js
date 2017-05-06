
import {Controller} from './Controller'

$(window).on('load', () => {
    console.log('%c Page loaded! ', 'background: #222; color: #bada55');
    let controller = Controller();
    controller.init();
});
