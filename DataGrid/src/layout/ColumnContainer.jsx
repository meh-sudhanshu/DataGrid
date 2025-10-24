import { Column } from "../components/Column"
import styles from './ColumnContainer.module.css'



export const ColumnContainer = ({columnsObject})=>{
    return(
        <div className={styles.ctn}>
            {
                Object.entries(columnsObject).map(([key,value])=>(
                    <Column name = {key} configs={value} key={key}/>
                ))
            }
        </div>
    )
}
