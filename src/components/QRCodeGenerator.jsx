import React, { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";

const QRCodeGenerator = () => {
    const [text, setText] = useState("");
    const [color1, setColor1] = useState("#000000");
    const [color2, setColor2] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [image, setImage] = useState(null);
    const [dotStyle, setDotStyle] = useState("dots");
    const [cornerStyle, setCornerStyle] = useState("extra-rounded");
    const [cornerDotStyle, setCornerDotStyle] = useState("dextra-rounded");
    const [gradientType, setGradientType] = useState("linear");
    const [imageSize, setImageSize] = useState(1);
    const [imageOpacity, setImageOpacity] = useState(1);
    const qrCodeRef = useRef(null);

    const qrCode = useRef(
        new QRCodeStyling({
            width: 300,
            height: 300,
            data: "",
            image: "",
            dotsOptions: {
                color: "#000000",
                type: "dots",
            },
            backgroundOptions: {
                color: "#ffffff",
            },
            cornersSquareOptions: {
                type: "dot",
            },
            cornersDotOptions: {
                type: "dot",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                hideBackgroundDots: true,
            },
        })
    );

    useEffect(() => {
        qrCode.current.update({
            data: text || "dhanushholla.vercel.app",
            image: image || "",
            dotsOptions: {
                gradient: {
                    type: gradientType,
                    colorStops: [
                        { offset: 0, color: color1 },
                        { offset: 1, color: color2 },
                    ],
                },
                type: dotStyle,
            },
            backgroundOptions: {
                color: bgColor,
            },
            cornersSquareOptions: {
                type: cornerStyle,
                gradient: {
                    type: gradientType,
                    colorStops: [
                        { offset: 0, color: color1 },
                        { offset: 1, color: color2 },
                    ],
                },
            },
            cornersDotOptions: {
                type: cornerDotStyle,
                gradient: {
                    type: gradientType,
                    colorStops: [
                        { offset: 0, color: color1 },
                        { offset: 1, color: color2 },
                    ],
                },
            },
            imageOptions: {
                crossOrigin: "anonymous",
                hideBackgroundDots: true,
                imageSize: imageSize,
                opacity: imageOpacity,
            },
        });
    }, [
        text,
        color1,
        color2,
        bgColor,
        image,
        dotStyle,
        cornerStyle,
        cornerDotStyle,
        gradientType,
        imageSize,
        imageOpacity,
    ]);

    useEffect(() => {
        if (qrCodeRef.current) {
            qrCode.current.append(qrCodeRef.current);
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.size < 5000000) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            alert("Image is too large! Please upload an image smaller than 5MB.");
        }
    };

    const handleDownload = () => {
        qrCode.current.download({ name: `custom-QR`, extension: "png" });
    };

    return (<>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 cursor-auto" >
            <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md max-w-md w-full mb-4 md:mb-0">
                <span className="text-xl text-center"> 🚀 Craft Your Unique QR code 💫</span>
                <label className="mt-2 mb-1 text-sm font-semibold">Type your Custom Message or Link:</label>
                <input
                    type="text"
                    placeholder="Enter text or URL"
                    value={text}
                    maxLength={200}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-2  border rounded caret-orange-600 text-orange-500"
                />
                <label className="mt-2 mb-1 text-sm font-semibold">QR Code Color Gradient Start:</label>
                <input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    title="Choose gradient start color"
                    className="w-full p-1  border rounded cursor-pointer"
                />
                <label className="mt-2 mb-1 text-sm font-semibold">QR Code Color Gradient End:</label>
                <input
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    title="Choose gradient end color"
                    className="w-full p-1  border rounded  cursor-pointer"
                />
                <label className="mt-2 mb-1 text-sm font-semibold">QR Background Color:</label>
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    title="Choose background color"
                    className="w-full p-1 border rounded  cursor-pointer"
                />
                <label className="mt-2 mb-1 text-sm font-semibold">Color Gradient Type:</label>
                <select
                    value={gradientType}
                    onChange={(e) => setGradientType(e.target.value)}
                    className="w-full p-2  border rounded cursor-pointer"
                >
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                </select>
                <label className="mt-2 mb-1 text-sm font-semibold">QR Inner Dot Style:</label>
                <select
                    value={dotStyle}
                    onChange={(e) => setDotStyle(e.target.value)}
                    className="w-full p-2  border rounded cursor-pointer"
                >
                    <option value="dots">Dots</option>
                    <option value="rounded">Rounded</option>
                    <option value="classy">Classy</option>
                    <option value="classy-rounded">Classy Rounded</option>
                    <option value="square">Square</option>
                    <option value="extra-rounded">Extra Rounded</option>
                </select>
                <label className="mt-2 mb-1 text-sm font-semibold">QR Corner Style:</label>
                <select
                    value={cornerStyle}
                    onChange={(e) => setCornerStyle(e.target.value)}
                    className="w-full p-2  border rounded cursor-pointer"
                >
                    <option value="square">Square</option>
                    <option value="dot">Dot</option>
                    <option value="extra-rounded">Extra Rounded</option>
                </select>
                <label className="mt-2 mb-1 text-sm font-semibold">QR Corner Dot Style:</label>
                <select
                    value={cornerDotStyle}
                    onChange={(e) => setCornerDotStyle(e.target.value)}
                    className="w-full p-2  border rounded cursor-pointer"
                >
                    <option value="square">Square</option>
                    <option value="dot">Dot</option>
                    <option value="extra-rounded">Extra Rounded</option>
                </select>
                <label className="mt-2 mb-1 text-sm font-semibold">Upload your custom image or logo:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full " />
                <label className="mt-2 text-sm font-semibold">Image Size (0.1 to 1):</label>
                <input
                    type="range"
                    min="0.0"
                    max="1"
                    step="0.2"
                    value={imageSize}
                    onChange={(e) => setImageSize(parseFloat(e.target.value))}
                    className="w-full cursor-pointer"
                />
            </div>
            <div className="flex flex-col items-center sm:ml-4">
                <div ref={qrCodeRef} className="border-2 border-gray-200 p-2 rounded-lg cursor-none"></div>
                <button
                    onClick={handleDownload}
                    className="mt-4 px-4 py-2 border-gray-500 border-2 bg-white text-black rounded-xl hover:text-orange-500 cursor-pointer"
                >
                    Download QR ✨
                </button>
            </div>
        </div>
        <div className="text-center mt-0">Made with ❤️ by Dhanush Holla</div>

    </>


    );
};

export default QRCodeGenerator;
