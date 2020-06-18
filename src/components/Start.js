import React from 'react';
import styled from 'styled-components';


const Start = styled.button`
  outline: none;
  background-color:transparent;
  border: 3px solid grey;
  border-radius: 130px;

  padding: 40px 60px 40px 60px;
  cursor: pointer;

  font-size: 50px;

  transition: all 2s;

  &:hover{
    box-shadow:-400px 0 0 0 rgba(0,0,0,0.5) inset;
    color: white;
  }
` 
function StartBtn({setShowpage}){
  console.log(setShowpage);
    return(
        <>
        
                <Start onClick={setShowpage} >시작하기!</Start>
        </>
    );
}

export default StartBtn;