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
                    <Link href="/venue">Venue</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header className="grid grid-cols-[1fr_auto] pt-4 px-8 pb-4 shadow-lg">
            <h2 className="font-bold text-3xl">
                <Link href="/" className="text-red-400">Holidaze</Link>
            </h2>
            <Nav/>
        </header>
    );
}


export default Header;