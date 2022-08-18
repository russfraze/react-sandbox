import { useRef } from 'react'

//get the value of the form without state
function UseRefExample1() {
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }
    return (

        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    className="form-control mb-2"
                    id="name"
                    ref={inputRef}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UseRefExample1
