import React from "react";
import style from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <header className={style.header}>
            <div className="container">

                <div className={style.box}>
                    <div className={style.dance}>
                       <Link to={"/"}><h2>DANCE EXPERIENCE STUDIO</h2></Link>
                        </div>
                    <ul className={nav ? [style.menu, style.active].join('  ') : [style.menu]}>
                        <Link to={"/dances"}><li><a href="##">ТАНЦЫ ДЛЯ ВСЕХ</a></li></Link>
                       <Link to={"/teachers"}><li><a href="##">НАШИ ПРЕПОДАВАТЕЛИ</a></li></Link>
                       <Link to={"/register"}> <li><a href="##">КАК ЗАПИСАТЬСЯ?</a></li></Link>
                        <Link to={"/contact"}><li><a href="##">КОНТАКТЫ</a></li></Link>
                        
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar