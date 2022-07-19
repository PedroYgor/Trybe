import React, { Component } from "react";

export class Content extends Component{
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    const frase = conteudos.map((conteudo) => {
     return (
      <div>
        <p>Conteúdo: {conteudo.conteudo}</p>
        <p>Status: {conteudo.status}</p>
        <p>Bloco: {conteudo.bloco}</p>
      </div>
     ) 
    });
    return (
      <ul className="content">{frase}</ul>
    )
  }
}
