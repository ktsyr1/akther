import { useEffect } from "react"

const join = () => {
    useEffect(() => {
        console.log(100);
        const canvas = document.getElementById("canvas") 

        const ctx = canvas.getContext("2d")

        let prevX = null
        let prevY = null

        ctx.lineWidth = 2

        let draw = false

        // Set draw to true when mouse is pressed
        window.addEventListener("mousedown", (e) => draw = true)
        // Set draw to false when mouse is released
        window.addEventListener("mouseup", (e) => draw = false)

        window.addEventListener("mousemove", (e) => {
            // if draw is false then we won't draw
            if (prevX == null || prevY == null || !draw) {
                prevX = e.clientX
                prevY = e.clientY
                return
            }

            let currentX = e.clientX
            let currentY = e.clientY

            ctx.beginPath()
            ctx.moveTo(prevX, prevY)
            ctx.lineTo(currentX, currentY)
            ctx.stroke()

            prevX = currentX
            prevY = currentY
        })
    })
    return (
        <canvas id="canvas"  height={500} className='ui '></canvas>
    );
}

export default join;