import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router';

const Post = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    // const route = useRouter();
  
    useEffect(()=>{
    },[]);

    return (
        <div id="post">
            post {language}
        </div>
    )
}

// export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
//     store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
//     store.dispatch({type:'UPDATE_PAGE', page:'projects'})
// })
  
// export const getStaticPaths = async () => {
//     const lang = ['en'];

//     const paths = lang.map((v)=>({
//         params: { lang: v }
//     }))
  
//     return{ paths, fallback: false }
// }

export default Post;