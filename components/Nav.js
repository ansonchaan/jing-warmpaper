import Link from 'next/link'
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';

const Nav = () => {
    const language = useSelector(state => state.language);
    // const dispatch = useDispatch();
    // const route = useRouter();

    return(
        <div id="nav">
            <div id="logo" className="h3 b">Warmpaper Design</div>
            <div id="menu">
                <Link href="/[lang]" as={`/${language}`}><a>Home</a></Link>
                <Link href="/[lang]/projects" as={`/${language}/projects`}><a>Projects</a></Link>
                <Link href="/[lang]/solutions" as={`/${language}/solutions`}><a>Solutions</a></Link>
                <Link href="/[lang]/about" as={`/${language}/about`}><a>About</a></Link>
                <Link href="/[lang]/contact" as={`/${language}/contact`}><a>Contact</a></Link>
            </div>
        </div>
    )
}

export default Nav;