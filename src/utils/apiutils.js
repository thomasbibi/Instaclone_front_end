// const BASE_URL = process.env.REACT_APP_.BASE_URL

function loadAllPosts() {
    return fetch("http://localhost:8080/posts")
        .then(res => res.json())
}

function createPost(formData) {
    return fetch("http://localhost:8080/posts/create", {
        method: 'POST',
        body: formData
    }).then(res => res.data)
}

export {
    loadAllPosts,
    createPost
}