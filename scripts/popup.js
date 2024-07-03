
const LIST_LENGTH = 5;
const IMAGE_PATH = "/pictures/rand_pictures/p";
const MESSAGE_FILE = "/messages/allMessages.txt";
const RANDOM_IMAGE_ID = 'random-image';
const RANDOM_MESSAGE_ID = 'random-message';


function generateRandomImages(randomIndex){
    const imageUrl =  IMAGE_PATH + randomIndex + ".jpg";
    document.getElementById(RANDOM_IMAGE_ID).src = imageUrl;
}

async function fetchMessages(url){
    const response = await fetch(url);
    const text = await response.text();
    return text.split('\n');
}

async function generateRandomMessages(randomIndex){
    const messages = await fetchMessages(MESSAGE_FILE);
    console.log(messages);
    const randomMessage = messages[randomIndex].trim();
    document.getElementById(RANDOM_MESSAGE_ID).innerText = randomMessage;
}

async function generateRandomContent(){
    const randomIndex = Math.floor(Math.random() * LIST_LENGTH);
    generateRandomImages(randomIndex);
    await generateRandomMessages(randomIndex);
}

generateRandomContent();

