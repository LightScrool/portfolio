import React, {FC} from 'react';
import "../../styles/Header/Logo.scss";
import useTypedSelector from "../../hooks/useTypedSelector";

const Logo: FC = () => {
    const offset = useTypedSelector(state => state.offsets.home);
    const onClick = () => {
            window.scrollTo(0, offset)
    }

    return (
        <a className="Logo" onClick={onClick}>
            LightScrool
        </a>
    );
};

export default Logo;