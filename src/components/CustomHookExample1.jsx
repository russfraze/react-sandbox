import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
    const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    console.log(data)


    if(loading){
        return <h3>loading...</h3>
    }

    return <div>
        {data.map((post) => (
            <h3 id={data.id}>{post.title}</h3>
        ))}
    </div>

}

export default CustomHookExample1
