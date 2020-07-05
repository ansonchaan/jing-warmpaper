import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../../../src/store'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Solutions = () => {
    const language = useSelector(state => state.language);
    // const [z, setZ] = useState(0);
    // const dispatch = useDispatch();
    const route = useRouter();
    const { basePath } = route;
  
    useEffect(()=>{
    },[]);

    const onHover = (e) => {
        e.currentTarget.style.zIndex = z++;
    }

    let z = 10;

    return (
        <div id="solutions">
            <div id="pageTitle" className="bigTitle b center">Solutions</div>
            <div id="description" className="center">
                <div id="wrap">
                    <p className="h2">Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</p>
                    <div id="icon"></div>
                </div>
                <div id="bgWrap"><div id="bg"><span></span></div></div>
            </div>
            <div id="outerWrap">
                <div id="listWrap" className="center">
                    <ul>
                        <li onMouseEnter={(e)=>onHover(e)}>
                            <Link href="/[lang]/solutions/[post]" as={`/${language}/solutions/test`}>
                                <a style={{backgroundImage:`url(${basePath}/images/solutionsimg1.jpg)`}}>
                                    <div id="front">
                                        <div id="wrap">
                                            <h1 className="b">Management & <br/>Communication</h1>
                                            <h6>Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.024" height="21.912" viewBox="0 0 30.024 21.912">
                                                <g transform="translate(-1.893 -10.026)">
                                                    <g transform="translate(1.893 10.026)">
                                                        <path fill="#a6c3be" fillRule="evenodd" d="M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z" transform="translate(-1.893 -10.026)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="back"></div>
                                </a>
                            </Link>
                        </li>
                        <li onMouseEnter={(e)=>onHover(e)}>
                            <Link href="/[lang]/solutions/[post]" as={`/${language}/solutions/test`}>
                                <a style={{backgroundImage:`url(${basePath}/images/solutionsimg2.jpg)`}}>
                                    <div id="front">
                                        <div id="wrap">
                                            <h6>Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</h6>
                                            <h2 className="b">WEB Design</h2>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.024" height="21.912" viewBox="0 0 30.024 21.912">
                                                <g transform="translate(-1.893 -10.026)">
                                                    <g transform="translate(1.893 10.026)">
                                                        <path fill="#a6c3be" fillRule="evenodd" d="M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z" transform="translate(-1.893 -10.026)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li onMouseEnter={(e)=>onHover(e)}><a style={{backgroundImage:`url(${basePath}/images/solutionsimg3.jpg)`}}><div id="front"></div></a></li>
                        <li onMouseEnter={(e)=>onHover(e)}>
                            <Link href="/[lang]/solutions/[post]" as={`/${language}/solutions/test`}>
                                <a style={{backgroundColor:'#dcddcd'}}>
                                    <div id="front">
                                        <div id="wrap">
                                            <h2 className="b">Business Analytic</h2>
                                            <h6>Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.024" height="21.912" viewBox="0 0 30.024 21.912">
                                                <g transform="translate(-1.893 -10.026)">
                                                    <g transform="translate(1.893 10.026)">
                                                        <path fill="#a6c3be" fillRule="evenodd" d="M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z" transform="translate(-1.893 -10.026)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="hasBack" onMouseEnter={(e)=>onHover(e)}>
                            <Link href="/[lang]/solutions/[post]" as={`/${language}/solutions/test`}>
                                <a style={{backgroundColor:'#eff0ea'}}>
                                    <div id="front">
                                        <div id="icon"></div>
                                        <div id="wrap">
                                            <div id="title">
                                                <h2 className="b">Consultant & User Experiences</h2>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30.024" height="21.912" viewBox="0 0 30.024 21.912">
                                                    <g transform="translate(-1.893 -10.026)">
                                                        <g transform="translate(1.893 10.026)">
                                                            <path fill="#a6c3be" fillRule="evenodd" d="M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z" transform="translate(-1.893 -10.026)"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6>Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</h6>
                                        </div>
                                    </div>
                                    <div id="back">
                                        <h2 className="b cap">Consultant & User Experiences</h2>
                                        <ul id="numoflist" className="h4 b">
                                            <li>Ready to use</li>
                                            <li>Easy to adopt</li>
                                            <li>Data analysis</li>
                                        </ul>
                                        <h6>Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.</h6>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li onMouseEnter={(e)=>onHover(e)}>
                            <a>
                                <div id="front" style={{backgroundImage:`url(${basePath}/images/solutionsimg4.jpg)`}}></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="ourpartners">
                    <h4 className="b">Our Partners</h4>
                    <div id="marquee">
                        <ul>
                            <li><img src={`${basePath}/images/icons/starbucks.png`} /></li>
                            <li><img src={`${basePath}/images/icons/sidley.png`} /></li>
                            <li><img src={`${basePath}/images/icons/littler.png`} /></li>
                            <li><img src={`${basePath}/images/icons/nespresso.png`} /></li>

                            {/* main */}
                            <li><img src={`${basePath}/images/icons/starbucks.png`} /></li>
                            <li><img src={`${basePath}/images/icons/sidley.png`} /></li>
                            <li><img src={`${basePath}/images/icons/littler.png`} /></li>
                            <li><img src={`${basePath}/images/icons/nespresso.png`} /></li>
                            {/* main */}

                            <li><img src={`${basePath}/images/icons/starbucks.png`} /></li>
                            <li><img src={`${basePath}/images/icons/sidley.png`} /></li>
                            <li><img src={`${basePath}/images/icons/littler.png`} /></li>
                            <li><img src={`${basePath}/images/icons/nespresso.png`} /></li>
                        </ul>
                    </div>
                </div>
            </div>
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