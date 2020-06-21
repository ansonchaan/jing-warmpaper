import { useSelector } from 'react-redux';
import Link from 'next/link'

const Footer = () => {
    const language = useSelector(state => state.language);

    return (
        <div id="footer">
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
            </div>
        </div>
    )
}

export default Footer;