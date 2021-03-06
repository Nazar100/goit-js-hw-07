const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const imagesList = images.map(image => {
    let item = document.createElement('li');
    let photo = document.createElement('img');
    item.append(photo);
    photo.src = image.url;
    photo.alt = image.alt;
    photo.style.width = '300px';
    item.style.listStyle = 'none';

    return item;
});

const gallery = document.querySelector('#gallery');

gallery.append(...imagesList);

gallery.classList.add('list');
