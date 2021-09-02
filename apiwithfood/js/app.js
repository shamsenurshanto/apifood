// console.log("kkk")
const searchresult = document.getElementById('searchinput');
function searchBtn(){
    const search = searchinput.value;
    searchinput.value=' '
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>foodShow(data))
}
const cardPlace = document.getElementById('cardPlace');
function foodShow(data){
   for(meal of data.meals)
   {
       const div = document.createElement('div');
       div.classList.add('col-4')
       div.innerHTML=`              
                            <div onclick="showMenu(${meal.idMeal})"  class="col-4 m-2">
                            <div class="card" style="width: 18rem;">
                                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                                </div>
                            </div>
                                                        
                                    `

                                    cardPlace.appendChild(div);

    console.log(meal)
   }

  

  
     
}
 const searchBox = document.getElementById('addhere');
function showMenu(id)
{

    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    console.log(url)
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFunction(data))
}

function displayFunction(data)
{
   
    console.log(data.meals[0])
 
    const div = document.createElement('div');
    div.innerHTML=``;
    div.classList.add('col-6')
    searchBox.textContent=''
   
    div.innerHTML=`              
                        
                         <div onclick="showMenu(${data.meals[0].idMeal})"  class="card  " style="width: 38rem;">
                         <div class="mx-auto">
                            <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                             
                          </div>        
   </div>
                        
                                                     
                                 `

                                 searchBox.appendChild(div);

}