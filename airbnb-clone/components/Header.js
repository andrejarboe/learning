import Image from 'next/image';

function Header() {
    return (
        <div>
            <h1>header</h1>
            {/* left  */}
            <div className="">
                <Image
                    src="http://links.papareact.com/qd3"
                    layout="fill"
                />
            </div>
            {/* left end */}
            {/* middle  */}
            <div className=""></div>
            {/* middle end */}
            {/* right */}
            <div className=""></div>
            {/* right end */}
        </div>
    )
}

export default Header
