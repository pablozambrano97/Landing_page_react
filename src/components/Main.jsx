import React from 'react'
import MyCard from './MyCard'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
let perros=[{
    image: "https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg",
    title: "Zacha",
    btnColor:  "success",
    text: "Poodle",
    description: "¡Ven a conocer a Max en nuestro refugio y experimenta el amor incondicional que solo un perro puede ofrecer!"   
},
{
    image: "https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg",
    title: "Chema",
    btnColor: "primary"   ,
    text: "Bulldog Francés",
    description: "Si estás buscando un compañero fiel y juguetón que llene tu vida de alegría, Chema es el perro perfecto para ti."  
},
{
    image: "https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg",
    title: "Tiburonsin",
    btnColor: "danger",
    text:"Salchicha",
    description: "Tiburonsin es muy sociable y se lleva bien con otros perros y mascotas."  
},
{
    image: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg",
    title: "Roberto",
    btnColor: "warning",
    text: "Labrador",
    description: "Si tienes una familia activa y te gusta hacer ejercicio al aire libre, Roberto será tu compañero perfecto."  
}];
console.log(perros);


    return (
        <div className='cards'>
            {perros.map((perro)=>(<MyCard image={perro.image} title={perro.title} btnColor={perro.btnColor} text={perro.text} description={perro.description}/>))}
        </div>
    )
}
