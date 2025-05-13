import React, {useState, useEffect} from 'react'

const MouseTracker = () => {
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
        const updateMouse =(event)=>{
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        document.addEventListener('click',updateMouse) //注册事件
        //清除事件
        return () => {
            document.removeEventListener('click',updateMouse)
        }
    })


    return (
        <div>
            <h1>Mouse Tracker</h1>
            <p>Mouse position: {position.x}, {position.y}</p>
        </div>
    )
}

export default MouseTracker