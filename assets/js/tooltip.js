console.log('El script se ha cargado correctamente.');

const elements = document.querySelectorAll('[data-tooltip]');

elements.forEach(element => {
  const tooltipText = element.dataset.tooltip;
  console.log(`Tooltip para ${element}: ${tooltipText}`);  // Verifica que los tooltips se estén leyendo correctamente
  const tooltipElement = document.createElement('div');
  tooltipElement.classList.add('tooltip');
  tooltipElement.textContent = tooltipText;

  element.addEventListener('mouseover', () => {
    console.log('Mouse sobre el elemento, mostrando tooltip.');
    document.body.appendChild(tooltipElement);
    tooltipElement.style.visibility = 'visible';
    const rect = element.getBoundingClientRect();
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.top = `${rect.top + window.scrollY - tooltipElement.offsetHeight - 5}px`;
    tooltipElement.style.left = `${rect.left + (rect.width - tooltipElement.offsetWidth) / 5}px`;
  });

  element.addEventListener('mouseout', () => {
    console.log('Mouse fuera del elemento, ocultando tooltip.');
    tooltipElement.style.visibility = 'hidden';
    document.body.removeChild(tooltipElement);
  });
});
