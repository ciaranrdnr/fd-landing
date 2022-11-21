import Image from "next/image";
import Link from "next/link";
import Footer from "../src/components/templates/footer";
import Header from "../src/components/templates/header";
import SEOFooter from "../src/components/templates/SEO/SEOFooter";
import SEOHead from "../src/components/templates/SEO/SEOHead";

// pages/404.js
export default function Custom404() {
  return <div >
      <SEOHead title="Not Found"/>
      <Header withLogin={false} withSearchbar={false}/>
      <main className='px-4 sm:px-6 min-h-[50vh] flex flex-row space-x-12  items-center justify-center'>
        <Image draggable={false} src={'https://studio.femaledaily.com/images/not_found.png'} alt='Page Not Found' width={300} height={300}/>
        <div className="space-y-2">
          <h1 className="font-semibold text-4xl uppercase">404 Not Found</h1>
          <p className="">Maaf halaman yang kamu cari tidak tersedia.</p>
          <Link href={'/'}><button className="py-2 font-semibold text-red-1">Kembali ke laman Home</button></Link>
        </div>
        {/* <SEOFooter/> */}
      </main>
      {/* <Footer/> */}
    </div>
}