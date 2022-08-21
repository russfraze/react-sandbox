import {useState, useEffect, useRef } from 'react'

function UseRefExample2() {
const [name, setName] = useState('')

    //set a reference to a number of renders
    const renders = useRef(1)
    const prevName = useRef('')

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])

    return (
        <div>
           <h1>renders: {renders.current}</h1>
           <h2>prev name state: {prevName.current}</h2>
           <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control mb-3"/>
        </div>
    )
}

export default UseRefExample2
