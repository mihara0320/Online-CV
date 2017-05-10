import {General, Experience, Education, Skills} from './Elements'
var $ = require('jQuery');
var GreenSock = require('gsap');

const OPTIONS = {
    INITIAL: "initInfo",
    GENERAL: "general",
    EXPERIENCE: "experience",
    EDUCATION: "education",
    SKILLS: "skills",
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
            el.showInitInfo()
        },
        showInitInfo: () =>{
            console.log('%c Show InitInfo ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.INITIAL
            let div = document.createElement('div');
            div.id = "initInfo"
            $("#"+el.id).append(div)
            let initInfo = $("#"+div.id)
            initInfo.html("Click on any categories!")
            initInfo.css("font-size", "2em")

            let tween = new TimelineMax({repeat: 100})
            tween.to(initInfo, 2, {opacity : 0})
            tween.to(initInfo, 2, {opacity : 1})
            tween.play();
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
        showEducation: () => {
            console.log('%c Show Education ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.EDUCATION
            el.education = Education()
            el.education.init($("#container"))
        },
        showSkills: () => {
            console.log('%c Show Skills ', 'background: #777; color: #bada55');
            el.currentPage = OPTIONS.SKILLS
            el.skills = Skills()
            el.skills.init($("#container"))
        },
        clean: () => {

            switch (el.currentPage) {
                case OPTIONS.INITIAL:

                    $("#container").html("")
                    break;
                case OPTIONS.GENERAL:
                    el.general.cleanPage()
                    break;
                case OPTIONS.EXPERIENCE:
                    el.experience.cleanPage()
                    break;
                case OPTIONS.EDUCATION:
                    el.education.cleanPage()
                    break;
                case OPTIONS.SKILLS:
                    el.skills.cleanPage()
                    break;
            }
        }
    })

    return el
}

export {Container, OPTIONS}
