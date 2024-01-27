import { process } from '/env'
import { Configuration, OpenAIApi } from 'openai'

const setupTextarea = document.getElementById("userInput");
const setupInputContainer = document.getElementById("setup-input-container");
const iaStartText = document.getElementById("output-text");
const iaStartBlock = document.getElementById("output-container");



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

document.getElementById("send-btn").addEventListener("click", () =>{

    const inputUserText = setupTextarea.value;
    setupInputContainer.innerHTML = '<div class="h2" id="speech-bubble-ai"> <p id="ai-text" class="display-5">Ok, just wait a second. This little dinno is thinking a good response...</p></div><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDA5bTB3MmlxdXZrNzd5MDdnZmMxNnl4dDNrZHg0bzFuNndpZXo0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cjnnH0h3cfBTORaUnp/giphy.gif" alt="" height="80em" width="80em" class="loading m-5" id="loading">';
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
    document.getElementById("Jurasis_dino").src = "Img/Jurasis_talking.gif";
    iaStartText.innerText = response.data.choices[0].text.trim();
    iaStartBlock.style.display = "block";
    //console.log(iaStartText.innerText); 
}// javascript
