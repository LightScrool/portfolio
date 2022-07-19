import React, {FC} from 'react';

export enum SVGIds {
    languages,
    maskFrame1,
    maskFrame2,
    circle,
    wave,
    dots,
    arrows
}

type TStroke = {
    width: string | number
    color: string
    opacity: string | number
}

interface SVGProps {
    Id: SVGIds
    className?: string
    fill?: string
    stroke?: TStroke
}

const SVG: FC<SVGProps> = ({
                               Id,
                               className = "",
                               fill,
                               stroke,
                           }) => {
    switch (Id) {

        case SVGIds.languages:
            return (
                <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M68.75 50C68.75 54.3359 68.5156 58.5156 68.1055 62.5H31.8945C31.4844 58.5156 31.0742 54.3359 31.0742 50C31.0742 45.6641 31.4844 41.4844 31.8945 37.5H68.1055C68.5156 41.4844 68.75 45.6641 68.75 50ZM98.418 37.5C99.4531 41.5039 100 45.6836 100 50C100 54.3164 99.4531 58.4961 98.418 62.5H74.375C74.7852 58.4766 75 54.1211 75 50C75 45.7031 74.7852 41.5234 74.375 37.5H98.418ZM96.3672 31.25H73.5742C71.6211 18.7773 67.7539 8.32422 62.7734 1.64883C78.0859 5.68164 90.5078 16.7852 96.3672 31.25ZM67.2461 31.25H32.7539C33.9453 24.1406 35.7812 17.8477 38.0273 12.7637C40.0781 8.15234 42.3633 4.80664 44.5703 2.69727C46.7578 0.620703 48.5742 0 50 0C51.4258 0 53.2422 0.620703 55.4297 2.69727C57.6367 4.80664 59.9219 8.15234 61.9727 12.7637C64.2187 17.8477 66.0547 24.1406 67.2461 31.25ZM3.63477 31.25C9.49023 16.7852 21.9141 5.68164 37.2266 1.64883C32.2461 8.32422 28.3789 18.7773 26.4258 31.25H3.63477ZM25.625 37.5C25.2148 41.5234 24.8242 45.7031 24.8242 50C24.8242 54.1211 25.2148 58.4766 25.625 62.5H1.5752C0.546875 58.4961 0 54.3164 0 50C0 45.6836 0.546875 41.5039 1.5752 37.5H25.625ZM38.0273 87.2266C35.7812 82.1484 33.9453 75.8594 32.7539 68.75H67.2461C66.0547 75.8594 64.2187 82.1484 61.9727 87.2266C59.9219 91.8555 57.6367 95.1953 55.4297 97.3047C53.2422 99.375 51.4258 100 49.8242 100C48.5742 100 46.7578 99.375 44.5703 97.3047C42.3633 95.1953 40.0781 91.8555 38.0273 87.2266ZM37.2266 98.3594C21.9141 94.3164 9.49023 83.2227 3.63477 68.75H26.4258C28.3789 81.2305 32.2461 91.6797 37.2266 98.3594ZM62.7734 98.3594C67.7539 91.6797 71.6211 81.2305 73.5742 68.75H96.3672C90.5078 83.2227 78.0859 94.3164 62.7734 98.3594Z"
                        fill={fill || "white"}
                    />
                </svg>
            )

        case SVGIds.maskFrame1:
            return (
                <svg className={className} viewBox="0 0 100 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M91.6404 72.3815C87.3044 79.7973 81.7639 86.7893 74.1758 90.1793C66.4673 93.4634 56.8317 93.1456 47.1961 92.9337C37.5605 92.8278 28.0453 92.9337 19.855 89.8615C11.6647 86.7893 4.67888 80.6448 1.7882 73.4409C-1.1025 66.1311 0.101961 57.8678 1.30642 50.1342C2.51087 42.4006 3.83576 35.3027 6.8469 28.2047C9.85803 21.1068 14.435 14.0089 21.4208 8.81782C28.4066 3.62679 37.8014 0.34267 47.3165 0.0248522C56.8317 -0.292966 66.4673 2.46146 74.8985 6.91092C83.2092 11.3604 90.3155 17.7167 94.6515 25.0266C98.9876 32.4423 100.553 41.0234 99.8307 49.0748C99.108 57.2322 95.9764 64.9657 91.6404 72.3815Z"
                        fill={fill || "white"}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case SVGIds.maskFrame2:
            return (
                <svg className={className} viewBox="0 0 100 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.0716 0.252386C27.6098 -1.12785 15.4937 3.21769 8.30704 11.7017C1.17482 20.0662 -1.16028 32.5119 0.520795 44.8354C2.12393 56.9821 7.74324 69.0066 17.3051 75.1508C26.6802 81.3573 40.0523 81.5639 51.9449 80.8437C63.7052 80.0662 75.3822 79.3615 83.1521 73.8842C90.922 68.407 94.5716 62.7 98.3005 53.0598C102.029 43.4195 99.4113 32.7767 92.5088 24.2162C86.3997 17.2753 79.5909 16.9408 68.5982 12.897C57.6599 8.73363 48.5878 1.51302 38.0716 0.252386Z"
                        fill={fill || "white"}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case SVGIds.circle:
            return (
                <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill={fill || "white"}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case SVGIds.wave:
            return (
                <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="28.8" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
                    <circle cx="50" cy="50" r="35.2" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
                    <circle cx="50" cy="50" r="41.6" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
                    <circle cx="50" cy="50" r="48" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
                    <circle cx="25.4" cy="16.6" r="1.43" fill="white" fillOpacity="0.4"/>
                </svg>

            )

        case SVGIds.dots:
            return (
                <svg className={className} viewBox="0 0 60 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots-pattern" patternUnits="userSpaceOnUse" width="12" height="12">
                            <circle fill="#fff" fillOpacity="0.2" cx="6" cy="6" r="1"/>
                        </pattern>
                    </defs>
                    <rect fill="url(#dots-pattern)" width="60" height="108"/>
                </svg>
            )

        case SVGIds.arrows:
            return (
                <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M49.9955 57.8565C47.8633 57.8565 45.7301 57.0493 44.1052 55.435L2.44125 14.109C-0.81375 10.8804 -0.81375 5.65005 2.44125 2.42145C5.69625 -0.80715 10.9693 -0.80715 14.2243 2.42145L49.9955 37.9167L85.7744 2.4279C89.0294 -0.800694 94.3025 -0.800694 97.5575 2.4279C100.812 5.6565 100.812 10.8868 97.5575 14.1154L55.8935 55.4415C54.266 57.0558 52.1307 57.8565 49.9955 57.8565Z"
                        fill="white" fillOpacity="0.65"
                    />
                    <path
                        d="M49.9967 100C47.8645 100 45.7313 99.1929 44.1064 97.5786L2.44247 56.2525C-0.812529 53.0239 -0.812529 47.7936 2.44247 44.565C5.69747 41.3364 10.9706 41.3364 14.2256 44.565L49.9967 80.0602L85.7756 44.5715C89.0306 41.3429 94.3037 41.3429 97.5587 44.5715C100.814 47.8001 100.814 53.0304 97.5587 56.259L55.8947 97.585C54.2672 99.1993 52.132 100 49.9967 100Z"
                        fill="white" fillOpacity="0.65"
                    />
                </svg>

            )
    }
};

export default SVG;