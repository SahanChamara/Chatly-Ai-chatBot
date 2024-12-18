// get time
function time() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    let timeSet = hour + ":" + "" + minute;
    return timeSet;
}

// sender 1 and two
let chatList = [];

// Mark down
var md = window.markdownit();

async function send() {
    let timeSet = time();   

    let inputChat = document.getElementById("inputChat").value;
    // let sendBtn = senderButton.value;

    chatList.push(inputChat);

    document.getElementById("inputChat").value="";
    

    // let returnResult = await aiRespone(inputChat)


    // if (sendBtn == "Sender 1") {
    document.getElementById("setChat").innerHTML += `<div class="d-flex flex-row justify-content-end mb-4 pt-1">
  <div>
    <p class="small p-2 me-3 mb-1 rounded-3 bg-tech-message">${inputChat}</p>
    <p class="small me-3 mb-3 rounded-3 text-light d-flex justify-content-end">${timeSet}</p>
  </div>
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" 
       alt="avatar 1" class="avatar-dark">
</div>`
    // } else {

    //     let returnResult;
    setTimeout(async () => {
        document.getElementById("setChat").innerHTML += ` <div class="d-flex flex-row justify-content-start mb-4 pt-1">
  <div>
    <p class="small p-2 me-3 mb-1 rounded-3 bg-tech-message">Thinking....</p>
    <p class="small me-3 mb-3 rounded-3 text-light d-flex justify-content-end">${timeSet}</p>
  </div>
  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chatbot.png" 
       alt="avatar 1" class="avatar-dark">
</div>`
        // returnResult = await aiRespone(inputChat)
    }, 800);

    returnResult = await aiRespone(inputChat)

    document.getElementById("setChat").innerHTML += ` <div class="d-flex flex-row justify-content-start mb-4 pt-1 text-bg-light">
  <div>
    <p class="small p-2 me-3 mb-1 rounded-3 ">${md.render(returnResult)}</p>
    <p class="small me-3 mb-3 rounded-3 text-light d-flex justify-content-end">${timeSet}</p>
  </div>
  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chatbot.png" 
       alt="avatar 1" class="avatar-dark">
</div>`

    // }
};

// fetching chat API
async function aiRespone(inputChat) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": inputChat
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBG5kYLrjr_H6nWrw1FljHY-F190Y8wtnw", requestOptions)
    let result = await response.json()
    let returnResult = result.candidates[0].content.parts[0].text

    return returnResult;
}


