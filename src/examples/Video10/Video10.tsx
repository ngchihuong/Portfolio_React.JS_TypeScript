import { useState } from "react";
import './Video10.css'

export interface IUser {
    age: number | string
    name: string,
    city: string,
}
export interface ITest {
    age: number
    name: string,
}
export interface IProps {
    defaultName: string,
    defaultAge: number | string
}
const Video10 = (props: IProps) => {
    const { defaultName, defaultAge } = props;
    //bổ sung type
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    
    const [city, setCity] = useState<(string)[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectdCity, setSelectedCity] = useState<string>("Hà Nội");

    const [users, setUsers] = useState<IUser[]>([])

    const [test, setTest] = useState<ITest | null>()
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        if (!name && !age) {
            alert("pls enter value!")
        }else {
            const user = {
                name: name,
                age: age,
                city: selectdCity
            }
            setUsers([...users, user]) //spread syntax
            setName("")
            setAge('')
        }
    }
    const handleOnchangName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input onChange={handleOnchangName} type="text" value={name} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input
                    onChange={(event) => setAge(event.target.value)}
                    type="text" value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    {/* update with loop */}
                    <select 
                    onChange={(event) => setSelectedCity(event.target.value)}
                    >
                        {city && city.map((item, index) => {
                            return (
                                <option value={item} key={index}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    onClick={(handleSubmit)}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <td>{users.name}</td>
                                    <td>{users.age}</td>
                                    <td>{users.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;