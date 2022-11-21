
export interface IIcon {
  width: number;
  height: number;
}
const IconWomanCircle = (props: IIcon) =>{
  return(
  <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle cx="12" cy="12" r="10.35" stroke="white" stroke-width="1.3"/>
<path d="M14.5 18C13.5 18 13.6794 16.69 14 16.5001C16.2036 15.6615 18 14 17.5 13.5C16.5341 12.7334 16 12.5 16 11C17 4.99996 11.5 5.00003 10.5 6.00005C5.5 6.00003 7.5 12 7.5 12C8 13.5 6.5 13.5 6.5 14.0001C6.5 14.0001 8.46208 16.3677 10 16.5001C10.2735 16.5236 10.5 18 10 18C5 19 5 19.5 5 19.5C5 19.5 7.47231 22.5 12 22.5C17 22.5 19 19.5 19 19.5C19 19.5 18.7384 18.3887 14.5 18Z" stroke="white" stroke-width="1.3"/></svg>
)}

export default IconWomanCircle;