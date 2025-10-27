import './App.css'
import { Column } from './components/Column'
import { ColumnHeader } from './layout/ColumnHeader'

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
    
    <div className="ctn" style={style}>
        {/* <Column/> */}
        <ColumnHeader columnsObject={columnsObject}/>
    </div>
  )
}

export default App
