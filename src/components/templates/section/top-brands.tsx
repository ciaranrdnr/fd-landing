import Image from "next/image";
import Section from "../../section";


export const TopBrandSection = () => {
  return(
         <Section className='px-4 sm:px-6 lg:max-w-[1200px] lg:mx-auto sm:pb-16' titleSection={{title: 'Top Brands', description: 'We all know and love', withButton: true}}>
          <div className='lg:max-w-[1200px] lg:overflow-x-hidden flex space-x-6 items-center justify-center'>
            <div className='relative w-32 h-16'>
              <Image className='object-contain' fill src='https://studio.femaledaily.com/_next/image?url=https%3A%2F%2Fmagento.femaledaily.com%2Fpub%2Fmedia%2Ftrans%2Fbrand%2FAvoskin-fix_2.png&w=1920&q=75'  alt=''/>
            </div>
            <div className='relative w-32 h-16'>
              <Image className='object-contain' fill src='https://studio.femaledaily.com/_next/image?url=https%3A%2F%2Fmagento.femaledaily.com%2Fpub%2Fmedia%2Ftrans%2Fbrand%2FRoceo.png&w=1920&q=75'  alt=''/>
            </div>
            <div className='relative w-32 h-16'>
              <Image className='object-contain' fill src='https://studio.femaledaily.com/_next/image?url=https%3A%2F%2Fmagento.femaledaily.com%2Fpub%2Fmedia%2Ftrans%2Fbrand%2FAvoskin-fix_2.png&w=1920&q=75'  alt=''/>
            </div>
          </div>
        </Section>
  )
  }