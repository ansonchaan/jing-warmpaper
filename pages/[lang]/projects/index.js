import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router'

const Isotope = (typeof window !== 'undefined') ? require('isotope-layout') : null

const Projects = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    const route = useRouter();
    const { basePath } = route;

    const [data, setData] = useState([...Array(8)]);

    const iso = useRef(null);
    const projectListElem = useRef(null);
  
    useEffect(()=>{
        iso.current = new Isotope(projectListElem.current,{
            stamp:'.space'
        });
        setTimeout(()=>{
            iso.current.layout();
        },100);
    },[]);

    useEffect(()=>{
        if(iso.current) {
            iso.current.destroy();
            iso.current = new Isotope(projectListElem.current,{
                stamp:'.space'
            });
        }
    },[data])

    const onFiltering = (f) => {
        iso.current.arrange({filter: `.${f}`});
    }

    const updateData = (d) => {
        setData(d);
    }

    return (
        <div id="projects">
            <div id="pageTitle" className="bigTitle b center">Our Projects</div>
            <div id="tagWrap" className="h4 center">
                <p className="h5">Scroll to explore</p>
                Paper is a thin<p className="t"><span className="tag tag1 h4 b" onClick={()=>onFiltering('a')}>Cultural</span></p>
                sheet material produced<p className="t"><span className="tag tag2 h4 b" onClick={()=>onFiltering('b')}>Cultural</span></p> 
                by mechanically <p className="t"><span className="tag tag3 h4"><span>Cultural</span></span></p> 
                and/or chemically <p className="t"><span className="tag tag4 h4 b">DEVELOPMENT</span></p> 
                processing cellulose fibres derived from wood,  rags, grasses or other vegetable sources in water, 
                draining the water through fine mesh leaving the fibre <p className="t"><span className="tag tag5 h4 b">Mobile App</span></p>  
                evenly distributed <p className="t"><span className="tag tag6 h4 b">UI</span></p> 
                on the surface, followed<p className="t"><span className="tag tag7 h4 b">Websites</span></p> 
                by pressing and <p className="t"><span className="tag tag8 h5 b">System</span></p>drying.
            </div>
            <div id="projectListWrap">
                <ul ref={projectListElem} id="projectList">
                    {
                        data.map((v,i)=>{
                            return (
                                <li key={i} className={i%2===0 ? 'a' : 'b'}>
                                    <div id="itemWrap">
                                        <div id="wrap">
                                            <div id="imgWrap"><div id="img" style={{backgroundImage:`url(${basePath}/images/project1.png)`}}></div></div>
                                            <div id="name" className="h4">Cittapartner <br/>Portfolio Website</div>
                                        </div>
                                        <div id="des" className="small">Paper is a thin sheet material produced by mechanically and/or chemically processing cellulose fibres derived from wood, rags, grasses or other vegetable sources in water, draining the water through fine mesh leaving the fibre evenly distributed on the surface, followed by pressing and drying.</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    {
                        [...Array(2)].map((v,i)=>{
                            return <li key={i} className="space"></li>
                        })
                    }
                </ul>
                <div id="more" className="h4" onClick={()=>updateData([...Array(12)])}>SEE MORE</div>
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