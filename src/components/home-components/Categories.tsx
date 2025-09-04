import { Link } from "react-router-dom";
import CategorisCard from "./Categories-card/CategorisCard";
import { useQueryHandler } from "../../hooks/useQueryHandler/useQueryHandler";
import { useLoader } from "../../generics/loaders";



export interface categoriesType{
  title:string
  price:number
  imageUrl:string
  id:string
}

const Categories = () => {
  const { categoriesLoader }  = useLoader()
  // const [categories , setCategories] = useState([])
  const {data , isLoading } = useQueryHandler({url:"/category" , pathname:"categories"})

  return (

    <section className="categories  mt-[30px] sm:mt-[40px] md:mt-[60px] lg:mt-[88px]">
      <div className="mc flex flex-col gap-3 sm:gap-4 md:gap-10">
        <div className="categories-top flex items-center justify-between w-full">
          <i className="hidden sm:flex"></i>
          <h3 className="font-[600]  text-xl sm:text-2xl md:text-3xl  lg:text-4xl">
            Categories
          </h3>
          <Link
            className="text-[#FF5B00] font-[600] text-base sm:text-lg text-end"
            to={"/"}
          >
            view all
          </Link>
        </div>

        <div className="categories-bottom  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-14">
            {   
                isLoading ? categoriesLoader() : 
             data?.data?.data.map((category:categoriesType) => <CategorisCard data={category}  key={category?.id}/>)
                
            }
        </div>
      </div>
    </section>
  );
};

export default Categories;
