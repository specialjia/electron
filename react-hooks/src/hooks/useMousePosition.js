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
        document.addEventListener('mousemove',updateMouse) //注册事件
        //清除事件
        return () => {
            document.removeEventListener('mousemove',updateMouse)
        }
    })


    return position
}

export default MouseTracker