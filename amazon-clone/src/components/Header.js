import Image from 'next/image';

export default function Header() {
  return (
    <header>
      {/* top nav  */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image 
            src="https://links.papareact.com/f90" 
            // src="/assets/images/perez-logo.png" 
            width={150}
            height={40}
            objectFit='contain'
            className="cursor-pointer"
        />
        </div>
        {/* Search */}
        <div>
            <input type="text" />
        </div>
      </div>
      {/* bottom nav  */}
      <div className=""></div>
    </header>
  );
}
