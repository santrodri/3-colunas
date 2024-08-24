import styled from "styled-components";

const Main = styled.div<{$backgroundColor: string}>`
    width: 320px;
    height: 420px;
    background-color: ${props => props.$backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: hsla(0, 0%, 100%, 0.75);
`;

const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 25px;

`
const Titulo = styled.h1`
    font-family: titulo;
    font-weight: 700;
    font-size: xxx-large;
    color: hsl(0, 0%, 95%);
`
const Corpo = styled.p`
    font-family: corpo;
    font-weight: 400;
    color: hsla(0, 0%, 100%, 0.75);
    font-size: 15;
    padding: 10px 0px 30px 0px;
`
const BotaoLeiaMais = styled.button<{$hoverColor: string}>`
    font-family: corpo;
    font-weight: 400;
    color: ${props => props.$hoverColor};
    border-color: white;
    background-color: white;
    border-width: 1.5;
    border-style: solid;
    padding: 8px;
    width: 120px;
    border-radius: 20px;
    font-size: 15px;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.$hoverColor};
        color: white;
    }
`

export interface InterfaceAreaPros{
    icone: string,
    titulo: string,
    corpo: string,
    corFundo: string,
    classNames?: string
}

export default function Area({corFundo, icone, titulo, corpo, classNames = ''}:InterfaceAreaPros){
    return(
        <Main $backgroundColor={corFundo} className={classNames}>
            <Container>
                <img src={icone} alt='icone do tipo' style={{width:'32px', height: '32px'}}/>
                <Titulo children = {titulo}/>
                <Corpo children = {corpo}/>
                <BotaoLeiaMais children='Learn More' $hoverColor={corFundo}/>
            </Container>
        </Main> 
    )
}