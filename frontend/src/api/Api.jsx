import axios from 'axios';

const apiURL = 'http://localhost:3000';

export const getBlogs = (cat) => {
    // return blogs
    if(!cat){
        cat = 'all';
    }
    return axios.get(apiURL+'/blog/'+cat)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

export const createBlog = (data) => {
    // return blog created
    return axios.post(apiURL+'/blog', data)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

export const getBlogbyid = (id) => {
    // return blog by id
    return axios.get(apiURL+'/blogbyid/'+id)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

export const uploadFile = (file) => {
    const formdata = new FormData();
    formdata.append('file',file);
    const config = {
        headers:{
            'content-type':'multipart/form-data'
        }
    }
    return axios.post(apiURL+'/blogimage', formdata, config)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    }); 
}