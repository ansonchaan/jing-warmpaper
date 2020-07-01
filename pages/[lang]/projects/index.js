import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Isotope = (typeof window !== 'undefined') ? require('isotope-layout') : null

const Projects = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    const [filter, setFilter] = useState([]);
    const route = useRouter();
    const { basePath } = route;

    const [data, setData] = useState([
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'mobileapp'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'system'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'cultural3'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'ui'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'development'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'cultural2'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'website'
        },
        {
            name:"Cittapartner<br/>Portfolio Website",
            category:'cultural1'
        }
    ]);

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
        if(iso.current && data.length > 8){
            iso.current.reloadItems();
            iso.current.arrange();
        }
    },[data])

    useEffect(()=>{
        if(filter.length && iso.current)
            iso.current.arrange({filter: filter});
    },[filter])

    const onFiltering = (f) => {
        setFilter([...filter, f]);
    }

    const addData = () => {
        setData([...data,
            {
                name:"Cittapartner<br/>Portfolio Website",
                category:'mobileapp'
            },
            {
                name:"Cittapartner<br/>Portfolio Website",
                category:'ui'
            },
            {
                name:"Cittapartner<br/>Portfolio Website",
                category:'system'
            }
        ]);
    }

    const mapcattotag = {
        cultural1:{
            name:"Cultural",
            tag:"tag1"
        },
        cultural2:{
            name:"Cultural",
            tag:"tag2"
        },
        cultural3:{
            name:"Cultural",
            tag:"tag3"
        },
        development:{
            name:"Development",
            tag:"tag4"
        },
        mobileapp:{
            name:"Mobile App",
            tag:"tag5"
        },
        ui:{
            name:"UI",
            tag:"tag6"
        },
        website:{
            name:"Website",
            tag:"tag7"
        },
        system:{
            name:"System",
            tag:"tag8"
        }
    }

    return (
        <div id="projects">
            <div id="pageTitle" className="bigTitle b center">Our Projects</div>
            <div id="tagWrap" className="h4 center">
                <p className="h5">Scroll to explore</p>
                Paper is a thin<p className="t"><span className="tag tag1 h4 b" onClick={()=>onFiltering('.cultural1')}>Cultural</span></p>
                sheet material produced<p className="t"><span className="tag tag2 h4 b" onClick={()=>onFiltering('.cultural2')}>Cultural</span></p> 
                by mechanically <p className="t"><span className="tag tag3 h4" onClick={()=>onFiltering('.cultural3')}>Cultural</span></p> 
                and/or chemically <p className="t"><span className="tag tag4 h4 b" onClick={()=>onFiltering('.development')}>DEVELOPMENT</span></p> 
                processing cellulose fibres derived from wood,  rags, grasses or other vegetable sources in water, 
                draining the water through fine mesh leaving the fibre <p className="t"><span className="tag tag5 h4 b" onClick={()=>onFiltering('.mobileapp')}>Mobile App</span></p>  
                evenly distributed <p className="t"><span className="tag tag6 h4 b" onClick={()=>onFiltering('.ui')}>UI</span></p> 
                on the surface, followed<p className="t"><span className="tag tag7 h4 b" onClick={()=>onFiltering('.website')}>Websites</span></p> 
                by pressing and <p className="t"><span className="tag tag8 h5 b" onClick={()=>onFiltering('.system')}>System</span></p>drying.
            </div>
            <div id="projectListWrap">
                <ul ref={projectListElem} id="projectList">
                    {
                        data.map((v,i)=>{
                            return (
                                <li key={i} className={`${v.category}`}>
                                    <Link href="/[lang]/projects/[post]" as={`/${language}/projects/test`}>
                                        <a id="itemWrap">
                                            <span className={`tag ${mapcattotag[v.category].tag} h5 b`}>{mapcattotag[v.category].name}</span>
                                            <div className="corner">
                                                <div id="wrap">
                                                    <div id="imgWrap"><div id="img" style={{backgroundImage:`url(${basePath}/images/project1.png)`}}></div></div>
                                                    <div id="name" className="h4" dangerouslySetInnerHTML={{__html:v.name}}></div>
                                                </div>
                                                <div id="des" className="small">Paper is a thin sheet material produced by mechanically and/or chemically processing cellulose fibres derived from wood, rags, grasses or other vegetable sources in water, draining the water through fine mesh leaving the fibre evenly distributed on the surface, followed by pressing and drying.</div>
                                            </div>
                                        </a>
                                    </Link>
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
                <div id="more" className="h4" onClick={addData}>SEE MORE</div>
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