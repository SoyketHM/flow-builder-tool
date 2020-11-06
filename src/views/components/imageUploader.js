import React, { useState } from 'react';

function ImageUploader(props) {
    let { card, setCard, handleChange } = props;
    const [picture, setPicture] = useState({ file: '', imagePreviewUrl: '' });

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPicture({
                file: file,
                imagePreviewUrl: reader.result
            });
            setCard({
                id: card.id,
                text: card.text,
                picture: [...card.picture, {
                    file: file,
                    imagePreviewUrl: reader.result
                }]
            })
        }
        handleChange(e);

        reader.readAsDataURL(file)
    };

    let { imagePreviewUrl } = picture;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt='' />);
    } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
        <div className="previewComponent" style={{ marginTop: 20 }}>
            <i className="far fa-images" onClick={() => document.getElementById("fileInput").click()} style={{ padding: 10, margin: 10, fontSize: 30, border: 1, borderStyle: "dashed", cursor: "pointer" }}></i>
            <input className="fileInput"
                id="fileInput"
                style={{ display: "none" }}
                type="file"
                onChange={(e) => handleImageChange(e)} />
            <div className="imgPreview">
                {$imagePreview}
            </div>
        </div>
    )
}

export default ImageUploader