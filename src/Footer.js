import inst from './img/inst.png'
import telegram from './img/telegram.png'
import vk from './img/Vk.png'

const Footer = () => {
    return (
        <footer className="mt-5">
                <div className="row">
                    <div className="col">
                        <span className='text'
                              style={{
                                  marginTop: '33%'
                              }}
                        >г.Красноярск</span>
                    </div>
                    <div className="col">
                        <span className='text-title'>Art Flora</span>
                    </div>
                    <div className="col">
                        <img className="icon-footer" src={inst} alt="inst" />
                        <img className="icon-footer " src={telegram} alt="telegram" />
                        <img className="icon-footer" src={vk} alt="vk" /><br />
                        <span className='text'>8-937-340-76-95</span><br />
                        <span className='text'>Art.Flors@mail.ru</span>
                    </div>
                </div>
        </footer>
    )
}

export default Footer