import {eventEmitter} from '../../Controller'

const General = () => {
    let el = document.createElement('div');
    el.id = "general"
    el.className = "col"

    Object.assign(el, {
        firstTime: true,
        up: null,
        down: null,
        myPhoto: null,
        infoContents: [],
        init: (container) => {
            container.append(el)

            let self = $("#"+el.id)
            self.css("width", "100%")
            self.css("height", "100%")

            let photo = document.createElement('div');
            photo.id = "photo"
            photo.className = "row"
            self.append(photo)

            let info = document.createElement('div');
            info.id = "generalInfo"
            info.className = "row"
            self.append(info)

            if(el.firstTime){
                el.up = $("#"+photo.id)
                el.up.css("width", "100%")
                el.up.css("height", "30%")

                el.down = $("#"+info.id)
                el.down.css("width", "100%")
                el.down.css("height", "70%")

                el.initMyPhoto()
                el.initInfo()
                el.firstTime = false
            }

            el.showPage()
        },
        initMyPhoto: () => {
            let pictrue = document.createElement("img")
            pictrue.className = "picture"
            pictrue.src = "../../assets/me.jpg"
            el.up.append(pictrue)
            el.myPhoto = $(".picture")
            el.myPhoto.css("opacity", "0")
        },
        initInfo: () => {
            el.down.css("width", "80%")
            el.down.css("height", "60%")
            // el.down.css("background", "rgba(200, 200, 200, 0.7)")
            let contents = {
                name: document.createElement("div"),
                address: document.createElement("div"),
                tel: document.createElement("div"),
                email: document.createElement("div"),
                nationality: document.createElement("div"),
                birthday: document.createElement("div"),
                gender: document.createElement("div"),
                personality: document.createElement("div"),
            }

            for (let key in contents) {
                let object = contents[key]
                object.id = key + "_id"
                el.down.append(object)
                let div = $("#" + object.id)
                div.css("font-size", "2em")
                div.css("position", "absolute")
                div.css("font-weight", "bold")
                div.css("opacity", "0")
                switch (key) {
                    case "name":
                        div.css("top", "44%")
                        div.html("Masaki Ihara"); break;
                    case "address":
                        div.css("top", "49%")
                        div.html("Tulika 4a, Tallinn"); break;
                    case "tel":
                        div.css("top", "54%")
                        div.html("+372 5698 2522"); break;
                    case "email":
                        div.css("top", "59%")
                        div.html("masaki0320@me.com"); break;
                    case "nationality":
                        div.css("top", "68%")
                        div.html("Japanese"); break;
                    case "birthday":
                        div.css("top", "73%")
                        div.html("20.03.1994"); break;
                    case "gender":
                        div.css("top", "78%")
                        div.html("Male"); break;
                    case "personality":
                        div.css("top", "88%")
                        div.html("PERSONALITY: Punctual, Ambitious, Flexible, Honest, and Responsible."); break;
                }
                el.infoContents.push(div)
            }
        },
        showPage: () => {
            eventEmitter.emit("Tween Started")
            let showTween = new TimelineMax({onComplete: ()=>{ eventEmitter.emit("Tween Completed") }})
            let counter = 0
            showTween.to(el.myPhoto, 0.3, {opacity: 1})
            for (var i = 0; i < el.infoContents.length; i++) {
                el.infoContents[i].css("opacity", "1")
                if(counter%2==0){
                    showTween.fromTo(el.infoContents[i], 0.08, {opacity : 0, x: + 100}, {opacity : 1, x: 0})
                }else{
                    showTween.fromTo(el.infoContents[i], 0.08, {opacity : 0, x: - 100}, {opacity : 1, x: 0})
                }
                counter++
            }
            showTween.play();
        },
        cleanPage:() => {
            eventEmitter.emit("Tween Started")
            let cleanTween = new TimelineMax({onComplete: ()=>{
                $("#container").html("")
                eventEmitter.emit("Tween Completed")
             }})
            let counter = 0
            cleanTween.to(el.myPhoto, 0.2, {opacity: 0})
            for (var i = 0; i < el.infoContents.length; i++) {
                if(counter%2==0 ){
                    cleanTween.to(el.infoContents[i], 0.05, {opacity : 0, x: - 100})
                }else{
                    cleanTween.to(el.infoContents[i], 0.05, {opacity : 0, x: + 100},)
                }
                counter++
            }

            cleanTween.play();
        }
    })

    return el
}

export {General}
