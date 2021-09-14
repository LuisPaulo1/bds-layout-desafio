import ProductImg from 'assets/images/product.png';

import './styles.css';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-info-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className="card-bottom-container">
                <button>COMPRAR</button>
            </div>
        </div>
    );
}

export default ProductCard;