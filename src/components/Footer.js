import { useSelector } from 'react-redux';
import Link from 'next/link'

const Footer = props => {
    const language = useSelector(state => state.language);
    const page = useSelector(state => state.page);

    return (
        <div ref={props.footerElem} id="footer" data-page={page}>
            <div id="wrap" className="center">
                <Link href="/[lang]" as={`/${language}`}><a id="logo"></a></Link>
                <h2 className="b">We do digital like<br/> its our business.</h2>
                <div id="bottom">
                    <div id="left" className="b">
                        <h3>2146 2890</h3>
                        <a href="mailto:info@warmpaper-design.com"><h5>info@warmpaper-design.com</h5></a>
                    </div>
                    <div id="right">
                        <h6>Copyright@Warmpaper 2020</h6>
                        <div className="h6">
                            <a>TERMS</a>
                            <a>PRIVACY POLICY</a>
                        </div>
                    </div>
                </div>
                <div id="fb"><a href="" target="_blank"></a></div>
                <div id="ig"><a href="" target="_blank"></a></div>
            </div>
            <div id="bg"></div>
            <div id="bg2"></div>
        </div>
    )
}

export default Footer;