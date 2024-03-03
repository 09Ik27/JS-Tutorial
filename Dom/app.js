//* Document Object Model

const fruits = document.querySelector('#fruits');

const heading = document.createElement('h1');
heading.innerText = 'Fruits List | لیست میوه ها';
heading.classList.add('heading');
document.body.prepend(heading);

heading.addEventListener('click', () => {
	setInterval(() => {
		heading.classList.toggle('btn');
	}, 1000);
});

function createNewItem(item) {
	const newLi = document.createElement('li');
	newLi.appendChild(document.createTextNode(item));
	fruits.appendChild(newLi);
}

createNewItem('blueberry');

const unique = [...new Set([...fruits.children].map(li => li.innerText))];
fruits.innerHTML = unique.map(item => `<li>${item}</li>`).join('');

//* sort by alphabet
[...fruits.children]
	.sort((a, b) => (a.innerText > b.innerText ? 1 : -1))
	.forEach(node => fruits.appendChild(node));

// function insertElement() {
// 	const newLi = document.createElement('li');
// 	newLi.textContent = 'پرتقال';
// 	fruits.insertAdjacentElement('afterbegin', newLi);
// }

// insertElement();

// function replaceAllItems() {
// 	const lis = [...fruits.children];

// 	lis.forEach((item, index) => {
// 		item.outerHTML =
// 			index === 6
// 				? `<li>apple</li>`
// 				: `<li>cucumber</li>`;
// 	});
// }

// replaceAllItems()

fruits.addEventListener('mouseover', event => {
	if (event.target.tagName === 'LI') {
		event.target.style.color = 'red';
		event.target.style.transition = 'color .3s ease';
	}
});

fruits.addEventListener('mouseout', event => {
	if (event.target.tagName === 'LI') {
		event.target.style.color = 'white';
	}
});

//* remove item
// function removeItem() {
// 	const li = document.querySelector('li');
// 	fruits.removeChild(li);
// }

// fruits.addEventListener('click', removeItem);
