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
      <ul>
        <li>Conteúdo: {conteudo.conteudo}</li>
        <li>Status: {conteudo.status}</li>
        <li>Bloco: {conteudo.bloco}</li>
      </ul>
     ) 
    });
    return (
      <div className="content">{frase}</div>
    )
  }
}