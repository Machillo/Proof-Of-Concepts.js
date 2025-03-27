const tasks = [];

const addTask = task => {
    tasks.push({ description: task, completed: false });
};

const listTask = () => {
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]; 
        console.log(`#${i} - ${task.description} - ${task.completed ? '✅' : '❌'}`);
    }
};

const completeTask = index => {
    if (tasks[index]) {
        tasks[index].completed = true;
    } else {
        console.log("Tarea no encontrada");
    }
};

const deleteTask = index => {
    if (tasks[index]) {
        tasks.splice(index, 1);
    } else {
        console.log("Tarea no encontrada");
    }
};

addTask('Ir al gym');
addTask('Estudiar programación');
addTask('Bañarme');
completeTask(1);
deleteTask(2);

listTask();