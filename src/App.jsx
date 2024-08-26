
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ourDivisions from './components/ourDivisions'
import events from './components/events'
import hero from './components/hero'


function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={hero}> </Route>
      <Route path='/hero' Component={hero}> </Route>
      <Route path='/events' Component={events}></Route>
      <Route path='/ourDivisions' Component={ourDivisions}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App