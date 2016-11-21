document.addEventListener('DOMContentLoaded', function() {
    //variables
    var input = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskButton');
    var list = document.getElementById('taskList');
    var removeBtn = document.getElementById('removeFinishedTasksButton');
    // counter for tasks
    var counter = document.getElementById('counter');
    var counterVal = 0;

    addTaskButton.addEventListener('click', function() {
        if (input.value.length >= 3 && input.value.length <= 100) { //input validation
            counter.innerHTML = ++counterVal;
            // creating new elements
            var newLi = document.createElement('li');
            var newH3 = document.createElement('h3');
            var deleteBtn = document.createElement('button');
            var completeBtn = document.createElement('button');
            //adding new elements
            list.appendChild(newLi);
            newLi.appendChild(newH3).innerHTML = input.value;
            newLi.appendChild(deleteBtn).innerHTML = 'Delete';
            newLi.appendChild(completeBtn).innerHTML = 'Complete';


            completeBtn.addEventListener('click', function() {
                newLi.classList.toggle('done');
                if (newLi.className === 'done') {
                    counter.innerHTML = --counterVal;
                    newH3.style.color = '#FF4500';
                } else {
                    counter.innerHTML = ++counterVal;
                    newH3.style.color = '#1E90FF'
                }
            });


            deleteBtn.addEventListener('click', function() {
                list.removeChild(newLi);
                if (newLi.className === '') {
                    counter.innerHTML = --counterVal;
                }

            });
            //btn remove only if task is complete
            removeBtn.addEventListener('click', function() {
                if (newLi.className === 'done') {
                    list.removeChild(newLi);
                }

            });

            input.value = '';
        } else {
            alert('Text can not be shorter than 3 and longer than 100 characters!') // alert
        }
    });
});
