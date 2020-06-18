import React, { useState } from 'react';
import { PsyForm, PsyAnswer } from '../PsyStyled';
import { Rabbit, Horse, Reindeer, Sheep} from './PsyImg';
function Psy1(){
    return(
        <>
            <PsyAnswer>곧 세상의 종말이 다가옵니다. 당신은 하나의 동물을 구할 수 있습니다!</PsyAnswer>
            <PsyForm>
                <Rabbit onClick={()=>{console.log("하")}} />
                <Horse  />
                <Reindeer />
                <Sheep />
            </PsyForm>
        </>
    );
}

export default Psy1
