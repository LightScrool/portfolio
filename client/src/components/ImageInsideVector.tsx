import React, {FC, ReactNode} from 'react';

interface ImageInsideVectorProps {
    imageURL: string
    maskVector: ReactNode
    viewBox?: string
    imageWidth?: string | number
    imageTransform?: string
    className?: string
}

const ImageInsideVector: FC<ImageInsideVectorProps> = ({
                                   imageURL,
                                   maskVector,
                                   viewBox = "0 0 100 100",
                                   imageWidth = "100",
                                   imageTransform = "",
                                   className = "ImageInsideSvg"
                               }) => {

    const maskId = `${className}__mask`;

    return (
        <svg
            viewBox={viewBox}
            className={className}
        >
            <mask id={maskId}>{maskVector}</mask>

            <g mask={`url(#${maskId})`}>
                <image xlinkHref={imageURL} width={imageWidth} transform={imageTransform}/>
            </g>
        </svg>
    );
};

export default ImageInsideVector;