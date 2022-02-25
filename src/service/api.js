import axios from 'axios';


const URL = 'https://blogweb-mern.herokuapp.com'

export const getAllPosts = async (param) => {
    try{ 
         const res =   await axios.get(`${URL}/posts${param}`);
         return res.data
        
    }catch(err){
        console.log(`error create post api ${err}`)
    }
 }

export const createPost = async (post) => {
   try{ 
       return  axios.post(`${URL}/create`,post)
   }catch(err){
       console.log('error create post api')
       console.log(err)
   }
}


export const getPost = async (id) => {
    try{
        let res = await  axios.get(`${URL}/post/${id}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const  updatePost = async (id,post) => {
    try{
         await axios.post(`${URL}/update/${id}`,post)
    }catch(err){
          console.log(err)
    }
}

  export const  deletePost = async (id,post) => {
    try{
         await axios.delete(`${URL}/delete/${id}`)
    }catch(err){
          console.log(err)
    }
}


export const  uploadFile = async (data) => {
    try{
         await axios.post(`${URL}/file/upload`,data)
    }catch(err){
          console.log(err)
    }
}