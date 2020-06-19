import React, {useState,useContext,useReducer} from 'react';
import styled from 'styled-components';
import './1.css';
import IndexPage from './pages/IndexPage';
import PsychologyPage from './pages/PsychologyPage.js'
import { createContext } from 'react';


const initialState = {
  text: '',
  SelectedAnimal: '',
}


const reducer = (state,action)=>{

  switch(action.type){
    
      case "Rabbit":
        return{ 
          ...state,
          text: action.data,
          SelectedAnimal: "Rabbit"
        }
      case "Horse":
        return{
          ...state,
          text: action.data,
          SelectedAnimal: "Horse"
        }

      case "Reindeer":
        return{
          ...state,
          text: action.data,
          SelectedAnimal: "Reindeer"
        }
      
      case "Sheep":
        return{
          ...state,
          text: action.data,
          SelectedAnimal: "Sheep"
        }
        default:
          throw new Error("Unhandled Event!!!");   
  }
}

const SelcetedAnimalState = createContext();
const SelcetedAnimalDispatch = createContext();
function App() { 


const [state, dispatch] = useReducer(reducer, initialState);

  
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
    <SelcetedAnimalState.Provider value={state}>
      <SelcetedAnimalDispatch value={dispatch}>
           {Index(showPage)}
      </SelcetedAnimalDispatch>
    </SelcetedAnimalState.Provider>
  );
}

export default App; 