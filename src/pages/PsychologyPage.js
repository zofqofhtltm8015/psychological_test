import React from 'react';
import Psy1 from '../components/Psyn/Psy1';

function PsychologyPage({page}){
    return(
        <>
            {page===1 && <Psy1 /> }
            {/* {page===2 && <Psy2 /> }
            {page===3 && <Psy3 /> }
            {page===4 && <Psy4 /> }
            {page===5 && <Psy5 /> }
            {page===6 && <Psy6 /> }
            {page===7 && <Psy7 /> } */}
            

        </>
    );
}

export default React.memo(PsychologyPage);