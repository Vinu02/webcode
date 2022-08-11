document.body.innerHTML = `<div class="heading-container">
<h1> Ice and Fire API</h1>
</div>
<div id="mainContainer" class="main-container"></div>`;

async function foo(){
    try{
        var result=await fetch("https://www.anapioficeandfire.com/api/books")   
     var books=await result.json();
     console.log(books[0].name)
     mainContainer.innerHTML=""; 
     books.forEach(data)

    }
    catch(error){
        console.log(error);
    }   
}
foo();

const data = (res) => {
      
 mainContainer.innerHTML += `
   <div class="container">
   <p> Name:${res.name}</p>
   <p> ISBN:${res.isbn}</p>
   <p> No. of Pages:${res.numberOfPages}</p>
   <p> Authors:${res.authors}</p>
   <p> Publisher:${res.publisher}</p>
   <p> Release Date:${res.released}</p>
   <p id="char">Characters :
   <a href="${res.characters[1]}" target="_blank">Character 1</a>
   <a href="${res.characters[2]}" target="_blank">Character 2</a>
   <a href="${res.characters[3]}" target="_blank">Character 3</a>
   <a href="${res.characters[4]}" target="_blank">Character 4</a>
   <a href="${res.characters[5]}" target="_blank">Character 5</a> 
   </p>
   </div>`;
   };