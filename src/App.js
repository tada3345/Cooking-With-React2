import React, {useState} from 'react'
import Counter from './Counter.js';
import CounterHooks from './CounterHooks'

export const ThemeContext =React.createContext();


function App() {
  console.log('render app!')
  const [theme, setTheme]=useState('green')
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
    Counter
    <Counter initialCount={0}/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    <button onClick={()=>setTheme(prevTheme=>prevTheme ==='red' ? 'blue' : 'red')}>Toggle Theme</button>
    
    </ThemeContext.Provider>
    )
}

export default App;
