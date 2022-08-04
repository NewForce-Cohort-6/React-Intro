import React, {useState, useEffect, } from 'react'
import { TacoJr } from './StuffCard'
import { useNavigate } from 'react-router-dom'


export const StuffsList = () => {
const [stuffs, setStuffs] = useState([])

useEffect(()=>{
    fetch(`http://localhost:8088/stuffs`)
    .then(response => response.json())
    .then(readyForState => setStuffs(readyForState))
  }, [])

  const navigate = useNavigate()


    return (
        <>
             <div>
                <h2>Collection of things</h2>
                {stuffs.map(x => <TacoJr  key={x.id} singleObj={x} />)}
                <button onClick={()=> navigate("/stuffs/create")}>add stuff</button>
            </div>

        </>
    )
}