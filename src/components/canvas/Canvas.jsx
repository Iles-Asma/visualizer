import { useEffect, useRef } from "react";
import s from "./Canvas.module.scss";
import scene from "../../../webgl/Scene";

function Canvas() {

    const canavasRef = useRef();

    useEffect(() => {
        scene.setup(canavasRef, current);
    }, [])
    return (
        <canvas></canvas>
    )
}

export default Canvas