show()
let form = document.querySelector('#listss')
//To add todo
let add = document.querySelector('#add')
add.addEventListener("click", () => {
    let input = document.querySelector('#addtask')
    let taskvalue = input.value
    if (taskvalue.trim() != 0) {
        let localval = localStorage.getItem("localtask")
        if (localval == null) {
            tempObj = []
        }
        else {
            tempObj = JSON.parse(localval)
        }
        tempObj.push(taskvalue)
        localStorage.setItem("localtask", JSON.stringify(tempObj))
    }
    show()
})
function show() {
    let html = ''
    let tasks = document.querySelector('#tsks')
    let localval = localStorage.getItem("localtask")
    if (localval == null) {
        tempObj = []
    }
    else {
        tempObj = JSON.parse(localval)
    }
    tempObj.forEach((item, index) => {

        html += `<div class="taskss">
                
            <div class="alltasks">
            <input type="text" style="width:30px;" value="${index + 1}">
                <input type="text" value="${item}" class="task">
           <button id="edit" onclick="edittask(${index})">Edit</button>
                <button id="delete" onclick="deletetask(${index})">Delete</button>  
            </div>
            </div>`
        tasks.innerHTML = html
    });
}
//To edit Todo
function edittask(index) {
    let input = document.querySelector('#addtask')
    let saveind = document.querySelector('#saveind')
    let localval = localStorage.getItem("localtask")
    let tempObj = JSON.parse(localval)
    saveind.value = index
    input.value = tempObj[index]
    let ad = document.querySelector('#add')
    let save = document.querySelector('#save')
    ad.style.display = 'none';
    save.style.display = 'block';
}

let save = document.querySelector('#save')
save.addEventListener("click", () => {
    let input = document.querySelector('#addtask')
    let localval = localStorage.getItem("localtask")
    let tempObj = JSON.parse(localval)
    let saveindex = document.querySelector('#saveind').value
    tempObj[saveindex] = input.value
    localStorage.setItem("localtask", JSON.stringify(tempObj))
    show()
})
//To dlete one Todo
function deletetask(index) {
    let localval = localStorage.getItem("localtask")
    let tempObj = JSON.parse(localval)
    tempObj.splice(index, 1)
    localStorage.setItem("localtask", JSON.stringify(tempObj))
    show()
}
//To delete all Todos
let deleteall = document.querySelector('#dl')
deleteall.addEventListener("click", () => {
    let localval = localStorage.getItem("localtask")
    if (localval == null) {
        tempObj = []
    }
    else {
        tempObj = JSON.parse(localval)
        tempObj = []
    }
    localStorage.setItem("localtask", JSON.stringify(tempObj))
    show()
})