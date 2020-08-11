import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from '../../src/store'
import { useRouter } from 'next/router';

const Flickity = (typeof window !== 'undefined') ? require('flickity') : null

const About = () => {
    const language = useSelector(state => state.language);
    const flkty = useRef(null);
    const cards = useRef(null);
  
    useEffect(()=>{
        const onResize = () => {
            if(window.innerWidth <= 1024){
                if(!flkty.current)
                    flkty.current = new Flickity( cards.current, {cellAlign:'center'});
            }
            else{
                if(flkty.current){
                    flkty.current.destroy();
                    flkty.current = null;
                }
            }
        }
        onResize();
        window.addEventListener('resize', onResize, false);

        return () => {
            window.removeEventListener('resize', onResize, false);
        }
    },[]);

    return (
        <div id="about">
            <div id="header">
                <div id="pageTitle" className="bigTitle b center">Who we are</div>
                <div id="wrap" className="ultra b">
                    <div className="row center">
                        <svg width="100%" height="100%" viewBox="0 0 1366 253" preserveAspectRatio="xMaxYMid slice">
                            <defs>
                                <clipPath id="myClip">
                                    <text transform="matrix(1 0 0 1 667.2373 202.7109)" fontSize="215px">WARM</text>
                                </clipPath>
                                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
                                </filter>
                            </defs>
                            <g clipPath="url(#myClip)">
                                <rect fill="#ffd0b9" x="0" y="0" width="100%" height="100%" />
                                <circle cx="900" cy="140" r="200" filter="url(#blur)" />
                                <circle cx="1300" cy="140" r="150" filter="url(#blur)" opacity=".6" />
                            </g>
                        </svg>
                    </div>
                    <div className="row center">paper</div>
                    <div id="smile"></div>
                </div>
            </div>
            <div id="description" className="description center">
                <div id="left" className="h2 b">A digital agency for brands that want more.</div>
                <div id="right" className="h4">Hello Monday is a creative studio that makes digital (and magical) ideas, products and experiences. We’re called Hello Monday because we aim to make Mondays better. Better for the people and organizations we collaborate with, better for their customers, better for us, and better for our planet. That might be a lot of pressure to put on design and technology, but we asked them and they’re totally okay with it.</div>
            </div>
            <div id="believes">
                <h3 id="title" className="b">Believes</h3>
                <ul ref={cards} id="cards">
                    <li><div className="corner"><div className="num h4 b">1</div><h4 className="b">Multimedia as <br/>discipline</h4><p className="h6">Hello Monday is a creative studio that makes digital (and magical) ideas, products and experiences. We’re called Hello Monday because we aim to make Mondays better. Better for the people and organizations we collaborate.</p></div></li>
                    <li><div className="corner"><div className="num h4 b">2</div><h4 className="b">Human as <br/>subject</h4><p className="h6">Hello Monday is a creative studio that makes digital (and magical) ideas, products and experiences. We’re called Hello Monday because we aim to make Mondays better. Better for the people and organizations we collaborate.</p></div></li>
                    <li><div className="corner"><div className="num h4 b">3</div><h4 className="b">Human as <br/>subject</h4><p className="h6">Hello Monday is a creative studio that makes digital (and magical) ideas, products and experiences. We’re called Hello Monday because we aim to make Mondays better. Better for the people and organizations we collaborate.</p></div></li>
                </ul>
                <div id="bgWrap">
                    <div id="bg">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div id="description2" className="description center">
                <div id="left" className="h3 b">We are Hong Kong based, We love our culture</div>
                <div id="right" className="h4">Hello Monday is a creative studio that makes digital (and magical) ideas, products and experiences. We’re called Hello Monday because we aim to make Mondays better. Better for the people and organizations.</div>
            </div>
            <div id="others">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    {/* <div id="img2" className="img"></div>
                    <div id="img1" className="img"></div> */}
                </ul>
            </div>
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
    store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
    store.dispatch({type:'UPDATE_PAGE', page:'about'})
})
  
export const getStaticPaths = async () => {
    const lang = ['en','tc'];

    const paths = lang.map((v)=>({
        params: { lang: v }
    }))
  
    return{ paths, fallback: false }
}

export default About;