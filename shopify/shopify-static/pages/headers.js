import Head from 'next/head'
import Header1 from '../Components/Header/Header1/Header1';
import Header2 from '../Components/Header/Header2/Header2';
import Header3 from '../Components/Header/Header3/Header3';
import Header4 from '../Components/Header/Header4/Header4';

import ShowLayout from '../Components/Layouts/ShowLayout';

export default function headers() {
    return (
        <ShowLayout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Shopify Theme" />
                <link rel="icon" href="/favicon.con" />

                <title>Headers</title>
            </Head>
            <h1>All Headers</h1>
            <div className="comp-space">
                <Header1 />
            </div>
            <div className="comp-space">
                <Header2 />
            </div>
            <div className="comp-space">
                <Header3 />
            </div>
            <div className="comp-space">
                <Header4 />
            </div>
        </ShowLayout>
    )
}
