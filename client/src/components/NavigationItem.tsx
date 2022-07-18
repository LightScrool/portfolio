import React, {FC, ReactNode} from 'react';
import "../styles/NavigationItem.scss";

interface NavigationItemProps {
    children: ReactNode
}

const NavigationItem: FC<NavigationItemProps> = ({children}) => {
    return (
        <li className="NavigationItem">
            {children}
        </li>
    );
};

export default NavigationItem;