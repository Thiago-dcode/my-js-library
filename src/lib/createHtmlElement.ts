export const createHtmlElements = (element:string, textContent: string): HTMLElement=>{

    const htmlElement = document.createElement(element)
    htmlElement.textContent = textContent
    return htmlElement;

}