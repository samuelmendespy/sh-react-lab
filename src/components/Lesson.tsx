import { LockedVector, CheckedVector } from "./InterfaceIcons";
import { isPast, format } from 'date-fns'
import {} from 'date-fns/locale/pt-BR'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface LessonProps {
    title: string;
    slug: string;
    avaiableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    
    const isLessonAvaiable = isPast(props.avaiableAt);
    const makeDateFormated = format(props.avaiableAt, "EEEE ' - 'dd.MM.yy' - 'HH:mm' h'", {
        locale: ptBR,
    }).replace('-feira','');
    const makeDayFormated = makeDateFormated.charAt(0).toUpperCase() + makeDateFormated.slice(1);

    return (
        <a href="#">
            <span className="text-green-600">
            {makeDayFormated}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                        {isLessonAvaiable ? (
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckedVector />
                            Liberado
                            </span>
                            ) : ( 
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <LockedVector />
                            Em breve
                            </span>
                            )}
                            <span className="text-xs rounded py-[0.125rem] px-2 text-green-600 border border-green-300">
                            {props.type=='live'? 'AO VIVO' : 'AULA PRÁTICA'}
                            </span>
                </header>

                <strong className="text-blue-400 mt-5 block">
                {props.title}
                </strong>
            </div>
        </a>
    );
 
}    