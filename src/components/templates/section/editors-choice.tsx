import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import CardProduct, { ICardProduct } from "../../card-product"
import Section from "../../section";

export interface IEditorsChoiceProps {
 data: ICardProduct[];
}
export const EditorsChoiceSection = ({data} :IEditorsChoiceProps) => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
        <Section className='px-4 sm:px-6 lg:max-w-[1200px] lg:mx-auto sm:pb-16' titleSection={{title: 'Editors Choice', description: 'Curated with love'}}>
          <div className='lg:max-w-[1200px] lg:overflow-x-hidden flex items-center space-x-3 sm:space-x-4 mt-4 mb-8 '>{data && data.slice(0, (ismobile?2:6)).map((editorChoice: any, i:number)=>{
            return(<CardProduct key={i} className='' user={{name: editorChoice.editor,role: editorChoice.role}} imgSrc={editorChoice.product.image} brand={editorChoice.product.name} name={editorChoice.product.description} rating={editorChoice.product.rating}/>)}) }
          </div>
        </Section>
  )
  }