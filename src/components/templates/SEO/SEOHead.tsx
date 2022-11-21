import Head from 'next/head'
export interface ISEOHeadProp {
  title?:  string;
}
export default function SEOHead(props: ISEOHeadProp) {
  return (
      <Head>
        <title>{props.title ?? 'Female Daily'}</title>
        <meta name="description" content="Female Daily - Landing Page" />
        <link rel="icon" href="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/beauty_studio/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
  )
}
