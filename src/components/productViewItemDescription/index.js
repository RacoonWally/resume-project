import React, {useEffect, useState} from "react";

import './index.scss'

const ProductViewItemDescription = (props) => {


    const [className1, setClassName1] = useState('__active');
    const [className2, setClassName2] = useState('');
    const [className3, setClassName3] = useState('');
    const [className4, setClassName4] = useState('');
    const [className5, setClassName5] = useState('');
    const [selectedItemId, setSelectedItemId] = useState("1");

    // const [clicked, setClicked] = useState('__clicked');



    const openAttach = (event) => {
       setSelectedItemId(event.target.id);
    };


    useEffect(() => {
        switch (selectedItemId) {
            case "1": {
                setClassName1('__active');
                setClassName2('');
                setClassName3('');
                setClassName4('');
                setClassName5('');
                break
            }
            case "2": {
                setClassName1('');
                setClassName2('__active');
                setClassName3('');
                setClassName4('');
                setClassName5('');
                break
            }
            case "3": {
                setClassName1('');
                setClassName2('');
                setClassName3('__active');
                setClassName4('');
                setClassName5('');
                break
            }
            case "4": {
                setClassName1('');
                setClassName2('');
                setClassName3('');
                setClassName4('__active');
                setClassName5('');
                break
            }
            case "5": {
                setClassName1('');
                setClassName2('');
                setClassName3('');
                setClassName4('');
                setClassName5('__active');
                break
            }
            default:{

            }
        }
    }, [selectedItemId]);

    const {description, videoLink, sizeSpecs, deliveryReturns, reviews} = props.data;

    return (
        <div className='product-view-item-description'>
            <div className='product-view-item-description__buttons-bar'>
                <div className={`product-view-item-description__button button`}
                     onClick={(e) => openAttach(e)}
                     id={1}
                >
                    DESCRIPTION
                </div>
                <div className={`product-view-item-description__button button`}
                     onClick={(e) => openAttach(e)}
                     id={2}
                >
                    VIDEO
                </div>
                <div className={`product-view-item-description__button button`}
                     onClick={(e) => openAttach(e)}
                     id={3}
                >
                    SIZE & SPECS
                </div>
                <div className={`product-view-item-description__button button`}
                     onClick={(e) => openAttach(e)}
                     id={4}
                >
                    DELIVERY & RETURNS
                </div>
                <div className={`product-view-item-description__button button`}
                     onClick={(e) => openAttach(e)}
                     id={5}
                >
                    REVIEWS
                </div>
            </div>
            <div className='product-view-item-description__body'>
                <div className={`product-view-item-description__item ${className1}`}>
                    <p>{description}</p>
                </div>
                <div className={`product-view-item-description__item ${className2}`}>
                    <iframe src={videoLink} allowFullScreen></iframe>
                </div>
                <div className={`product-view-item-description__item ${className3}`}>
                    <p>{sizeSpecs}</p>
                </div>
                <div className={`product-view-item-description__item ${className4}`}>
                    <p>{deliveryReturns}</p>
                </div>
                <div className={`product-view-item-description__item ${className5}`}>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    )
};

export default ProductViewItemDescription;
