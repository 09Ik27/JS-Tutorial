const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');

function displayItems() {
	const itemsFromStorage = getItemsFromStorage();
	itemsFromStorage.forEach(item => addItemToDOM(item));
	ckeckUI();
}

function onAddItemSubmit(e) {
	e.preventDefault();

	const newItem = itemInput.value;

	if (newItem.value === '') {
		alert('Please add an item');
		return;
	}

	addItemToDOM(newItem);
	addItemToStorage(newItem);
	ckeckUI();
	itemInput.value = '';
}

function addItemToDOM(item) {
	//* create new list item
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(item));

	const button = createButton('remove-item btn-link text-red');
	li.appendChild(button);
	itemList.appendChild(li);
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);
	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

function addItemToStorage(item) {
	const itemsFromStorage = getItemsFromStorage();

	itemsFromStorage.push(item);
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
	let itemsFromStorage;

	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}

	return itemsFromStorage;
}

function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove();

			ckeckUI();
		}
	}
}

function clearItems() {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
	ckeckUI();
}

function filterItems(e) {
	const items = itemList.querySelectorAll('li');
	const text = e.target.value.toLowerCase();

	items.forEach(item => {
		const itemName = item.firstChild.textContent.toLowerCase();

		if (itemName.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}

function ckeckUI() {
	const items = itemList.querySelectorAll('li');

	if (items.length === 0) {
		clearBtn.style.display = 'none';
		itemFilter.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		itemFilter.style.display = 'block';
	}
}

itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('keyup', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

ckeckUI();
