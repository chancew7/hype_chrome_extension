
list_length = 3;
const randomIndex = Math.floor(Math.random() * list_length);


const imageUrls = [];
const messageUrls = [];

for (let i = 1; i <= list_length; i++){
    imageUrls.push("/pictures/rand_pictures/p"+i+".png");
    messageUrls.push("/messages/m"+i+".txt");
}

async function fetchMessage(url){
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function generateRandomImages(){
    document.getElementById('random-image').src = imageUrls[randomIndex];
}

async function generateRandomMessages(){
    const message = await fetchMessage(messageUrls[randomIndex]);
    document.getElementById('random-message').innerText = message;
}

async function generateRandomContent(){
    generateRandomImages();
    await generateRandomMessages();
}

generateRandomContent();





