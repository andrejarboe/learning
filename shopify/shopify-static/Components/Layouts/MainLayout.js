import Head from 'next/head'
import Header1 from "../Header/Header1/Header1";
// import Header2 from '../Header/Header2/Header2';
// import Header3 from '../Header/Header3/Header3';

export default function MainLayout(props) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Shopify Theme" />
                <link rel="icon" href="/favicon.con" />

                <title>Company | </title>
            </Head>
            <Header1 />
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>
    )
}
