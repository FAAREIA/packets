class Modal {
    constructor(source) {
        this.images = {};
        this.imagesIndex = [];
        this.imagesSource = source;

        this.imagesSource.forEach(e => {
            const index = e.dataset.index;

            this.imagesIndex.push(index);
            Reflect.set(this.images, index , e);
        });

        this.clone();
    }

    clone() {
        const clone = modal.content.cloneNode(true);
        const close = clone.querySelector('.close-button');
        const nav = clone.querySelectorAll('.nav');
        
        close.addEventListener('click', this.close);
        nav.forEach(e => e.addEventListener('click', this.navigate));

        packet.insertBefore(clone, null);
        return this.sourceNode = document.querySelector('.modal-images');
    }

    close() {
        return this.sourceNode.classList.remove('open');
    }

    navigate(e) {
        const isNext = e.currentTarget.classList.contains('next');
	
        const currentIndex = Number(this.sourceNode.querySelector('.current').dataset.index);
        const requestedIndex = (isNext) ? currentIndex + 1 : currentIndex - 1;
        
        return this.setImages(requestedIndex, isNext);
    }

    open(index) {
        let requestedIndex;

        this.imagesSource.forEach(e => {
            const liIndex = e.dataset.index;
            if (liIndex === index) requestedIndex = liIndex;
        });

        this.setImages(requestedIndex, true);
        return this.sourceNode.classList.add('open');
    }

    setImages(index, isNext) {
        const li = this.sourceNode.querySelector('.current');
        const img = li.children[0];
        let image;

        if (Reflect.has(this.images, index)) image = this.images[index];
        else image = (isNext) ? this.images[0] : this.images[this.imagesIndex.length - 1];

        li.dataset.index = image.dataset.index;
        img.alt = image.children[0].alt;
        img.src = image.children[0].src;
        img.srcset = image.children[0].srcset;
    }
}

export default Modal;
