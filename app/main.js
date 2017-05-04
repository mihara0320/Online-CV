// import {controller} from './js/controller/controller'
import {NavBar} from './js/elements/NavBar'
import {Personal} from './js/elements/Personal'

let body = $("body");


$(window).on('load', () => {
    init()
});


let init = () => {
    body.css("background-color", "yellow")
    let navBar = NavBar()
    body.append(navBar)

    let personal = Personal()
    personal.init()

    navBar.append(personal)
}
