
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";



const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(()=>{

        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem(' theme');
        document.querySelector(' html').setAttribute('data-theme', localTheme)

    }, [theme])

  const handleToggle = e =>{

    if (e.target.checked) {
        setTheme('sythwave')
    }else{
        setTheme(' light')
    }
  }
 


    return (
        <div className="navbar shadow-lg bg-base-100 sm:px-4 fixed z-10">
  <div className="flex-1">
    <NavLink to="/" className="btn btn-ghost text-3xl text-secondary gap-0 font-bold">Byte<span className="text-primary">Blaze</span></NavLink>
  </div>
  <div className="flex-none">
    <ul className=" hidden sm:flex mr-2 gap-4 px-1">
      <li className="font-bold">
        <NavLink className={({isActive})=> isActive? 'text-primary font-bold' : ' font-bold'} to="/">Home</NavLink>
        </li>
      <li className="font-bold">
        <NavLink className={({isActive})=> isActive? 'text-primary font-bold' : ' font-bold'} to="/blogs">blogs</NavLink>
        </li>
      <li className="font-bold">
        <NavLink className={({isActive})=> isActive? 'text-primary font-bold' : ' font-bold'} to="/bookmarks">bookmarks</NavLink>
        </li>
    </ul>
 <label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

  </div>
</div>
    );
};

export default Navbar;