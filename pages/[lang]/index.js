import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../src/store'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import gsap from 'gsap';

const Flickity = (typeof window !== 'undefined') ? require('flickity') : null

const Home = () => {
  const language = useSelector(state => state.language);
  // const dispatch = useDispatch();
  const {basePath} = useRouter();

  const gallery = useRef(null);
  
  useEffect(()=>{
    let flkty = new Flickity( gallery.current, {cellAlign:'left', pageDots: false});
    flkty.reposition();

    const lth = flkty.slides.length;
    flkty.on( 'scroll', function( progress ) {
      const idx = Math.max(0, Math.ceil(progress / (lth/2-1)) -1);
      for(let i=0; i<lth; i++){
        if(idx === i){
          const elem = flkty.slides[i].cells[0].element;
          const x = (idx-(progress / (lth/2-1))) * (lth*100);
          elem.style.transform = `translate3d(${x}%,0,0)`;
        }
      }
      console.log(progress, idx);
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

  return (
    <div id="home">
      <div id="banner" className="center">
        <div className="bigTitle b">A Digital Agency.</div>
        <div id="slogan">
          <div id="wrap">
            <div id="time" className="b">13:06</div>
          </div>
          <h2>We make digital Experiences because we are <u>designer</u>.</h2>
          <h5>Scroll to explore</h5>
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
            <Link href="/[lang]/projects" as={`/${language}/projects`}><a className="h5"><u>View all projects ></u></a></Link>
          </div>
          <div id="right">
            <ul ref={gallery} id="gallery">
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/project1.png')`}}>
                    </a>
                  </Link>
                  {/* <span className="tag7 h3 b">Websites</span> */}
                </div>
                {/* <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}><a id="name" className="h4">Cittapartner<br/> Portfolio Website</a></Link> */}
              </li>
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/project1.png')`}}>
                    </a>
                  </Link>
                  {/* <span className="tag7 h3 b">Websites</span> */}
                </div>
                {/* <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}><a id="name" className="h4">Cittapartner<br/> Portfolio Website</a></Link> */}
              </li>
              <li>
                <div id="imgWrap">
                  <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}>
                    <a id="img" className="corner" style={{backgroundImage:`url('${basePath}/images/project1.png')`}}>
                    </a>
                  </Link>
                  {/* <span className="tag7 h3 b">Websites</span> */}
                </div>
                {/* <Link href="/[lang]/projects/[post]" as={`/${language}/projects/a`}><a id="name" className="h4">Cittapartner<br/> Portfolio Website</a></Link> */}
              </li>
            </ul>
            </div>
        </div>
      </div>
      <div id="h_solutions">
        <h3 id="title" className="b">Solutions</h3>
        <ul>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Web<br/>Design</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Management & <br/>Communication</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
          <li><div className="corner"><div className="icon"></div><h5 className="b">Business<br/>Analytic</h5><p className="small">A digital agency for brands that want more. The future of open meeting places for.</p></div></li>
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
        <div id="icon"></div>
        <h2 className="b">About<br/>Warmpaper</h2>
        <h4>One of the first things you should know about us is that we don’t do everything. But what we do, we do well.One of the first things you should know about us is that we don’t do everything. But what we do, we do well.</h4>
      </div>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
  store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
  store.dispatch({type:'UPDATE_PAGE', page:'home'})
})

export const getStaticPaths = async () => {
  const lang = ['en'];

  const paths = lang.map((v)=>({
      params: { lang: v }
  }))

  return{ paths, fallback: false }
}

export default Home;