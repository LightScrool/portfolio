import React, {FC, ReactNode} from 'react';
import "../styles/Container.scss";

interface ContainerProps {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className="Container">
            {children}
        </div>
    );
};

export default Container;