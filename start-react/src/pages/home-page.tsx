import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RecipeType } from "@/types";
import { useEffect, useState } from "react";



export default function HomePage() {
/* 
    const [data, setData] = useState<Array<RecipeType>>([]); */

    const [recipes, setRecipes] = useState([])
    const [fillterRecipes, setFilterRecipes] = useState([])
    const [badge, setBadge] = useState("")

    const getAllRecepies = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
          const data = await response.json();
          return data.recipes;
    }


    useEffect(() => {
        const getRecipes = async () => {

            const recipes = await getAllRecepies();
          
         if (recipes){
            setRecipes(recipes);
         }
        };
        getRecipes();
      
      }, []);

      useEffect(() => {

        const getFilterRecepies = async () => {

            const recipes = await getAllRecepies();
            const filterRecipesByCousin = recipes.filter((recepie: RecipeType) =>
                 recepie.cuisine === badge)

            setFilterRecipes(filterRecipesByCousin)

        }
        

        if (badge) {

            getFilterRecepies();
        }
      }, [badge])


      const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>, 
        cusine: string) => {

        e.preventDefault();
        setBadge(cusine);

      }
      
    
    const cuisines: Array<string> = [
        "All",
        "Asian",
        "American",
        "Greek",
        "Italian",
        "Indian",
        "Japanese",
        "Mediterranean",
        "Mexican",
        "Pakistani",
    ];
    return (

        <div>
            {cuisines.map((cusine, idx) => (

                 <Badge
                 key={`${cusine} - ${idx}`}
                 variant={"outline"}
                 className="border-orange-800 text-gray-900 text-lg 
                 mx-2 my-1 hover:cursor-pointer bg-orange-50
                 hover:scale-110 ease-in duration-200"
                 onClick={(e) => handleOnClick(e, cusine)}>
                    { cusine }
                </Badge>
            ))}
          <div className="grid grid-cols-4 md:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10
          gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
            {(fillterRecipes.length > 0 ? fillterRecipes : 
            recipes).map((recipe: RecipeType, idx: number) => (
                     <a href={`/recipes/${recipe.id} `}><Card
                     key={`${recipe.name} - ${idx}`}
                      className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient">
                     <CardHeader>
                       <img
                         src={recipe.image}
                         alt={recipe.name}
                         width={500}
                         height={500}
                         className="bg-cover rounded-md shadow-xl"
                       />
                     </CardHeader>
                     <CardContent>
                       <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                        { recipe.name}
                       </CardTitle>
                     </CardContent>
                     <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                       <div className="flex flex-col">
                         <p className="text-lg">Serves</p>
                         <p className="text-gray-800">{recipe.servings}</p>
                       </div>
                       <div className="flex flex-col">
                         <p className="text-lg">Prep Time</p>
                         <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                       </div>
                       <div className="flex flex-col">
                         <p className="text-lg">Cook Time</p>
                         <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                       </div>
                     </CardFooter>
                   </Card>
                   </a>
            ))}

            </div>
     
      </div>

       

    );
}