import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './index.scss'

const Categories = (props) => {

    const [formalArr, setFormalArr] = useState([""]);
    const [casualArr, setCasualArr] = useState([""]);

    useEffect(() => {
        setFormalArr(propsToArr(props.formal));
        setCasualArr(propsToArr(props.casual));
    }, []);


    const propsToArr = (prop) => {
        const data = [...prop.subcategories];
        const arr = [];
        for (let key in data) {
            arr.push(data[key])
        }
        return arr;
    };


    return (
        <div className='categories'>
            <div className='categories__grid'>
                <div className='categories__column'>
                    <div><label>FORMAL</label></div>
                    <ul className='categories__list'>
                        {formalArr.map((item, key)=> {
                            return (
                                <li className='categories__item' key={key}><Link to='/' >{item}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='categories__column'>
                    <div><label>CASUAL</label></div>
                    <ul className='categories__list'>
                        {casualArr.map((item, key)=> {
                            return(
                                <li className='categories__item' key={key}><Link to='/'>{item}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='categories__discount'>
                <label>AUTUMN SALE!<br/>UP TO 50% OFF</label>
            </div>
        </div>
    )
};


export default Categories;
