import React, {FC, ReactNode} from 'react';
import "../../styles/Header/NavigationItem.scss";

interface NavigationItemProps {
    children: ReactNode
}

const NavigationItem: FC<NavigationItemProps> = ({children}) => {
    return (
        <a className="NavigationItem">{children}</a>
    );
};

export default NavigationItem;