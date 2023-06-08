const mealDbDataLoad = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsData(data.meals));
}

const displayMealsData = (meal) => {
    console.log(meal);
    const displayContainer = document.getElementById('mainCcontainer');
    displayContainer.innerHTML = ``;

    meal.forEach(meals => {
        console.log(meals)

        const divCre = document.createElement('div')
        divCre.classList.add('col')
        divCre.innerHTML = `
            <div onclick= "mealDbIdDetelis( ${meals.idMeal})">
    
            <img src="${meals.strMealThumb}"/>
           <h2>${meals.strMeal}<h2>
           <p>${meals.strInstructions.slice(0, 30)}......</p>
            </div>

        `;
        displayContainer.appendChild(divCre);

    })


}
// search filed 

const searchBtn = () => {
    const searchFiledId = document.getElementById('searchFiled');
    const searchFiledText = searchFiledId.value;
    mealDbDataLoad(searchFiledText);
    searchFiledId.value = '';

}

const mealDbIdDetelis = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayDataDetelis(data.meals[0]));

}

const displayDataDetelis = (idMeal) => {

    const deteilsContainer = document.getElementById('detelis-container');

    deteilsContainer.innerHTML = ``;
    const divDetelis = document.createElement('div');
    divDetelis.classList.add('detelis')
    divDetelis.innerHTML = `
    
    <div>
    <img src="${idMeal.strMealThumb}"/>
    <h2>${idMeal.strMeal}<h2>
    <p>${idMeal.strInstructions.slice(0, 30)}...</p>
    
    </div>
    
    `;

    deteilsContainer.appendChild(divDetelis);




}






mealDbDataLoad('');