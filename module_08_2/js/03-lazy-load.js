/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const images = document.querySelectorAll('.feed img');

// console.log(images);

const onEntry = (entries, observer) => {
    // console.log('IN');

    entries.forEach(entry => {
        console.log(entry.isIntersecting);

        if(entry.isIntersecting) {
            const image = entry.target;
            image.classList.add("appear");

            observer.unobserve(image);
        }

        // const image = entry.target;
        // console.log(image);
        
    });
};

const option = {
    rootMargin: '100px',
};

const io = new IntersectionObserver(onEntry, option);

images.forEach(image => io.observe(image));