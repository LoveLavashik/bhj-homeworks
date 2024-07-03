const tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));
for (let item of tab) {
    item.addEventListener('click', navigation);
}

function navigation() {
    if (this.className == 'tab tab_active') {
        return false;
    }
    let tabParent = this.closest('.tabs');
    tabParent.querySelector('.tab_active').className = 'tab';
    this.className = 'tab tab_active';
    tabParent.querySelector('.tab__content_active').className = 'tab__content';
    tabContent[tab.indexOf(this)].className = 'tab__content tab__content_active';
}