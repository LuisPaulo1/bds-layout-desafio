import CarImg from 'assets/images/car.png';

import './styles.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-card-image">
                <div className="home-image">
                    <img src={CarImg} alt="carro" />
                </div>
                <div className="home-content-info">                    
                    <h4>O carro perfeito para você</h4>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>
            <div className="home-card-button">
                <button>VER CATÁLOGO</button>                
                <h6>Comece agora a navegar</h6>        
            </div>
        </div>        
    );
}

export default Home;