import React from 'react';
import alloy from '@alloyidentity/web-sdk';

const alloyInitParams = {
    key: '028d85e0-aa24-4ca1-99f2-90e3ee3f4e6b',
    // entityToken: 'P-nCLYNtmujqr9ZPwQ0C9S',
    // externalEntityId: 'P-nCLYNtmujqr9ZPwQ0C9S',
    documents: ['license', 'passport'],
    selfie: true,
    evaluationData: {
        nameFirst: 'John',
        nameLast: 'Beta',
        addressLine1: 'Address Line 1. C - left door',
        addressLine2: 'Secondary address. 2ºB',
        addressCity: 'City address',
        addressState: 'TX',
        addressPostalCode: '+419550',
        addressCountryCode: 'VI',
        birthDate: '2020-03-03',
    },
    // color: { primary: '#CD7D2D', secondary: '#862633' }
    // forceMobile: true
};
alloy.init(alloyInitParams);

function Selfie() {
    // Callback
    const callback = data => {
        console.log(data);
    };

    const onOpen = () => {
        alloy.open(callback);
    };

    const onClose = () => {
        alloy.close();
    };

    return (
        <>
            <div className="Selfie">
                <div className="buttonContainer">
                    <button onClick={onOpen}>Open</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
}

export default Selfie;