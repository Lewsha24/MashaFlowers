import {Container, Row} from "react-bootstrap";
import rose from "./img/rose.png";


const About = () => {
    return (
        <Container>
            <div className="block_about">
                <Row>
                    <div className="col">
                        <div className="container_about mt-5">
                            <div className="header_about">O НАС</div>
                            <div className="main_text">
                                В нашем цветочном бутике вы найдете поистине изысканные композиции,
                                создающие атмосферу утонченности и праздника.
                                <br />Наша команда профессиональных флористов с любовью подбирает каждый бутон,
                                создавая настоящие произведения флористического искусства.
                                Мы используем только свежие, сертифицированные цветы,
                                выращенные на лучших фермах.
                                <br />Будь то романтический букет для любимого человека,
                                яркие цветы для торжественного события или изящные композиции для вашего дома -
                                мы воплотим ваши идеи в жизнь.<br />Закажите доставку по всему городу Красноярск.
                                <br />Позвольте цветам выразить то, что не может быть сказано словами
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img className="img-about mt-5" src={rose} alt="rose" />
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default About