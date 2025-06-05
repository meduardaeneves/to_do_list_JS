// Todo --> OBJ MATRIX
class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    verifyTask(command) {
        let noTaskText = document.querySelector('#no-tasks');

        //logica de add ou remover tasks
        if (command === 'add') {
            this.totalTasks += 1;
        } else if (command === 'remove') {
            this.totalTasks -= 1;
        }

        if (this.totalTasks == 1) {
            noTaskText.classList.remove('hide')          
        }  else {
            noTaskText.classList.add('hide')
        }  
    }

    addTask(taskText) {
       //Clonar Template
       let template = document.querySelector('.task').cloneNode(true);
       // remove classe hide
       template.classList.remove('hide');
       //manipular texto
       let templateText = template.querySelector(".task-title")
       templateText.textContent = taskText;
       //Adicionando na lista de TASK:
       let list = document.querySelector('#task-content');
       //Inserir na lista:
       list.appendChild(template)

       //adiciona eventos as tasks:
       this.addEvents()
    
       this.verifyTask('add')

    } 

    removeTask(task) {
        // Para remover, primeiro eu preciso achar o elemento PAI
        //No caso, o elemento PAI vai ser a class TASK
        let parentEl = task.parentElement;

        //remover da lista
        parentEl.remove();
        
        this.verifyTask('remove')
        
    }

    checkTask(task) {
        // Para check, primeiro eu preciso achar o elemento PAI
        //No caso, o elemento PAI vai ser a class TASK
        if (task.classList.contains("done")) {
            task.classList.remove('done')
        } else {
            task.classList.add('done')
        }
        
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        //Acesso ao último BTN adicionado, que n tem evento ainda
        let removeBtn = removeBtns[removeBtns.length - 1]

        let checkBtns = document.querySelectorAll('.fa-check');
        //Acesso ao último BTN adicionado, que n tem evento ainda
        let checkBtn = checkBtns[checkBtns.length - 1]

        //adicionar evento de remover
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this)
        })

        //adicionar evento de completar tarefa
        checkBtn.addEventListener('click', function() {
            todo.checkTask(this)
        })
    }
}

let todo = new Todo();

//events
let addBtn = document.querySelector("#send-item")

addBtn.addEventListener('click', function(e) {

// vamos fazer um preventDefault 
// Não quero que o formulário submeta qualquer coisa quando clico no botão   
    e.preventDefault();

    let taskText = document.querySelector("#write-item");
// Quando fala-se de INPUT, value é que vai trazer o valor do input oferecido 

    // console.log(taskText.value);

    // Só vou adicionar quando não está vazio
    if (taskText.value !== '') {
        todo.addTask(taskText.value);
    }
    
    //Ao adicionar uma nova tarefa, quero limpar o campo do input
    taskText.value = '';
})