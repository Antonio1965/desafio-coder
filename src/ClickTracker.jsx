import { useState } from 'react';
import moment from 'moment';

export const ClickTracker = () => {

    const [click, setClick ] = useState (0)
    const [fyh, setFyh ] = useState(null)

    const handleClick = ()=>{
        setClick(click + 1)
        setFyh(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }

    return (
        <div className='clickTrack'>
            <button className='boton' onClick={handleClick}>Clickeame</button>
            <p>Me clickeaste: {click} veces</p>
            <p> Último click: {fyh}</p>
        </div>
    )
}
