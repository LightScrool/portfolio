import React from 'react';
import "../../styles/About/About.scss";
import Container from "../Container";
import SVG, {SVGIds} from "../../assests/SVG";
import AboutTextBlock from "./AboutTextBlock";
import ImageInsideVector from "../ImageInsideVector";
import photo from "../../assests/pictures/my-photo-2.jpg"

const About = () => {
    const text = "На данный момент я учусь в НИУ ВШЭ на «Программнай инженерии», год окончания - 2025 \n Учусь на бюджете, благодаря 288 баллам за ЕГЭ: \n Математика - 99 \n Информатика - 96 \n Русский язык- 93"

    return (
        <section className="About">
            <Container>
                <div className="About__inner">
                    <ImageInsideVector
                        className="About__photo"
                        imageURL={photo}
                        maskVector={<SVG Id={SVGIds.maskFrame2}/>}
                        viewBox="0 0 100 82"
                        imageTransform={"scale(1.45) translate(-12, -9.3)"}
                    />

                    <div className="About__text-blocks">
                        <AboutTextBlock
                            title="Кратко обо мне"
                            text="Программированием я начал интересоваться ещё в 8 классе и долгое время не мог определиться с направлением, поэтому на хорошем базовом уровне я владею несколькими языками программирования, в том числе: C#, Python и JS. В итоге я выбрал Front-end разработку в качестве направления своего развития и достаточно глубоко изучил HTML, CSS и JavaScript."
                        />
                        <AboutTextBlock
                            title="Образование"
                            text={text}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;