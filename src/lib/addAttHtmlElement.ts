export function addAttHtmlElement(element:HTMLElement, properties:{ [att: string] : string}):HTMLElement{

    const propsToArray = Object.entries(properties)

    propsToArray.forEach(prop => {
        const [key, value] = prop
        if(element.hasOwnProperty(key))
       { Object.defineProperty(element,key,{value:value, writable:true});}
    });

    
    return element
    
} 