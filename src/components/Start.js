import React from 'react';

const StartBtn = styled.button`
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
function Start({setShowPage}){
    return(
        <>
                <StartBtn onClick={setShowPage} >시작하기!</StartBtn>
        </>
    );
}

export default Start;