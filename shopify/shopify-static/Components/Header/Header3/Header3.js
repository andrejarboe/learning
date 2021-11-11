export default function Header3() {
    return (
       <header className="header header3">
             <div className="header3__logo">
               <a href="/link">Company</a>
           </div>       
           <div className="header3__collections-nav">
           <a href="/link">Link</a>
               <a href="/link">Link</a>
               <a href="/link">Link</a>
               <a href="/cart">
                   <i className="fas fa-shopping-cart" aria-hidden="true"></i>
               </a>
               <a href="/link">
                   <i className="fas fa-user" aria-hidden="true"></i>
               </a>
           </div>
       </header>
    )
}
