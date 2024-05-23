import './Search.css'

export default function Search({input,setInput}) {

  return (
    <header className='header'>
      <div className='searchContainer'>
        <input placeholder='Search / Create' className='input'  value = {input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='xButton' onClick={()=>setInput('')}style={{display:input===''?'none':'inline'}} >x</button>
      </div>
    </header>
  );
}