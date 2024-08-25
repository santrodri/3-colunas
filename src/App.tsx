import styled from "styled-components"

import Area from "./components/Container"

import suv from './assets/imagens/icon-suvs.svg'
import sedan from './assets/imagens/icon-sedans.svg'
import luxury from './assets/imagens/icon-luxury.svg'

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
  .right{
    border-radius: 0px 8px 8px 0px
  }
  .left{
    border-radius: 8px 0px 0px 8px
  }
  @media (max-width: 960px) {
    
    .left {
      border-radius: 8px 8px 0px 0px;
    }

    .right {
      border-radius: 0px 0px 8px 8px; 
    }
  }
`

function App() {
  return (
     <Main>
        <Area 
          corFundo="hsl(31, 77%, 52%)"
          icone={sedan}
          titulo="Sedans"
          corpo="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          classNames="left"
        />
        <Area 
          corFundo="hsl(184, 100%, 22%)"
          icone={suv}
          titulo="SUVs"
          corpo="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Area 
          corFundo="hsl(179, 100%, 13%)"
          icone={luxury}
          titulo="Luxury"
          corpo="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          classNames="right"
        />
     </Main>
    )
}

export default App
