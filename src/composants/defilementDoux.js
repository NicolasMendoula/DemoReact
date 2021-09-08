/* Fonction qui va permettre à la page de défiler */
const defilementDoux = function (e){
    e.preventDefault(); //On empêche le suivi normal du lien
    let target = document.querySelector(e.target.hash);
    let targetOffset = target.offsetTop;
    let currentOffset = document.querySelector('html').scrollTop;
    let pas = (target.offsetTop - currentOffset)/100;

    let scroller = () => {
        setTimeout(() => {
            currentOffset+= pas;
            document.querySelector('html').scrollTop = currentOffset;
            if(Math.round(currentOffset) !== Math.round(targetOffset)){
                scroller();
            }
        }, 1);
    }
    scroller(); 
}

export default defilementDoux;
