'use client'

import { useState } from "react";

import { Dish } from "@/src/types/Dish";

export default function DishCard ({nome, valor_energetico, imagem} : Dish) {

    const [isHovered, setIsHovered] = useState(false)

    const darkOverlay = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))';

    const currentBackgroundImage = isHovered 
        ? `url(${imagem})` 
        : `${darkOverlay}, url(${imagem})`;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

            className="flex items-end bg-center bg-cover bg-no-repeat hover:scale-105 hover:z-10 transition-all"
            style={
                { backgroundImage: currentBackgroundImage }
            }
        >
            <p
                className="bg-black/10 backdrop-blur-sm p-2 rounded-tr-2xl text-white font-semibold"
            >{nome}</p>
        </div>
    )
}