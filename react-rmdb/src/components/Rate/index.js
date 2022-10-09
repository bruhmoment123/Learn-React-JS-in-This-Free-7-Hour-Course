import React,{useState} from 'react';


const Rate = ({callback}) => {
    const [value,setValue] = useState(5);

    return(
        <div>
            <input
                type="range"
                min='1'
                max='10'
                value={value}
                onChange={e=>setValue(e.currentTarget.value)}
                />
                {value}
                <p>
                    {/* inline functions cause other wise it would run instantly */}
                    <button onClick={()=>callback(value)}>Rate</button>
                </p>
        </div>
    )
}

export default Rate;