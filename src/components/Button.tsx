import { LogoDiscord } from "./InterfaceIcons";

export function Social() {
    return(
    <a href="#" className="p-4 text-sm bg-gray-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
        <LogoDiscord/>
        Comunidade Social
    </a>
    )
}
export function Silver() {
    return(
    <a href="#" className="p-4 text-sm border border-green-500 text-red-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
        <LogoDiscord/>
        aCESSE O DESAFIO
    </a>
    )
}

export function Challenger() {
    return(
        <div>
            <a href="#" className="p-4 text-sm bg-gray-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
            Ranking Desafiante
            </a>        
        </div>
    )
}