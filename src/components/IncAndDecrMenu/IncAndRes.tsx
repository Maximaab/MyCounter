import React, {useState} from 'react';


export const IncAndRes = () => {
    const [Value, setValue] = useState(0)

    return (
        <div>
            <div>{Value}</div>
            <div>
                <button>Inc</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

