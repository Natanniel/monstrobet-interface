import React, { useEffect, useState } from 'react';
import "./index.css"
// import { Container } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { Link } from "react-router-dom";

function Home(usuario) {

    useEffect(() => {


    }, [])

    return (
        <div>
            <div className='container mt-3'>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    <div>
                        <img src="https://blaze.com/cdn-cgi/image/width=1070,height=320,quality=75/https://images.prismic.io/blazecom/f8f33b5b-200d-4533-9f31-5149d6e948c6_Rotating+banner+DEPOSIT%402x_18+%281%29.png" />
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                    </div>
                </Carousel>
            </div>

            <div className='container mt-3'>
                <h1 id="games" className='text-white display-5'>Jogos</h1>

                <div className='row mt-3'>
                    <div class="col-6">
                        <div class="box noMobile">
                            <Link to={"/jogos/joker"}>
                                <img className="img-game rounded" alt="" src={require("../assets/game-joker.png")} />
                            </Link>
                            <text className='text-white fst-italic'>Joker Jackpot</text>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="box noMobile">
                            <img className="img-game rounded" alt="" src={require("../assets/breve.png")} />
                            <text className='text-white fst-italic'>EM BREVE</text>
                        </div>
                    </div>

                </div>
            </div>



            <footer>

            </footer>
        </div>
    );
}

export default Home;