let addContact = document.getElementById('addContact');
let popup = document.getElementById('popup');

let data = {}

addContact.addEventListener('click', function () {
    popup.style.display = 'block';
});

let close = document.getElementById('cancel');
let add = document.getElementById('add');

close.addEventListener('click', function () {
    popup.style.display = 'none';
    reset();
});

add.addEventListener('click', function () {
    let id = document.getElementById('popup-content').value;
    if (id) {
        let genre = document.getElementById('genre').value;
        let name = document.getElementById('nom').value;
        let surname = document.getElementById('prenom').value;
        let phone = document.getElementById('tel').value;

        let contact = document.getElementById(id);
        contact.querySelector('th:nth-child(1)').innerHTML = genre;
        contact.querySelector('th:nth-child(2)').innerHTML = name;
        contact.querySelector('th:nth-child(3)').innerHTML = surname;
        contact.querySelector('th:nth-child(4)').innerHTML = phone;

        editValue(id, genre, name, surname, phone);

        popup.style.display = 'none';
        reset();
        document.getElementById('add').innerHTML = 'Ajouter';
        return;
    }

    id = randomId();


    let genre = document.getElementById('genre').value;
    let name = document.getElementById('nom').value;
    let surname = document.getElementById('prenom').value;
    let phone = document.getElementById('tel').value;

    let contact = document.createElement('tbody');
    contact.innerHTML = '<tr><th>' + genre + '</th><th>' + name + '</th><th>' + surname + '</th><th>' + phone + '</th><th><button class="edit">&#9998;</button><button class="del">&#x1F5D1;</button></th></tr>';
    let edit = contact.querySelector('.edit');
    let del = contact.querySelector('.del');
    defEditButton(edit);
    document.getElementById('content').querySelector('table').appendChild(contact);
    popup.style.display = 'none';

    contact.setAttribute('id', id);

    addValue(id, genre, name, surname, phone);

    reset();
});

function reset() {
    document.getElementById('popup-content').value = '';
    document.getElementById('genre').value = 'Monsieur';
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('tel').value = '';
}

function defEditButton(button) {
    button.addEventListener('click', function () {
        let id = button.parentNode.parentNode.parentNode.getAttribute('id');

        document.getElementById('popup-content').value = id;

        let contact = button.parentNode.parentNode;
        let genre = contact.querySelector('th:nth-child(1)').innerHTML;
        let name = contact.querySelector('th:nth-child(2)').innerHTML;
        let surname = contact.querySelector('th:nth-child(3)').innerHTML;
        let phone = contact.querySelector('th:nth-child(4)').innerHTML;

        document.getElementById('genre').value = genre;
        document.getElementById('nom').value = name;
        document.getElementById('prenom').value = surname;
        document.getElementById('tel').value = phone;

        popup.style.display = 'block';
        document.getElementById('add').innerHTML = 'Enregistrer';
    });
}

function defDelButton(button) {
    button.addEventListener('click', function () {
        let id = button.parentNode.parentNode.parentNode.getAttribute('id');
        document.getElementById('content').querySelector('table').removeChild(button.parentNode.parentNode.parentNode);
        delValue(id);
    });
}

function randomId() {
    return 'row-' + Math.random().toString(36);
}



function addValue(id, genre, nom, prenom, tel) {
    const storedData = JSON.parse(localStorage.getItem('contactData')) || [];
    const newData = { id, genre, nom, prenom, tel };
    storedData.push(newData);
    localStorage.setItem('contactData', JSON.stringify(storedData));
}

function getValue(id) {
    const storedData = JSON.parse(localStorage.getItem('contactData')) || [];
    return storedData.find(item => item.id === id);
}

function editValue(id, genre, nom, prenom, tel) {
    const storedData = JSON.parse(localStorage.getItem('contactData')) || [];
    const index = storedData.findIndex(item => item.id === id);
    if (index !== -1) {
        storedData[index] = { id, genre, nom, prenom, tel };
        localStorage.setItem('contactData', JSON.stringify(storedData));
    }
}

function delValue(id) {
    const storedData = JSON.parse(localStorage.getItem('contactData')) || [];
    const index = storedData.findIndex(item => item.id === id);
    if (index !== -1) {
        storedData.splice(index, 1);
        localStorage.setItem('contactData', JSON.stringify(storedData));
    }
}

function getAllValue() {
    return JSON.parse(localStorage.getItem('contactData')) || [];
}

function init() {
    const storedData = getAllValue();
    storedData.forEach(item => {
        let contact = document.createElement('tbody');
        contact.innerHTML = '<tr><th>' + item.genre + '</th><th>' + item.nom + '</th><th>' + item.prenom + '</th><th>' + item.tel + '</th><th><button class="edit">&#9998;</button><button class="del">&#x1F5D1;</button></th></tr>';
        let edit = contact.querySelector('.edit');
        let del = contact.querySelector('.del');
        defEditButton(edit);
        defDelButton(del);
        document.getElementById('content').querySelector('table').appendChild(contact);
        contact.setAttribute('id', item.id);
    });
}

init();

x