let todoInput // miejsce gdzie uzytkownik wpisuje treśc zadania
let errorInfo // info o braku zadań/ konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodos  // nowo dodane li, nowe zadanie

const main = () => {
	// wywoływanie funkcji
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	// pobieramy wszystkie elementy
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	// nadajemy nasłuchiwanie
	addBtn.addEventListener('click', addNewTodo)
}

/*

FUNKCJA addNewTodo:
1. tworzy nowy element (li)
2. dodawaje nowy element do ul listy
3. odpalana ma być w przycisku ADD
4. przechwytuje treści z inputa i umieszcza go w nowo utworzonym (li)
5. funkcja nie doda do listypustego todosa i odpali error-info

*/

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li') // tworzymy li
		newTodo.textContent = todoInput.value  // uzupełniamy tekst content
		ulList.append(newTodo) // dodajemy text content do naszej ul listy

        createToolsArea()  // tworzymy nasze narzedzia

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

/* FUNKCJA createToolsArea :

1. Stworzyć diva z klasa tools
2. stworzyć trzy przyciskji dodac im odpowiednie klasy i treść

*/

const createToolsArea = () => {
    const toolsPanel = document.createElement("div")
    toolsPanel.classList.add("tools")
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement("button")
    completeBtn.classList.add("complete")
    completeBtn.innerHTML = '<i class="fas fa-check;"></i>'

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit")
    editBtn.textContent("EDIT")

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete")
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}


document.addEventListener('DOMContentLoaded', main)
// jezeli cały nasz dokument, cały nasz DOM zostanie załadowany, odpal funkcję main, wtedy funkcja main pobierze wszystkie nasze elementy i podepnie nasłuchiwanie
