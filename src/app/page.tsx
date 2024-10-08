import React from 'react';

const OpenIndexHtml: React.FC = () => {
  // Função que redireciona para o index.html
  const openIndexHtml = () => {
    window.location.href = './index.html'; // Caminho relativo para o index.html
  };

  return (
    <div>
      <h1>Bem-vindo ao meu App</h1>
      <p>Clique no botão abaixo para abrir o index.html</p>
      <button onClick={openIndexHtml}>
        Abrir Index.html
      </button>
    </div>
  );
};

export default OpenIndexHtml;
