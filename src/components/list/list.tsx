import type { ListTypes } from "./types"

const List = (props: ListTypes) => {
  const {items, selectedItems, handleToggleSelected} = props
  return(
    <ul id="textList" className="list">
      {items?.map((item, index) =>( 
        <li 
          key={index} 
          onClick={() => handleToggleSelected(item)}
          className= {`logitravel__list-item ${selectedItems?.includes(item)? "selected": ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
export default List