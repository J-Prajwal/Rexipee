let id;

let user = localStorage.getItem('user');
console.log(user);
document.querySelector('#name').append(user);

async function searchRecipe() {
    try {
        let query = document.querySelector('#searchBox').value;
        if(query.length == 0) {
            console.log('undefined');   
        } else {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            let data = await res.json();
            console.log('data: ', data.meals);
            const meals = data.meals;
            return meals;
        }
    }
    catch(err) {
        console.log('err: ', err);
    }
}

function appendRecipe(data) {
    document.querySelector('#recipe').innerHTML = null;

    data.forEach(function(ele) {
        let div = document.createElement("div");
        let thumb = document.createElement('img');
        thumb.src = `${ele.strMealThumb}/preview`;

        let title = document.createElement('h4');
        title.innerText = ele.strMeal;

        let btn = document.createElement('button');
        btn.innerText = 'Show Details';
        btn.id = 'details';
        btn.addEventListener('click', function() {
            console.log(ele);
            let data = [];
            data.push(ele);
            localStorage.setItem('recipe', JSON.stringify(data));
            window.location.href = 'recipe.html';
        })
        
        div.append(thumb, title, btn);
        document.querySelector('#recipe').append(div);
    })
}

async function main() {
    let data = await searchRecipe();
    
    if(data == undefined) {
        document.querySelector('#recipe').innerHTML = null;
        return false;
    }
    appendRecipe(data);
}

function debounce(func, delay) {
    if(id) {
        clearTimeout(id);
    }

    id = setTimeout(() => {
        func();
    }, delay);
}