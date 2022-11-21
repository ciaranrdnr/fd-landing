import Image from 'next/image'
import { useEffect, useState } from 'react'
import GreyCard from '../src/components/card-grey'
import Section from '../src/components/section'
import Footer from '../src/components/templates/footer'
import Header from '../src/components/templates/header'
import { EditorsChoiceSection } from '../src/components/templates/section/editors-choice'
import { LatestArticleSection } from '../src/components/templates/section/latest-article'
import { LatestReviewSection } from '../src/components/templates/section/latest-review'
import { PopularSection } from '../src/components/templates/section/popular'
import { RecommendationSection } from '../src/components/templates/section/recommendation'
import { TopBrandSection } from '../src/components/templates/section/top-brands'
import { TrendingSection } from '../src/components/templates/section/trending-this-week'
import SEOFooter from '../src/components/templates/SEO/SEOFooter'
import SEOHead from '../src/components/templates/SEO/SEOHead'

export default function Home(props: any) {
  const {data} = props;
  const [dataArticle, setDataArticle] = useState<any>(null)
  const [dataReview, setDataReview] = useState<any>(null)
  const [dataEditorChoice, setDataEditorChoice] = useState<any>(null)
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setDataArticle(data["latest articles"]);
    setDataEditorChoice(data["editor's choice"]);
    setDataReview(data["latest review"]);
  },[data])
  
  return (
    <div className='relative'>
      <SEOHead/>
      <Header />
      <main className=''>
        <Section className='flex flex-col space-y-10 items-center mt-4 mb-10 px-4 sm:px-6'>
            <GreyCard label='Top Frame' className='h-[50px] max-w-[970px]' size={{width: 970, height: 50}}/>
            <GreyCard label='Billboard'  className='h-[250px] max-w-[970px]' size={{width: 970, height: 250}}/>
        </Section>
        
        <EditorsChoiceSection data={dataEditorChoice}/>
        <RecommendationSection data={dataEditorChoice}/>
        <LatestArticleSection data={dataArticle}/>
        <LatestReviewSection data={dataReview}/>
        <PopularSection/>
        <TrendingSection data={dataEditorChoice}/>
        <TopBrandSection/>

        <SEOFooter/>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp/');
  const data = await res.json();
  return{
    props: {data}
  }
}