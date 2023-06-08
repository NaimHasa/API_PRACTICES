const url = `https://randomuser.me/api/?results=1`;
fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]));



const displayUser = (user) => {
    console.log(user);
    const displayContainer = document.getElementById('container')
    const div = document.createElement('div')
    div.classList.add('user-info')
    div.innerHTML = `
        <h1>Name: ${user.name.first}</h1>
        <p>Email: ${user.email}</p>
        <img src= "${user.picture.large}">
    
    `;
    displayContainer.appendChild(div);


}