import './ProgressionBar.css'
export default function Bar(props) {
    const style = {width: `${props.percentage}%`}
   return ( 
    <div className="bar-wrapper">
        <div className="bar" style={style}></div>
    </div>
   )
}