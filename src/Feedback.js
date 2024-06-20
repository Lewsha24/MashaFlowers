import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ksy from "./img/kcy.png";
import stars from "./img/stars.png";
import kari from "./img/kari.png";
import Nikita from "./img/Nikita.png";


const Feedback = () => {
    return (
        <Container fluid>
            <div className="block_green">
                <div className="header-feetback mb-5">Отзыв</div>
                <Row>
                    <Col>
                        <div className="block-feetback color-three">
                            <img src={ksy} alt="" />
                            <span>Ксюша</span>
                            <img src={stars} alt="" />
                            <p>
                                Мой молодой человек всегда заказывает мне букеты у вас.
                                Цветы всегда прекрасные и свежие, спасибо за вашу работу:)
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="block-feetback c-white">
                            <img src={kari} alt="" />
                            <span>Кристина</span>
                            <img src={stars} alt="" />
                            <p>
                                Мой молодой человек всегда заказывает мне букеты у вас.
                                Цветы всегда прекрасные и свежие, спасибо за вашу работу:)
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="block-feetback color-three">
                            <img src={Nikita} alt="" />
                            <span>Вадим</span>
                            <img src={stars} alt="" />
                            <p>
                                Мой молодой человек всегда заказывает мне букеты у вас.
                                Цветы всегда прекрасные и свежие, спасибо за вашу работу:)
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Feedback