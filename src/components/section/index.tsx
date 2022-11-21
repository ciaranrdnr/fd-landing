import TitleSection, { ITitleSection } from "../title-section";

export interface ISection {
  className?: string;
  titleSection?: ITitleSection;
  children: React.ReactNode
}
const Section = ({titleSection,className,...props}: ISection) =>{
  return (
      <section className={className}>
        {titleSection && <TitleSection title={titleSection?.title} description={titleSection.description} className={titleSection.className} withButton={titleSection.withButton}/>}
        {props.children}
      </section>
  )
}
export default Section;