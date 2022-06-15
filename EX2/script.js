
const main = document.querySelector('main');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const select = document.getElementById('country');
    const country = select.value;
    let input = document.getElementById('input').value;
    const firstname = input;

    if (country === 'All') {
        fetch(`https://api.agify.io?name=${firstname}`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}`;
                main.appendChild(div);
            }
            )
    }
    else {
        fetch(`https://api.agify.io?name=${firstname}&country_id=${country}`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = `Name: ${data.name} , Age: ${data.age} years old, count: ${data.count}, country: ${data.country_id}`;
                main.appendChild(div);
            })
    }
}
);  