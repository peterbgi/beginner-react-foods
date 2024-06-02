import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RecepiePage() {

    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {

        const fetchRecipe = async () => {
            const response = await fetch(`https://dummyjson.com/recipies/${recipeId}`);
          const data = await response.json();
          setRecipe(data);
          
        }



        if (recipeId) {
            fetchRecipe()
        }
    })

    
    
    return (

        <div>"DFFGBF" {data.name}</div>

    );
}
/* befejezni */