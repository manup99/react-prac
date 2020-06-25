import customaxios from '../customaxios'
import customuseraxios from '../customuseraxios'
import _ from 'lodash';//for _.memoize function

 export const fetchPostsandUsers=()=>async (dispatch,getState)=>{
    await dispatch(fetchpost());
    const userIds=_.uniq(_.map(getState().posts,'userId')); 
    console.log(userIds)
    userIds.forEach(id=> dispatch(fetchuser(id)));  
 }


export const fetchpost=()=>{
    return async function(dispatch,getState){
        const res = await customaxios.get()
        dispatch({
            type:'FETCH_POSTS',
            payload:res.data
        })
    }
}


export const fetchuser=(key)=>async (dispatch,getState)=>{
    const res = await customuseraxios(`/${key}`);
    dispatch({
        type:'FETCH_USER',
        payload:res.data
    })
}


//Using memoize function to prevent multiple requests


// export const fetchUser=key=>dispatch=>_fetchUser(id,dispatch);


// const _fetchUser = _.memoize(async (key,dispatch)=>{
//     const res = await customuseraxios.get(`${key}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:res.data
//     })
// })