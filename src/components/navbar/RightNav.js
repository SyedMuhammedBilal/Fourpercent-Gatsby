import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import "./Nav.css"
import { navigate } from 'gatsby'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li{
        padding: 18px 18px;
        color: #fff;
        font-size: 20px;
        /* font-family: sans-serif; */
        font-weight: 400;
    }
    @media(max-width: 768px){
        flex-flow: row;
        background-color: #e04b89;
        position: fixed;
        transform: ${({ open }) => open ? ' translateY(0%)' : 'translateY(-100%)'};
        top : -65px;
        right : 0 ;
        min-height: 35vh;
    min-width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.7s ease-in-out; 
        li{
            color: #fff;
            font-size: medium;
        }  
    }
`

function RightNav({ open, setOpen }) {
    const handeInputChange = useCallback(open => {
        setOpen(!open)
        navigate('/#2020')
    }, [setOpen])
    const [color, setColor] = useState(false);
    const [fill, setFill] = useState('#fff');

    const changeColor = () => {
        if(window.scrollY >= 80) {
            setColor(true);
            setFill('#e82275')
        } else {
            setColor(false);
            setFill('#fff');
        }
    }

    window.addEventListener('scroll', changeColor)

    return (

        <Ul style={{ zIndex: "25" }} className="dropdown" open={open}>
            <li onClick={() => navigate('/#about'), handeInputChange} style={{color: fill, transition: '.4s all'}} className="dropbtn">
                About fourpercent
            </li>
            <div className="dropdown-content">
                <a style={{ cursor: 'pointer', marginBottom: '2px' }} onClick={() => navigate('/#2017'), handeInputChange} > 2019</a>
                <a style={{ cursor: 'pointer' }} onClick={() => navigate('/#2020'), handeInputChange} >2020</a>
            </div>
            <li onClick={() => navigate('/#contact'), handeInputChange} style={{color: fill, transition: '.4s all'}} className="lii">
                Contact
            </li>
        </Ul>


    )
}

export default RightNav