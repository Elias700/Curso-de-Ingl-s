

import React from 'react'
import './Parte1.css'
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";




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
        <p>Por Apenas <br /> <strong id='preçoDesconto'> R$ 88,90 </strong></p>

        <nav>

          <button className='botao1'> Acessar Curso </button>
    
        </nav>
          
      </div>

      <div className="parte2">

        <div className="informacao1">

        <PiTelevisionSimpleLight className='icons1' size={160}/>

          <p id='informacaoP1'>Aulas em vídeo fáceis de <br /> entender, mesmo para quem está <br /> começando do zero!</p>

        </div>


        <di className="informacao2">

        <FaBook className='icons2' size={130}/>

        <p id='informacaoP2'> Você terá acesso a materiais <br /> completos do curso em PDF, além <br /> de um plano de estudo!</p>

        </di>


        <div className="informacao3">

          <FaStar className='icons3' size={140}/>

          <p id="informacaoP3">
          Você vai aprender a se comunicar <br /> sem dificuldades em inglês desde <br /> a primeira aula!
          </p>

        </div>


        <div className="informacao4">

          <FaMedal className='icons4' size={140}/>

          <p id='informacaoP4'> Se após acessar o curso, não <br /> gostar das aulas e dos materiais, <br /> pode pedir seu reembolso sem <br /> problemas.</p>

        </div>
      
      </div>
  
    </div>

  )
}

export default Parte1
