import { FaCopyright } from "react-icons/fa";

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <footer className="bg-accent text-color-light py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FaCopyright className="relative top-[1.5px]"/>
                    <span>Morse Accounting and Income Tax Service {year}</span> 
                </div>
                <nav className="flex space-x-4">
                    <a href="/contact" className="hover:text-color-secondary transition-colors">Contact</a>
                    <a href="/services" className="hover:text-color-secondary transition-colors">Services</a>
                </nav>
            </div>
        </footer>
    );
}