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

FUNKCJA :
1. tworzy nowy element (li)
2. dodawaje nowy element do ul listy
3. odpalana ma być w przycisku ADD
4. przechwytuje treści z inputa i umieszcza go w nowo utworzonym (li)
5. funkcja nie doda do listypustego todosa i odpali error-info

*/

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

document.addEventListener('DOMContentLoaded', main)
// jezeli cały nasz dokument, cały nasz DOM zostanie załadowany, odpal funkcję main, wtedy funkcja main pobierze wszystkie nasze elementy i podepnie nasłuchiwanie
