import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch }  from 'react-redux';
import { SmoothScroll, usePrevious } from '../globalFunc'
import { useRouter } from 'next/router';

// Components
import Nav from '../components/Nav'

const Main = (props) => {
    const [page, setPage] = useState(null);

    const prevPage = usePrevious(page);
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const route = useRouter();
    const {pathname} = route;
    
    const scrollWrap = useRef(null);
    
    useEffect(()=>{
        const isMatch = pathname.match(/\/\[lang\]\/(\w*)/);
        setPage(isMatch ? pathname.match(/\/\[lang\]\/(\w*)/)[1] : 'home');
        if(page !== prevPage && page !== null){
            dispatch({type:'UPDATE_PAGE', page:page});
        }
    })
    
    useEffect(()=>{
        let smooth = new SmoothScroll(scrollWrap.current,(s, y, h) => {});
        return () => { 
            smooth.off();
            smooth = null;
        }
    },[])

    return (
        <div id="bodyWrap" className={language}>
            <div id="mainWrap">
                <div ref={scrollWrap} id="scrollWrap">
                    {props.children}
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Main;