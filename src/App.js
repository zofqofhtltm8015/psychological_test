import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import './1.css'
import IndexPage from './pages/IndexPage';






function App() {


  const [name, setName] = useState('');

  


  const [showPage, setShowPage] = useState(0);


  const Index = (index) =>{

    switch(index){
      case 0:
        return(
          <IndexPage />
        )
        
        break;
          case 2:
        
    }

  }

  return (
    <>
      {Index(showPage)}
    </>
  );
}

export default App; 