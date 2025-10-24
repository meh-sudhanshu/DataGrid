import styles from "./Column.module.css"

import { useEffect, useState } from "react"

export const Column = ({ name, configs }) => {
    const [isHamburgurOpen,setIsHamburgurOpen] = useState(false)
    const hamburgerClickHandler = () => {
         setIsHamburgurOpen((prev)=>!prev)
    }
    useEffect(()=>{
        if(isHamburgurOpen){

        }else{

        }
    },[isHamburgurOpen])
    return (
        <div className={styles.columnItemsContainer}>
            <div className={styles.columnText}>{configs.uiName}</div>
            { (configs.isFilterable || configs.isSearchable || configs.isSortable )
                 &&
                <button className={`${styles.hamburger} ${isHamburgurOpen && styles.open}`} onClick={hamburgerClickHandler} aria-label="Button, Open Column Options">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            }
        </div>
    )
}