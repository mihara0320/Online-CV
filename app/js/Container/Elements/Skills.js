import {eventEmitter} from '../../Controller'
var $ = require('jQuery');
var GreenSock = require('gsap');

const TEMPLATE = () => {
    let el = {
        s0: document.createElement("div"),
        s1: document.createElement("div"),
        s2: document.createElement("div"),
        s3: document.createElement("div"),
        s4: document.createElement("div"),
        s5: document.createElement("div"),
        s6: document.createElement("div"),
    }
    return el
}
const TEMPLATE_INFO = () => {
    let el = {
        s0_info: document.createElement("div"),
        s1_info: document.createElement("div"),
        s2_info: document.createElement("div"),
        s3_info: document.createElement("div"),
        s4_info: document.createElement("div"),
        s5_info: document.createElement("div"),
        s6_info: document.createElement("div"),
    }
    return el
}

const Skills = () => {
    let el = document.createElement('div');
    el.id = "skills"
    el.className = "col"

    Object.assign(el, {
        content_0 : [],
        content_1 : [],
        init: (container) => {
            container.append(el)
            let self = $("#"+el.id)
            self.css("width", "100%")
            self.css("height", "100%")

            el.initInfo()
            el.showPage();
        },
        initInfo: () => {
            let self = $("#"+el.id)

            let bufferL = document.createElement("div")
            bufferL.className = "skillsBuffer"
            self.append(bufferL)

            let data_0 = document.createElement("div")
            data_0.id = "skills_data_0"
            data_0.className = "col skillsContent"
            self.append(data_0)

            let data_1 = document.createElement("div")
            data_1.id = "skills_data_1"
            data_1.className = "col skillsContent"
            self.append(data_1)

            let bufferR = document.createElement("div")
            bufferR.className = "skillsBuffer"
            bufferR.id = "skillsBufferR"
            self.append(bufferR)

            let temp = TEMPLATE()
            for (let key in temp) {
                let info = temp[key]
                info.id = "data_" + key
                let container = $("#skills_data_0")
                container.append(info)

                let obj = $("#"+info.id)
                obj.css("width", "100%")
                var h3 = document.createElement("H3");
                let text = null;
                switch (key) {
                    case "s0": text = document.createTextNode("Java"); break;
                    case "s1": text = document.createTextNode("Python"); break;
                    case "s2": text = document.createTextNode("PHP"); break;
                    case "s3": text = document.createTextNode("Javascript"); break;
                    case "s4": text = document.createTextNode("HTML & CSS"); break;
                    case "s5": text = document.createTextNode("SQL"); break;
                    case "s6": text = document.createTextNode("Source Code"); break;
                }
                text.id = "text_"+key
                el.content_0.push(obj)
                h3.appendChild(text);
                obj.append(h3);
            }

            let temp_info = TEMPLATE_INFO()
            for (let key in temp_info) {
                let info = temp_info[key]
                info.id = "data_" + key
                let container = $("#skills_data_1")
                container.append(info)

                let obj = $("#"+info.id)
                obj.css("width", "100%")
                var h3 = document.createElement("H3");
                let text = null;
                switch (key) {
                    case "s0_info": text = document.createTextNode("Basic++"); break;
                    case "s1_info": text = document.createTextNode("Basic++"); break;
                    case "s2_info": text = document.createTextNode("Basic"); break;
                    case "s3_info": text = document.createTextNode("Basic++"); break;
                    case "s4_info": text = document.createTextNode("Basic+"); break;
                    case "s5_info": text = document.createTextNode("Basic"); break;
                    case "s6_info":
                        text = document.createElement("a")
                        text.href = "https://github.com/mihara0320/Online-CV";
                        let message = document.createTextNode("Source Code Available Here");
                        text.appendChild(message)
                        break;
                }
                text.id = "text_"+key
                el.content_1.push(obj)
                h3.appendChild(text);
                obj.append(h3);
            }
            $("H3").css("font-size", "2em").css("font-weight", "bold").css("text-align", "center").css("margin", "0")

        },
        showPage: () => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{ eventEmitter.emit("Tween Completed") }})
            for (var i = 0; i < el.content_0.length; i++) {
                let text = el.content_0[i]
                tween.fromTo(text, 0.1, {scale : 0}, {scale : 1})
            }
            for (var i = 0; i < el.content_1.length; i++) {
                let text = el.content_1[i]
                tween.fromTo(text, 0.1, {scale : 0}, {scale : 1})
            }
            tween.play();
        },
        cleanPage:() => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{
                $("#container").html("")
                eventEmitter.emit("Tween Completed")
            }})
            for (var i = 0; i < el.content_0.length; i++) {
                let text = el.content_0[i]
                // tween.to(text, 0.05, {opacity : 0, x: + 100})
                tween.to(text, 0.1,{scale: 0})
            }
            for (var i = 0; i < el.content_1.length; i++) {
                let text = el.content_1[i]
                // tween.to(text, 0.05, {opacity : 0, x: -100})
                tween.to(text, 0.1, {scale:0})
            }
            tween.play();
        }
    })

    return el
}

export {Skills}
