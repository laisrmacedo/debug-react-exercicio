import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./styles"

function CardPequeno(props) {
    return (
        <LayoutCardPequeno>
                {/* ERRO 13 acesso errado da props */}
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                {/* ERRO 13 acesso errado da props */}
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )
}

export default CardPequeno