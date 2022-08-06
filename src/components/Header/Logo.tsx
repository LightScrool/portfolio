import React, {FC} from 'react';
import "../../styles/Header/Logo.scss";
import useTypedSelector from "../../hooks/useTypedSelector";
import useScrollTo from "../../hooks/useScrollTo";

const Logo: FC = () => {
    const offset = useTypedSelector(state => state.offsets.home);
    const scrollTo = useScrollTo();
    const onClick = (event: React.MouseEvent) => {
        event.preventDefault();
        scrollTo(offset);
    }

    return (
        <a className="Logo" href="/#" onClick={onClick}>
            LightScrool
        </a>
    );
};

export default Logo;