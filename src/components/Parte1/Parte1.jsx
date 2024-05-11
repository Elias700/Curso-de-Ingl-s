

import React from 'react'
import './Parte1.css'

const Parte1 = () => {

  const imagem = 'https://img.freepik.com/fotos-gratis/livro-de-ingles-descansando-na-mesa-do-espaco-de-trabalho_23-2149429575.jpg?t=st=1715444606~exp=1715448206~hmac=a6fc8ae7b5e2a0c26a695a8a024f4426493e8b91698473bd478ef674b4251d56&w=740'

  return (

    <div className='background'>

      <h1> APRENDA A FALAR INGLÊS DE UMA MANEIRA FÁCIL E DESCONTRAIDA! <br>
      </br> 
      NA SPEAK ENGLISH VOCÊ APRENDE DO BÁSICO AO AVANÇADO!
      </h1>

      <p className='subTitulo'> Tenha acesso ao curso que já ajudou milhares de alunos a destravarem a comunicação do inglês, do básico ao avançado! </p>

      <img className='imagem1' src={imagem} alt="" />


      <div className="preco">

      <p id='De'> De <strong id='preçoAtual'> R$ 347,00 </strong>  </p>
      <p>Por Apenas <br /> <strong id='preçoDesconto'> R$ 27,00 </strong></p>

      <button className='botao1'> Acessar Curso </button>

      </div>

      

      
  
    </div>

  )
}

export default Parte1
