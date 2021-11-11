import Head from 'next/head'


import Header1 from "../Header/Header1/Header1";
import Header2 from '../Header/Header2/Header2';
import Header3 from '../Header/Header3/Header3';

export default function MainLayout(props) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Header1 />
            <Header2 />
            <Header3 />
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>
    )
}
