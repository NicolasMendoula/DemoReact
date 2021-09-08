/* Permet de récupéer la progression de la page */
const pageProgression = (element) => {
        let elementCourant = document.querySelector('#'+element);
        let documentScroll = document.querySelector('html').scrollTop;
        let progression = 100*(documentScroll - elementCourant.offsetTop)/elementCourant.clientHeight;
           return  Math.round(progression);
    }

export default pageProgression;