import React from 'react'
import about from '../about.jpg'

export default function About() {
    return (
        <>
          <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src={about} alt=""/>
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">Hello!</h2>
                        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>  
        </>
    )
}
