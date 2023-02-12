// single elements selectors

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));


// multiple selectors

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item)); // loop to grab items from list

// const ul = document.querySelector('.items');
// // ul.lastElementChild.remove(); // removes last item.
// ul.firstElementChild.textContent = 'HELLO'; // to change the name
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// ul.firstElementChild.style.background = 'lightgreen';

// const itemm = document.querySelector('.itemm');
// itemm.style.background = ('yellow');

// btn.addEventListener('mouseover', function(event){  // to add event listener
//     event.preventDefault();
//     console.log(event);
//     document.querySelector('#my-form').style.background ='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Helllo</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //- ADDING VALUES IN THE LOCAL STORAGE ////////

//         localStorage.setItem('userName', nameInput.value);
//         localStorage.setItem('userId', emailInput.value);
        let userDetail = {
            name : nameInput.value,
            userId : emailInput.value
        }

        let new_obj = JSON.stringify(userDetail);
        localStorage.setItem('userDetail', new_obj);
        
        //------------------------------------------------//

        console.log(localStorage.setItem('userName'));

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}


///// Storing data ////////////////////////------------

// localStorage.setItem('userName', nameInput);
// localStorage.setItem('userId', emailInput);
// localStorage.removeItem('sky');

// session storage /////////

// sessionStorage.setItem('sky', 'deep');
// console.log(sessionStorage.getItem('sky'));

// sessionStorage.removeItem('sky');

// cookie storage ///////////

// document.cookie = 'name=akash';
// document.cookie = 'lastName=yadav';

// console.log(document.cookie);
