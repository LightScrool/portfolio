import React, {FC} from 'react';
import "../../styles/CustomScrollbar/CustomScrollbarThumb.scss";

const CustomScrollbarThumb: FC<any> = (props) => {
    return (
        <div
            className="CustomScrollbarThumb"
            {...props}
        />
    );
};

export default CustomScrollbarThumb;