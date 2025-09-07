import backMain from '../../img/Group 1597880434.svg'
import styles from '../../css/style.module.css'
import React, { useState } from "react";
import Keys from './key/keys'

const MainBoard = ({ active, setActive}) => {


    return<>
    <div className={active ? styles.MainBoardactive : styles.MainBoard}>
    <img src={backMain} alt="" />
    <Keys setActive={setActive} />
    </div>
    </>
}

export default MainBoard;