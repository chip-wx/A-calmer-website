import { useEffect, useRef } from 'react';
import './styles/hero.css';
import { gsap } from 'gsap';
import mainImage from '../../assets/main.png';

export const Hero = () => {
    const titleRef = useRef(null);


        useEffect(() => {
  gsap.to(titleRef.current, {
    color: "red",
    delay: 5,
    duration: 1,
  });
}, []);
       



    return (
        <main className="hero">
            <h1 ref={titleRef} className='title'>A <span className="calmer">Calmer</span> Website</h1>
            <img src={mainImage} alt="" />
        </main>
    )
}