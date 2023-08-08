import React from 'react'
import Button from 'react-bootstrap/Button';
import Tags from './Tags';

export default function Boton({btnColor,text}) {
    return (
        <Button variant={btnColor} className='boton'> <Tags bgColor={btnColor} text={text}/> </Button>
    )
}
