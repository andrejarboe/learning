import Header1 from "../Header/Header1/Header1";

export default function MainLayout(props) {
    return (
        <>
            <Header1 />
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>
    )
}
