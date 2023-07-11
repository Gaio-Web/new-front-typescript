import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedComponent(props: any): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {
        // const token = 'THIS IS A TOKEN BUT YOU SHOULD REALLY CRFEDATE ONE FOR YOURSELF';
        const token = false;
        /** STEPS THAT YOU SHOULD TAKE
         * GET TOKEN FROM LOCAL STORAGE
         * CHECK IF IS A VALID ONE
         * IF IT ISENT GO TO ELSE
         * IF ITS VALID, CONTIUE YOU LIFE
         *
         * IF THERE IS NO TOKEN, THAT COUNTS AS A INVALID TOKEN
         * AND TAKES YOU TO THE ELSE STATEMENT TOO
         *
         */
        if (!token) {
            // IF YOUR TOKEN IS WRONG OR IF IT DOES NOT EXIST

            navigate('/forms');
        }
    }, []);

    return <>{props.children}</>;
}

export default ProtectedComponent;
