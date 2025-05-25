import React, { useRef, useState } from 'react';
import '../App.css';
import b from '../Assets/b.jpeg';
import c from '../Assets/c.jpeg';
import d from '../Assets/d.jpeg';
import e from '../Assets/e.jpeg';
export default function Card() {

    const [open, setOpen] = useState(true);

    const style = {
        transform: open ? "translateX(0) scale(1)" : "translateX(250px) scale(0.9)",
        borderRadius: open ? '0px' : '15px',
        
    };

    const toggleLayout = () => {
        setOpen(!open);
    };


    return (
        <>
            
            <div className='container'>
                <div className='Page-Layout' style={style}>
                    <div className='Navbar'>
                        <div className='Menu' onClick={toggleLayout }>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className='User'>
                            <i class="fa-solid fa-folder-closed"></i>
                        </div>
                    </div>
                    <div className='Item-box'>
                        <div className='Item-1'>
                            <img src={b} height='210'width='160'/>
                        </div>
                        <div className='Item-2'>
                            <img src={c} height='210' width='160' />
                        </div>
                        <div className='Item-3'>
                            <img src={d} height='210' width='160' />
                        </div>
                        <div className='Item-4'>
                            <img src={e} height='210' width='160' />
                        </div>

                    </div>
                    <div className='Footer-Menu'>
                        <div className='Options'><i class="fa-solid fa-house"></i></div>
                        <div className='Options'><i class="fa-solid fa-compass"></i></div>
                        <div className='Options-M'><i class="fa-solid fa-magnifying-glass-dollar"></i></div>
                        <div className='Options'><i class="fa-solid fa-cart-shopping"></i></div>
                        <div className='Options'><i class="fa-solid fa-user"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}