const aboutMe = {

    let init = () => {
        let el = $("#aboutMe")
        el.alpha = 0;
        el.append("About Me")
        el.css("font-size", "200%")
        TweenMax.to(el, 3, {alpha:1, onComplete: () => {
            console.log('done')
        }})
    }

}

export {aboutMe}
