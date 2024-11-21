let senderButton = document.getElementById("senderButton");
let dropItem1 = document.getElementById("dropItem1");
let dropItem2 = document.getElementById("dropItem2");

dropItem1.addEventListener("click", (e) => {
    e.preventDefault();
    senderButton.value = dropItem1.textContent;
});

dropItem2.addEventListener("click", (e) => {
    e.preventDefault();
    senderButton.value = dropItem2.textContent;
});


// get time
let hour = new Date().getHours();
let minute = new Date().getMinutes();

let time = hour + ":" + "" + minute;




// sender 1 and two
let chatList = [];

async function send() {
    let inputChat = document.getElementById("inputChat").value;
    let sendBtn = senderButton.value;

    chatList.push(inputChat, sendBtn);

    let returnResult = await aiRespone(inputChat)

    // if (sendBtn == "Sender 1") {
        document.getElementById("setChat").innerHTML += `<div class="d-flex flex-row justify-content-end mb-4 pt-1">
  <div>
    <p class="small p-2 me-3 mb-1 text-dark rounded-3 bg-tech-message">${inputChat}</p>
    <p class="small me-3 mb-3 rounded-3 text-light d-flex justify-content-end">${time}</p>
  </div>
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" 
       alt="avatar 1" class="avatar-dark">
</div>`
    // } else {
        document.getElementById("setChat").innerHTML += ` <div class="d-flex flex-row justify-content-start mb-4 pt-1">
  <div>
    <p class="small p-2 me-3 mb-1 text-dark rounded-3 bg-tech-message">${returnResult}</p>
    <p class="small me-3 mb-3 rounded-3 text-light d-flex justify-content-end">${time}</p>
  </div>
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" 
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

    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=", requestOptions)
    let result = await response.json()
    let returnResult = result.candidates[0].content.parts[0].text

    return returnResult;
}


