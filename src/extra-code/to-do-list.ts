module.exports = function InitToDoList() {
	const body: any = document.querySelector('body')
	const changeThemeButton = body.querySelector('.navigation__theme-change')

	const emptyMessage = body.querySelector('.to-do-list__empty-message')
	let s = 1
	changeThemeButton.addEventListener(
		'click',
		(e: any) => {
			if (e.target.innerText === 'На темную') {
				e.target.innerText = 'На белую'
			} else {
				e.target.innerText = 'На темную'
			}

			if (body.classList.contains('dark-theme')) {
				e.target.style.cssText = 'padding: 0 100px;'
			} else {
				e.target.style.cssText = 'padding: 0px;'
			}

			body.classList.toggle('dark-theme')
		},
		{ once: true }
	)

	const nameInput = body.querySelector('.to-do-list__new-to-do-name-input')

	const addingButton = body.querySelector('.to-do-list__adding-button')

	let errorMessage = document.createElement('span')
	errorMessage.innerText = 'Поле имени пусто'

	const todoListContainer = document.createElement('ul')
	addingButton.after(todoListContainer)
	todoListContainer.classList.add('hide')

	addingButton.addEventListener('click', (e: any) => {
		if (nameInput.value) {
			if (!todos.length) {
				emptyMessage.classList.add('hide')
				todoListContainer.classList.remove('hide')
			}

			addToDo(nameInput.value)
			nameInput.value = ''
		} else {
			errorMessage.remove()
			e.target.after(errorMessage)
		}
	})

	nameInput.addEventListener('change', () => {
		errorMessage.remove()
	})

	let todos: any = []

	function addToDo(message: any) {
		let toDo: any = document.createElement('div')
		toDo.innerHTML = `
      <span>${message}</span> 
      <button>удалить</button>
    `
		const delTodoButton: any = toDo.querySelector('button')

		delTodoButton.addEventListener(
			'click',
			() => {
				if (todos.length === 1) {
					emptyMessage.classList.remove('hide')
					todoListContainer.classList.add('hide')
				}
				todos.filter((el: any) => el !== toDo)
				toDo.remove()
			},
			{ once: true }
		)

		todos.push(toDo)
		todoListContainer.appendChild(toDo)
		emptyMessage.classList.add('hide')
	}

	const clearAllTodosButton: any = document.querySelector(
		'.navigation__clear-todos'
	)

	clearAllTodosButton.addEventListener('click', () => {
		todos.forEach((todo: any) => {
			const delButton = todo.querySelector('button')
			const clonedButton = delButton.cloneNode(true)
			delButton.parentNode.replaceChild(clonedButton, delButton)

			todo.remove()
		})
		todos = []

		emptyMessage.classList.remove('hide')
		todoListContainer.classList.add('hide')
	})

	///////////////////////////////////////////////////

	let head: any = {
		glasses: 1,
	}

	let table: any = {
		__proto__: head,
		pen: 3,
	}

	let bed: any = {
		__proto__: table,
		sheet: 1,
		pillow: 2,
	}

	let pockets: any = {
		__proto__: bed,
		money: 2000,
	}

	console.log(Object.getPrototypeOf(head) === Object.prototype)
	console.log(
		pockets.glasses,
		pockets.pen,
		pockets.sheet,
		pockets.pillow,
		pockets.money
	)

	const ul: any = document.querySelector('.list')
	for (const el of ul.children) {
		console.log(el.innerText)
	}
}
