import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import './1.css'
import IndexPage from './pages/IndexPage';
import PsychologyPage from './pages/PsychologyPage.js'





function App() {

  
const [showPage, setShowPage] = useState(0);


  const Index = (index) =>{

    switch(index){
      case 0:
        return(
          <IndexPage setShowpage={() =>setShowPage(1)} />
        )
      
          default:
        return(
          <PsychologyPage page={index}/>
        )
        
    }

  }

  return (
    <>
      {Index(showPage)}
    </>
  );
}

export default App; 