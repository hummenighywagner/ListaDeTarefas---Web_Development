function addTask(event) {
event.preventDefault();

let inputTarefa = document.getElementById("inputTask");
let valorDoInput = inputTarefa.value;

if(inputTarefa.value === "") {
    message.textContent="O campo não pode estar vazio!"
    document.getElementById("message").style.color="yellow";
}else{
    document.getElementById("message").textContent="Tarefa adicionada com sucesso!"
    document.getElementById("message").style.color="white"; 
    document.getElementById("message").style.fontSize="20px"
let listaDeTarefas = document.getElementById("tasksList");
let novaTarefa = document.createElement("li");

novaTarefa.textContent = valorDoInput;

listaDeTarefas.appendChild(novaTarefa)

inputTarefa.value = ""


    }
}