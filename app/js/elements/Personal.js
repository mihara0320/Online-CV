const Personal = () => {
    let el = Object;

    Object.assign(el, {
        nav: document.createElement('div'),
        body: document.createElement('div'),
        init: () => {

            el.nav.class = "nav"
            el.body.class = "body"
        }
    })

    return el
}

export {Personal}
