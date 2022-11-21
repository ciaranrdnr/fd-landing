import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import CardGroups from "../../card-group";
import Section from "../../section";


export const PopularSection = () => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
   <Section className='px-4 sm:px-6 lg:max-w-[1200px] lg:mx-auto sm:pb-16' titleSection={{title: 'Popular Groups', description: 'So you can make better purchased decision'}}>
     <div className='lg:max-w-[1200px] lg:overflow-x-hidden flex mt-4 mb-8 flex-roww justify-center space-y-0 space-x-4 sm:space-y-0 sm:space-x-4 sm:justify-start sm:items-center sm:flex-row'>
      {Array((ismobile?1:2)).fill('').map((_,i:number)=>{return( <CardGroups key={i} imgSrc='https://editorial.femaledaily.com/wp-content/uploads/2022/11/FD-Editorial-Banner-You-4.jpg' groupName='Embrace the Curl' description='May Our curls pop and never stop!' numberOfArticles={1} numberOfCommments={2} numberOfMembers={12}/>)})}
       <CardGroups imgSrc='	https://editorial.femaledaily.com/wp-content/uploads/2022/11/FD-Editorial-Banner-You-4.jpg' groupName='Embrace the Curl' description='May Our curls pop and never stop!' numberOfArticles={1} numberOfCommments={2} numberOfMembers={12}/>
    </div>
  </Section>)
  }