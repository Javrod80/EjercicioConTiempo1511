


function makeVisual() {    

    let title = document.createElement("h1");
    let text = document.createTextNode("Elige un Emoji");
    title.appendChild(text);

    let divGeneralContainer = document.createElement("div");
    divGeneralContainer.id = "generalContainer";


    let selectEmojiButton = document.createElement("button");
    selectEmojiButton.id = "selectEmoji";
    selectEmojiButton.textContent = "Select Emoji";
    selectEmojiButton.addEventListener("click",chooseEmoji );

    let inputEmoji = document.createElement("input");
    inputEmoji.type = "text";
    inputEmoji.placeholder = "Ingrese un código de Emoji";
    inputEmoji.id = "Emoji";

    let emojis = document.createElement("h2");
    let texth2 = document.createTextNode(" Elije de estos codigos : 1F600.svg , 1F603.svg ,1F604.svg,1F601.svg");
    emojis.appendChild(texth2);


    divGeneralContainer.appendChild(title);
    divGeneralContainer.appendChild(selectEmojiButton);
    divGeneralContainer.appendChild(inputEmoji);
    divGeneralContainer.appendChild(emojis)


    document.body.appendChild(divGeneralContainer);
    

}
makeVisual();

async function chooseEmoji (){

    let choose = document.getElementById("Emoji").value;
    
    

    if(!choose){

        alert("Por favor, selecciona un tipo de Emoji.");
        return;


    }

    try{
        let res = await fetch(`https://openmoji.org/data/color/svg/${choose}`);
        let svg = await res.json();
        let imagenSelected = svg

        
        

        console.log("hola", res)
        

        let containerDiv = document.createElement("div");
        containerDiv.id = "container2";
        containerDiv.innerHTML = "";
       
        let imageEmoji = document.createElement("img");
        imageEmoji.src = imagenSelected;
        imageEmoji.height = 150;
        imageEmoji.width = 150;
        imageEmoji.alt = "Imagenes de Emoji";
        containerDiv.appendChild(imageEmoji);

        document.body.appendChild(containerDiv);
    }
    catch (error) {
        console.error("Error al obtener los datos de los Emoji:", error);
    }





}