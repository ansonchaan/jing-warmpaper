import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = props => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    const route = useRouter();
    const { basePath } = route;
  
    // useEffect(()=>{
    // },[]);

    return (
        <div id="post">
            <div ref={props.featuredImageElem} id="featuredImage" style={{backgroundImage:`url(${basePath}/images/post1.png)`}}></div>
            <div id="description" className="center">
                <div id="wrap">
                    <h1 className="b">Academy of Laughter</h1>
                    <h2>A digital agency for brands that want more. The future of open meeting places for educators and students.</h2>
                    <ul id="info">
                        <li>
                            <h6 className="b">Client Name:</h6>
                            <h6>Academy of Laughter</h6>
                        </li>
                        <li>
                            <h6 className="b">Partner: </h6>
                            <h6>Agency Name here</h6>
                        </li>
                        <li>
                            <h6 className="b">Online Preview: </h6>
                            <h6>External Link</h6>
                        </li>
                    </ul>
                    <ul id="tag">
                        <li><span className="tag tag7 h5 b">Websites</span></li>
                        <li><span className="tag tag5 h5 b">Mobile App</span></li>
                    </ul>
                </div>
            </div>
            <div id="gallery" className="center">
                <div id="img"><img src={`${basePath}/images/post2.png`} /></div>
                <div id="imgwithDes1">
                    <div>
                        <img src={`${basePath}/images/post3.png`} />
                        <h5>One of the first things you should know about us is that we don’t do everything. But what we do, we do well.One of the first things you should know about us is that we don’t do everything. But what we do, we do well.</h5>
                    </div>
                </div>
                <div id="img"><img src={`${basePath}/images/post4.png`} /></div>
                <div id="img"><img src={`${basePath}/images/post5.png`} /></div>
                <div id="imgR"><img src={`${basePath}/images/post6.png`} /></div>
                <div id="imgwithDes2">
                    <img src={`${basePath}/images/post7.png`} />
                    <h5>One of the first things you should know about us is that we don’t do everything. But what we do, we do well.One of the first things you should know about us is that we don’t do everything. But what we do, we do well.</h5>
                </div>
                <div id="img"><img src={`${basePath}/images/post8.png`} /></div>
            </div>
            <Link href="/[lang]/projects" as={`/${language}/projects`}><a id="back" className="h3 b">Back to Projects</a></Link>
        </div>
    )
}

// export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
//     store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
//     store.dispatch({type:'UPDATE_PAGE', page:'projects-post'})
// })
  
// export const getStaticPaths = async () => {
//     const lang = ['en', 'tc'];
//     const posts = ['test'];
//     const paths = [];

//     Object.entries(lang).forEach(([lkey, l]) => {
//         Object.entries(posts).forEach(([pkey, p]) => {
//             const key = parseInt(lkey*posts.length,10) + parseInt(pkey,10);
//             paths[key] = {params: { lang:l, post: p }}
//         })
//     })
  
//     return{ paths, fallback: false }
// }

export default Post;