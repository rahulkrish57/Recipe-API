let container = document.querySelector("#bottomPart");
let row = newElem("div", "row");

container.append(row);



let apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&beta=false&q="
let apikey ="&app_id=0a3bf398&app_key=228b18f0d44c0b29f86c78223b9fcf67&ingr=12-15"



async function apiFunc(dish) {
    
   // console.log(dish);
    try{
        row.innerHTML = "";
        var res = await fetch(apiUrl+dish+apikey);

        var data = await res.json();
     
        var id = 0;
        for( i=0; i<len.length; i++) {

        
        let col = newElem("div", "col-md-4 col-lg-4");
        let card = newElem("div", "card shadow-sm");
            let img = newElem("img", "card-img-top");
                img.setAttribute("alt", "Image");
                img.setAttribute("src", data.hits[i].recipe.image);
        let cardBody = newElem("div", "card-body");
        let cusineTitle = newElem("h4", "card-title");
            cusineTitle.innerHTML = data.hits[i].recipe.label;
        let cusineName = newElem("h5", "card-title");
            cusineName.innerHTML = `Cuisine: <span>${data.hits[0].recipe.cuisineType}</span>`;
        let dishTypName = newElem("h5", "card-title");
            dishTypName.innerHTML = `Dish Type: <span>${data.hits[0].recipe.dishType}</span>`;
            id = id+1
        let link = newElem("div", "moreInfo");
            link.innerHTML = `<!-- Button trigger modal -->
            
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop${id} ">
              click for more info
            </button>
            
            
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${data.hits[i].recipe.label}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <h5>Health Labels</h5>
                    ${data.hits[i].recipe.healthLabels.join(" | ")}
                  </div>
                  <div class="modal-body">
                    <h5>Incredients</h5>
                    ${data.hits[i].recipe.ingredientLines.join(" | ")}
                  </div>
                  <div class="modal-body">
                    <h5>Calories</h5>
                    ${Math.round(data.hits[i].recipe.calories)} Calories
                  </div>
                  <div class="modal-body">
                    <h5>Vitamins</h5>
                    ${data.hits[i].recipe.totalNutrients.VITA_RAE.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITA_RAE.quantity)} ${data.hits[i].recipe.totalNutrients.VITA_RAE.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.VITB6A.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITB6A.quantity)} ${data.hits[i].recipe.totalNutrients.VITB6A.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.VITB12.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITB12.quantity)} ${data.hits[i].recipe.totalNutrients.VITB12.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.VITC.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITC.quantity)} ${data.hits[i].recipe.totalNutrients.VITC.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.VITD.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITD.quantity)} ${data.hits[i].recipe.totalNutrients.VITD.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.TOCPHA.label}: ${Math.round(data.hits[i].recipe.totalNutrients.TOCPHA.quantity)} ${data.hits[i].recipe.totalNutrients.TOCPHA.unit}<br>
                    ${data.hits[i].recipe.totalNutrients.VITK1.label}: ${Math.round(data.hits[i].recipe.totalNutrients.VITK1.quantity)} ${data.hits[i].recipe.totalNutrients.VITK1.unit}   
                    </div>

                </div>
              </div>
            </div>`;
            
          

        cardBody.append(cusineTitle,cusineName,dishTypName,link);
        card.append(img, cardBody);
        col.append(card);
        row.append(col);
        
        }
   
     
    } catch (err) {
        console.log(err.message);
        alert("Enter Valid Dish Name");
    }
}


function newElem (elem, elemClass, elemID)
{
    var elemEnt = document.createElement(elem);
    elemEnt.setAttribute("class", elemClass);
    elemEnt.setAttribute("id", elemID);
    return elemEnt;
} 
$(document).ready(function() {
	const btnclick = document.getElementById('mybtn');
	btnclick.addEventListener('click', function () {
		var inputVal = document.getElementById('dishName').value;
        inputVal === " " ? alert ("Enter Valid Dish Name") : apiFunc(inputVal)
	});
});

/*
var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});*/
