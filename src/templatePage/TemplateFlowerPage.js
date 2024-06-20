import { Carousel, Col } from "react-bootstrap";
import mainPageFlower from "../img/mainPageTovar.png";
import additionToFlowerCenter from "../img/additionToFlowerCenter.png";
import additionToFlowerLeft from "../img/additionToFlowerLeft.png";
import additionToFlowerRight from "../img/additionToFlowerRight.jpg";
import styles from './templateFlower.module.css';

const TemplateFlowerPage = () => {
    return (
        <div>
            <Col>
                <img src={mainPageFlower} />
                <div className={styles.subContainer}>
                    <div className={styles.header}>
                        <p className={styles.textheader}>НЕЖНОЕ ВОСХИЩЕНИЕ</p>
                        <p className={styles.textheader}>
                            3200 руб.
                        </p>
                    </div>
                    <div className={styles.fstHr}>
                        <hr className={styles.hrfirst} />
                    </div>
                    <div className={styles.contentText}>
                        <p>Доставка: <br />Рассчитывается и оплачивается отдельно</p>
                        <br />
                        <p>
                        Состав букета и упаковка :<br />
                        Могут отличаться от фото, представленного на сайте. <br />
                        Мы работаем с сезонными цветами, которые не похожи друг на друга, и наличие цветов меняется ежедневно. <br />
                        Но мы обещаем сохранить цветовую гамму и настроение букета.<br />
                        </p>
                    </div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.partAdvice}>
                    <p className={styles.headerAdvice}>Уход за цветами</p>
                    <p>
                        Чтобы букет радовал вас долго, выполните рекомендации наших флористов: <br />
                        Подготовьте вазу с холодной водой. <br />
                        Добавьте средство кризал в воду в соотношении 1 пакетик на 1-1.5 литра воды и хорошо размешайте. <br />
                        Сделайте срез каждого стебля, желательно наискосок. <br />
                        Не ставьте букет на прямые солнечные лучи и возле отопительных приборов. <br />
                        Обновляйте воду и срез каждые 2 дня.
                    </p>
                </div>
                <div className={styles.additionFlowers}>
                    <p className={styles.additionFlowersHeaderText}>
                        Дополнение к цветам
                    </p>
                    <Carousel>
                        <Carousel.Item className={styles.CarouselItem}>
                            <img src={additionToFlowerCenter} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={additionToFlowerLeft} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={additionToFlowerRight} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Col>
            <div className={styles.btnsDiv}>
                <button className={styles.btns}>Выбрать открытку</button>
                <button className={styles.btns}>В корзину</button>
            </div>
        </div>
    )
}

export default TemplateFlowerPage;