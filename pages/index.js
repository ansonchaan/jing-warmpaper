import { useEffect } from "react";
import { useRouter } from 'next/router';
import Home from './[lang]';

const Index = props => {
    const route = useRouter();
    const { basePath } = route;

    useEffect(()=>{
        // route.replace('/[lang]', '/en', {shallow:true});
        window.history.pushState(null,null,`${basePath}/en`)
    })

    return (
        <Home {...props} />
    )
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

export default Index;