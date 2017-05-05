const NavBar = () => {

    let el = document.createElement('div');
    el.id = "navBar"
    el.className = "row"
    el.tabs = []

    let tabs = ["General", "Experience", "Education", "Skills"]

    Object.assign(el, {
        init: (navBar) => {
            for (var i = 0; i < tabs.length; i++) {
                let tab =  document.createElement('div');
                tab.id = tabs[i]
                tab.className = "col"
                navBar.append(tab)
                $("#"+tab.id).css("width", "20vw")
                $("#"+tab.id).css("height", "10vh")
                $("#"+tab.id).html(tab.id)

                el.tabs[i] = tab
            }
        },
    })

    return el
}

export {NavBar}
