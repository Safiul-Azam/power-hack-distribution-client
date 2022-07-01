import { useEffect, useState } from "react"

const useUser = ()=>{
    const [user, setUser] = useState({})
    useEffect(()=>{
        fetch('https://kinder-donair-83694.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return user
}
export default useUser