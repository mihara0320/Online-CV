import {NavBar, Container} from './elements'

const Controller = () => {
    let el = Object;

    Object.assign(el, {
        main: null,
        navBar: null,
        container: null,
        init: () => {
            el.main = $("#main")
            el.main.addClass("col")
            el.main.css("background", "rgba(200, 200, 200, 0.6)")

            el.navBar = NavBar();
            el.navBar.init(el.main)

            el.container = Container();
            el.container.init(el.main)

            el.initBtn();
        },
        initBtn: () => {
            $("#category_General_button").click(() => {
                console.log("General Clicked");
                if(el.container.isShowing){
                    el.container.general.cleanPage()
                    el.container.isShowing = false
                } else {
                    TweenMax.delayedCall(0.5, () => {
                        el.container.general.showPage()
                        el.container.isShowing = true
                    })
                }
            })
        },
        clean: (div) => {
            div.html('')
        }
    })
    return el
}

export {Controller}
