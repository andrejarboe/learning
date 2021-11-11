import Head from 'next/head'


import Header1 from "../Header/Header1/Header1";

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
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>
    )
}
