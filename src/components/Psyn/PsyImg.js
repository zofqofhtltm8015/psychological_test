import React from 'react';
import styled from 'styled-components';
import './PsyImg.css';
import rabbitPng from '../../srcImage/rabbit.png';
import horsePng from '../../srcImage/horse.png';
import reindeerPng from '../../srcImage/reindeer.png';
import sheepPng from '../../srcImage/sheep.png';


const Image = styled.div`
    padding: 7.5%;
    margin-top: 130px;
    margin-left: 45px;
    margin-right: 30px;
    background-image: url('${props=>props.img}');
    background-size: cover;
    cursor: pointer;
`;


const click= (page) =>{

    console.log(page);
}


export function Rabbit({page}){
    return(
            <Image onClick={() =>click({page})} img={rabbitPng} />
    );
}

export function Horse(){
    return(
            <Image  img={horsePng} />
    );
}

export function Reindeer(){
    return(
            <Image  img={reindeerPng} />
    );
}

export function Sheep(){
    return(
            <Image  img={sheepPng} />
    );
}

