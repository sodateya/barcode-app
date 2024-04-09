import React, { useEffect, useRef } from 'react';
import bwipjs from 'bwip-js';

const Barcode = ({ text }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            // バーコードの幅と高さを固定して生成
            const canvas = canvasRef.current;
            canvas.width = 100; // 幅を200に設定
            canvas.height = 50; // 高さを100に設定

            bwipjs.toCanvas(canvas, {
                bcid: 'code39',
                text: text,
                scale: 1, // スケール（拡大率）
                includetext: true,

            });
        }
    }, [text]);

    return <canvas ref={canvasRef} style={{ border: '1px solid black', marginBottom: '20px', }} />;
};

export default Barcode;
