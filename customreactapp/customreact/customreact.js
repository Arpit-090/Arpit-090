function customrender(element , container){
    const elementcreated = document.createElement(element.type)
    elementcreated.innerHTML = creat_element.children
    // elementcreated.setAttribute('href' , creat_element.props.href)
    // elementcreated.setAttribute('target', creat_element.props.target)
    for(const prop in creat_element.props){
        if(prop == 'children') continue;
        elementcreated.setAttribute(prop, creat_element.props[prop])
    }

    container.appendChild(elementcreated)
}


const creat_element = {
    type : 'a',
    props : {
        href : "https//google.com",
        target : " _blank_"
    } ,
    children : "click here to to open google"
}




const reactcontainer = document.getElementById('root')
customrender(creat_element , reactcontainer)
