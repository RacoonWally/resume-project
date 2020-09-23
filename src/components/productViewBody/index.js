import React from "react";

import './index.scss'
import ProductViewItem from "../productViewItem";
import ProductViewItemDescription from "../productViewItemDescription";

const ProductViewBody = () => {
    const data = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias, ' +
        'nobis odit quam quasi quia quidem ratione repudiandae! Consequatur corporis delectus distinctio eaque et, exercitationem, fuga, id illum impedit in ipsam iusto ' +
        'laboriosam nemo nulla numquam obcaecati odio perspiciatis repellat ut voluptatem.',
        videoLink: 'https://www.youtube.com//embed/qLSYAOD5TX8',
        sizeSpecs: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias, ' +
        'nobis odit quam quasi quia quidem ratione repudiandae! Consequatur corporis delectus distinctio eaque et, exercitationem, fuga, id illum impedit in ipsam iusto ',
        deliveryReturns: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias, ' +
            'nobis odit quam quasi quia quidem ratione repudiandae! Consequatur corporis delectus distinctio eaque et, exercitationem, fuga, id illum impedit in ipsam iusto ' +
            'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias, ' +
        'nobis odit quam quasi quia quidem ratione repudiandae! Consequatur corporis delectus distinctio eaque et, exercitationem, fuga, id illum impedit in ipsam iusto ',
        reviews:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias, ' +
            'nobis odit quam quasi quia quidem ratione repudiandae! Consequatur corporis delectus distinctio eaque et, exercitationem, fuga, id illum impedit in ipsam iusto ' +
            'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa deserunt ducimus eligendi expedita explicabo impedit laborum molestias'
    };
    return(
        <div className='product-view-body'>
            <ProductViewItem/>
            <ProductViewItemDescription data={data}/>
        </div>
    )
};

export default ProductViewBody
