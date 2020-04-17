import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <span>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ5d2gWYlsLGv1-yGmbpZo8ds083M86NJotIm_b6nGQES-l2F9&usqp=CAU'></img>
                </span>
                <span className={s.textLogo}>
                Friend Finder
                </span>
            </div>
            <div>
            {props.isAuth
                ?
                <div className={s.linkLoggined}>
                    <label>
                        <a className={s.logout}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {props.login} - <div className={s.buttonLogout}
                                                 onClick={props.logout}>LogOut</div>
                        </a>
                    </label>
                </div>
                :
                <div className={s.loginBlock}>
                    <NavLink to={'/login'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </NavLink>
                </div>
            }
            </div>

        </header>
    )
}

export default Header;