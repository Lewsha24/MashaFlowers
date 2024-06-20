import logoMain from './img/logogImg.png'
import flowersOne from './img/flowersOne.png'
import flowersTwo from './img/flowersTwo.png'
import flowersThree from './img/flowersThree.png'
import rose from './img/rose.png'
import warrantyIcon from './img/warranty-icon.png' 
import deliveryCity from './img/delivery-city.png'
import iconGift from './img/icon-gift.png'
import iconClock from './img/icon-clock.png'
import iconCamera from './img/icon-camera.png'
import iconDelivery from './img/icon-delivery.png'
import stars from './img/stars.png'
import ksy from './img/kcy.png'
import kari from './img/kari.png'
import Nikita from './img/Nikita.png'
import {Col, Container, Row} from "react-bootstrap";
import Feedback from "./Feedback";
import About from "./AboutComponent";
import Delivery from "./DeliveryComponent";

const Main = () => {
    return (
        <Container fluid>
            <img src={logoMain} alt="" className="mainLogo" />
            <h3 className="catalog-header mb-3">КАТАЛОГ</h3>
            <div className="catalog justify-content-center">
                <div className="col">
                    <img src={flowersOne} alt="flowersOne" className='flowers'/>
                    <span>
                    Монобукеты
                    от <span className='price_catalog'> 3000 </span> руб</span>
                    <button className='btn_input mt-2'>Выбрать</button>
                </div>
                <div className="col">
                    <img src={flowersTwo} alt="flowersTwo" className='flowers'/>
                    <span>
                    Свадебные букет
                    от <span className='price_catalog'> 3500 </span> руб
                    </span>
                    <button className='btn_input mt-2'>Выбрать</button>
                </div>
                <div className="col">
                    <img src={flowersThree} alt="flowersThree" className='flowers'/>
                    <span>
                    букеты в наличии
                    от <span className='price_catalog'> 1800 </span> руб
                    </span>
                    <button className='btn_input mt-2'>Выбрать</button>
                </div>
            </div>

            <div className="block_green">
                <div className="container justify-content-center">
                    <h3>НЕ СМОГЛИ ВЫБРАТЬ?</h3>
                    <p>Не проблема! Мы подберем букет по вашему индивидуальному запросу. <br />
                    Заполните форму и мы перезвоним вам в течение 5 минут</p>
                    <Row>
                            <Col
                                style={{
                                    borderRight: '2px solid black',
                                    paddingRight: '1%'
                                }}
                            >
                                <input placeholder='Имя' />
                                <input placeholder='Телефон' />
                            </Col>
                            <Col>
                                <input placeholder='цветы' />
                                <input placeholder='повод' />
                            </Col>
                            <Col>
                                <input placeholder='цена' />
                                <input placeholder='Заказать звонок' />
                            </Col>
                            <Col>
                                <input placeholder='цвет'/>
                                <input placeholder='размер'/>
                            </Col>
                    </Row>
                        <button className='btn-order-call mtb-3'>Заказать звонок</button>
                </div>
            </div>
            <About/>
            <div className="block_green">
                <Row>
                    <Col>
                        <Row>
                            <Col md={12}>
                                <img src={warrantyIcon} alt="" className='img-advantage'/>
                                <div className='advantage'>
                                    Гарантия свежести
                                </div>
                            </Col>
                            <Col md={12}>
                                <img src={deliveryCity} alt="" className='img-advantage'/>
                                <div className='advantage'>
                                    Доставка по городу <br />и за его пределы
                                </div>
                            </Col>
                            <Col md={12}>
                                <img src={warrantyIcon} alt="" className='img-advantage'/>

                                <div className='advantage'>
                                    Открытка в подарок
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col md={12}>
                                <img src={iconClock} alt="" className='img-advantage'/>
                                <div className='advantage'>
                                    Доставка круглосуточно
                                </div>
                            </Col>
                            <Col md={12}>
                                <img src={iconCamera} alt="" className='img-advantage'/>
                                <div className='advantage'>
                                    фото и видео <br />перед отправкой
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Delivery/>
            <Feedback/>
        </Container>
    )
}

export default Main;