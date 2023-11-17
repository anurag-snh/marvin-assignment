import dropDown from '/dropDown.svg'

function Header() {
    let url="";
    return (
        <>
        <div className="header">
            <a href={url}>AIPatrn</a>
            <div className="nav">
                <ul>
                    <li className='active'>Home Page</li>
                    <li>Generator</li>
                    <li>Pricing-plan</li>
                    <li>Blog-News</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Collection-2023</li>
                    <li>Career</li>
                </ul>
                <a className='nav-menu' href={url}>
                    <span>Menu</span>
                    <img src={dropDown} alt="dropdown icon"/>
                </a>
            </div>
        </div>
        </>
    );
}

export default Header;