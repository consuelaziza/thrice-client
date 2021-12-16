import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

  

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
