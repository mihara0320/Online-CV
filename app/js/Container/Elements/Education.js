import {eventEmitter} from '../../Controller'

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
            let data_0 = document.createElement("div")
            data_0.id = "education_data_0"
            data_0.className = "colChild"
            self.append(data_0)

            // let data_1 = document.createElement("div")
            // data_1.id = "education_data_1"
            // data_1.className = "colChild"
            // self.append(data_1)

            // < 2
            for (let i = 0; i < 1; i++) {
                let temp = TEMPLATE()
                for (let key in temp) {
                    let info = temp[key]
                    info.id = "data_"+ i +"_"+ key
                    $("#education_data_" + i).append(info)
                    $("#education_data_" + i).css("height", "30%")
                                                .css("width", "80%")
                                                .css("font-size", "1em")
                                                .css("font-weight", "bold")
                                                .css("margin", "0")


                    let obj = $("#"+info.id)
                    obj.css("width", "100%")
                    var h3 = document.createElement("H3");
                    let text = null;
                    if (i === 0) {
                        switch (key) {
                            case "period": text = document.createTextNode("August 2016 - Present"); break;
                            case "school": text = document.createTextNode("Estonian IT College"); break;
                            case "major": text = document.createTextNode("Cybersecurity Engineering"); break;
                        }
                        el.content_0.push(obj)
                    } else if (i === 1) {
                        switch (key) {
                            case "period": text = document.createTextNode("November 2016 - Present"); break;
                            case "school": text = document.createTextNode("Junior Front-end Developer"); break;
                            case "major": text = document.createTextNode("Working at Ganalogics"); break;
                        }
                        el.content_1.push(obj)
                    }
                    text.id = "text_"+key+"_"+i
                    h3.appendChild(text);
                    obj.append(h3);
                    $("H3").css("font-size", "2em").css("font-weight", "bold").css("text-align", "center").css("margin", "0")
                }
            }
        },
        showPage: () => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{ eventEmitter.emit("Tween Completed") }})
            for (var i = 0; i < el.content_0.length; i++) {
                let text = el.content_0[i]
                tween.fromTo(text, 0.2, {opacity : 0}, {opacity : 1})
            }
            // for (var i = 0; i < el.content_1.length; i++) {
            //     let text = el.content_1[i]
            //     tween.fromTo(text, 0.1, {opacity : 0, x: -100}, {opacity : 1, x: 0})
            // }
            tween.play();
        },
        cleanPage:() => {
            eventEmitter.emit("Tween Started")
            let tween = new TimelineMax({onComplete: ()=>{
                $("#container").html("")
                eventEmitter.emit("Tween Completed")
            }})
            let count
            for (var i = 0; i < el.content_0.length; i++) {
                let text = el.content_0[i]
                if(count % 2 == 0){
                    tween.to(text, 0.05, {opacity : 0, x: + 100})
                }else{
                    tween.to(text, 0.05, {opacity : 0, x: - 100})
                }
                count++
            }
            // for (var i = 0; i < el.content_1.length; i++) {
            //     let text = el.content_1[i]
            //     tween.to(text, 0.05, {opacity : 0, x: -100})
            // }
            tween.play();
        }
    })

    return el
}

export {Education}
