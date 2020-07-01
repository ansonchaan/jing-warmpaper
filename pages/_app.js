import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SmoothScroll, usePrevious, adjustFontSize } from '../src/globalFunc'
import { wrapper } from '../src/store'
import { useRouter } from 'next/router'
import gsap from 'gsap';

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
    const {pathname, basePath} = route;

    const logonameElem = useRef(null);
    const footerElem = useRef(null);
    const smooth = useRef(null);
    const scrollWrap = useRef(null);

    useEffect(()=>{
        const urlArray = pathname.split('/');
        urlArray.splice(0,1);
        if('/'+urlArray[0] === basePath){
            urlArray.splice(0,1);
        }
        const isMatch = urlArray[1];
        setPage(isMatch ? urlArray[1] + (urlArray[2] ? 'detail' : '') : 'home');
    },[pathname])
    
    useEffect(()=>{
        if(page !== prevPage && page !== null){
            dispatch({type:'UPDATE_PAGE', page:page});
            if(smooth.current)
                smooth.current.reset();
        }
    },[page])

    useEffect(()=>{
        adjustFontSize();
        window.addEventListener('resize', ()=>adjustFontSize());
        return () => {
            window.removeEventListener('resize', ()=>adjustFontSize());
        }
    },[])

    
    useEffect(()=>{
        smooth.current = new SmoothScroll(scrollWrap.current,(s, y, h) => {
            logonameElem.current.style.transform = `translate3d(0,${y}px,0)`;
            
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

    return (
        <div id="bodyWrap" className={language}>
            <div id="mainWrap">
                <div ref={scrollWrap} id="scrollWrap">
                    <Component {...pageProps} />
                    {currentpage !== 'contact' && <Footer footerElem={footerElem} /> }
                </div>
            </div>
            <Nav logonameElem={logonameElem}/>
        </div>
    )
}

export default wrapper.withRedux(MyApp);