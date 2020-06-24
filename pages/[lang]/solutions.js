import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../src/store'
import { useRouter } from 'next/router';

const Solutions = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    // const route = useRouter();
  
    useEffect(()=>{
    },[]);

    return (
        <div id="solutions">
            solutions {language}
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
    store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
    store.dispatch({type:'UPDATE_PAGE', page:'solutions'})
})
  
export const getStaticPaths = async () => {
    const lang = ['en'];

    const paths = lang.map((v)=>({
        params: { lang: v }
    }))
  
    return{ paths, fallback: false }
}

export default Solutions;