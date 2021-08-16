// 2. Write a script to store and process the learning tasks to become a front-end developer
let tasks = [{
    name: 'HTML',
},
{
    name: 'CSS',
},
{
    name: 'Basic of Javascript',
},
{
    name: 'Node Package Manager (npm)',
},
{
    name: 'Git',
},
];

for (let index in tasks) {
tasks[index].complete = false;
}

function printTaskList(tasks) {
console.clear();
console.log('Hi there, this is your learning tasks to front-end developer career:');
for (let index in tasks) {
    console.log(`${Number(index) + 1}. ${tasks[index].name}`);
    console.log(`   Complete: ${tasks[index].complete}`);
}
console.log('-------------------------------------------------------------------------');
}

// 2.1 Print it out
printTaskList_2(tasks);

let isLoop = true;

while (isLoop) {
let userInput = prompt('Enter your command (New, Delete, Update, Complete, 0(exit))');
switch (userInput.toLowerCase()) {
    // 2.2 Let users add new task
    case 'new': {
        let newTask = prompt('Enter new task');
        tasks.push({
            name: newTask,
            complete: false,
        });
        printTaskList_2(tasks);
        break;
    }
    // 2.3 Let users update task
    case 'update': {
        let position = Number(prompt('Enter position:'));
        let newName = prompt('Enter new title:');
        tasks[position - 1].name = newName;
        printTaskList_2(tasks);
        break;
    }
    // 2.4 Let users complete task
    case 'complete': {
        let position = Number(prompt('Enter position:'));
        tasks[position - 1].complete = true;
        printTaskList_2(tasks);
        break;
    }
    case 'delete': {
        let position = Number(prompt('Enter position:'));
        tasks.splice(position - 1, 1);
        printTaskList_2(tasks);
        break;
    }
    case '0': {
        isLoop = false;
        break;
    }
}
}

// 2.6 Make printing / logging better
function printTaskList_2(tasks) {
console.clear();
console.log('Hi there, this is your learning tasks to front-end developer career:');
for (let index in tasks) {
    let check = 'x';
    if (tasks[index].complete === true) {
        check = 'x';
    } else {
        check = ' ';
    }
    console.log(`${Number(index) + 1}. [${check}] ${tasks[index].name}`);
}
console.log('-------------------------------------------------------------------------');
}