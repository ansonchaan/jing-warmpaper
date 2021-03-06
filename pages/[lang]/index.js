import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../src/store'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import gsap from 'gsap';

const Flickity = (typeof window !== 'undefined') ? require('flickity') : null
const _tempData = {
  "en":{
    "title":"A Digital Agency.",
    "slogan":["We make digital Experiences because we are&nbsp;"],
    "slogan_animText":['designer', 'programmer', 'team player', 'researcher'],
    "scrollMsg":"Scroll to explore"
  },
  "tc":{
    "title":"一間數位設計工作室",
    "slogan":["因為我們是","，","所以我們提供數位設計體驗"],
    "slogan_animText":['設計師', '工程師', '團隊', '研究員'],
    "scrollMsg":"向下滾動探索更多"
  }
}

const Home = props => {
  const language = useSelector(state => state.language);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [txtIdx, setTxtIdx] = useState(0);
  const {basePath} = useRouter();

  const txtAnimElem = useRef(null);
  const gallery = useRef(null);
  
  useEffect(()=>{
    let oldIdx = 0;
    let flkty = new Flickity( gallery.current, {cellAlign:'left', pageDots: false, selectedAttraction: 1, friction: 1});
    flkty.reposition();

    const lth = flkty.slides.length;
    let newIdx = 0;
    let draging = false;

    flkty.on( 'scroll', function( progress ) {
      const elem = flkty.slides[newIdx].cells[0].element;
      const _progress = progress;
      const p = _progress/(lth/2-1);
      const x = Math.min(0, (newIdx-p) * (200));
      elem.style.transform = `translate3d(${x}%,0,0)`;
    });

    flkty.on( 'change', function( index ) {
      if(index !== oldIdx){
        if(index > oldIdx)
          newIdx = oldIdx+1;
        else if(index < oldIdx)
          newIdx = oldIdx-1;
      }
      oldIdx = newIdx;
      setGalleryIdx(index);
    });
    
    flkty.on( 'dragStart', function( event, pointer ) {
      draging = true;
    });

    flkty.on( 'dragEnd', function( event, pointer ) {
      draging = false;
      // oldIdx = newIdx;
      flkty.select(newIdx);
    });

    for(let i=0; i<lth; i++){
      const elem = flkty.slides[i].cells[0].element;
      elem.style.zIndex = lth-i;
      gsap.set(elem.querySelector('#imgWrap'),{rotate: Math.random() * 20 - 10 });
    }

    return () => {
      flkty.destroy();
      flkty = null;
    }
  },[]);

  const txt = ['designer', 'programmer', 'team player', 'researcher'];
  useEffect(()=>{
    let idx = 0;
    let _in = null;
    let _out = null;

    const outText = () => {
      if(txtAnimElem)
        gsap.to(txtAnimElem.current.querySelectorAll('div'), .8, {delay:3, scaleX:0, transformOrigin:'right', ease:'power3.in'});
        _out = gsap.to(txtAnimElem.current.querySelectorAll('span'), .6, {delay:3, force3D:true, stagger:.06, y:'-100%', ease:'power3.in',
          onComplete:function(){
            idx = idx+1 < txt.length ? idx+1 : 0;
            setTxtIdx(idx);
            if(txtAnimElem) inText();
          }
        });
    }

    const inText = () => {
      if(txtAnimElem)
        gsap.to(txtAnimElem.current.querySelectorAll('div'), .8, {scaleX:1, transformOrigin:'left', ease:'power3.out'});
        _in = gsap.fromTo(txtAnimElem.current.querySelectorAll('span'), .6, {y:'100%'}, {y:'0%', stagger:.06, ease:'power3.out',
          onComplete:function(){
            outText();
          }
        })
    }

    outText();
    return () => {
      if(_out) _out.kill();
      if(_in) _in.kill();
    }
  },[]);

  const data = props.data;

  const tempData = _tempData[language];

  return (
    <div id="home">
      <div id="banner" className="center">
        <div className="bigTitle b">{tempData.title}</div>
        <div id="slogan">
          {/* <div id="wrap"></div> */}
          <h2>
            <p dangerouslySetInnerHTML={{__html:tempData.slogan[0]}}></p>
            <span ref={txtAnimElem}>
              {
                tempData.slogan_animText[txtIdx].split('').map((v,i)=>{
                  return <span key={i} dangerouslySetInnerHTML={{__html:v.replace(' ','&nbsp;')}}></span>
                })
              }
              <div></div>
            </span>
            <p dangerouslySetInnerHTML={{__html:tempData.slogan[1]}}></p>
            <br/>
            <p dangerouslySetInnerHTML={{__html:tempData.slogan[2]}}></p>
          </h2>
          <h5>{tempData.scrollMsg}</h5>
        </div>
        <div id="bg">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="h_projects">
        <div id="wrap" className="center">
          <div id="left">
            <h2 className="b">A digital agency for brands that want more.</h2>
            <Link href="/[lang]/projects" as={`/${language}/projects`}><a className="h5"><u>View all projects</u></a></Link>
          </div>
          <div id="right">
            <ul ref={gallery} id="gallery">
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/projects1.png')`}}>
                    </a>
                  </Link>
                  <span className="tag tag7 h3 b">Websites</span>
                </div>
              </li>
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/projects5.png')`}}>
                    </a>
                  </Link>
                  <span className="tag tag5 h3 b">Websites</span>
                </div>
              </li>
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/projects8.png')`}}>
                    </a>
                  </Link>
                  <span className="tag tag3 h3 b">Websites</span>
                </div>
              </li>
            </ul>
            <ul id="name">
              {
                [...Array(3)].map((v,i)=>{
                  return <li key={i} className={ i === galleryIdx ? 'active' : ''}>
                      <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                        <a className="h5">{i+1} Cittapartner<br/> Portfolio Website</a>
                      </Link>
                    </li>
                })
              }
            </ul>
            </div>
        </div>
      </div>
      <div id="h_solutions">
        <h3 id="title" className="b">Solutions</h3>
        <ul>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Web<br/> Design</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Management & <br/>Communication</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Business<br/> Analytic</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Consultant & <br/>User Experience</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
        </ul>
        <div id="bgWrap">
          <div id="bg">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div id="h_about" className="center">
        <div id="wrap">
          <div id="titleWrap">
            {/* <div id="icon"></div> */}
            <h2 className="b">About<br/>Warmpaper</h2>
          </div>
          <h4>One of the first things you should know about us is that we don’t do everything. But what we do, we do well.One of the first things you should know about us is that we don’t do everything. But what we do, we do well.</h4>
        </div>
      </div>
      
      <style jsx>{`
        .bigTitle {
            font-size: 4.375rem;
            line-height: 5rem;
        }
        @media screen and (max-width: 700px){
          .bigTitle {
              font-size: 3.75rem;
              line-height: 4.0625rem;
          }
        }
      `}</style>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
  store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
  store.dispatch({type:'UPDATE_PAGE', page:'home'})
})

export const getStaticPaths = async () => {
  const lang = ['en', 'tc'];

  const paths = lang.map((v)=>({
      params: { lang: v }
  }))

  return{ paths, fallback: false }
}

// export const getServerSideProps = wrapper.getServerSideProps( async ({ store }) => {  
//     const d = await fetch("API_URL");  //<-- change "API_URL"
//     const data = await d.json();
  
//     return {
//       props: {
//         data,
//       }
//     }
// })

export default Home;