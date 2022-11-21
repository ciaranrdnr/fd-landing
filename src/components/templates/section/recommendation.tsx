import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import CardProduct, { ICardProduct } from "../../card-product"
import Section from "../../section";

export interface IRecommendationProps {
 data: ICardProduct[];
}
export const RecommendationSection = ({data} :IRecommendationProps) => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
         <Section className='px-4 sm:px-6 bg-red-2 flex justify-center items-center space-x-6 mb-16' >
          <div className="max-w-[300px] flex flex-col space-y-3 justify-center">
            <h3 className="font-semibold text-lg">Looking for products that are just simply perfect for you?</h3>
            <p className="text-sm line-clamp-3 sm:line-clamp-none">Here are some products that we belive match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
            <div className="flex items-end justify-end"><button className="bg-red-1 w-fit py-2 px-4 text-white ">See my matches</button>
              </div>
            </div>
          <div className='lg:max-w-[1200px] lg:overflow-x-hidden flex items-center space-x-3 sm:space-x-4 mt-4 mb-8 '>{data && data.slice(0, (ismobile?1:3)).map((product: any, i:number)=>{
            return(<CardProduct key={i} className='' imgSrc={product.product.image} brand={product.product.name} name={product.product.description} rating={product.product.rating}/>)}) }
          </div>
        </Section>
  )
  }