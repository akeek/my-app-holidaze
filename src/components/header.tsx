import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


function Nav() {

    return (
        <nav>
            <ul className="flex flex-row gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/cart" className="text-nowrap flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faCartShopping} className="h-5 w-5"/><span>{0}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header className="grid grid-cols-[1fr_auto] pt-12 px-8 pb-4 shadow-lg">
            <h2 className="font-bold text-3xl">
                <Link href="/" className="navlogo">Daily Depot</Link>
            </h2>
            <Nav/>
        </header>
    );
}


export default Header;