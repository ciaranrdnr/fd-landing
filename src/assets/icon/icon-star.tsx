type Colors = "red" | "grey"
export interface IIcon {
  width: number;
  height: number;
  color: Colors;
}
const IconStar = (props: IIcon) =>{
  return(
  <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M11.9997 19.2022L6.18302 22.7062C5.92606 22.8697 5.65742 22.9398 5.37709 22.9164C5.09677 22.8931 4.85149 22.7996 4.64124 22.6361C4.431 22.4726 4.26748 22.2684 4.15068 22.0236C4.03388 21.7779 4.01052 21.5031 4.0806 21.1995L5.62238 14.5768L0.471434 10.1267C0.237831 9.91644 0.0920625 9.67676 0.034129 9.40765C-0.0247389 9.13948 -0.00745242 8.87691 0.0859887 8.61995C0.17943 8.36298 0.319592 8.15274 0.506474 7.98922C0.693356 7.82569 0.950319 7.72057 1.27736 7.67385L8.07521 7.07817L10.7032 0.840971C10.82 0.560647 11.0013 0.350404 11.2471 0.210243C11.4919 0.070081 11.7428 0 11.9997 0C12.2567 0 12.5081 0.070081 12.7538 0.210243C12.9986 0.350404 13.1794 0.560647 13.2962 0.840971L15.9243 7.07817L22.7221 7.67385C23.0491 7.72057 23.3061 7.82569 23.493 7.98922C23.6799 8.15274 23.82 8.36298 23.9135 8.61995C24.0069 8.87691 24.0247 9.13948 23.9667 9.40765C23.9079 9.67676 23.7616 9.91644 23.528 10.1267L18.3771 14.5768L19.9189 21.1995C19.989 21.5031 19.9656 21.7779 19.8488 22.0236C19.732 22.2684 19.5685 22.4726 19.3582 22.6361C19.148 22.7996 18.9027 22.8931 18.6224 22.9164C18.3421 22.9398 18.0734 22.8697 17.8164 22.7062L11.9997 19.2022Z" fill={props.color == 'red' ? '#DB284E':'#e0e0e0'}/>
  </svg>
)}

export default IconStar;