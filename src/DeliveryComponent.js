import React  from "react";
import {Container} from "react-bootstrap";
import iconDelivery from "./img/icon-delivery.png";


const Delivery =() => {
    return (
        <Container>
            <div className="delivery">
                <span className='header-delivery'>ДОСТАВКА</span>
                <div className="container-lg">
                    <div className="row mt-5">
                        <div className="col">
                            <img src={iconDelivery} className="delivery-icon"/>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="delivery-text">Доставка осуществляется кругослуточно</li>
                            </ul>
                            <ul>
                                <li className="delivery-text">Цена доставки устанавливается в зависимости от расстояния.
                                    Вы можете проверить свой адрес и узнать стоимость доставка при оформлении заказа. </li>
                            </ul>
                            <ul>
                                <li className="delivery-text">Ближайшее время доставки зависит от сложности букета. </li>
                            </ul>
                            <ul>
                                <li className="delivery-text">Ожидание получателя букета курьером до 15 минут,
                                    более 15 минут оплачивается отдельно.
                                    Также возможно опоздание курьера на 15 минут</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Delivery