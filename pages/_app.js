import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SmoothScroll, usePrevious, adjustFontSize } from '../src/globalFunc'
import { wrapper } from '../src/store'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {Noise} from '../src/js/noise'

// Components
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'

// scss
import '../src/scss/style.scss';

const MyApp = ({ Component, pageProps }) => {
    const [page, setPage] = useState(null);

    const prevPage = usePrevious(page);
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const currentpage = useSelector(state => state.page);
    const route = useRouter();
    const {asPath, pathname, basePath} = route;

    const logonameElem = useRef(null);
    const featuredImageElem = useRef(null);
    const footerElem = useRef(null);
    const smooth = useRef(null);
    const scrollWrap = useRef(null);
    const canvasElem = useRef(null);

    useEffect(()=>{
        const urlArray = pathname.split('/');
        urlArray.splice(0,1);
        if('/'+urlArray[0] === basePath){
            urlArray.splice(0,1);
        }
        const isSection = urlArray[2] ? urlArray[2].match(/section/g) : false;
        let isPost;

        isSection ? 
            isPost = urlArray[3] ? urlArray[3].match(/post/g) : false
        :
            isPost = urlArray[2] ? urlArray[2].match(/post/g) : false
        setPage(isPost ? urlArray[1]+'-post' : urlArray[1] ? urlArray[1] : 'home');
    },[pathname])
    
    useEffect(()=>{
        if(page !== prevPage && page !== null){
            dispatch({type:'UPDATE_PAGE', page:page});
            if(smooth.current)
                smooth.current.reset();
        }
    },[page])

    useEffect(()=>{
        const noise = new Noise(canvasElem.current);
        noise.init();

        adjustFontSize();
        window.addEventListener('resize', ()=>adjustFontSize());
        return () => {
            noise.destroy();
            window.removeEventListener('resize', ()=>adjustFontSize());
        }
    },[])

    
    useEffect(()=>{
        smooth.current = new SmoothScroll(scrollWrap.current,(s, y, h) => {
            logonameElem.current.style.transform = `translate3d(0,${y}px,0)`;
            if(featuredImageElem.current)
                featuredImageElem.current.style.transform = `translate3d(0,${-y*.5}px,0)`;

            if(footerElem.current)
                if(!footerElem.current.className){
                    if(footerElem.current.getBoundingClientRect().top - window.innerHeight < -footerElem.current.offsetHeight/2){
                        footerElem.current.className = 'active';
                    }
                }
        });
        return () => { 
            smooth.current.off();
            smooth.current = null;
        }
    },[])

    const getTitle = () => {
        const title = asPath.replace(basePath, '').replace(/\?.+/g,'').split('/');
        title.splice(0,2);

        for(let i=0; i<title.length; i++){
            title[i] = decodeURIComponent(title[i].charAt(0).toUpperCase() + title[i].slice(1));
        }

        return title.length ? title.reverse().join(' | ') : 'Warmpaper Design';
    }

    return (
        <>
            <Head>
                <title>{getTitle()}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div id="bodyWrap" className={language}>
                <Nav logonameElem={logonameElem}/>
                <div id="mainWrap">
                    <div ref={scrollWrap} id="scrollWrap">
                        <Component {...pageProps} featuredImageElem={featuredImageElem} />
                        {currentpage !== 'contact' && <Footer footerElem={footerElem} /> }
                    </div>
                </div>
                <canvas ref={canvasElem}></canvas>
            </div>
            <style jsx>{`
                #bodyWrap{
                    font-family:'Okta Neue', sans-serif;
                    font-size: 1.25rem;
                    line-height: 1.875rem;
                }
            `}</style>
        </>
    )
}

export default wrapper.withRedux(MyApp);