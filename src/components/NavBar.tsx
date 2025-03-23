import React from "react";



const NavBar = () =>  {

    const button_style = "duration-350 hover:bg-fuchsia-950/50 p-4 rounded-2xl font-CormorantGaramond font-semibold text-[21px]"
    return (
        <>
        <nav className="fixed z-1000 flex justify-between items-center pl-4 pr-25 pt-0 pb-0 bg-black text-white w-full " >
            <img src="/images/Cosmetica_logo.jpg" alt="Urban Beauty" className="w-20 h-20 object-cover "></img>
            <ul className="flex space-x-6 ">
                <li className={button_style}> <a href="#home"className="">Inicio</a></li>
                <li className={button_style}><a href="#about">Quienes Somos</a></li>
                <li className={button_style}><a href="#productServices">Productos y Servicios</a></li>
                <li className={button_style}><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        </>


    );
}

export default NavBar;