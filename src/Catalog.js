import {Card, Col, Container, Row} from "react-bootstrap";
import flowersOne from "./img/flowersOne.png";
import flowersTwo from "./img/flowersTwo.png";
import flowersThree from "./img/flowersThree.png";
import flowersFout from "./img/4product.png";
import flowersFive from "./img/5product.png";
import flowersSiz from "./img/6product.png";
import Minus from './img/Minus.png';
import Plus from './img/Plus.png';
import BasketIcon from './img/basket-icon.png';
import FlowerCard from "./FlowerCard";
import {useState} from "react";

let result = 0;

const Catalog = () => {
    const [cart, setCart] = useState([]);
    let [count, setCount] = useState([1]);

    async function delResult (Price) {
        result = result - Number(Price)
    }

    const handleAddToCart = (image, altText, id,  name, price) => {
        const newItem = { image, altText, id, name, price }
        result = result + Number(newItem.price)
        setCart([...cart, newItem]);
    };

    const handleMinus = () => {
        setCount(count -= 1)
        console.log('minus', count)
    }
    const handlePlus = () => {
        Number(count)
        setCount(count = count + 1)
        console.log('plus', count)
    }
    const handleDel = (id) => {
        const card = document.querySelector(`.block-product-${id}`)
        const priceProduct = document.querySelector('div.price-product')
        delResult(priceProduct.textContent)
        card.style.display = 'none';
    }


    return (
        <Container>
            <h3 className="catalog-header mb-3">КАТАЛОГ</h3>
            <div className="catalog justify-content-center">
                <div className="col">
                    <FlowerCard
                        id={1}
                        image={flowersOne}
                        altText="flowersOne"
                        name="Монобукет"
                        price="3000"
                        handleClick={handleAddToCart}
                    />
                    <FlowerCard
                        id={2}
                        image={flowersTwo}
                        altText="flowersTwo"
                        name="Монобукеты"
                        price="3200"
                        handleClick={handleAddToCart}
                    />
                </div>
                <div className="col">
                    <FlowerCard
                        id={3}
                        image={flowersThree}
                        altText="flowersThree"
                        name="Нежное восхищение"
                        price="3200"
                        handleClick={handleAddToCart}
                    />
                    <FlowerCard
                        id={4}
                        image={flowersFout}
                        altText="flowersFout"
                        name="Нежное восхищение"
                        price="2400"
                        handleClick={handleAddToCart}
                    />
                </div>
                <div className="col">
                    <FlowerCard
                        id={5}
                        image={flowersFive}
                        altText="flowersFive"
                        name="Снежное утро"
                        price="2200"
                        handleClick={handleAddToCart}
                    />
                    <FlowerCard
                    id={6}
                    image={flowersSiz}
                    altText="flowersSiz"
                    name="букеты в наличии"
                    price="1800"
                    handleClick={handleAddToCart}
                    />
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
                    <button className='btn-order-call mtb-3' onClick={() => alert('вам позвонят в течении 5 минут')}>Заказать звонок</button>
                </div>
            </div>
            <div className="basket">
                <h3 className="basket-header">КОРЗИНА</h3>
                {cart.map((item, index) => (
                        <div className={`block-product-${item.id}`} key={index}>
                            <Row>
                                <Col md={2}>
                                    <img src={item.image} alt={item.altText} className="image-product-basket"/>
                                </Col>
                                <Col md={7}>
                                    <div className="name-product">
                                        {item.name}
                                    </div>
                                    <div className="price-product">
                                        {item.price}
                                    </div>
                                    <div className="amount-product">
                                        <button className="minus" onClick={handleMinus} ><img src={Minus} alt=""/></button>
                                        <div className="count">{count}</div>
                                        <button className="plus" onClick={handlePlus}><img src={Plus} alt=""/></button>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <button className="btn-basket-product" onClick={() => handleDel(item.id)}>
                                        <img className="img-btn-basket" src={BasketIcon} alt=""/>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                ))}
                <div className="result-block-basket">
                    <div className="result-text">Итог к оплате:</div>
                    <div className="result-price">{result} руб.</div>
                </div>
                <form className="form-order">
                    <input className="input-form" placeholder="Введите ваше имя"/>
                    <input className="input-form" placeholder="Введите ваш номер"/>
                    <input className="input-form" placeholder="Промокод"/>

                    <button className="form-btn " onClick={() => {alert("Погодите , оператор скоро вам позвонит ")}}>Оформить заказ</button>
                </form>
            </div>
        </Container>
    )
}

export default Catalog