
import Counter from '../Counter'
import Team from '../Team'
import Users from '../Users'
import './App.css'


function App() {
  function handleClick(){
    alert('Click Me Button Clicked')
  }
 const  handleClick2 = () =>{
alert("Click Here button clicked")
 }

 const addToFive = (num) =>{
alert(num+5)
 }
  return (
    <div> 
  <h3>React core concept 2</h3>
  <Users></Users>
  <Team></Team>
 <Counter></Counter>


  <button onClick={handleClick}>Click Me</button>
  <button onClick={handleClick2}>Click Here</button>
  <button onClick={()=>{alert('third button clicked')}}>Third</button>
  {/* vejaila */}
  <button onClick={()=> addToFive(3)}>Four</button>
  </div>
  )
}


export default App
