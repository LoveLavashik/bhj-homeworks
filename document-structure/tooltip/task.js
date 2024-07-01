const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (event) => {
        const click = hasTooltip.indexOf(event.target);
        event.preventDefault();
        const tooltip = document.querySelector('.tooltip');
        const description = hasTooltip[i].title;
        if (tooltip) {
            tooltip.remove();
        } else if (i === click) {
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.innerHTML = description;
            tooltipElement.classList.add('tooltip_active');
            tooltipElement.setAttribute('data-position', 'top');
            hasTooltip[i].insertAdjacentElement('afterEnd', tooltipElement);
        }
    })
}