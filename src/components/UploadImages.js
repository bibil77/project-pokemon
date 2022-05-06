import { useEffect, useState } from "react";

export default function UploadImages(props){
    const [images, setImages] = useState([]);
    // const [imageURLs, setImageURLs] = useState([])

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        props.setImageURLs(newImageUrls)
    }, [images]);

    function onImageChange(e){
        setImages([...e.target.files]);
    };

    return(
        <>
            <input type="file" className={props.className} multiple accept="image/*" onChange={onImageChange} />
            {/* { props.imageURLs.map(imageSrc => <img src={imageSrc} width={"100%"} height={"100%"}/>) } */}
        </>
    );
};