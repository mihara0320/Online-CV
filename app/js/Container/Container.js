import {General, Experience} from './Elements'

const OPTIONS = {
    GENERAL: "general",
    EXPERIENCE: "experience"
}

const Container = () => {
    let el = document.createElement('div');
    el.id = "container"
    el.className = "row"

    Object.assign(el, {
        currentPage: null,
        general: null,
        experience: null,
        init: (container) => {
            container.append(el)
        },
        showGeneral: () =>{
            console.log('%c Show General ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.GENERAL
            el.general = General()
            el.general.init($("#container"))
        },
        showExperience: () => {
            console.log('%c Show Experience ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.EXPERIENCE
            el.experience = Experience()
            el.experience.init($("#container"))
        },
        clean: () => {
            switch (el.currentPage) {
                case OPTIONS.GENERAL:
                    el.general.cleanPage()
                    break;
                case OPTIONS.EXPERIENCE:
                    el.experience.cleanPage()
                    break;
                default:
            }
        }
    })

    return el
}

export {Container, OPTIONS}
