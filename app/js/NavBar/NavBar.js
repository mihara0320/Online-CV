var GreenSock = require('gsap');

const NavBar = () => {

    let el = document.createElement('div');
    el.id = "navBar"
    el.className = "row"

    let categories = ["General", "Experience", "Education", "Skills"]

    Object.assign(el, {
        options: [null, null, null, null],
        init: (container) => {
            container.append(el)
            let self = $("#"+el.id)

            for (var i = 0; i < categories.length; i++) {
                let category =  document.createElement('div');
                category.id = "category_" + categories[i]
                category.className = "col"
                self.append(category)

                let buffer = $("#" + category.id)
                buffer.css("width", "20vw").css("height", "10vh")

                let button = document.createElement('button');
                button.id = category.id + "_button"
                button.className = "button"
                buffer.append(button)

                let btn = $("#"+button.id)
                btn.html(categories[i])
                btn.css("opacity", "0")
                    .css("width", "100%")
                    .css("height", "100%")
                el.options[i] = btn
            }
            el.showOptions();
        },
        showOptions: () => {
            for (var i = 0; i < el.options.length; i++) {
                TweenMax.to(el.options[i], 3, {opacity: 1})
            }
        },
    })

    return el
}

export {NavBar}
