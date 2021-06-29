import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div')
    divElement.innerHTML = views
    divElement.classList = 'text-white'

    const btnClick = divElement.querySelector('#btnClick')

    btnClick.addEventListener('click', () =>{
        alert('click')
    })

    return divElement
}