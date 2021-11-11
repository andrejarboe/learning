import Head from 'next/head'

export default function ShowLayout(props) {
    return (
        <>
         
            <main>{props.children}</main>
        </>
    )
}
