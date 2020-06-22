import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withBreasts } from '@freesewing/models'
import Landing from './components/Landing'
import Patterns from './components/Patterns'
import Aaron from './components/Aaron'
import Benjamin from './components/Benjamin'
import Bent from './components/Bent'
import Breanna from './components/Breanna'
import Brian from './components/Brian'
import Bruce from './components/Bruce'
import Carlita from './components/Carlita'
import Carlton from './components/Carlton'
import Cathrin from './components/Cathrin'
import Diana from './components/Diana'
import Dress from './components/Dress'
import Florence from './components/Florence'
import Florent from './components/Florent'
import Holmes from './components/Holmes'
import Huey from './components/Huey'
import Hugo from './components/Hugo'
import Jaegar from './components/Jaegar'
import Kurti from './components/Kurti'
import Penelope from './components/Penelope'
import Sandy from './components/Sandy'
import Shin from './components/Shin'
import Simon from './components/Simon'
import Simone from './components/Simone'
import Skirt from './components/Skirt'
import Sven from './components/Sven'
import Tamiko from './components/Tamiko'
import Theo from './components/Theo'
import Trayvon from './components/Trayvon'
import Wahid from './components/Wahid'
import Waralee from './components/Waralee'
import Churidar from './components/Churidar'
import Dhoti from './components/Dhoti'
import Suit from './components/Suit'
import Salvar from './components/Salvar'
import Sharara from './components/Sharara'
import './App.css'

class App extends Component {
  // An example showing overriding of models size32 measurements values
  componentDidMount() {
    withBreasts.size32 = {
      ankleCircumference: 177,
      bicepsCircumference: 277,
      chestCircumference: 877,
      headCircumference: 477,
      hipsCircumference: 777,
      hipsToUpperLeg: 177,
      hpsToBust: 277,
      hpsToHipsBack: 577,
      inseam: 677,
      kneeCircumference: 377,
      naturalWaist: 677,
      naturalWaistToFloor: 1077,
      naturalWaistToHip: 77,
      naturalWaistToKnee: 577,
      naturalWaistToSeat: 277,
      neckCircumference: 277,
      seatCircumference: 877,
      seatDepth: 177,
      shoulderSlope: 577,
      shoulderToElbow: 377,
      shoulderToShoulder: 377,
      shoulderToWrist: 577,
      upperLegCircumference: 577,
      wristCircumference: 177
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/patterns" component={Patterns} />
        <Route exact path="/patterns/aaron" component={Aaron} />
        <Route exact path="/patterns/benjamin" component={Benjamin} />
        <Route exact path="/patterns/bent" component={Bent} />
        <Route exact path="/patterns/breanna" component={Breanna} />
        <Route exact path="/patterns/brian" component={Brian} />
        <Route exact path="/patterns/bruce" component={Bruce} />
        <Route exact path="/patterns/carlita" component={Carlita} />
        <Route exact path="/patterns/carlton" component={Carlton} />
        <Route exact path="/patterns/cathrin" component={Cathrin} />
        <Route exact path="/patterns/diana" component={Diana} />
        <Route exact path="/patterns/dress" component={Dress} />
        <Route exact path="/patterns/florence" component={Florence} />
        <Route exact path="/patterns/florent" component={Florent} />
        <Route exact path="/patterns/holmes" component={Holmes} />
        <Route exact path="/patterns/huey" component={Huey} />
        <Route exact path="/patterns/hugo" component={Hugo} />
        <Route exact path="/patterns/jaegar" component={Jaegar} />
        <Route exact path="/patterns/kurti" component={Kurti} />
        <Route exact path="/patterns/penelope" component={Penelope} />
        <Route exact path="/patterns/sandy" component={Sandy} />
        <Route exact path="/patterns/shin" component={Shin} />
        <Route exact path="/patterns/simon" component={Simon} />
        <Route exact path="/patterns/simone" component={Simone} />
        <Route exact path="/patterns/skirt" component={Skirt} />
        <Route exact path="/patterns/sven" component={Sven} />
        <Route exact path="/patterns/tamiko" component={Tamiko} />
        <Route exact path="/patterns/theo" component={Theo} />
        <Route exact path="/patterns/trayvon" component={Trayvon} />
        <Route exact path="/patterns/wahid" component={Wahid} />
        <Route exact path="/patterns/waralee" component={Waralee} />
        <Route exact path="/patterns/suit" component={Suit} />
        <Route exact path="/patterns/salvar" component={Salvar} />
        <Route exact path="/patterns/sharara" component={Sharara} />
        <Route exact path="/patterns/churidar" component={Churidar} />
        <Route exact path="/patterns/dhoti" component={Dhoti} />
      </Switch>
    )
  }
}

export default App
