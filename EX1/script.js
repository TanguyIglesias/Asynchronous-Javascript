const button = document.querySelector('button');
const main = document.querySelector('main');

fetch('becode.json')
    .then(response => response.json())
    .then(data => {
        button.addEventListener('click', () => {
        const ul = document.createElement('ul');
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item}`;
            ul.appendChild(li);
        }
        );
        main.appendChild(ul);
        }
        );
    }
    );

 