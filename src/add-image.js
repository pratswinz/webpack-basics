import imag from '../../../../Downloads/converted/IMG_3368.jpg';


function addImage(){
    const img = document.createElement('img');
    img.alt = 'this is a kiwi';
    img.width = '200';
    img.src = imag;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;