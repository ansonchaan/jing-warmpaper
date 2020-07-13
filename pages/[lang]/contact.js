import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../../src/store'
import { useRouter } from 'next/router';

const Contact = () => {
    // const language = useSelector(state => state.language);
    const [openform, setOpenform] = useState(false);
    // const [email, setEmail] = useState('');
    // const dispatch = useDispatch();
    // const route = useRouter();
    // const { basePath } = route;
  
    useEffect(()=>{
    },[]);

    const onOpenForm = (bool = undefined) => {
        setOpenform(bool ? bool : !openform);
    }

    // const getEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    return (
        <div id="contact">
            <div id="wrap" className="center">
                <h4>The best way to understand us is to talk to us. We”ll let you choose how.</h4>
                <div id="info">
                    <div id="title" className="bigTitle b">Contact</div>
                    <div id="infoWrap">
                        <div id="tel" className="bigTitle l">+ 852 2146 2890</div>
                        <h3>Info@Warmpaper-Design.Com</h3>
                        <h6>Talk to us about your exciting project.</h6>
                        <ul id="iconWrap">
                            <li><a id="fb" href="" target="_blank"></a></li>
                            <li><a id="ig" href="" target="_blank"></a></li>
                        </ul>
                    </div>
                </div>
                <div id="form"className={openform ? 'open' : ''}>
                    <div id="btn" className={openform ? 'close' : ''} onClick={()=>onOpenForm()}>
                        <span></span><span></span>
                    </div>
                    <div id="title" className="b" onClick={()=>onOpenForm(true)}>Fill in the form<br/> below</div>
                    <h6 id="remark">Please write down your <br/>enquiry and we will read it.</h6>
                    <form action="mailto:info@warmpaper-design.com" method="POST" encType="text/plain" name="EmailTestForm">
                        <div><input type="text" name="Name" placeholder="Full Name" /></div>
                        <div><input type="text" name="Company" placeholder="Company" /></div>
                        <div><input type="text" name="Email" placeholder="Contact Email" /></div>
                        <textarea name="Message" placeholder="Message"></textarea>
                        <label id="submit" htmlFor="submit">
                            <div></div>
                            <input type="submit" value=""/> 
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps( async ({ store, params }) => {
    store.dispatch({type:'UPDATE_LANGUAGE', language: params.lang})
    store.dispatch({type:'UPDATE_PAGE', page:'contact'})
})
  
export const getStaticPaths = async () => {
    const lang = ['en'];

    const paths = lang.map((v)=>({
        params: { lang: v }
    }))
  
    return{ paths, fallback: false }
}

export default Contact;