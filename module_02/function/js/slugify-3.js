// Делаем slug в URL из названия статьи
// 
// Top 10 benefits of using React framework
// How to Find Unique and Memorable name for Your product
// Secure your Private information
// How to be the best JS developer


// const title = 'Top 10 benefits of using React framework';





// const words = title.toLowerCase().split(' ');
// const slug = words.join('-');


// console.log('words :', words);
// console.log('slug : ', slug);

// const slugify = function(string) {
//     const words = string.toLowerCase().split(' ');
//     const slug = words.join('-');
//     return slug;
// };

// const result1 = slugify(title);
// console.log('result1 : ', result1);

// const result2 = slugify('How to Find Unique and Memorable name for Your product');
// console.log('result2 : ', result2);

// const result3 = slugify('Secure your Private information');
// console.log('result3 : ', result3);


// Сделать массив слагов
const titles = ['Top 10 benefits of using React framework', 'How to Find Unique and Memorable name for Your product', 'Secure your Private information', 'How to be the best JS developer'];

// const slugs = [];

// 1 перебрать массив циклом
// 2 сделать слаг

const slugify = function(array) {
    const slugs = [];

    for(const item of array) {
        const words = item.toLowerCase().split(' ');
        const slug = words.join('-');

        slugs.push(slug);
    }
    return slugs;
}

const result1 = slugify(titles);
console.log('result1 :', result1);
// console.log('slugs : ', slugs);


