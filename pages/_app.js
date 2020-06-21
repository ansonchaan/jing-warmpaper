import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SmoothScroll, usePrevious, adjustFontSize } from '../src/globalFunc'
import { wrapper } from '../src/store'
import { useRouter } from 'next/router'

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
    const route = useRouter();
    const {pathname, basePath} = route;

    const logonameElem = useRef(null);
    const smooth = useRef(null);
    const scrollWrap = useRef(null);

    useEffect(()=>{
        const urlArray = pathname.split('/');
        urlArray.shift();
        const isMatch = urlArray[basePath ? 2 : 1];
        setPage(isMatch ? urlArray[basePath ? 2 : 1] + (urlArray[basePath ? 3 : 2] ? 'detail' : '') : 'home');

        if(page !== prevPage && page !== null){
            dispatch({type:'UPDATE_PAGE', page:page});
            if(smooth.current)
                smooth.current.reset();
        }
    })

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
                    <Footer/>
                </div>
            </div>
            <Nav logonameElem={logonameElem}/>
        </div>
    )
}

export default wrapper.withRedux(MyApp);