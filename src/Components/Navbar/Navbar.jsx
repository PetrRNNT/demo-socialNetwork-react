import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={s.backSkew}>
        <nav className={s.nav}>

                <div className={`${s.item} ${s.active}`}><NavLink to="/profile"
                                                                  activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Profile
                </NavLink></div>
                <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Messages
                </NavLink></div>
                <div className={s.item}><NavLink to="/users" activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Users
                </NavLink></div>
                <div className={s.item}><NavLink to={"/news"} activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    News
                </NavLink></div>
                <div className={s.item}><NavLink to={"/music"} activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Music
                </NavLink></div>
                <div className={s.item}><NavLink to={"/settings"} activeClassName={s.active}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Settings
                </NavLink></div>
                <div className={s.friend}>
                    <img className={s.friendNavBar}
                         src="https://lh3.googleusercontent.com/proxy/7Dr-_kPLBmWDMJH5vnLBLBziMi79TCGJ-p40ihJdOSS_4-4Jg0LUICaNI4E0665UKLV9kK6aDlkvZ4Z7wRD1qfHWWErRVGf1tKEB4W-4uy-9k6MoMtMVdw0scJnMGa8_9OS3"
                         alt=""/>
                </div>

        </nav>
        </div>
    )
}

export default Navbar;