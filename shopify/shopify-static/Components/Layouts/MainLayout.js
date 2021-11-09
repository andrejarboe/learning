export default function MainLayout(props) {
    return (
        <>
            <header>Header</header>
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>
    )
}
