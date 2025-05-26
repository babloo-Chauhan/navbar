import React, { useEffect, useState } from 'react';
import Menu from '../Components/Menu';
import '../App.css';
import b from '../Assets/b.jpeg';
import c from '../Assets/c.jpeg';
import d from '../Assets/d.jpeg';
import e from '../Assets/e.jpeg';
export default function Card() {

    const [open, setOpen] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [ApplyStyle2, setApplyStyle2] = useState(false);

    const [click, setClick] = useState(false);
    const [startX, setStartX] = useState(0);


    const style = {
        transform: open ? "translateX(0) scale(1,1)" : "translateX(270px) scale(0.8,0.8)",
        borderRadius: open ? '0px' : '15px',

    };

    const myStyle = {
        transform: open ? "translateX(-500px)" : "translateX(-110px)",
        marginLeft: open ? '10px' : '110px',
        zIndex: open ? '1' : '2'
    }


    const myStyle2 = {
        transform: ApplyStyle2 ? 'translateX(200px) scale(1) rotate(0turn)' : 'translateX(10px) scale(0) rotate(1.50turn)'
        
    }


    const toggleLayout = () => {
        setOpen(!open);
        setShowMenu(!showMenu);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setApplyStyle2(true);
            }, 170); // delay matches myStyle's transition duration
            return () => clearTimeout(timer);
        } else {
            // Reset immediately when opening
            setApplyStyle2(false);
        }
    }, [open]);

   
    const handleMouseDown=()=>{
        setClick(true);
        setStartX(e.clientX);
    }
    const handleMouseUp=()=>{
        setClick(false);
    }
    const handleMouseMove = () => {
        if (click && !open) {
            const diff = e.clientX - startX;
            if (diff < -50) { // if user drags left more than 50px
                setOpen(true); // open layout
                setShowMenu(false); // hide menu if needed
                setClick(false); // prevent multiple triggers
            }
        }
    }



    return (
        <>
            {
                <div className='menu-container' style={myStyle}>
                    <Menu />
                    <div className='open-close' style={myStyle2}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            }

            <div className='container'>
                <div className='Page-Layout'
                    style={style}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className='Navbar'>
                        <div className='Menu' onClick={() => { toggleLayout(); toggleMenu(); }}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className='User'>
                            <i class="fa-solid fa-circle-user"></i>
                        </div>
                    </div>
                    <div className='Item-box'>
                        <div className='Item-1'>
                            <img src={b} height='210' width='160' />
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