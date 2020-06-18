import React from 'react';
import styled from 'styled-components';
import IndexTitle from '../components/IndexTitle';
import StartBtn from '../components/Start'

const Indexpage  = styled.div `
    display:flex;
    flex-direction: column;    
    align-items: center;

`
function  IndexPage({setShowpage}){
    console.log(setShowpage)
    return(
        <Indexpage>
              <IndexTitle />
              <StartBtn setShowpage={setShowpage} />
      </Indexpage>
    )
}

export default IndexPage;