import Image from 'next/image';

export default function Header() {
  return (
    <header>
      {/* top nav  */}
      <div className="">
        <div>
          <Image 
            src="https://links.papareact.com/f/90" 
            width={150}
            height={40}
            />
        </div>
      </div>
      {/* bottom nav  */}
      <div className=""></div>
    </header>
  );
}
