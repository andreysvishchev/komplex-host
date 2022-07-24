import React, {useEffect} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../../store/store";
import {openEditorModal} from "../../reducers/modal-reducer";
import {log} from "util";

const EditorModal = () => {
    const open = useAppSelector(state => state.modal.openEditorModal)
    const url = useAppSelector(state => state.modal.url)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(openEditorModal(false, 'sd'))
    }

    useEffect(() => {
        if (open) {
            onWindowLoad()


        }


    })

    function onWindowLoad(): any {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
        const ctx = canvas?.getContext("2d");
        const points = [];
        const img = new Image();
        img.src = url;

        const staticWidth = 700

        const calcHeight = (width: number): any => {
            const ratio = img.naturalWidth / img.naturalHeight
            const height = width / ratio
            const windowHeight = window.innerHeight
            if (height + 150 > windowHeight) {
                return calcHeight(width - 50)
            }
            if (canvas) {
                canvas!.height = height
            }
            return {width, height}
        }

        const canvasParams = calcHeight(staticWidth)

        img.addEventListener('load', function () {
            ctx?.drawImage(img, 0, 0, canvasParams.width, canvasParams.height);

            let mouseX = 0;
            let mouseY = 0;
            ctx!.strokeStyle = 'black';
            ctx!.lineWidth = 30;
            let isDrawing = false;

            // Обработчики рисования мышкой
            canvas!.addEventListener('mousedown', function (event) {
                setMouseCoordinates(event);
                isDrawing = true;
                ctx?.beginPath();
                ctx?.moveTo(mouseX, mouseY);

                points.push({
                    x: mouseX,
                    y: mouseY,
                    mode: "begin"
                });
            });

            canvas!.addEventListener('mousemove', function (event) {
                setMouseCoordinates(event);
                if (isDrawing) {
                    ctx!.lineTo(mouseX, mouseY);
                    ctx!.stroke();
                    points.push({
                        x: mouseX,
                        y: mouseY,
                        mode: "draw"
                    });
                }
            });

            canvas!.addEventListener('mouseup', function (event) {
                setMouseCoordinates(event);
                isDrawing = false;

                points.push({
                    x: mouseX,
                    y: mouseY,
                    mode: "end"
                });
            });

            function setMouseCoordinates(event: any) {
                mouseX = event.offsetX;
                mouseY = event.offsetY;
            }

            const imga = document.getElementById('1') as HTMLImageElement
            if (imga) {
                // @ts-ignore
                imga.src = canvas?.toDataURL({pixelRatio: 3})
            }


        })
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div>
                    <div className="paint-canvas">
                        <canvas id="canvas" width="705" height="353"/>
                        <input id="canvas_img" type="hidden" name="canvas_img" value=""/>
                    </div>

                </div>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cancel}>Отмена</button>
                    <button className={s.save}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default EditorModal;