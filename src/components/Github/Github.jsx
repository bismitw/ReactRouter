    import React, { useEffect } from 'react'
    import { useLoaderData } from 'react-router-dom'
    function Github() {
        const data = useLoaderData()

        // const [data,setData] = React.useState([])
        // useEffect(()=> {
        //     fetch('https://api.github.com/users/bismitw')
        //     .then((response) => response.json())
        // .then(data => {
        //     setData(data)
        //     console.log(data)
        // })
        // },[])

    return (
        <div className='text-center m-4 p-4 bg-gray-400 text-3xl text-white'>
            Github Name: {data.name}
            <img src={data.avatar_url} width={300} alt="" />
            </div>
    )
    }

    export default Github

    export const githubInfoLoader = async () => {
        const response  = await fetch('https://api.github.com/users/bismitw');
        return response.json()
    }