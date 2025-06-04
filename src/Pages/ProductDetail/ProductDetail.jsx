import { NavLink, useParams } from 'react-router-dom';


export default function ProductDetail({ data }) {
    const { id } = useParams();
    const product = data?.find(p => p.id === parseInt(id));

    if (!product) return <p style={{ color: 'white' }}>Produit introuvable</p>;

    return (
       

        <div style={{textAlign:'center'}}>
             <div style={{ color: 'white', padding: '20px'}}>
                <h2 style={{marginBottom:'5%', marginTop:'5%'}}>{product.title}</h2>
                <img style={{maxHeight:'400px', width:'300px' , marginBottom:'5%'}} src={product.image} alt={product.title} />
                <p style={{paddingLeft:'10%', paddingRight:'10%'}}><strong>Description: <br /></strong>{product.description}</p>
                <p><strong>{product.price}€</strong></p>
                <NavLink to={`/product`}>
                    <button id='btnDetail1'>Retour</button>
                </NavLink>
            </div>
        </div>
    );
}