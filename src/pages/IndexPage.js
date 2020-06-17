import React from 'react';
import styled from 'styled-components';
import IndexTitle from '../components/IndexTitle';


const Indexpage  = styled.div `
    display:flex;
    flex-direction: column;    
    align-items: center;

`
function  IndexPage(){
    return(
        <Indexpage>
              <IndexTitle />
              <StartBtn showPage={showPage} />
      </Indexpage>
    )
}

export default IndexPage;