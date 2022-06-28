import { DefaultUi, Player, Youtube } from "@vime/react";
import { Silver, Social } from "./Button"


import '@vime/core/themes/default.css';

interface VideoProps {
    title: string;
    slug: string;
    avaiableAt: Date;
    type: 'live' | 'class';
}

export function VideoPlayer() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player><Youtube videoId="FVSe3W4xZ7Y" /><DefaultUi /></Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto flex-row">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1>Aula 01 - Abertura do Ignite Lab</h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">Chegamos na metade do nosso evento, mas ainda tem mais pela frente…Na terceira aula vamos continuar nosso projeto, desenvolvendo o roteamento e player. Essa é mais uma etapa para sua especialização em React!
                Bônus exclusivos do Ignite: https://rseat.in/bonus-ignite-lab
                Tem dúvidas? Converse em tempo real com a nossa equipe: https://rseat.in/whatsapp</p> 

                    <div className="flex items-center gap-4 mt-6">
                        <img 
                        className="h-16 w-16 rounded-full border-2 border-blue-500"
                        src="https://github.com/samuelmendespy.png" 
                        alt="Foto de quem vai Ministra a a aula" />
                    </div>
                    <div className="leading-relaxed">
                        <strong className="font-bold text-2xl block">Samuel</strong>
                        <span className="text-gray-200 text-sm block">BIO</span>
                    </div>
                    </div>

                   
                    <div className="flex flex-col gap-4">
                        <Social/>
                        <Silver/>
                    </div>
                 

                

                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            ▼
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse ao material complementar
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                                →
                        </div>
                    </a>
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            ▼
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe Wallpapers exclusivos do Ignite Lab
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                                →
                        </div>
                    </a>
                </div>
            </div>
        </div> 
    );
 
}    