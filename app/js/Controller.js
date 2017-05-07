import {NavBar} from './NavBar'
import {Container, OPTIONS} from './Container'

var EventEmitter = require('eventemitter3');
const eventEmitter = new EventEmitter()

const Controller = () => {
    let el = EventEmitter;

    Object.assign(el, {
        main: null,
        navBar: null,
        container: null,
        tweenPlaying: false,

        init: () => {
            el.main = $("#main")
            el.main.addClass("col")
            el.main.css("background", "rgba(200, 200, 200, 0.6)")

            el.navBar = NavBar();
            el.navBar.init(el.main)

            el.container = Container();
            el.container.init(el.main)

            el.initBtn();

            eventEmitter.on("Tween Started", ()=>{ el.tweenPlaying = true})
            eventEmitter.on("Tween Completed", ()=>{ el.tweenPlaying = false})
        },
        initBtn: () => {
            $("#category_General_button").click(() => {
                if(el.container.currentPage === null){
                    el.container.showGeneral()
                } else if (el.container.currentPage === OPTIONS.GENERAL || el.tweenPlaying){
                    return
                } else{
                    el.container.clean()
                    eventEmitter.once("Tween Completed", ()=>{
                        el.container.showGeneral()
                    })
                }
            })
            $("#category_Experience_button").click(() => {
                if(el.container.currentPage === null){
                    el.container.showExperience()
                } else if (el.container.currentPage === OPTIONS.EXPERIENCE || el.tweenPlaying){
                    return
                } else{
                    el.container.clean()
                    eventEmitter.once("Tween Completed", ()=>{
                        el.container.showExperience()
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

export {Controller, eventEmitter}
