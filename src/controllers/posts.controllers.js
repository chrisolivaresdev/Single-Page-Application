import views from '../views/posts.html'

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = views
    const postsElement = divElement.querySelector('#post')
    const total = divElement.querySelector('#total')

    const posts = await getPost()
    total.innerHTML = posts.length
    

    posts.forEach(posts => {
        postsElement.innerHTML += `
            <li class="list-group-item border-primary bg-dark text-white">
                <h5>${posts.title}</h5>
               <p> ${posts.body}</p>
            </li>
        `
    });
        
       

    return divElement
}