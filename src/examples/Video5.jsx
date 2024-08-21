import { useState ,useEffect} from 'react'

const Video5 = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0)
    useEffect(() => {
        setAge("hoidanit")
    }, [])
    return (
        <div>
            Exp video 5: name {name} | age: {age}
        </div>
    )
}
export default Video5;