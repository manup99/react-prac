import customaxios from '../customaxios'

export const fetchpost=()=>{
    return async function(dispatch,getState){
        const res = await customaxios.get()
        console.log(res.data)
        dispatch({
            type:'FETCH_POSTS',
            payload:res
        })
    }
}


