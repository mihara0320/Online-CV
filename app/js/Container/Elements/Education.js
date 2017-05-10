import {eventEmitter} from '../../Controller'
var GreenSock = require('gsap');

const TEMPLATE = () => {
    let el = {
        period: document.createElement("div"),
        school: document.createElement("div"),
        major: document.createElement("div"),
    }
    return el
}

const Education = () => {
    let el = document.createElement('div');
    el.id = "education"
    el.className = "col"

    Object.assign(el, {
        content : [],
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
            let data = document.createElement("div")
            data.id = "education_data"
            data.className = "colChild"
            self.append(data)

            let temp = TEMPLATE()
            for (let key in temp) {
                let info = temp[key]
                info.id = "data_"+  key
                $("#education_data").append(info)
                $("#education_data" ).css("height", "30%")
                                        .css("width", "80%")
                                        .css("font-size", "1em")
                                        .css("font-weight", "bold")
                                        .css("margin", "0")


                let obj = $("#"+info.id)
                obj.css("width", "100%")
                var h3 = document.createElement("H3");
                let text = null;

                switch (key) {
                    case "period": text = document.createTextNode("August 2016 - Present"); break;
                    case "school": text = document.createTextNode("Estonian IT College"); break;
                    case "major": text = document.createTextNode("Cybersecurity Engineering"); break;
                }
                el.content.push(obj)

                text.id = "text_"+key
                h3.appendChild(text);
                obj.append(h3);
                $("H3").css("font-size", "2em").css("font-weight", "bold").css("text-align", "center").css("margin", "0")
            }

        },
        showPage: () => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{ eventEmitter.emit("Tween Completed") }})
            for (var i = 0; i < el.content.length; i++) {
                let text = el.content[i]
                tween.fromTo(text, 0.2, {opacity : 0}, {opacity : 1})
            }
            tween.play();
        },
        cleanPage:() => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{
                $("#container").html("")
                eventEmitter.emit("Tween Completed")
            }})
            let count
            for (var i = 0; i < el.content.length; i++) {
                let text = el.content[i]
                tween.to(text, 0.1, {opacity : 0})
                count++
            }
            tween.play();
        }
    })

    return el
}

export {Education}
