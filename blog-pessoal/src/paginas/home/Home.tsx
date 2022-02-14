import React from 'react';
import './Home.css';

function Home(){
    return (
        // a mesma coisa que <div> = <>
        <> 
            <h1 className='titulo'>Home</h1>
            <img src="https://store-images.s-microsoft.com/image/apps.63721.14347928042027126.f314c854-2236-411f-ada9-7a51c542b873.e56df711-9537-406d-86d6-38411f8e2289?mode=scale&q=90&h=720&w=1280" alt="Imagem do dog tocando" className='img'/>
        </> 
    );

}

export default Home; 