
import './hello-world-button.css';

class HelloWorldButton {
    render(){
        const button = document.createElement('button');
        button.innerHTML = "Hello world";
        button.classList.add('buttonCSS');
        const body = document.querySelector('body');
        body.appendChild(button);
        button.onclick = function(){
            const para = document.createElement('p');
            para.innerHTML = "New paragraph";
            para.classList.add('paraCSS');
            body.appendChild(para);
        }
    }
}

export default HelloWorldButton;