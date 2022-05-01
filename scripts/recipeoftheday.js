const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
var data;
fetch(url).then((res) => {
    return res.json();
}).then((res) => {
    console.log('res: ', res);
    data = res.meals; 
    console.log(data);
    localStorage.setItem('meals', JSON.stringify(data));
}).catch((err) => {
    console.log('err: ', err);
})

let meals = JSON.parse(localStorage.getItem('meals'));

meals.forEach(ele => {
    let thumbnail = document.querySelector('#thumbnail');
    let name = document.querySelector('#name');
    let area = document.querySelector("#area");
    let cat = document.querySelector('#cat');
    let ingred = document.querySelector('#ingredMsrs');

    let ingredients = [ele.strIngredient1, ele.strIngredient2, ele.strIngredient3, ele.strIngredient4, ele.strIngredient5, ele.strIngredient6, ele.strIngredient7, ele.strIngredient8, ele.strIngredient9, ele.strIngredient10, ele.strIngredient11, ele.strIngredient12, ele.strIngredient13, ele.strIngredient14, ele.strIngredient15, ele.strIngredient16, ele.strIngredient17, ele.strIngredient18, ele.strIngredient19, ele.strIngredient20];

    let measures = [ele.strMeasure1, ele.strMeasure2, ele.strMeasure3, ele.strMeasure4, ele.strMeasure5, ele.strMeasure6, ele.strMeasure7, ele.strMeasure8, ele.strMeasure9, ele.strMeasure10, ele.strMeasure11, ele.strMeasure12, ele.strMeasure13, ele.strMeasure14, ele.strMeasure15, ele.strMeasure16, ele.strMeasure17, ele.strMeasure18, ele.strMeasure19, ele.strMeasure20];

    let final = [];
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] == "") {
            break;
        }
        final.push(`${ingredients[i]} - ${measures[i]}`);
    }

    let instructions = document.querySelector('#instructions');
    let article = document.querySelector('#blog');
    let video = document.querySelector('#video');

    thumbnail.src = `${ele.strMealThumb}/preview`;
    name.append(ele.strMeal)
    area.append(ele.strArea);
    cat.append(ele.strCategory);
    ingred.append(final.join(", "));

    instructions.append(ele.strInstructions);
    article.href = ele.strSource;
    
    let vid = '';
    for (let i = ele.strYoutube.length - 1; i >= 0; i--) {
        if (ele.strYoutube[i] == '=') {
            break;
        }
        vid += ele.strYoutube[i];
    }
    vid = vid.split("").reverse().join("");
    console.log(vid);
    video.src = `https://www.youtube.com/embed/${vid}`;
    console.log('video: ', video.src);
    console.log(ele.strYoutube);
});