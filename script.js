function adicionarAoCarrinho(nome, preco) {
  const item = { nome, preco };
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} adicionado ao carrinho!`);
}

window.onload = function () {
  const lista = document.getElementById('lista-carrinho');
  const total = document.getElementById('total');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (lista) {
    let soma = 0;
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      lista.appendChild(li);
      soma += item.preco;
    });
    total.textContent = `Total: R$ ${soma.toFixed(2)}`;
  }
};
