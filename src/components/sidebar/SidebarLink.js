import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './SidebarLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function SidebarLink({ isOpen, route, routeName, icon, subItem }) {
    const name = routeName
    const linkActiveClass = isOpen ?"link active" : "link active close" 
    const linkClass = isOpen ? "link" : "link close" 
    const linkIconClass = "link-icon"
    const linkArrowClass = isOpen ? "link-icon" : "link-icon close"
    const linkTextClass = isOpen ? "link-text" : "link-text close" 
    const dropDownClass = isOpen ? "dropDown-link" : "dropDown-link close"
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const showDropdown = () => setDropdownOpen(!isDropdownOpen);

    return(
        <div>
            <NavLink className={({ isActive }) => isActive ? linkActiveClass : linkClass} to={route} onClick={subItem && showDropdown}>
                <FontAwesomeIcon width='18px' height='18px' className={linkIconClass} icon={icon}/> 
                <span className={linkTextClass}>{name}</span>
                <div className={linkArrowClass}>
                    {subItem && isDropdownOpen && isOpen
                    ? <FontAwesomeIcon icon={faAngleUp}/>
                    : subItem && isOpen
                    ? <FontAwesomeIcon icon={faAngleDown}/>
                    : null}
                </div>
            </NavLink>   
            {isDropdownOpen && subItem && subItem.map((item) => {
                return (
                    <NavLink className={dropDownClass} to={item.route}>
                        <FontAwesomeIcon className={linkArrowClass} icon={item.icon}/> 
                        <span id='dropSpan' className={linkTextClass}>{item.title}</span>
                    </NavLink>      
                )
            })}           
        </div>
        

    )      
}

export default SidebarLink;

