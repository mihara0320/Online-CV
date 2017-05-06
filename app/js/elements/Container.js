import {General} from './'

const Container = () => {
    let el = document.createElement('div');
    el.id = "container"
    el.className = "row"

    Object.assign(el, {
        isShowing: false,
        general: null,
        init: (container) => {
            container.append(el)
            el.general = General()
            el.general.init($("#container"))
        }
    })

    return el
}

export {Container}
