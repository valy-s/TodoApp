import Delete from "../../assets/icon-cross.svg"
import Check from "../../assets/icon-check.svg"

import "./todoItem.styles.scss"

const TodoItem = ({id, description, completed, onChange, handleClick}) => {
    return (
        <div className="item__container" data-id={id}>
           <input type="checkbox" className="item__checkbox" value="1" id={id} onChange={onChange} />
           <label htmlFor={id}>
               <div className={`checkbox__div  ${completed ? "color_background" : null}`}>
                   {completed
                   ? <img src={Check} alt="delete" /> : null }
                </div></label> 
           <div className="item__body">
               <h4 className={`item__desc ${completed ? "item__completed" : null} `}>{description} </h4>
               <img src={Delete} alt="delete" onClick = {handleClick} />
           </div>
        </div>
    
    )
}


export default TodoItem;