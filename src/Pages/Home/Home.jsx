import { NavLink } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
import DecryptedText from '../../Components/Reactbits/DecryptedText';

export default function Home({ data }) {    
    return (
        <>
            <Navbar data={data}/>
            <div id="Container">
                <h2 id="titreCarousel">
                    <div style={{ marginTop: '-20px', textAlign:'center' }}>
                        <DecryptedText
                        text="Retrouvez un aperçu de nos produits phares"
                        animateOn="view"
                        revealDirection="center"
                        speed={150}
                        />
                    </div>  
                </h2>
                <div style={{marginLeft:'auto', marginRight:'auto'}}>
                    <NavLink to={`/product`}>
                        <button id='btn2'>Retrouvez tous les articles ici</button>
                    </NavLink>
                </div>
                <div id="CarouselContainer">
                    <div id="carouselExampleCaptions" className="carousel slide"> 
                        
                        <div className="carousel-inner">
                            {data && Array.isArray(data) && data.length > 0 ? (
                                data.map((element, index) => (
                                    <div key={element.id || index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <h5>{element.title}</h5>
                                        <img id="imgCarousel" src={element.image}  alt="" />
                                        <div className="carousel-caption d-md-block">
                                            <NavLink to={`/productdetail/${element.id}`}>
                                                <button id="btnDetail">Click for more</button>
                                            </NavLink>

                                        </div>
                                    </div>
                                ))
                            ) : (
                                ""
                            )}
                        </div>
                        
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>                
                </div>
                
                <div style={{marginTop:'30px'}}>
                    <h2 id="titreCarousel">Retrouvez ici les produits les plus appréciés:</h2>
                    <div id="ancre" style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'15%'}}>
                    {data && 
                        data
                            .filter(element => element.rating && element.rating.rate >= 4)
                            .map((element, index) => (
                                <div key={element.id || index} className="card" style={{width: '18rem', background:'transparent', color:'white', border:'none', textAlign:'center'}}>
                                    <img style={{height:'300px', }} src={element.image} className="card-img-top" alt="..."/>
                                    <div style={{height:'470px'}} className="card-body">
                                        <p className="card-text">Description: <br />{element.description}</p>
                                        <p>{element.price}€</p>
                                        <p>Notes:{element.rating.rate}</p>
                                    </div>
                                </div>
                            ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}