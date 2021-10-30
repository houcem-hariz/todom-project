const addTodoButton = document.getElementById('todo-add');    
// We retrieve the element on which we want to detect the click
addTodoButton.addEventListener('click', function( event ) { 
// We listen to the click event
    let target = event.target
    console.log({target})

    let todoItemsCollection = document.getElementsByClassName('todo-item')
    let todoItems = Array.from( todoItemsCollection )

    let newTodoItem = document.createElement('div')
    newTodoItem.classList.add('todo-item')

    let newTodoInput = document.createElement('input')
    newTodoInput.setAttribute('type', 'text')
    newTodoInput.setAttribute('name', 'todo-input')
    newTodoInput.setAttribute('id', 'todo-input')
    let arr = Array.from( event.target.parentElement.children )
    let v = arr[0].value
    newTodoInput.setAttribute('value', v.trim())
    newTodoInput.setAttribute('readonly', true)
    newTodoItem.appendChild( newTodoInput )
    addCheckIcon( newTodoItem )
    addTrashIcon( newTodoItem )
    let list = document.getElementById('todo-list')
    list.appendChild( newTodoItem )

});


function addTrashIcon( item )
{
    let trashIcon = document.createElement('i')
    trashIcon.innerHTML = '<i class="fas fa-trash"></i>'
    item.appendChild( trashIcon )
    
}

function addCheckIcon( item )
{
    let checkIcon = document.createElement('i')
    checkIcon.innerHTML = '<i class="fas fa-check-square"></i>'
    item.appendChild( checkIcon )
    
}

