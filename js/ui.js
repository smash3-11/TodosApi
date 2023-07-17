const currentDate = moment().format('DD MMM')
console.log(currentDate)

export function createBlock(arr, place, title) {

    let limit = 3

    function getBtnText() {
        return arr.length - limit > 12 ? "Показать ещё 12" : `Показать ещё ${arr.length - limit}`
    }
    let container = document.createElement('div')
    let title_view = document.createElement('h2')
    let box = document.createElement('div')
    let paginate = document.createElement('div')
    let left = document.createElement('div')
    let show_more_btn = document.createElement('button')

    container.classList.add('c')
    title_view.classList.add('title')
    box.classList.add('box')
    paginate.classList.add('paginate')
    left.classList.add('left')
    show_more_btn.classList.add('show_more')

    title_view.innerHTML = title
    show_more_btn.innerHTML = getBtnText()

    container.append(title_view, box, paginate)
    paginate.append(left)
    left.append(show_more_btn)

    place.append(container)

    reload(arr.slice(0, limit), box)

    if((arr.length - limit) == 0){
        show_more_btn.innerHTML = ' '
    }
    show_more_btn.onclick = () => {


        if (show_more_btn.innerText === 'скрыть') {
            limit = 3
            reload(arr.slice(0, limit), box)
            show_more_btn.innerHTML = getBtnText()
            return
        }

        if ((arr.length - limit) > 12) {
            reload(arr.slice(0, limit + 12), box)
            limit += 12
            show_more_btn.innerHTML = getBtnText()
        } else {
            reload(arr, box)
            show_more_btn.innerHTML = "скрыть"
        }
    }
}


function reload(arr, box) {
    box.innerHTML = ""

    for (let item of arr) {
        const cutText = item.title.split(" ").slice(0, 3).join(" ")
        const cutDesc = item.description.split(" ").slice(0, 8).join(" ")

        let div = document.createElement("div")
        let ch_title = document.createElement("div")
        let cheked = document.createElement("div")
        let h3 = document.createElement("h3")
        let task = document.createElement("div")
        let p_dscr = document.createElement("p")
        let when = document.createElement("p")

        div.classList.add("item")
        ch_title.classList.add("check_title")
        cheked.classList.add("checkbox")
        task.classList.add("task")
        p_dscr.classList.add("description")
        when.classList.add("when")

        h3.innerHTML = cutText
        p_dscr.innerHTML = cutDesc

        if (item.left === 0) {
            when.innerHTML = "Today"
        } else if (item.left === 1) {
            when.innerHTML = "Tommorow"
        } else {
            const futureDate = moment(currentDate).add(item.left, 'days')
            const formattedDate = futureDate.format('DD MMM')
            when.innerHTML = formattedDate
        }
        ch_title.onclick = () => {

            


            cheked.classList.toggle('checkbox_selected')
        }

        box.append(div)
        div.append(ch_title, task)
        ch_title.append(cheked, h3)
        task.append(p_dscr, when)
    }
}



