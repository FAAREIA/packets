import Modal from './Modal.js';

class Slideshow {
    constructor(source) {
        this.images = source.querySelector('.images');
        this.li = this.images.querySelectorAll('li');
        this.nav = source.querySelectorAll('.nav');
        this.sourceNode = source;

        this.images.addEventListener('click', this.openModal);
        this.nav.forEach(e => e.addEventListener('click', this.navigate));
    }

    navigate(e) {
        const isNext = e.currentTarget.classList.contains('next');
        const width = this.images.offsetWidth;

        if (isNext) return this.images.scrollLeft += width;
        return this.images.scrollLeft -= width;
    }

    openModal(e) {
        const index = e.target.parentNode.dataset.index;
        const isModal = document.body.querySelector('.modal-images');
    
        if (!isModal) this.modal = new Modal(this.li);
        return this.modal.open(index);
    }
}

export default Slideshow;
