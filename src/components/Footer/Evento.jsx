import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

function Evento() {
    const [exibirMen, setExibirMen] = useState(false);

    return (
        <div>
            <button onClick={() => setExibirMen(true)}> <AiFillLike/> Like</button>
            {exibirMen && <p>+1 </p>}

            <button onClick={() => setExibirMen(false)}> <AiFillDislike/> Dislike</button>
        </div>
    );
}

export default Evento;