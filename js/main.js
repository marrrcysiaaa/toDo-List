 let toDoInput // miejsce gdzie uzytkownik wpisuje treśc zadania
 let errorInfo // info o braku zadań/ konieczności wpisania tekstu
 let addBtn    // przycisk ADD - dodaje nowe elementy do listy
 let ulList    // lista zadań, tagi UL


 const main = () => {
    // wywoływanie funkcji
    prepareDOMElements()
    prepareDOMEvents()
 }

 const prepareDOMElements = (params) => {
    // pobieramy wszystkie elementy
toDoInput = document.querySelector(".todo-input")
errorInfo = document.querySelector(".error-info")
addBtn = document.querySelector(".btn-add")
ulList = document.querySelector(".todoList ul")
 }

 const prepareDOMEvents = () => {
    // nadajemy nasłuchiwanie
 }

 document.addEventListener("DOMContentLoaded", main)
 // jezeli cały nasz dokument, cały nasz DOM zostanie załadowany, odpal funkcję main, wtedy funkcja main pobierze wszystkie nasze elementy i podepnie nasłuchiwanie