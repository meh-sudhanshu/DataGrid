import './App.css'
import { Column } from './components/Column'
import { ThemeProvider } from './contexts/ThemeContext'
import { ColumnHeader } from './layouts/ColumnHeader'

import { columnsObject } from './utils/data'

const style ={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100vw",
  height:"100vh"
}

function App() {
  return (
    <ThemeProvider>
       <div className="ctn" style={style}>
          <ColumnHeader columnsObject={columnsObject}/>
       </div>
    </ThemeProvider>
  )
}

export default App
