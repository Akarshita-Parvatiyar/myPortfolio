import React from 'react'
import pic from "../pic.jpg"

export default function Hero() {
    return (<>
        <div>
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Akarshita</span><br/> a Web Designer</h1>

                    <a href="#contact" class="button">Contact</a>
                </div>

                <div class="home__social">
                    <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">    
                    <img src={pic} alt=""/>
                </div>
            </section>
        </div>
    </>)
}
