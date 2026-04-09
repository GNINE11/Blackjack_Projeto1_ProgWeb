function ajustarSobreposicao() {
  // Pega todos os containers de jogadores
  const containers = document.querySelectorAll('.container-player-cards');
  
  // Para cada container, faz o cálculo separadamente
  containers.forEach(container => {
    const cartas = container.querySelectorAll('.cards'); // só as cartas DESTE container
    const containerWidth = 200; // largura do container
    const cartaWidth = 80; // largura de cada carta
    
    let larguraTotal = cartas.length * cartaWidth;
    let sobreposicaoNecessaria = 0;
    
    if (larguraTotal > containerWidth) {
      let excesso = larguraTotal - containerWidth;
      let qtdSobreposicoes = cartas.length - 1;
      sobreposicaoNecessaria = excesso / qtdSobreposicoes;
      
      cartas.forEach((carta, index) => {
        if (index > 0) {
          carta.style.marginLeft = `-${sobreposicaoNecessaria}px`;
        }
      });
    } else {
      cartas.forEach((carta, index) => {
        if (index > 0) {
          carta.style.marginLeft = '0';
        }
      });
    }
  });
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', ajustarSobreposicao);

// Executa quando a janela é redimensionada
window.addEventListener('resize', ajustarSobreposicao);

// Executa quando cartas são adicionadas/removidas em QUALQUER container
const observer = new MutationObserver(ajustarSobreposicao);
document.querySelectorAll('.container-player-cards').forEach(container => {
  observer.observe(container, { childList: true, subtree: true });
});