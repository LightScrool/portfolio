import React, {FC} from 'react';
import {TSvgStroke, TSvgFill, TMySvgId} from "../types";
import {COLORS} from "../styles/variables";

interface SVGProps {
    Id: TMySvgId
    className?: string
    fill?: TSvgFill
    stroke?: TSvgStroke
    style?: React.CSSProperties
    onClick?: (event?: React.MouseEvent) => void
}

const MySvg: FC<SVGProps> = (
    {
        Id,
        className = "",
        fill,
        stroke,
        style,
        onClick
    }) => {

    switch (Id) {

        case TMySvgId.languagesFill:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M66.5938 50C66.5938 53.8373 66.3863 57.5363 66.0233 61.0625H33.9767C33.6137 57.5363 33.2507 53.8373 33.2507 50C33.2507 46.1627 33.6137 42.4637 33.9767 38.9375H66.0233C66.3863 42.4637 66.5938 46.1627 66.5938 50ZM92.8499 38.9375C93.766 42.481 94.25 46.18 94.25 50C94.25 53.82 93.766 57.519 92.8499 61.0625H71.5719C71.9349 57.5018 72.125 53.6472 72.125 50C72.125 46.1973 71.9349 42.4982 71.5719 38.9375H92.8499ZM91.035 33.4062H70.8632C69.1347 22.3679 65.7122 13.1169 61.3045 7.20921C74.8561 10.7783 85.8494 20.6049 91.035 33.4062ZM65.2628 33.4062H34.7372C35.7916 27.1145 37.4164 21.5452 39.4042 17.0458C41.2191 12.9648 43.2415 10.0039 45.1947 8.13708C47.1307 6.29932 48.7382 5.75 50 5.75C51.2618 5.75 52.8693 6.29932 54.8053 8.13708C56.7585 10.0039 58.7809 12.9648 60.5958 17.0458C62.5836 21.5452 64.2084 27.1145 65.2628 33.4062ZM8.96677 33.4062C14.1489 20.6049 25.1439 10.7783 38.6955 7.20921C34.2878 13.1169 30.8653 22.3679 29.1368 33.4062H8.96677ZM28.4281 38.9375C28.0651 42.4982 27.7194 46.1973 27.7194 50C27.7194 53.6472 28.0651 57.5018 28.4281 61.0625H7.14405C6.23398 57.519 5.75 53.82 5.75 50C5.75 46.18 6.23398 42.481 7.14405 38.9375H28.4281ZM39.4042 82.9455C37.4164 78.4514 35.7916 72.8855 34.7372 66.5938H65.2628C64.2084 72.8855 62.5836 78.4514 60.5958 82.9455C58.7809 87.0421 56.7585 89.9979 54.8053 91.8647C52.8693 93.6969 51.2618 94.25 49.8444 94.25C48.7382 94.25 47.1307 93.6969 45.1947 91.8647C43.2415 89.9979 41.2191 87.0421 39.4042 82.9455ZM38.6955 92.798C25.1439 89.22 14.1489 79.4021 8.96677 66.5938H29.1368C30.8653 77.639 34.2878 86.8865 38.6955 92.798ZM61.3045 92.798C65.7122 86.8865 69.1347 77.639 70.8632 66.5938H91.035C85.8494 79.4021 74.8561 89.22 61.3045 92.798Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>

            )

        case TMySvgId.languagesStroke:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M47.5247 0.0511701C33.7547 0.751201 20.9847 7.01648 12.0246 17.472C5.61963 24.9423 1.56962 34.1177 0.374615 43.8481C-0.950388 54.6986 1.25962 65.6141 6.68463 74.9895C13.1446 86.155 23.7347 94.4604 36.0647 98.0306C44.9047 100.591 54.3747 100.656 63.2498 98.2206C67.8998 96.9455 72.4448 94.9454 76.6048 92.3403C82.1598 88.8552 87.1398 84.1149 90.9598 78.6747C93.7048 74.7645 95.9298 70.3443 97.4498 65.7991C101.055 55.0036 100.83 43.1081 96.8248 32.4226C93.8848 24.5773 88.9298 17.512 82.5248 12.0217C74.5598 5.1914 64.6548 1.04621 54.2247 0.171175C52.1547 0.00116781 49.4947 -0.0488344 47.5247 0.0511701ZM51.1997 5.77143C54.6597 6.71147 58.4197 11.5217 61.2498 18.622C62.8398 22.6072 64.1348 27.3024 65.0248 32.2926C65.1198 32.8276 65.1998 33.2827 65.1998 33.3027C65.1998 33.3277 58.4647 33.3477 49.9747 33.3477C40.2397 33.3477 34.7497 33.3327 34.7497 33.2977C34.7497 33.2727 34.8497 32.7026 34.9747 32.0326C36.4747 23.8122 38.9647 16.7419 42.0597 11.8967C44.3447 8.32654 46.8747 6.10144 49.1447 5.67142C49.7047 5.56642 50.5947 5.60642 51.1997 5.77143ZM38.4497 7.3815C34.6897 12.5767 31.6447 20.3971 29.8247 29.5225C29.6297 30.4975 29.1497 33.1927 29.1497 33.3077C29.1497 33.3327 24.6197 33.3477 19.0797 33.3477H9.00464L9.21964 32.8326C13.1696 23.4172 20.1497 15.7069 29.1247 10.8467C31.7547 9.42159 34.5047 8.29154 37.5747 7.3715C38.0697 7.22149 38.5147 7.10149 38.5647 7.09649C38.6397 7.09649 38.6147 7.15149 38.4497 7.3815ZM62.1198 7.2965C72.1198 10.1666 80.8898 16.5919 86.6648 25.2723C88.2098 27.5974 89.4048 29.7875 90.5048 32.3226L90.9398 33.3227L80.8848 33.3377C75.3548 33.3427 70.8248 33.3427 70.8198 33.3327C70.8098 33.3277 70.7448 32.9726 70.6748 32.5476C68.8948 21.9322 65.7298 13.2668 61.4798 7.3565C61.3748 7.21649 61.3198 7.09649 61.3548 7.09649C61.3898 7.09649 61.7348 7.18649 62.1198 7.2965ZM28.4247 39.0329C28.3797 39.2779 28.1047 42.3231 27.9997 43.6981C27.8147 46.1032 27.7947 46.6483 27.7647 49.1484C27.7297 52.1035 27.8047 53.9686 28.0747 57.2487C28.1797 58.4888 28.3947 60.7339 28.4297 60.9389L28.4547 61.0989L17.8147 61.0889L7.17463 61.0739L7.03963 60.4989C5.44963 53.8236 5.39463 46.9633 6.87963 40.228C7.02963 39.5379 7.16463 38.9579 7.17963 38.9379C7.19463 38.9179 11.9846 38.8979 17.8247 38.8979H28.4497L28.4247 39.0329ZM66.0848 40.123C66.3248 42.7631 66.4298 44.6482 66.5048 47.6833C66.6048 51.5485 66.4598 55.7487 66.0848 59.8739L65.9748 61.0739H49.9747H33.9747L33.8897 60.2239C33.4147 55.4487 33.2797 53.2436 33.2797 50.0234C33.2797 47.1933 33.3847 45.1282 33.6997 41.748C33.9197 39.4279 33.9597 39.0179 33.9797 38.9579C33.9947 38.9079 37.2197 38.8979 49.9847 38.9079L65.9748 38.9229L66.0848 40.123ZM92.7948 39.0829C93.3198 41.028 93.8098 43.9881 93.9998 46.3482C94.3948 51.2185 93.9598 56.4587 92.7948 60.9089L92.7448 61.0989H82.1248H71.5048L71.5298 60.9339C71.5998 60.3939 71.7798 58.1088 71.8698 56.5237C72.0198 53.9986 72.0648 51.9735 72.0348 48.8484C72.0048 45.8632 71.9848 45.1982 71.8248 42.6731C71.7448 41.433 71.5698 39.3429 71.5248 39.0579L71.4948 38.8979H82.1198H92.7448L92.7948 39.0829ZM29.1497 66.6842C29.1497 66.7992 29.6347 69.5193 29.8297 70.4893C31.6147 79.4447 34.5297 87.0301 38.2147 92.2753C38.4547 92.6203 38.6497 92.9103 38.6497 92.9203C38.6497 92.9303 38.2297 92.8153 37.7147 92.6653C26.4497 89.4002 16.9247 81.7248 11.2346 71.3394C10.5096 70.0143 9.96464 68.8943 9.32464 67.3842L9.00964 66.6492H19.0797C24.6197 66.6492 29.1497 66.6642 29.1497 66.6842ZM65.1998 66.6942C65.1998 66.7842 64.7998 68.9543 64.6248 69.7993C62.8848 78.2847 60.0698 85.375 56.6847 89.8252C54.8247 92.2653 52.9547 93.7504 51.1197 94.2304C50.4697 94.4054 49.4197 94.4254 48.8747 94.2804C48.0547 94.0654 47.1497 93.5954 46.2647 92.9303C45.6447 92.4653 44.4597 91.3053 43.8547 90.5752C39.9197 85.825 36.6747 77.5146 34.9247 67.7042C34.8297 67.1692 34.7497 66.7142 34.7497 66.6942C34.7497 66.6692 41.4847 66.6492 49.9747 66.6492C58.8347 66.6492 65.1998 66.6692 65.1998 66.6942ZM90.7398 67.1342C89.4798 70.1693 87.7698 73.2295 85.7848 75.9996C85.3748 76.5696 84.2848 77.9947 84.0198 78.2997C83.9598 78.3697 83.6698 78.7047 83.3748 79.0497C82.7698 79.7547 81.1148 81.5298 80.7898 81.8248C80.6698 81.9298 80.3498 82.2299 80.0748 82.4899C75.6298 86.7201 69.8598 90.1602 63.8498 92.1603C62.7748 92.5203 61.4198 92.9153 61.3548 92.8903C61.3298 92.8803 61.5048 92.6053 61.7348 92.2753C63.4098 89.8902 65.0648 86.7351 66.4148 83.3499C68.2148 78.8297 69.6098 73.6595 70.5998 67.8992C70.7098 67.2542 70.7998 66.7092 70.7998 66.6842C70.7998 66.6642 75.3298 66.6492 80.8698 66.6492H90.9448L90.7398 67.1342Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>


            )

        case TMySvgId.maskFrame1:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 94" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M91.6404 72.3815C87.3044 79.7973 81.7639 86.7893 74.1758 90.1793C66.4673 93.4634 56.8317 93.1456 47.1961 92.9337C37.5605 92.8278 28.0453 92.9337 19.855 89.8615C11.6647 86.7893 4.67888 80.6448 1.7882 73.4409C-1.1025 66.1311 0.101961 57.8678 1.30642 50.1342C2.51087 42.4006 3.83576 35.3027 6.8469 28.2047C9.85803 21.1068 14.435 14.0089 21.4208 8.81782C28.4066 3.62679 37.8014 0.34267 47.3165 0.0248522C56.8317 -0.292966 66.4673 2.46146 74.8985 6.91092C83.2092 11.3604 90.3155 17.7167 94.6515 25.0266C98.9876 32.4423 100.553 41.0234 99.8307 49.0748C99.108 57.2322 95.9764 64.9657 91.6404 72.3815Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case TMySvgId.maskFrame2:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 82" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.0716 0.252386C27.6098 -1.12785 15.4937 3.21769 8.30704 11.7017C1.17482 20.0662 -1.16028 32.5119 0.520795 44.8354C2.12393 56.9821 7.74324 69.0066 17.3051 75.1508C26.6802 81.3573 40.0523 81.5639 51.9449 80.8437C63.7052 80.0662 75.3822 79.3615 83.1521 73.8842C90.922 68.407 94.5716 62.7 98.3005 53.0598C102.029 43.4195 99.4113 32.7767 92.5088 24.2162C86.3997 17.2753 79.5909 16.9408 68.5982 12.897C57.6599 8.73363 48.5878 1.51302 38.0716 0.252386Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case TMySvgId.circle:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )

        case TMySvgId.wave:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="50"
                        cy="50"
                        r="28.8"
                        strokeWidth="0.6"
                        stroke={fill ? fill.color : "none"}
                        strokeOpacity={fill ? fill.opacity / 4 : 1 / 4}
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="35.2"
                        strokeWidth="0.6"
                        stroke={fill ? fill.color : "none"}
                        strokeOpacity={fill ? fill.opacity / 4 : 1 / 4}
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="41.6"
                        strokeWidth="0.6"
                        stroke={fill ? fill.color : "none"}
                        strokeOpacity={fill ? fill.opacity / 4 : 1 / 4}
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        strokeWidth="0.6"
                        stroke={fill ? fill.color : "none"}
                        strokeOpacity={fill ? fill.opacity / 4 : 1 / 4}
                    />
                    <circle
                        cx="25.4"
                        cy="16.6"
                        r="1.43"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                    />
                </svg>
            )

        case TMySvgId.dots:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 60 108" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots-pattern" patternUnits="userSpaceOnUse" width="12" height="12">
                            <circle
                                cx="6"
                                cy="6"
                                r="1"
                                fill={fill ? fill.color : "none"}
                                fillOpacity={fill ? fill.opacity : 1}
                                stroke={stroke ? stroke.color : "none"}
                                strokeWidth={stroke ? stroke.width : 0}
                                strokeOpacity={stroke ? stroke.opacity : 1}
                            />
                        </pattern>
                    </defs>
                    <rect fill="url(#dots-pattern)" width="60" height="108"/>
                </svg>
            )

        case TMySvgId.arrows:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M49.9955 57.8565C47.8633 57.8565 45.7301 57.0493 44.1052 55.435L2.44125 14.109C-0.81375 10.8804 -0.81375 5.65005 2.44125 2.42145C5.69625 -0.80715 10.9693 -0.80715 14.2243 2.42145L49.9955 37.9167L85.7744 2.4279C89.0294 -0.800694 94.3025 -0.800694 97.5575 2.4279C100.812 5.6565 100.812 10.8868 97.5575 14.1154L55.8935 55.4415C54.266 57.0558 52.1307 57.8565 49.9955 57.8565Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                    <path
                        d="M49.9967 100C47.8645 100 45.7313 99.1929 44.1064 97.5786L2.44247 56.2525C-0.812529 53.0239 -0.812529 47.7936 2.44247 44.565C5.69747 41.3364 10.9706 41.3364 14.2256 44.565L49.9967 80.0602L85.7756 44.5715C89.0306 41.3429 94.3037 41.3429 97.5587 44.5715C100.814 47.8001 100.814 53.0304 97.5587 56.259L55.8947 97.585C54.2672 99.1993 52.132 100 49.9967 100Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>

            )

        case TMySvgId.react:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M81.6797 34.6257C80.625 34.2746 79.5703 33.943 78.5156 33.631C78.6914 32.9093 78.8477 32.1876 79.0039 31.466C81.4062 19.8415 79.8242 10.4991 74.4922 7.4174C69.3555 4.47228 60.9766 7.53443 52.5 14.907C51.6602 15.6286 50.8398 16.3893 50.0586 17.15C49.5312 16.6429 48.9844 16.1357 48.4375 15.6481C39.5508 7.76848 30.6445 4.45277 25.3125 7.55393C20.1953 10.5186 18.6719 19.3149 20.8203 30.3153C21.0352 31.4075 21.2695 32.4802 21.543 33.5724C20.293 33.9235 19.0625 34.3136 17.9102 34.7232C7.48047 38.3315 0 44.0267 0 49.9169C0 56.0022 7.96875 62.107 18.8086 65.8128C19.6875 66.1053 20.5664 66.3979 21.4648 66.6515C21.1719 67.8217 20.918 68.9724 20.6836 70.1622C18.6328 80.987 20.2344 89.5688 25.3516 92.5139C30.625 95.5566 39.4922 92.4359 48.125 84.8878C48.8086 84.2832 49.4922 83.6591 50.1758 82.9959C51.0352 83.8346 51.9336 84.6343 52.832 85.4144C61.1914 92.5919 69.4531 95.4981 74.5508 92.5529C79.8242 89.5103 81.543 80.2848 79.3164 69.0505C79.1406 68.1923 78.9453 67.3146 78.7305 66.4174C79.3555 66.2419 79.9609 66.0468 80.5664 65.8518C91.8359 62.1265 100 56.0997 100 49.9169C100 44.0072 92.3047 38.2729 81.6797 34.6257ZM55.2539 18.0667C62.5195 11.7473 69.2969 9.27029 72.3828 11.0452C75.6836 12.9371 76.9531 20.5827 74.8828 30.6273C74.7461 31.2905 74.6094 31.9341 74.4336 32.5777C70.0977 31.6025 65.7031 30.9004 61.2891 30.5103C58.75 26.8825 55.9766 23.4108 52.9688 20.1536C53.7305 19.4319 54.4727 18.7493 55.2539 18.0667ZM32.6562 60.0396C33.6523 61.7364 34.668 63.4333 35.7422 65.0911C32.6953 64.7596 29.668 64.2719 26.6797 63.6283C27.5391 60.8197 28.6133 57.9136 29.8633 54.949C30.7617 56.6653 31.6797 58.3622 32.6562 60.0396ZM26.7383 36.5761C29.5508 35.9519 32.5391 35.4448 35.6445 35.0548C34.6094 36.6736 33.5938 38.3315 32.6367 40.0088C31.6797 41.6667 30.7422 43.3635 29.8633 45.0799C28.6328 42.1738 27.5977 39.3262 26.7383 36.5761ZM32.0898 50.0144C33.3789 47.3229 34.7852 44.6898 36.2695 42.0957C37.7539 39.5017 39.3555 36.9857 41.0352 34.5086C43.9648 34.2941 46.9531 34.1771 50 34.1771C53.0469 34.1771 56.0547 34.2941 58.9648 34.5086C60.625 36.9662 62.207 39.4822 63.7109 42.0567C65.2148 44.6313 66.6211 47.2643 67.9492 49.9364C66.6406 52.628 65.2344 55.2805 63.7305 57.8941C62.2461 60.4881 60.6641 63.0042 59.0039 65.5007C56.0938 65.7153 53.0664 65.8128 50 65.8128C46.9336 65.8128 43.9648 65.7153 41.0938 65.5397C39.3945 63.0627 37.793 60.5272 36.2891 57.9331C34.7852 55.3391 33.3984 52.706 32.0898 50.0144ZM67.3633 60.0005C68.3594 58.2842 69.2969 56.5483 70.2148 54.7929C71.4648 57.621 72.5586 60.4881 73.5156 63.4333C70.4883 64.1159 67.4219 64.6425 64.3359 64.9936C65.3906 63.3553 66.3867 61.6779 67.3633 60.0005ZM70.1758 45.0799C69.2578 43.3635 68.3203 41.6472 67.3438 39.9698C66.3867 38.3119 65.3906 36.6736 64.3555 35.0548C67.5 35.4448 70.5078 35.9714 73.3203 36.6151C72.4219 39.5017 71.3672 42.3103 70.1758 45.0799ZM50.0391 23.1377C52.0898 25.3612 54.0234 27.7017 55.8203 30.1202C51.9531 29.9447 48.0664 29.9447 44.1992 30.1202C46.1133 27.6042 48.0859 25.2637 50.0391 23.1377ZM27.3828 11.1817C30.6641 9.27029 37.9492 12.0009 45.625 18.7883C46.1133 19.2174 46.6016 19.6855 47.1094 20.1536C44.082 23.4108 41.2891 26.8825 38.7305 30.5103C34.3164 30.9004 29.9414 31.583 25.6055 32.5387C25.3516 31.544 25.1367 30.5298 24.9219 29.5156C23.0859 20.0756 24.2969 12.9566 27.3828 11.1817ZM22.5977 62.5946C21.7773 62.3605 20.9766 62.107 20.1758 61.8339C16.0156 60.5272 11.2891 58.4597 7.87109 55.7486C5.89844 54.3834 4.57031 52.2769 4.19922 49.9169C4.19922 46.3477 10.3711 41.7837 19.2773 38.6825C20.3906 38.2924 21.5234 37.9414 22.6562 37.6098C23.9844 41.8422 25.5859 45.9966 27.4414 50.0144C25.5664 54.0908 23.9453 58.3037 22.5977 62.5946ZM45.3711 81.7086C42.1484 84.6538 38.418 86.9943 34.3555 88.5936C32.1875 89.6273 29.6875 89.7248 27.4609 88.8472C24.3555 87.0528 23.0664 80.1678 24.8242 70.9034C25.0391 69.8111 25.2734 68.7189 25.5469 67.6462C29.9219 68.5824 34.3359 69.226 38.8086 69.5576C41.3867 73.2048 44.2188 76.6961 47.2461 79.9728C46.6211 80.5774 45.9961 81.1625 45.3711 81.7086ZM50.1562 76.9691C48.1641 74.8237 46.1719 72.4442 44.2383 69.8891C46.1133 69.9672 48.0469 70.0062 50 70.0062C52.0117 70.0062 53.9844 69.9672 55.9375 69.8696C54.1406 72.3467 52.207 74.7067 50.1562 76.9691ZM75.6836 82.8204C75.5078 85.1999 74.3359 87.4234 72.4609 88.9252C69.3555 90.7196 62.7344 88.3791 55.5859 82.2548C54.7656 81.5526 53.9453 80.7919 53.1055 80.0118C56.0938 76.7156 58.8477 73.2243 61.3477 69.5576C65.8203 69.187 70.2734 68.5043 74.668 67.5096C74.8633 68.3093 75.0391 69.109 75.1953 69.8891C76.1523 74.102 76.3086 78.4905 75.6836 82.8204ZM79.2383 61.8534C78.6914 62.029 78.1445 62.2045 77.5781 62.3605C76.2109 58.1086 74.5312 53.9543 72.5977 49.9169C74.4727 45.9381 76.0547 41.8422 77.3828 37.6488C78.3984 37.9414 79.375 38.2534 80.3125 38.5655C89.4141 41.6862 95.8008 46.3281 95.8008 49.8779C95.8008 53.7007 88.9844 58.6352 79.2383 61.8534ZM50 58.9278C54.9414 58.9278 58.9453 54.9295 58.9453 49.9949C58.9453 45.0604 54.9414 41.062 50 41.062C45.0586 41.062 41.0547 45.0604 41.0547 49.9949C41.0547 54.9295 45.0586 58.9278 50 58.9278Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>

            )

        case TMySvgId.gitHubFill:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M33.4476 78.9095C33.4476 79.3147 32.9839 79.639 32.3992 79.639C31.7339 79.6998 31.2702 79.3755 31.2702 78.9095C31.2702 78.5042 31.7339 78.1799 32.3185 78.1799C32.9234 78.1191 33.4476 78.4434 33.4476 78.9095ZM27.1774 77.9976C27.0363 78.4028 27.4395 78.8689 28.0444 78.9905C28.5685 79.1932 29.1734 78.9905 29.2944 78.5852C29.4153 78.1799 29.0323 77.7139 28.4274 77.5315C27.9032 77.3896 27.3185 77.5923 27.1774 77.9976ZM36.0887 77.6531C35.504 77.7949 35.1008 78.1799 35.1613 78.646C35.2218 79.0513 35.746 79.3147 36.3508 79.1729C36.9355 79.031 37.3387 78.646 37.2782 78.2407C37.2177 77.8557 36.6734 77.5923 36.0887 77.6531ZM49.3548 0C21.3911 0 0 21.3384 0 49.4451C0 71.9182 14.0726 91.1491 34.1734 97.9174C36.754 98.3835 37.6613 96.7826 37.6613 95.4654C37.6613 94.2091 37.6008 87.2786 37.6008 83.0231C37.6008 83.0231 23.4879 86.0628 20.5242 76.9843C20.5242 76.9843 18.2258 71.0874 14.9194 69.5676C14.9194 69.5676 10.3024 66.3861 15.2419 66.4469C15.2419 66.4469 20.2621 66.8522 23.0242 71.6751C27.4395 79.4971 34.8387 77.2478 37.7218 75.9103C38.1855 72.668 39.496 70.4187 40.9476 69.0812C29.6774 67.8248 18.3065 66.1834 18.3065 46.6891C18.3065 41.1164 19.8387 38.3199 23.0645 34.7534C22.5403 33.4362 20.8266 28.0054 23.5887 20.9939C27.8024 19.6767 37.5 26.4653 37.5 26.4653C41.5323 25.3305 45.8669 24.7428 50.1613 24.7428C54.4556 24.7428 58.7903 25.3305 62.8226 26.4653C62.8226 26.4653 72.5202 19.6564 76.7339 20.9939C79.496 28.0256 77.7823 33.4362 77.2581 34.7534C80.4839 38.3402 82.4597 41.1367 82.4597 46.6891C82.4597 66.2442 70.5847 67.8046 59.3145 69.0812C61.1694 70.6821 62.7419 73.7218 62.7419 78.4839C62.7419 85.313 62.6815 93.7632 62.6815 95.4249C62.6815 96.7421 63.6089 98.343 66.1694 97.8769C86.3306 91.1491 100 71.9182 100 49.4451C100 21.3384 77.3185 0 49.3548 0ZM19.5968 69.8918C19.3347 70.0945 19.3952 70.5605 19.7379 70.9456C20.0605 71.2698 20.5242 71.4116 20.7863 71.1482C21.0484 70.9456 20.9879 70.4795 20.6452 70.0945C20.3226 69.7702 19.8589 69.6284 19.5968 69.8918ZM17.4194 68.2504C17.2782 68.5138 17.4798 68.8381 17.8831 69.0407C18.2056 69.2434 18.6089 69.1826 18.75 68.8989C18.8911 68.6354 18.6895 68.3112 18.2863 68.1085C17.8831 67.987 17.5605 68.0477 17.4194 68.2504ZM23.9516 75.4645C23.629 75.7279 23.75 76.3359 24.2137 76.7209C24.6774 77.187 25.2621 77.2478 25.5242 76.9235C25.7863 76.6601 25.6653 76.0522 25.2621 75.6672C24.8185 75.2011 24.2137 75.1403 23.9516 75.4645ZM21.6532 72.4857C21.3306 72.6883 21.3306 73.2152 21.6532 73.6812C21.9758 74.1473 22.5202 74.35 22.7823 74.1473C23.1048 73.8839 23.1048 73.357 22.7823 72.8909C22.5 72.4249 21.9758 72.2222 21.6532 72.4857Z"
                        fill={COLORS.black}
                    />
                </svg>
            )

        case TMySvgId.gitHubStroke:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_263_123)">
                        <path
                            d="M35.5053 84.9106C35.7159 84.8886 35.9158 84.8655 36.1035 84.8421C36.1086 86.6312 36.1198 88.6408 36.1311 90.4408C36.1356 91.1621 36.1401 91.8489 36.1442 92.4743C36.1539 93.9544 36.1613 95.0907 36.1613 95.5279C36.1613 95.8778 36.0371 96.1643 35.8682 96.3199C35.7507 96.4283 35.415 96.6578 34.5413 96.5209C15.1187 89.9278 1.5 71.3049 1.5 49.5076C1.5 22.2286 22.2203 1.5625 49.3548 1.5625C76.5405 1.5625 98.5 22.2788 98.5 49.5076C98.5 71.3255 85.264 89.9338 65.8025 96.4804C64.941 96.6167 64.6023 96.3898 64.4796 96.2771C64.3056 96.1174 64.1815 95.8288 64.1815 95.4874C64.1815 94.9425 64.188 93.6608 64.1968 91.9389C64.2014 91.0502 64.2065 90.0443 64.2117 88.9618C64.2268 85.7874 64.2419 81.9647 64.2419 78.5464C64.2419 75.0589 63.4493 72.3181 62.2231 70.3107C67.0028 69.7047 71.9885 68.7567 75.9602 66.0402C80.867 62.6841 83.9597 56.8579 83.9597 46.7516C83.9597 43.7805 83.4274 41.4634 82.417 39.3897C81.5447 37.5992 80.3438 36.0514 78.9638 34.4772C79.6794 32.1632 80.6623 26.9545 78.13 20.508L77.8688 19.8429L77.1877 19.6267C75.6869 19.1503 73.9233 19.4391 72.3518 19.9102C70.7231 20.3986 69.0223 21.171 67.5059 21.9598C65.9814 22.7527 64.5994 23.5854 63.6011 24.2175C63.1782 24.4853 62.8223 24.7184 62.5514 24.8989C58.5779 23.8471 54.3498 23.3053 50.1613 23.3053C45.9723 23.3053 41.7439 23.8472 37.7701 24.8992C37.4991 24.7192 37.1431 24.4867 36.72 24.2194C35.7218 23.589 34.34 22.7584 32.8158 21.9669C31.2996 21.1796 29.5994 20.4081 27.9716 19.919C26.401 19.4471 24.6398 19.1562 23.1412 19.6247L22.4562 19.8388L22.1931 20.5066C19.6593 26.9386 20.6439 32.1618 21.3594 34.4784C19.978 36.0728 18.8698 37.6308 18.0963 39.4424C17.21 41.5181 16.8065 43.8225 16.8065 46.7516C16.8065 56.8049 19.7579 62.6363 24.5351 66.0119C28.4188 68.7562 33.3244 69.7152 38.0922 70.3194C37.3334 71.5756 36.7287 73.1093 36.3785 74.9175C35.0227 75.4542 33.0869 75.9762 31.0819 75.796C28.7998 75.5909 26.2901 74.4719 24.3305 71.0002L24.3258 70.9921C22.7482 68.2375 20.5187 66.7416 18.7014 65.9419C17.7948 65.543 16.9841 65.3138 16.3927 65.1833C16.0962 65.1179 15.8525 65.0768 15.6764 65.0515C15.5883 65.0388 15.5169 65.0301 15.4641 65.0242C15.4376 65.0213 15.4158 65.0191 15.3988 65.0175L15.377 65.0154L15.3689 65.0147L15.3655 65.0145L15.364 65.0143C15.3633 65.0143 15.3626 65.0142 15.2419 66.5094L15.3626 65.0142L15.3116 65.0101L15.2604 65.0095C14.5773 65.0011 13.9765 65.0464 13.4677 65.1656C12.9789 65.2801 12.4159 65.4996 11.9947 65.9657C11.5137 66.498 11.3984 67.1467 11.488 67.7069C11.567 68.2008 11.7969 68.61 11.9887 68.8916C12.3776 69.4623 12.9314 69.9657 13.3131 70.2848C13.5169 70.4552 13.7007 70.5967 13.8344 70.6963C13.9016 70.7464 13.957 70.7865 13.997 70.8151C14.017 70.8294 14.0333 70.8408 14.0453 70.8492L14.0601 70.8596L14.065 70.863L14.0668 70.8643L14.0676 70.8648C14.0679 70.865 14.0682 70.8652 14.9194 69.6301L14.0682 70.8652L14.175 70.9388L14.2929 70.993C15.4952 71.5456 16.6985 73.0344 17.6718 74.6741C18.1332 75.4513 18.5005 76.1885 18.7524 76.7323C18.8779 77.0032 18.9736 77.2235 19.037 77.3737C19.0687 77.4488 19.0922 77.5061 19.1073 77.5433L19.1137 77.5594C20.8971 82.9416 25.9679 84.5731 30.0303 84.9638C32.1103 85.1638 34.0731 85.0603 35.5053 84.9106Z"
                            stroke={COLORS.black}
                            strokeWidth="3"
                        />
                        <path
                            d="M33.4722 78.9578C33.4792 79.1636 33.3325 79.7086 32.3994 79.7406C31.4662 79.7725 31.2826 79.2388 31.2755 79.033C31.2685 78.8272 31.4152 78.2822 32.3483 78.2502C33.2815 78.2183 33.4651 78.752 33.4722 78.9578Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M29.2838 78.7001C29.2154 78.8999 28.8793 79.3697 27.9931 79.0662C27.1069 78.7628 27.1293 78.1856 27.1976 77.9859C27.266 77.7861 27.6021 77.3163 28.4884 77.6198C29.3746 77.9232 29.3522 78.5004 29.2838 78.7001Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M25.4296 77.0443C25.2781 77.1881 24.7696 77.4475 24.1405 76.7842C23.5113 76.121 23.7972 75.6269 23.9487 75.4831C24.1003 75.3394 24.6088 75.08 25.2379 75.7432C25.867 76.4064 25.5812 76.9006 25.4296 77.0443Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M22.725 74.2517C22.5592 74.3497 22.0476 74.476 21.6123 73.7392C21.177 73.0024 21.5346 72.6152 21.7004 72.5173C21.8662 72.4194 22.3779 72.293 22.8131 73.0298C23.2484 73.7667 22.8908 74.1538 22.725 74.2517Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M20.7762 71.2246C20.6479 71.3396 20.2243 71.5438 19.7308 70.9935C19.2373 70.4432 19.4863 70.0442 19.6146 69.9292C19.7429 69.8142 20.1665 69.61 20.6599 70.1603C21.1534 70.7106 20.9044 71.1096 20.7762 71.2246Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M18.7534 69.0146C18.6869 69.1387 18.4141 69.4113 17.8564 69.1129C17.2987 68.8145 17.3741 68.4363 17.4405 68.3121C17.507 68.188 17.7798 67.9154 18.3375 68.2138C18.8952 68.5123 18.8198 68.8905 18.7534 69.0146Z"
                            fill={COLORS.black}
                        />
                        <path
                            d="M37.2819 78.273C37.3241 78.4829 37.2743 79.0654 36.3697 79.2469C35.4651 79.4283 35.1946 78.91 35.1525 78.7001C35.1104 78.4901 35.1601 77.9076 36.0647 77.7262C36.9693 77.5447 37.2398 78.063 37.2819 78.273Z"
                            fill={COLORS.black}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_263_123">
                            <rect width="100" height="100" fill="white" transform="translate(0 0.0625)"/>
                        </clipPath>
                    </defs>
                </svg>
            )

        case TMySvgId.codeSignalFill:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill={COLORS.black}
                    />
                    <path
                        d="M29.5575 31.8585C39.8672 33.3187 48.4513 34.6018 48.6283 34.7346C48.8495 34.8231 49.1593 35.6638 49.292 36.5045C49.469 37.3452 49.7787 38.0532 50 38.0532C50.2212 38.0532 50.531 37.3452 50.7079 36.5045C50.8407 35.6638 51.1504 34.8231 51.3717 34.6903C51.9469 34.3364 89.0708 29.2036 89.292 29.4249C89.4248 29.5576 88.2301 31.593 86.6372 33.9381C85.0885 36.3275 82.3451 40.531 80.5752 43.2302C77.7434 47.6107 77.1681 48.2302 76.1062 48.2302C75 48.2302 74.5133 48.8054 71.6814 53.5399C68.1858 59.2921 68.8495 58.7611 64.0265 59.5133C62.9646 59.6903 62.3894 60.0886 61.9911 60.9293C61.6814 61.5487 58.938 67.9204 55.8849 75.0886C52.8318 82.2125 50.177 88.0532 50 88.0532C49.823 88.0532 47.1681 82.2125 44.115 75.0886C41.0619 67.9204 38.3186 61.5487 38.0088 60.9293C37.6106 60.0886 37.0354 59.6903 35.9734 59.5133C31.1504 58.7611 31.8141 59.2921 28.3186 53.5399C25.4867 48.8496 24.9557 48.2302 23.8938 48.2302C22.8318 48.2302 22.0796 47.301 16.8141 39.2921C11.3274 30.885 10.3097 29.2036 10.6637 29.2036C10.7522 29.2036 19.2478 30.3983 29.5575 31.8585Z"
                        fill="white"
                    />
                    <path
                        d="M22.8761 37.5664C23.3186 38.2744 24.292 39.7346 25.0442 40.7965L26.4159 42.7434L32.6991 43.5399C39.5133 44.4248 39.469 44.4248 40.0442 47.4779L40.354 49.1151L38.2301 48.8939C32.9203 48.3187 32.3009 48.2744 32.3009 48.5399C32.3009 48.7611 34.823 53.0532 35.2212 53.4956C35.3097 53.5841 36.9026 53.7611 38.761 53.9381L42.2124 54.2036L45.9734 65.5753C48.0531 71.8585 49.8672 76.9912 50 76.9912C50.1327 76.9912 51.9469 71.8585 54.0265 65.5753L57.7876 54.2036L61.2389 53.9381C63.0973 53.7611 64.6902 53.5841 64.7787 53.4956C65.177 53.0532 67.6991 48.7611 67.6991 48.5399C67.6991 48.3629 66.7699 48.3629 65.6194 48.4956C59.5133 49.1151 59.7345 49.1594 59.7787 48.3187C59.7787 47.9204 60 46.8585 60.3097 46.0178L60.8407 44.4691L73.6725 42.6992L75.7522 39.6018C76.8584 37.9204 77.7433 36.4602 77.6548 36.3275C77.5663 36.239 72.6991 37.0355 66.9026 38.0532L56.2832 39.9558L53.3186 51.2833C51.7256 57.5222 50.3097 62.6992 50.177 62.7877C50.0885 62.8762 49.9115 62.8762 49.823 62.7877C49.6902 62.6992 48.2743 57.5222 46.6372 51.2833L43.6725 39.9558L33.2301 38.0974C27.4779 37.0797 22.6106 36.2833 22.4336 36.2833C22.2124 36.2833 22.3894 36.8585 22.8761 37.5664Z"
                        fill={COLORS.black}
                    />
                </svg>
            )

        case TMySvgId.codeSignalStroke:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48.5" stroke={COLORS.black} strokeWidth="3"/>
                    <path
                        d="M29.5575 31.8585C39.8672 33.3187 48.4513 34.6018 48.6283 34.7346C48.8495 34.8231 49.1593 35.6638 49.292 36.5045C49.469 37.3452 49.7787 38.0532 50 38.0532C50.2212 38.0532 50.531 37.3452 50.7079 36.5045C50.8407 35.6638 51.1504 34.8231 51.3717 34.6903C51.9469 34.3364 89.0708 29.2036 89.292 29.4249C89.4248 29.5576 88.2301 31.593 86.6372 33.9381C85.0885 36.3275 82.3451 40.531 80.5752 43.2302C77.7434 47.6107 77.1681 48.2302 76.1062 48.2302C75 48.2302 74.5133 48.8054 71.6814 53.5399C68.1858 59.2921 68.8495 58.7611 64.0265 59.5133C62.9646 59.6903 62.3894 60.0886 61.9911 60.9293C61.6814 61.5487 58.938 67.9204 55.8849 75.0886C52.8318 82.2125 50.177 88.0532 50 88.0532C49.823 88.0532 47.1681 82.2125 44.115 75.0886C41.0619 67.9204 38.3186 61.5487 38.0088 60.9293C37.6106 60.0886 37.0354 59.6903 35.9734 59.5133C31.1504 58.7611 31.8141 59.2921 28.3186 53.5399C25.4867 48.8496 24.9557 48.2302 23.8938 48.2302C22.8318 48.2302 22.0796 47.301 16.8141 39.2921C11.3274 30.885 10.3097 29.2036 10.6637 29.2036C10.7522 29.2036 19.2478 30.3983 29.5575 31.8585Z"
                        fill={COLORS.black}
                    />
                    <path
                        d="M22.8761 37.5664C23.3186 38.2744 24.292 39.7346 25.0442 40.7965L26.4159 42.7434L32.6991 43.5399C39.5133 44.4248 39.469 44.4248 40.0442 47.4779L40.354 49.1151L38.2301 48.8939C32.9203 48.3187 32.3009 48.2744 32.3009 48.5399C32.3009 48.7611 34.823 53.0532 35.2212 53.4956C35.3097 53.5841 36.9026 53.7611 38.761 53.9381L42.2124 54.2036L45.9734 65.5753C48.0531 71.8585 49.8672 76.9912 50 76.9912C50.1327 76.9912 51.9469 71.8585 54.0265 65.5753L57.7876 54.2036L61.2389 53.9381C63.0973 53.7611 64.6902 53.5841 64.7787 53.4956C65.177 53.0532 67.6991 48.7611 67.6991 48.5399C67.6991 48.3629 66.7699 48.3629 65.6194 48.4956C59.5133 49.1151 59.7345 49.1594 59.7787 48.3187C59.7787 47.9204 60 46.8585 60.3097 46.0178L60.8407 44.4691L73.6725 42.6992L75.7522 39.6018C76.8584 37.9204 77.7433 36.4602 77.6548 36.3275C77.5663 36.239 72.6991 37.0355 66.9026 38.0532L56.2832 39.9558L53.3186 51.2833C51.7256 57.5222 50.3097 62.6992 50.177 62.7877C50.0885 62.8762 49.9115 62.8762 49.823 62.7877C49.6902 62.6992 48.2743 57.5222 46.6372 51.2833L43.6725 39.9558L33.2301 38.0974C27.4779 37.0797 22.6106 36.2833 22.4336 36.2833C22.2124 36.2833 22.3894 36.8585 22.8761 37.5664Z"
                        fill="white"
                    />
                </svg>

            )

        case TMySvgId.cross:
            return (
                <svg className={className} style={style} onClick={onClick} viewBox="0 0 100 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M97.0549 82.9388C100.961 86.8448 100.961 93.1724 97.0549 97.0784C95.1176 99.0313 92.5553 100 89.993 100C87.4307 100 84.8746 99.0235 82.9248 97.0705L49.9961 64.159L17.0705 97.0627C15.1176 99.0313 12.5584 100 9.99922 100C7.44004 100 4.88399 99.0313 2.92946 97.0627C-0.976486 93.1568 -0.976486 86.8292 2.92946 82.9232L35.8644 49.9883L2.92946 17.069C-0.976486 13.163 -0.976486 6.8354 2.92946 2.92946C6.8354 -0.976486 13.163 -0.976486 17.069 2.92946L49.9961 35.88L82.931 2.94508C86.837 -0.960861 93.1646 -0.960861 97.0705 2.94508C100.976 6.85103 100.976 13.1787 97.0705 17.0846L64.1356 50.0195L97.0549 82.9388Z"
                        fill={fill ? fill.color : "none"}
                        fillOpacity={fill ? fill.opacity : 1}
                        stroke={stroke ? stroke.color : "none"}
                        strokeWidth={stroke ? stroke.width : 0}
                        strokeOpacity={stroke ? stroke.opacity : 1}
                    />
                </svg>
            )
    }
};

export default MySvg;