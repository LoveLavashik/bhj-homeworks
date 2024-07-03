const button = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownItem = Array.from(document.getElementsByClassName('dropdown__link'));
for (let item of button) {
    item.addEventListener('click', dropdown);
}
for (let item of dropdownItem) {
    item.addEventListener('click', onClickItem);
}

function dropdown() {
    this.nextElementSibling.className === 'dropdown__list' ? this.nextElementSibling.className = 'dropdown__list dropdown__list_active' : this.nextElementSibling.className = 'dropdown__list';
}

function onClickItem(event) {
    this.closest('ul').className = 'dropdown__list';
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
    event.preventDefault();
}