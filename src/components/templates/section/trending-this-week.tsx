import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import CardProduct, { ICardProduct } from "../../card-product"
import Section from "../../section";

export interface ITrendingProps {
 data: ICardProduct[];
}
export const TrendingSection = ({data} :ITrendingProps) => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
         <Section className='px-4 sm:px-6 lg:max-w-[1200px] lg:mx-auto sm:pb-16' titleSection={{title: 'Trending This Week', description: 'See our weekly most reviewed products'}}>
          <div className='lg:max-w-[1200px] lg:overflow-x-hidden flex items-center space-x-3 sm:space-x-4 mt-4 mb-8 '>{data && data.slice(0, (ismobile?2:6)).map((product: any, i:number)=>{
            return(<CardProduct key={i} className='' user={{name: product.editor,role: product.role}} imgSrc={product.product.image} brand={product.product.name} name={product.product.description} rating={product.product.rating}/>)}) }
          </div>
        </Section>
  )
  }