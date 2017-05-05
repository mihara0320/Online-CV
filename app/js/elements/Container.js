const Container = () => {
    let el = document.createElement('div');
    el.id = "container"
    el.className = "row"

    Object.assign(el, {
        init: () => {
        }
    })

    return el
}

export {Container}
