import Image from 'next/image'
import { METADATA_IMG } from '../../../assets/logo/image';

export default function Footer() {
  return (
      <footer className='border-t'>
        <div className='flex justify-center flex-col lg:max-w-[1200px] lg:mx-auto text-[11px] mx-auto px-4 lg:px-0 pt-7 pb-9  sm:text-sm sm:flex-row sm:justify-between'>
          <div className='flex flex-col space-y-6 sm:w-3/4'>
               <ul className='font-semibold flex flex-wrap space-x-3 justify-center sm:max-w-none sm:space-x-0 sm:grid sm:grid-cols-3 sm:gap-4'>
                <li className='py-2 sm:py-0'><a href="">About Us</a></li>
                <li className='py-2 sm:py-0'><a href="">Terms & Conditions</a></li>
                <li className='py-2 sm:py-0'><a href="">Awards</a></li>
                <li className='py-2 sm:py-0'><a href="">Feedback</a></li>
                <li className='py-2 sm:py-0'><a href="">Privacy Policy</a></li>
                <li className='py-2 sm:py-0'><a href="">Newsletter</a></li>
                <li className='py-2 sm:py-0'><a href="">Contact</a></li>
                <li className='py-2 sm:py-0'><a href="">Help</a></li>
              </ul>
              <div>
                  <div className='relative h-0 sm:w-[120px] sm:h-8'><Image src={METADATA_IMG.LOGO_FEMALEDAILY} fill alt='Female Daily Logo'/></div>
                  <p className='text-[11px] text-gray-500 text-center sm:text-left'>Copyright © 2015 - 2017 Female Daily Network ∙ All the rights reserved.</p>
              </div>
          </div>
           
            <div className='font-semibold text-[11px] mt-6 sm:mt-0 sm:text-xs flex flex-col space-y-4 items-center sm:items-start'>
              <p>Download Our Mobile App</p>
              <div className='flex w-full space-x-4 justify-center sm:justify-start'>
               <a href=""><Image src={METADATA_IMG.LOGO_APPSTORE} width={119.28} height={40} alt='App Store'/></a>
               <a href=""><Image src={METADATA_IMG.LOGO_PLAYSTORE} width={133.17} height={40} alt='Play Store'/></a>
              </div>
                <div className='flex w-full space-x-2 justify-center sm:justify-start'>
                  <div className='relative w-4 h-4 sm:w-8 sm:h-8'><Image src={METADATA_IMG.LOGO_FB} fill alt='Facebook'/></div>
                  <div className='relative w-4 h-4 sm:w-8 sm:h-8'><Image src={METADATA_IMG.LOGO_TWT} fill alt='Twitter'/></div>
                  <div className='relative w-4 h-4 sm:w-8 sm:h-8'><Image src={METADATA_IMG.LOGO_IG} fill alt='Instagram'/></div>
                  <div className='relative w-4 h-4 sm:w-8 sm:h-8'><Image src={METADATA_IMG.LOGO_YT} fill alt='Youtube'/></div>
              </div>
            </div>
        </div>
      </footer>
  )
}
