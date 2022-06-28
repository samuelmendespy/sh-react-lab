import Logo from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-blue-800 text-sm border-b border-blue-600">
            <Logo/>
        </header>
    );
 
}    