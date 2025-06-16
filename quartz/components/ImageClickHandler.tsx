import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

export default (() => {
  function ImageClickHandler(props: QuartzComponentProps) {
    // Este componente não renderiza nada visível
    return null
  }

  ImageClickHandler.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      // Remove event listeners anteriores para evitar duplicação
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Remove listener anterior se existir
        if (img.clickHandler) {
          img.removeEventListener('click', img.clickHandler);
        }
        
        // Cria novo handler
        img.clickHandler = function(e) {
          e.preventDefault();
          window.open(this.src, '_blank');
        };
        
        // Adiciona o handler
        img.addEventListener('click', img.clickHandler);
        
        // Adiciona cursor pointer para indicar que é clicável
        img.style.cursor = 'pointer';
        
        // Adiciona limpeza quando a página mudar
        window.addCleanup(() => {
          if (img.clickHandler) {
            img.removeEventListener('click', img.clickHandler);
          }
        });
      });
    });
  `

  return ImageClickHandler
}) satisfies QuartzComponentConstructor