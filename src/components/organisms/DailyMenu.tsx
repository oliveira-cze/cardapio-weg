import { Dish } from "@/src/types/Dish";
import DishGroup from "../molecules/DishGroup";

export default async function DailyMenu() {

    function selectDishes(dishes: Dish[], quantity: number) {

        if (!dishes || dishes.length === 0) return []

        const fixedDishes = dishes.filter(dish => dish.fixo)

        const selectDishes = new Set<Dish>(fixedDishes)

        while (selectDishes.size < quantity){
            const index = Math.floor(Math.random() * dishes.length);
            const randomDish = dishes[index]

            selectDishes.add(randomDish)
        }

        return Array.from(selectDishes)
    }

    let response = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos')
    const dishes = await response.json()

    return (
        <div
            className="grid grid-cols-4 gap-4"
        >
            
            <DishGroup
                dishes={selectDishes(dishes.filter((dish: Dish) => {return dish.categoria === "Carnes"}), 3)}

            />
            <DishGroup
                dishes={selectDishes(dishes.filter((dish: Dish) => {return dish.categoria === "Entradas" || dish.categoria === "Saladas"}), 4)}

            />
            <DishGroup
                dishes={selectDishes(dishes.filter((dish: Dish) => {return dish.categoria === "Acompanhamentos"}), 4)}

            />
            <DishGroup
                dishes={selectDishes(dishes.filter((dish: Dish) => {return dish.categoria === "Sobremesas"}), 2)}

            />
        </div>
    )
}