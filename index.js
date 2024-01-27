import { process } from './env'
import { Configuration, OpenAIApi } from 'openai'

const setupTextarea = document.getElementById("userInput");
const setupInputContainer = document.getElementById("setup-input-container");
const iaStartText = document.getElementById("output-container");



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

document.getElementById("send-btn").addEventListener("click", () =>{

    const inputUserText = setupTextarea.value;
    setupInputContainer.innerHTML = '<img src="Img/lo4ding_gif.gif" alt="loading" class="loading" id="loading"></img>';
    iaStartText.innerHTML = '<p id="output-text">Ok, just wait a second. This little dinno is thinking a good response..."</p>'

    fetchBotReply(inputUserText)
})



async function fetchBotReply(inputUserText){
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Da una pequeña explicación sobre "${inputUserText}"`,
        max_tokens: 160
    })
    //console.log(response)
    setupInputContainer.style.display = "none";
    //iaStartText.innerText = response.data.choices[0].text.trim();
    iaStartText.style.display = "block";
    document.getElementById("output-text").innerText = response.data.choices[0].text.trim();
    console.log(iaStartText.innerText); 
}// javascript
