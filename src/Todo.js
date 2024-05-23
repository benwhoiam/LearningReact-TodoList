import './Todo.css';

function Todo({name,key,done,onChangeFunc,onDeleteFunc}) {
  
  return (
    <>
    <article className='articleStyle' key={key} > 
    <div> 
        <input className='checkbox' type="checkbox" checked={done} onChange={onChangeFunc}/>
        <p  style={done ? {textDecoration: 'line-through'}:{textDecoration: 'none'}}>{name}</p>
    </div>
    <button className="delete" id={key} onClick={(e)=>{e.preventDefault(); onDeleteFunc()}}>X</button>
    </article>
    </>
  );
}

export default Todo;
