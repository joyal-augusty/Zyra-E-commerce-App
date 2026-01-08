import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/Collection'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7-vw] lg:px-[9vw]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} /> 

      </Routes>
      
    </div>
  )
}

export default App
