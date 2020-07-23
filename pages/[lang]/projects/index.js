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
        if(filter.length && iso.current){
            iso.current.arrange({filter: filter});
        }
        else{
            iso.current.arrange({filter: ''});
        }
    },[filter])

    const onFiltering = (f) => {
        const array = [...filter];
        const idx = array.indexOf(f);

        if(idx > -1){
            array.splice(idx, 1);
            setFilter(array);
        }
        else
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
            <div id="tagWrap" className={`h4 center ${filter.length ? 'active' : ''}`}>
                <p className="h5">Scroll to explore</p>
                <div id="tags">
                    <span>Paper is a thin</span><p className="t"><span className={`tag tag1 h4 b ${filter.find(v => v === '.cultural1') ? 'active' : ''}`} onClick={()=>onFiltering('.cultural1')}>Cultural</span></p>
                    <span>sheet material produced</span><p className="t"><span className={`tag tag2 h4 b ${filter.find(v => v === '.cultural2') ? 'active' : ''}`} onClick={()=>onFiltering('.cultural2')}>Cultural</span></p> 
                    <span>by mechanically</span> <p className="t"><span className={`tag tag3 h4 ${filter.find(v => v === '.cultural3') ? 'active' : ''}`} onClick={()=>onFiltering('.cultural3')}>Cultural</span></p> 
                    <span>and/or chemically</span> <p className="t"><span className={`tag tag4 h4 b ${filter.find(v => v === '.development') ? 'active' : ''}`} onClick={()=>onFiltering('.development')}>DEVELOPMENT</span></p> 
                    <span>processing cellulose fibres derived from wood,  rags, grasses or other vegetable sources in water,</span> 
                    <span>draining the water through fine mesh leaving the fibre</span> <p className="t"><span className={`tag tag5 h4 b ${filter.find(v => v === '.mobileapp') ? 'active' : ''}`} onClick={()=>onFiltering('.mobileapp')}>Mobile App</span></p>  
                    <span>evenly distributed</span> <p className="t"><span className={`tag tag6 h4 b ${filter.find(v => v === '.ui') ? 'active' : ''}`} onClick={()=>onFiltering('.ui')}>UI</span></p> 
                    <span>on the surface, followed</span> <p className="t"><span className={`tag tag7 h4 b ${filter.find(v => v === '.website') ? 'active' : ''}`} onClick={()=>onFiltering('.website')}>Websites</span></p> 
                    <span>by pressing and</span> <p className="t"><span className={`tag tag8 h5 b ${filter.find(v => v === '.system') ? 'active' : ''}`} onClick={()=>onFiltering('.system')}>System</span></p>
                    <span>drying.</span>
                </div>
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
                                                <div id={v.category === 'system' || v.category === 'ui' || v.category === 'cultural2' ? 'des_s' : 'des'} className="small"></div>
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