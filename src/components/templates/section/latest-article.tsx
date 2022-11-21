import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import CardArticle, { ICardArticle } from "../../card-article";
import Section from "../../section";

export interface ILatestArticleProps {
 data: ICardArticle[];
}
export const LatestArticleSection = ({data} :ILatestArticleProps) => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
        <Section className='lg:max-w-[1200px] lg:mx-auto sm:pb-16' titleSection={{title: 'Latest Articles', description: 'See our weekly most reviewed products'}}>
                    <div className='lg:max-w-[1200px]  mt-4 mb-8  justify-center space-y-2 space-x-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6'>{data && data.slice(0, (ismobile?2:6)).map((article: any, i:number)=>{
              return(<CardArticle key={i} title={article.title} published_at={article.published_at} author={article.author} image={article.image}/>)})}
          </div>
        </Section>
  )
  }