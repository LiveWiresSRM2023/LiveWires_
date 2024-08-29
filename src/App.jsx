
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Divisions from './components/divisions'
import events from './components/events'
import hero from './components/hero'
import Root from './components/root'


function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={Root}> </Route>
      <Route path='/hero' Component={hero}> </Route>
      <Route path='/events' Component={events}></Route>
      <Route path='/divisions' Component={Divisions}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App
