import React from 'react'
import { useState } from 'react'

export default function Calculator(){
    const [count , setcount] = useState(0)
    const [sub , setsub] = useState(1)
    return(
        <>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </head>
        <center><h3 style={{fontSize:"50px"}}>Calculator App</h3></center>
        <div id='main' >
            <div id='inner' class="d-flex">
           <h1>Addition</h1>
           <div id='cal'class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <center><h2>{count}</h2></center>
            <div id='display'></div>
            <div id='button'>
                <button onClick={()=>{setcount(count + 7)}}>7</button>
                <button onClick={()=>{setcount(count + 8)}}>8</button>
                <button onClick={()=>{setcount(count + 9)}}>9</button>
                <button onClick={()=>{setcount(count + 4)}}>4</button>
                <button onClick={()=>{setcount(count + 5)}}>5</button>
                <button onClick={()=>{setcount(count + 6)}}>6</button>
                <button onClick={()=>{setcount(count + 1)}}>1</button>
                <button onClick={()=>{setcount(count + 2)}}>2</button>
                <button onClick={()=>{setcount(count + 3)}}>3</button>
                <button onClick={()=>{setcount(count + 0)}}>0</button>
                <button onClick={()=>{setcount(0)}} id='AC'>AC</button>
            </div>
           </div>
           </div>
        </div>


        <div id='main' >
            <div id='inner' class="d-flex">
            <h1>Substration</h1>
           <div id='cal'class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <center><h2>{sub}</h2></center>
            <div id='display'></div>
            <div id='button'>
                <button onClick={()=>{setsub(sub - 7)}}>7</button>
                <button onClick={()=>{setsub(sub - 8)}}>8</button>
                <button onClick={()=>{setsub(sub - 9)}}>9</button>
                <button onClick={()=>{setsub(sub - 4)}}>4</button>
                <button onClick={()=>{setsub(sub - 5)}}>5</button>
                <button onClick={()=>{setsub(sub - 6)}}>6</button>
                <button onClick={()=>{setsub(sub - 1)}}>1</button>
                <button onClick={()=>{setsub(sub - 2)}}>2</button>
                <button onClick={()=>{setsub(sub - 3)}}>3</button>
                <button onClick={()=>{setsub(sub - 0)}}>0</button>
                <button onClick={()=>{setsub(1)}} id='AC'>AC</button>
            </div>
           </div>
           </div>
        </div>


        <div id='main' >
            <div id='inner' class="d-flex">
            <h1>Multiplication</h1>
           <div id='cal'class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <center><h2>{sub}</h2></center>
            <div id='display'></div>
            <div id='button'>
                <button onClick={()=>{setsub(sub * 7)}}>7</button>
                <button onClick={()=>{setsub(sub * 8)}}>8</button>
                <button onClick={()=>{setsub(sub * 9)}}>9</button>
                <button onClick={()=>{setsub(sub * 4)}}>4</button>
                <button onClick={()=>{setsub(sub * 5)}}>5</button>
                <button onClick={()=>{setsub(sub * 6)}}>6</button>
                <button onClick={()=>{setsub(sub * 1)}}>1</button>
                <button onClick={()=>{setsub(sub * 2)}}>2</button>
                <button onClick={()=>{setsub(sub * 3)}}>3</button>
                <button onClick={()=>{setsub(sub * 0)}}>0</button>
                <button onClick={()=>{setsub(1)}} id='AC'>AC</button>
            </div>
           </div>
           </div>
        </div>
        </>
    )
}