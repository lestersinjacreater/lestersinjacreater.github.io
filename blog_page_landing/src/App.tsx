

import './App.css'
import { Header } from './components/header/header';
import  Footer  from './components/footer/footer';
import Topbody from './components/topbody/topbody';
import {Body}   from './components/body/body';
import { Services } from './components/services/services';

function App() {


  return (
    <div className='parent'>
      <Header />
      <Topbody />
      <Body />
      <Services />
      <Footer />
     
      
      
    </div>
  )
}

export default App
