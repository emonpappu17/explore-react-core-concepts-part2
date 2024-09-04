import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <Team></Team>
      <Users></Users>
      <Counter></Counter>

      {/* <button onclick="handleClick()">click me</button>  */}
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('button 3 clicked') }}>btn 3</button>
      {/* parameter thakle nicher niyome korte hobe */}
      <button onClick={() => { addToFive(3) }}>btn 4</button>

    </>
  )
}

export default App
