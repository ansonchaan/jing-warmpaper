## Getting Started

In development server:

```bash
npm run dev
# or
yarn dev
```

In production server:
```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Fetch data from API
1) Remove all ```getStaticProps``` and ```getStaticPaths```, coz those function can not used together with ```getServerSideProps```

2) Add data to pages

    e.g. Home page location: pages > [lang] > index.js
```
...
export const getServerSideProps = wrapper.getServerSideProps( async ({ store }) => {  
    const d = await fetch("API_URL");  //<-- Change your API url
    const data = await d.json();
  
    return {
       props: {
         data, // <-- Pass data to props
       }
    }
})
```
