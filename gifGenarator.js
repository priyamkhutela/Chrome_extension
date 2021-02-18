const img = document.querySelector("img");
const img2 = document.getElementById("img2");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=jFQff8oduy0LBArNZGXzhm7bNiW8TtneY&s=marvel",
  { mode: "cors" }
)
  .then((response) => {
    return response.json();
  })
  //.then((json) => console.log(json))
  .then((response) => {
    //console.log(response)
    img.src = response.data.images.original.url;
    //console.log(response.data.images.original.url)
  })
  .catch((e) => {
    console.log(e);
  });

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=FQff8oduy0LBArNZGXzhm7bNiW8TtneYj&s=ironman",
  { mode: "cors" }
)
  .then((response) => {
    return response.json();
  })
  
  .then((response) => {
    img1.src = response.data.images.original.url;
  })
  .catch((e) => {
    console.log(e);
  });