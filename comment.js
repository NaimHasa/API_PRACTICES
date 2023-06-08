const loadCommentData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}

const displayComments = (comment) => {
    const divContainer = document.getElementById('container');
    // console.log(comment);

    comment.forEach(elements => {
        const divCre = document.createElement('div')
        divCre.classList.add('detelis');
        divCre.innerHTML = `
        
        <h1>Name: ${elements.name}</h1>
        <h4>Email: ${elements.email}</h4>
        <p>Description: ${elements.body
            }</p>
        
        `;
        divContainer.appendChild(divCre);

    });

}



