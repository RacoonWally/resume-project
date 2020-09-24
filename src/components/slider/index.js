import React, {useState, useEffect} from "react";

import './index.scss'

const Slider = (props) => {

    const [className1, setClassName1] = useState('active');
    const [className2, setClassName2] = useState('');
    const [className3, setClassName3] = useState('');
    const [iterator, setIterator] = useState(1);
    const [count, setCount] = useState(3);



    useEffect(() => {
        switch (iterator) {
            case 1: {
                setClassName1('active');
                setClassName2('');
                setClassName3('');
                break
            }
            case 2: {
                setClassName1('');
                setClassName2('active');
                setClassName3('');
                break
            }
            case 3: {
                setClassName1('');
                setClassName2('');
                setClassName3('active');
                break
            }
            default: {
            }
        }
    }, [iterator]);

    const arrowClickRight = () => {
        if (iterator + 1 > count) {
            setIterator(1);
        } else {
            setIterator(iterator + 1);
        }
    };

    const arrowClickLeft = () => {
        if (iterator - 1 <= 0) {
            setIterator(count);
        } else {
            setIterator(iterator - 1);
        }
    };

    return (


        <div className='slider'>
            <div className='slider__arrow slider__arrow__left' onClick={(e) => arrowClickLeft()}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div className='slider__arrow slider__arrow__right' onClick={(e) => arrowClickRight()}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className={`slider__image + ${className1}`}>
                <img src="../../../public/images/slider-image.png" alt=""/>
            </div>
            <div className={`slider__image + ${className2}`}>
                <img src="../../../public/images/item_1.png" alt=""/>
            </div>
            <div className={`slider__image + ${className3}`}>
                <img src="../../../public/images/item_2.png" alt=""/>
            </div>
        </div>
    )
};

export default Slider;
