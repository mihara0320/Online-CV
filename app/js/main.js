// import {controller} from './js/controller/controller'
import {NavBar, Container, Personal} from './elements'

$(window).on('load', () => {
    console.log('%c Page loaded! ', 'background: #222; color: #bada55');
    init();
});

let init = () => {
    let main = $("#main")
    main.addClass("col")
    let navBar = NavBar();
    main.append(navBar);
    navBar.init($("#navBar"))

    let container = Container();
    main.append(container)
}
