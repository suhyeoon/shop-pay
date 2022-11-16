import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [importedImages, setImportedImages] = useState([]) /* 가져온 이미지 [ ] state */

    useEffect(() => {
        if (props.product.images && props.product.images.length > 0) {
            let images = []

            props.product.images.map((item) => {
                return images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImportedImages(images)
        }
    }, [props.product]) /* props.product 값이 변할 때마다 실행 */

    return (
        <div>
            <ImageGallery items={importedImages} />
        </div>
    )
}

export default ProductImage;