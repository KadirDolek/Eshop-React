import { useState } from 'react';
import '../Home/Home.css'
import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';



export default function Product({data}){
    const [recherche, setRecherche] = useState("");

    const filteredData = data?.filter(element =>
        element.title.toLowerCase().includes(recherche.toLowerCase()) ||
        element.description.toLowerCase().includes(recherche.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return(
        <>
        <Navbar/>
            <form 
                style={{width:'350px', marginLeft:'auto', marginRight:'auto', marginBottom:'20px', marginTop:'20px'}} 
                className="d-flex" 
                role="search"
                onSubmit={handleSearch}
            >
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Recherchez un article..." 
                    aria-label="Search"
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                />
                <button className="btnSearch" type="submit">Search</button>
            </form>

            <div>
                {filteredData?.map((element, index) => (
                    <div key={element.id || index} style={{marginBottom: '20px', padding: '10px', borderRadius:'20px', display:'flex', minHeight:'250px', maxWidth:'1000px', flexWrap:'wrap', marginLeft:'auto', marginRight:'auto',justifyContent:'center'}}>
                        <img src={element.image} alt={element.title} style={{maxWidth: '300px', height: 'auto', marginBottom:'5%', marginLeft:'auto', marginRight:'auto'}} />
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', color:'white', textAlign:'center'}}>
                            <h2>{element.title}</h2>
                            <p><strong>Price:</strong> {element.price}€</p>
                            <p><strong>Description: <br /></strong>{element.description}</p>
                            <NavLink to={`/productdetail/${element.id}`}>
                                <button style={{marginBottom:'30px'}} id='btnDetail1'>Voir Détails</button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}