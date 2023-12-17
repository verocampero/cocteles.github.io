const busqueda = document.getElementById("coctel");
const foto = document.querySelector(".foto");
const ul = document.querySelector("ul");

const ing1 = document.querySelector(".ingrediente1");
const ing2 = document.querySelector(".ingrediente2");
const ing3 = document.querySelector(".ingrediente3");
const ing4 = document.querySelector(".ingrediente4");
const ing5 = document.querySelector(".ingrediente5");
const ing6 = document.querySelector(".ingrediente6");
const ing7 = document.querySelector(".ingrediente7");
const ing8 = document.querySelector(".ingrediente8");
const ing9 = document.querySelector(".ingrediente9");
const ing10 = document.querySelector(".ingrediente10");
const ing11 = document.querySelector(".ingrediente11");
const ing12 = document.querySelector(".ingrediente12");
const ing13 = document.querySelector(".ingrediente13");
const ing14 = document.querySelector(".ingrediente14");
const ing15 = document.querySelector(".ingrediente15");

busqueda.addEventListener("keyup", () => {
  let input = busqueda.value;
  const cocteles = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  const ingredintList = ` https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;

  fetch(cocteles)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const bebida = document.querySelector(".bebida");
      const array = data.drinks;

      array.forEach((element) => {
        console.log(element);
        bebida.style.display = "block";
        bebida.textContent = element.strDrink;

        const imagen = element.strDrinkThumb;
        foto.src = imagen;

        ul.style.display = "block";

        const ingredientElements = [
          ing1,
          ing2,
          ing3,
          ing4,
          ing5,
          ing6,
          ing7,
          ing8,
          ing9,
          ing10,
          ing11,
          ing12,
          ing13,
          ing14,
          ing15,
        ];

        const ingredients = [
          element.strIngredient1,
          element.strIngredient2,
          element.strIngredient3,
          element.strIngredient4,
          element.strIngredient5,
          element.strIngredient6,
          element.strIngredient7,
          element.strIngredient8,
          element.strIngredient9,
          element.strIngredient10,
          element.strIngredient11,
          element.strIngredient12,
          element.strIngredient13,
          element.strIngredient14,
          element.strIngredient15,
        ];

        ingredients.forEach((ingredient, index) => {
          if (ingredient !== null && ingredient.trim() !== "") {
            ingredientElements[index].textContent = `✔ ${ingredient}`;
          } else {
            ingredientElements[index].textContent = "";
          }
        });
      });

      
    })

    .catch((error) => {
      console.error("Error al conectar la api");
    });
});
