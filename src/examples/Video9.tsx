import { useState } from "react"

export const Video9 = () => {
    let [name, setName] = useState<string | number>('Huong dep trai');
    return (
        <div>
            Exp 9 + {name}
        </div>
    )
}