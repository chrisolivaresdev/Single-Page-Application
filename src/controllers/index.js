import Home from './home.controllers'
import Posts from './posts.controllers'
import NotFound from './404.controllers'

const pages = {
    home: Home,
    posts: Posts,
    notFound: NotFound
}

export {pages}