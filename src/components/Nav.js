import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
// import { useRouter } from 'next/router';

const Nav = (props) => {
    const language = useSelector(state => state.language);
    const page = useSelector(state => state.page);

    const [activeMenu, setActiveMenu] = useState(false);
    // const dispatch = useDispatch();
    // const route = useRouter();

    const pages = [['projects','Projects'],['solutions','Solutions'],['about','About'],['contact','Contact']];

    useEffect(()=>{
        const menuText = document.querySelectorAll('#menu #text');
        const menuBrush = document.querySelectorAll('#menu #brush');

        const updateBrush = () => {
            for(let i=0; i<menuText.length; i++){
                const text = menuText[i];
                const brush = menuBrush[i];
                brush.style.backgroundSize = text.offsetWidth*1.09+'px';
            }
        }

        setTimeout(()=>{updateBrush()},300);
        window.addEventListener('resize', updateBrush, false);
        return()=>{
            window.removeEventListener('resize', updateBrush, false);
        }
    },[]);

    const onOpenMenu = (bool) => {
        setActiveMenu(bool);

        const tl = gsap.timeline();
        if(bool){
            tl.to('#menuBtn #default > span > span', 1, {y:'-400%', stagger:.1, ease:'power4.inOut'});
            tl.set('#default', {autoAlpha:0});
            tl.set('#active', {autoAlpha:1});
            tl.fromTo('#menuBtn #active > span > span', 1, {y:'-200%'},{y:0, stagger:.1, ease:'power4.out'});
            tl.fromTo('#menuBtn #active .line span', 1, {scaleX:0}, {scaleX:1, stagger:.3, ease:'power4.out'},'-=.5');
        }
        else{
            tl.to('#menuBtn #active > span > span', 1, {y:'-200%', stagger:.1, ease:'power4.inOut'});
            tl.set('#active', {autoAlpha:0});
            tl.set('#default', {autoAlpha:1});
            tl.fromTo('#menuBtn #default > span > span', 1, {y:'-400%'}, {y:0, stagger:.1, ease:'power4.out'});
        }
    }

    const onClickMenuItem = () => {
        onOpenMenu(false);
    }

    return(
        <div id="nav" className={page}>
            <Link href="/[lang]" as={`/${language}`}><a id="logo" className="h3 b"><span ref={props.logonameElem}>Warmpaper Design</span></a></Link>
            <div id="menuBtn" className={activeMenu ? 'active' : ''}>
                <div id="default" onClick={()=>!activeMenu && onOpenMenu(true)}>
                    <span><span></span></span>
                    <span><span></span></span>
                    <span><span></span></span>
                </div>
                <div id="active" onClick={()=>activeMenu && onOpenMenu(false)}>
                    <span>
                        <span>
                            <span className="line"><span></span></span>
                            <span className="line"><span></span></span>
                        </span>
                    </span>
                    <span><span></span></span>
                    <span><span></span></span>
                </div>
            </div>
            <div id="menu" className={`${activeMenu ? 'active' : ''} big b`}>
                {
                    pages.map((v,i)=>{
                        return <Link key={i} href={`/[lang]/${v[0]}`} as={`/${language}/${v[0]}`}>
                            <a className={page === v[0] ? 'active' : ''} onClick={onClickMenuItem}><span id="text">{v[1]}<span id="brush"></span></span></a>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Nav;