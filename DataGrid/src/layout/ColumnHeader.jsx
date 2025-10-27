import { Column } from "../components/Column"
import { ColumnHeaderProvider } from "../context/ColumnHeaderContext"
import styles from './ColumnHeader.module.css'



export const ColumnHeader = ({ columnsObject }) => {
    return (
        <ColumnHeaderProvider>
            <div className={styles.ctn}>
                {
                    Object.entries(columnsObject).map(([key, value]) => (

                        <Column name={key} configs={value} key={key} />

                    ))
                }
            </div>
        </ColumnHeaderProvider>
    )
}
