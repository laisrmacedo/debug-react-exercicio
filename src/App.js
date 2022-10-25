import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from 'styled-components'
import imagemPerfil from "./img/DP-Brock.png"
import CardPequeno from './components/CardPequeno/CardPequeno';
import downArrow from "./img/down-arrow.png"
import iconePedra from "./img/rock-symbol.jpg"
import iconeEstadio from "./img/pewter-gym.jpg"
import iconeEmail from "./img/email.png"
import iconePin from "./img/pin-endereco.png"
import iconeFB from "./img/facebook-logo-3.png"
import iconeTT from "./img/twitter-logo-1-1.png"

//ERRO 1 default CardGrande + endereço
//ERRO 2 intalar styled-components
//ERRO 3 default CardPequeno + endereço
//ERRO 4 iconeEmail endereço
//ERRO 5 iconePin endereço
//ERRO 6 styled-components no CardGrande
//ERRO 7 export styles CardPequeno
//ERRO 8 importar tags estilizadas CardGrande
//ERRO 9 InfosCard correçao do nome
//ERRO 10 importar styled-components no styles CardGrande
//ERRO 11 importar ImgCardPequeno 
//ERRO 12 correçao de image
//ERRO 13 acesso errado das props no CardPequeno
//ERRO 14 acesso errado das props no CardGrande
//ERRO 15 faltou [0]
//ERRO 16 correçao de image e name
//ERRO 17 passando o endereço e nao a img
//ERRO 17 perfil.email
//ERRO 19 return na funçao CardPequeno


const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }`

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  `

const SectionPagina = styled.section`
    width: 40vw;
    margin: 10px 0;
  `

const Titulos = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `

function App() {
  const perfil = {
    nome: "Brock",
    imagem: imagemPerfil,
    descricao: "Iniciei minha carreira como treinador pokémon, especializado em pokémons de pedra e, atualmente sou líder do estádio de Pewter City.",
    email: "brock@pewtergym.com",
    cidade: "Pewter",
    experiencia: [
      {
        empresa: "Estádio de Pewter City",
        icone: iconeEstadio,
        descricao: "Atualmente sou o líder do Estádio de Pewter City, sou responsável pelo gerenciamento do estádio, batalhas e entrega da insígnia para treinadores pokémon desafiantes que chegam ao estádio."

      },
      {
        empresa: "Treinador pokémon - freelancer",
        icone: iconePedra,
        descricao: "Fui treinador pokémon durante a juventude. Acompanhei Ash Ketchum e Misty na busca por insígnias. Participei da franquia de filmes e algumas temporadas da série original."
      }
    ]
  }
  return (
    <ContainerApp>
      <GlobalStyle />
      <SectionPagina>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande
          //ERRO 12 correçao de image
          imagem={perfil.imagem}
          nome={perfil.nome}
          descricao={perfil.descricao}
        />

        <ImagemButton
          imagem={downArrow}
          texto="Ver mais"
        />
      </SectionPagina>

      <SectionPagina>
        <CardPequeno
          imagem={iconeEmail}
          nome="E-mail:"
          descricao={perfil.email}
        />
      </SectionPagina>
      <SectionPagina>
        <CardPequeno
          //passei para portugues
          imagem={iconePin}
          nome="Cidade:"
          descricao={perfil.cidade}
        />
      </SectionPagina>


      <SectionPagina>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande
          //ERRO 15 faltou [0]
          imagem={perfil.experiencia[0].icone}
          nome={perfil.experiencia[0].empresa}
          descricao={perfil.experiencia[0].descricao}
        />

        <CardGrande
          //ERRO 16 correçao de image e name
          imagem={perfil.experiencia[1].icone}
          nome={perfil.experiencia[1].empresa}
          descricao={perfil.experiencia[1].descricao}
        />
      </SectionPagina>

      <SectionPagina>
        <Titulos>Minhas redes sociais</Titulos>
        <ImagemButton
        //ERRO 17 passando o endereço e nao a img
          imagem={iconeFB}
          texto="Facebook"
        />
        <ImagemButton
          imagem={iconeTT}
          texto="Twitter"
        />
      </SectionPagina>
    </ContainerApp>
  );
}

export default App;
