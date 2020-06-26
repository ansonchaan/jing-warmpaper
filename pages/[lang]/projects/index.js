import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router';

const Projects = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    // const route = useRouter();
  
    useEffect(()=>{
    },[]);

    return (
        <div id="projects">
            <div id="pageTitle" className="bigTitle b center">Our Projects</div>
            <div id="tagWrap" className="h4 center">
                <p className="h5">Scroll to explore</p>
                Paper is a thin<p className="t"><span className="tag tag1 h4 b">Cultural</span></p>
                sheet material produced<p className="t"><span className="tag tag2 h4 b">Cultural</span></p>
                by mechanically<p className="t"><span className="tag tag3 h4"><span>Cultural</span></span></p> 
                and/or chemically   <p className="t"><span className="tag tag4 h4 b">DEVELOPMENT</span></p>
                processing cellulose fibres derived from wood,  rags, grasses or  
                other vegetable sources in water, draining the water through fine mesh leaving<p className="t"><span className="tag tag5 h4 b">Mobile App</span></p> the fibre evenly<p className="t"><span className="tag tag6 h4 b">UI</span></p> distributed on the <p className="t"><span className="tag tag7 h4 b">Websites</span></p> 
                surface, followed by pressing and <p className="t"><span className="tag tag8 h5 b">System</span></p>drying.
            </div>
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
    store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
    store.dispatch({type:'UPDATE_PAGE', page:'projects'})
})
  
export const getStaticPaths = async () => {
    const lang = ['en'];

    const paths = lang.map((v)=>({
        params: { lang: v }
    }))
  
    return{ paths, fallback: false }
}

export default Projects;