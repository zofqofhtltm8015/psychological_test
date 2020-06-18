import React from 'react';
import styled from 'styled-components';

export const Indextitle = styled.div`

  color: black;
  font-size: 30px;
  font-family : NEXON Lv1 Gothic OTF Bold;
  margin: 10%;
`

const Hello = styled.span`
  font-size:50px;
  
  @media (max-width: 768px) {
      
    display:none

  }
`

function IndexTitle(){
    return(
        <div>
                <Indextitle><Hello>안녕하세요!</Hello> <br /> 유튜버 알고심리님의 동영상을 토대로 만든 동물로 알아보는 심리사이트 입니다!</Indextitle>
        </div>
    );
}

export default IndexTitle;