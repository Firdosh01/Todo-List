document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector('#tasks').innerHTML += `<div class="tasks">
        <span id="taskname">
        ${document.querySelector('#newtasks input').value}
        </span>    
        </div>`
    }
}