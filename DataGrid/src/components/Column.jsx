import { ColumnHeaderContext } from "../contexts/ColumnHeaderContext"
import styles from "./Column.module.css"

import { useEffect, useState, useContext, use } from "react"
import { ColumnFilterCard } from "./ColumnFilterCard"
import { ThemeContext } from "../contexts/ThemeContext"

export const Column = ({ name, configs }) => {
    const { currentActiveColumnFilterId, setCurrentActiveColumnFilterId } = useContext(ColumnHeaderContext)
    const {theme} = useContext(ThemeContext)
    const hamburgerClickHandler = () => {
        if(currentActiveColumnFilterId == configs.filterId){
            setCurrentActiveColumnFilterId(null)
        }else{
            setCurrentActiveColumnFilterId(configs.filterId)
        }
    };
    return (
        <div className={styles.columnItemsContainer} style={{backgroundColor : theme === "dark" ? "black" :"white"}}>
            <div className={styles.columnText}>{configs.uiName}</div>
            {(configs.isFilterable || configs.isSearchable || configs.isSortable)
                &&
                <div
                    className={`${styles.hamburger} ${currentActiveColumnFilterId === configs.filterId ? styles.open : ""}`}
                    onClick={hamburgerClickHandler}
                    aria-label="Button, Open Column Options"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            }
            {currentActiveColumnFilterId === configs.filterId && <ColumnFilterCard/>}
        </div>
    )
}