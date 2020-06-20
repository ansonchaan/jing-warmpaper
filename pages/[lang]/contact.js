import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../src/store'
import { useRouter } from 'next/router';

const Contact = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    // const route = useRouter();
  
    useEffect(()=>{
    },[]);

    return (
        <div id="contact">
            contact {language}
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps( async ({ store, query }) => {
    store.dispatch({type:'UPDATE_LANGUAGE', language: query.lang})
    store.dispatch({type:'UPDATE_PAGE', page:'contact'})
})

export default Contact;