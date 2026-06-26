import { Dish } from "@/src/types/Dish";
import DishCard from "../atoms/DishCard";



export default function DishGroup({dishes}: { dishes : Dish[]}) {

    let row: number
    let column: number

    switch (dishes.length) {
        case 2: { row = 1; column = 2; break; }
        case 3: { row = 1; column = 3; break; }
        case 4: { row = 2; column = 2; break; }
        default: { row = 1; column = 1; break; }
    }

    return (
        <div 
            className={'grid h-50 gap-2'}
            style={{
                gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`
            }}
        >
            {dishes.map((dish) => {

                return (
                    <DishCard
                        key={dish.id}
                        id={dish.id}
                        nome={dish.nome}
                        descricao={dish.descricao}
                        categoria={dish.categoria}
                        imagem={dish.imagem}
                        destacado={dish.destacado}
                        fixo={dish.fixo}
                        porcoes={dish.porcoes}
                        valor_energetico={dish.valor_energetico}
                    />
                )
            })

            }
        </div>

    )
}