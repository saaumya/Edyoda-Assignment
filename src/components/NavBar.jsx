import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

// import '../css/NavBar.css';

import logo from "../svgs/logo.svg";

const NavBar = () => {
    const [isCourseMenuOpen, setCourseMenuOpen] = useState(false);
    const [isProgramMenuOpen, setProgramMenuOpen] = useState(false);

    const toggleCourseMenu = () => {
        setCourseMenuOpen(!isCourseMenuOpen);
    };

    const toggleProgramMenu = () => {
        setProgramMenuOpen(!isProgramMenuOpen);
    };

    return (
        <Container>
            <ul className="navbar" style={{ listStyleType: "none" }}>
                <div className="left-content">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" />
                    </a>

                    <li className="dropdown" onClick={toggleCourseMenu}>
                        {/* <a href="/">Courses</a> */}
                        Courses
                        <FaAngleDown className="dropdown-icon" />
                        {isCourseMenuOpen && !isProgramMenuOpen && (
                            <ul
                                className="dropdown-menu"
                                style={{ listStyleType: "none" }}>
                                <li>
                                    <a href="/">Web Development</a>
                                </li>
                                <li>
                                    <a href="/">Data Science</a>
                                </li>
                                <li>
                                    <a href="/">Design</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="dropdown" onClick={toggleProgramMenu}>
                        {/* <a href="/">Programs</a> */}
                        Programs
                        <FaAngleDown className="dropdown-icon" />
                        {isProgramMenuOpen && !isCourseMenuOpen && (
                            <ul
                                className="dropdown-menu"
                                style={{ listStyleType: "none" }}>
                                <li>
                                    <a href="/">Full Stack Development</a>
                                </li>
                                <li>
                                    <a href="/">Machine Learning</a>
                                </li>
                                <li>
                                    <a href="/">UX Design</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </div>
          
          <div className="right-content">
            <div className="search-icon">
            <BiSearch />
            </div>
            <div className="login">
              <a href="/">Login</a>
            </div>
            <div className="signup-btn">
              <button> Join now</button>
            </div>
          </div>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 55px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    /* position: fixed; */
    top: 0;
    z-index: 100;

    .li {
        display: inline-block;
        margin: 0 10px;

        a {
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
        }
    }

    .logo {
        // position: absolute;
        width: 158px;
        height: 45px;
        // left: 60px;
        // top: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-content {


        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 64px;

        width: 492px;
        height: 45px;

        margin-left: 25px;
    }

    .dropdown {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .dropdown-menu {
        position: absolute;
        width: 200px;
        height: 100px;
        left: 12em;
        top: 45px;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        gap: 10px;
        z-index: 100;

        a {
            text-decoration: none;
            color: black;
            font-size: 1rem;
            text-align: center;

            &:hover {
                color: #ffb800;
            }
        }
    }

    .dropdown-icon {
        font-size: 1rem;
        color: #000000;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    .right-content {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 3em;
        margin-left: 25em;
    }

    .search-icon{
        
        width: 24px;
        height: 24px;
        font-size: 1.2rem;
        
        color: #000000;
    }

    .login {

        a{
            text-decoration: none;
            color: black;
            font-size: 1rem;
            text-align: center;
            &:hover {
                color: #47BA68;
                cursor: pointer;

            }
        }
    }

    .signup-btn {
        button {
            width: 140px;
            height: 40px;
            padding: 0 1rem;
            background: linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%);
            border-radius: 25px;

            border: none;
            font-size: .9rem;
            color: #ffffff;
            cursor: pointer;
            text-align: center;
            text-transform: uppercase;


    }

`;

export default NavBar;
