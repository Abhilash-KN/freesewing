import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import aaron from './images/aaron.png'
import benjamin from './images/benjamin.png'
import bent from './images/bent.png'
import breanna from './images/breanna.png'
import brian from './images/brian.png'
import bruce from './images/bruce.png'
import carlita from './images/carlita.png'
import carlton from './images/carlton.png'
import cathrin from './images/cathrin.png'
import diana from './images/diana.png'
import dress from './images/dress.png'
import florence from './images/florence.png'
import florent from './images/florent.png'
import holmes from './images/holmes.png'
import huey from './images/huey.png'
import hugo from './images/hugo.png'
import jaegar from './images/jaegar.png'
import kurti from './images/kurti.png'
import penelope from './images/penelope.png'
import sandy from './images/sandy.png'
import shin from './images/shin.png'
import simon from './images/simon.png'
import simone from './images/simone.png'
import skirt from './images/skirt.png'
import sven from './images/sven.png'
import tamiko from './images/tamiko.png'
import theo from './images/theo.png'
import trayvon from './images/trayvon.png'
import wahid from './images/wahid.png'
import waralee from './images/waralee.png'
import './styles/Patterns.css'

export default function Patterns() {
  return (
    <div className="Patterns">
      <h1>Choose a pattern</h1>
      <div className="Patterns-container">
        <Link to="/patterns/aaron">
          <Card name="Aaron" text="Aaron A-Shirt" image={aaron} />
        </Link>
        <Link to="/patterns/benjamin">
          <Card name="Benjamin" text="Benjamin bow tie" image={benjamin} />
        </Link>
        <Link to="/patterns/bent">
          <Card name="Bent" text="Bent body block" image={bent} />
        </Link>
        <Link to="/patterns/breanna">
          <Card name="Breanna" text="Breanna body block" image={breanna} />
        </Link>
        <Link to="/patterns/brian">
          <Card name="Brian" text="Brian body block" image={brian} />
        </Link>
        <Link to="/patterns/bruce">
          <Card name="Bruce" text="Bruce boxer briefs" image={bruce} />
        </Link>
        <Link to="/patterns/carlita">
          <Card name="Carlita" text="Carlita coat" image={carlita} />
        </Link>
        <Link to="/patterns/carlton">
          <Card name="Carlton" text="Carlton coat" image={carlton} />
        </Link>
        <Link to="/patterns/cathrin">
          <Card name="Cathrin" text="Cathrin corset" image={cathrin} />
        </Link>
        <Link to="/patterns/churidar">
          <Card name="Churidar" text="Churidar Bottomwear" />
        </Link>
        <Link to="/patterns/dhoti">
          <Card name="Dhoti" text="Dhoti Bottomwear" />
        </Link>
        <Link to="/patterns/diana">
          <Card name="Diana" text="Diana top" image={diana} />
        </Link>
        <Link to="/patterns/dress">
          <Card name="Dress" text="Dress top" image={dress} />
        </Link>
        <Link to="/patterns/florence">
          <Card name="Florence" text="Florence face mask" image={florence} />
        </Link>
        <Link to="/patterns/florent">
          <Card name="Florent" text="Florent flat cap" image={florent} />
        </Link>
        <Link to="/patterns/holmes">
          <Card name="Holmes" text="Holmes deerstalker hat" image={holmes} />
        </Link>
        <Link to="/patterns/huey">
          <Card name="Huey" text="Huey hoodie" image={huey} />
        </Link>
        <Link to="/patterns/hugo">
          <Card name="Hugo" text="Hugo hoodie" image={hugo} />
        </Link>
        <Link to="/patterns/jaegar">
          <Card name="Jaegar" text="Jaegar jacket" image={jaegar} />
        </Link>
        <Link to="/patterns/kurti">
          <Card name="Kurti" text="Kurti top" image={kurti} />
        </Link>
        <Link to="/patterns/penelope">
          <Card name="Penelope" text="Penelope pencil skirt" image={penelope} />
        </Link>
        <Link to="/patterns/salvar">
          <Card name="Salvar" text="Salvar Bottomwear" />
        </Link>
        <Link to="/patterns/sandy">
          <Card name="Sandy" text="Sandy circle skirt" image={sandy} />
        </Link>
        <Link to="/patterns/sharara">
          <Card name="Sharara" text="Sharara Bottomwear" />
        </Link>
        <Link to="/patterns/shin">
          <Card name="Shin" text="Shin swim trunks" image={shin} />
        </Link>
        <Link to="/patterns/simon">
          <Card name="Simon" text="Simon shirt" image={simon} />
        </Link>
        <Link to="/patterns/simone">
          <Card name="Simone" text="Simone shirt" image={simone} />
        </Link>
        <Link to="/patterns/skirt">
          <Card name="Skirt" text="Skirt" image={skirt} />
        </Link>
        <Link to="/patterns/suit">
          <Card name="Suit" text="Suit Indianwear" />
        </Link>
        <Link to="/patterns/sven">
          <Card name="Sven" text="Sven sweatshirt" image={sven} />
        </Link>
        <Link to="/patterns/tamiko">
          <Card name="Tamiko" text="Tamiko top" image={tamiko} />
        </Link>
        <Link to="/patterns/theo">
          <Card name="Theo" text="Theo trousers" image={theo} />
        </Link>
        <Link to="/patterns/trayvon">
          <Card name="Trayvon" text="Trayvon tie" image={trayvon} />
        </Link>
        <Link to="/patterns/wahid">
          <Card name="Wahid" text="Wahid waistcoat" image={wahid} />
        </Link>
        <Link to="/patterns/waralee">
          <Card name="Waralee" text="Waralee wrap pants" image={waralee} />
        </Link>
       
      </div>
    </div>
  )
}
