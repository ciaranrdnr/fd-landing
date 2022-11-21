import { useEffect, useState } from "react";
import { isMobile } from "../../../helper/general";
import GreyCard from "../../card-grey";
import CardReviews, { ICardReviews } from "../../card-review";
import Section from "../../section";

interface ILatestReviewProps {
 data: ICardReviews[];
}
export const LatestReviewSection = ({data} :ILatestReviewProps) => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(()=>{setIsmobile(isMobile())},[isMobile])
  return(
    <div  className='px-4 sm:px-6 lg:max-w-[1200px] lg:mx-auto flex flex-col sm:flex-row items-center pb-6 sm:space-x-10 sm:pb-16'>
      <Section titleSection={{title: 'Latest Reviews', description: 'So you can make better purchased decision', withButton: true}}>
      <div className='flex mt-4 flex-row justify-center space-y-0 space-x-4 mb-20 sm:space-y-0 sm:space-x-4 sm:justify-start sm:items-center sm:flex-row'>{ data && data.slice(0, (ismobile?1:2)).map((review: any, i:number)=>{
        return(
        <CardReviews key={i} reviewText={review.comment} product={{imgSrc: review.product.image,
          brand: review.product.desc,
          name: review.product.name,
          rating: 4,
          variant: 'rosy beige'
          }} 
          user={{name: review.user,
          skinType: review.profile.join(' '),}}
          />)}) }
      </div>
      </Section>
      <GreyCard label='MR2' className="flex-none max-w-[350px] h-[250px]" size={{width: 350, height: 250}}/>
  </div>)
  }