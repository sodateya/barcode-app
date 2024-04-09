import React from 'react';
import Barcode from './Barcode';

const BarcodeDisplay = () => {
    const startNumber = 1;
    const endNumber = 999;
    const paddingBetweenBarcodes = 16; // バーコード間の余白（ピクセル単位）

    const renderBarcodes = () => {
        const barcodes = [];
        for (let i = startNumber; i <= endNumber; i++) {
            const barcodeText = i.toString().padStart(8, '0');
            barcodes.push(
                <div key={i} style={{ display: 'inline-block', marginRight: `${paddingBetweenBarcodes}px` }}>
                    <Barcode text={barcodeText} />
                </div>
            );
        }
        return barcodes;
    };

    return (
        <div>
            <h1>Barcodes Display</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'left', justifyContent: 'center' }}>
                {renderBarcodes()}
            </div>
        </div>
    );
};

export default BarcodeDisplay;
