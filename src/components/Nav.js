import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
// import { useRouter } from 'next/router';

const Nav = () => {
    const language = useSelector(state => state.language);
    const page = useSelector(state => state.page);

    const [activeMenu, setActiveMenu] = useState(false);
    // const dispatch = useDispatch();
    // const route = useRouter();

    const pages = [['projects','Projects'],['solutions','Solutions'],['about','About'],['contact','Contact']];

    useEffect(()=>{
        const menuText = document.querySelectorAll('#menu a');
        const menuBrush = document.querySelectorAll('#menu a span');

        const updateBrush = () => {
            for(let i=0; i<menuText.length; i++){
                const text = menuText[i];
                const brush = menuBrush[i];
                brush.style.backgroundSize = text.offsetWidth*1.09+'px';
            }
        }

        updateBrush();
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

    return(
        <div id="nav">
            <div id="logo" className="h3 b">Warmpaper Design</div>
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
                        return <Link key={i} href={`/[lang]/${v[0]}`} as={`/${language}/${v[0]}`}><div><a className={page === v[0] ? 'active' : ''}>{v[1]}<span></span></a></div></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Nav;