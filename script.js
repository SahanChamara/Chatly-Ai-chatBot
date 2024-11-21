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


// sender 1 and two
let chatList = [];

function send() {       
    let inputChat = document.getElementById("inputChat").value;   
    let sendBtn = senderButton.value;  

    chatList.push(inputChat,sendBtn); 
     
    if (sendBtn == "Sender 1") {        
        document.getElementById("setChat").innerHTML+=`<div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>                
                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${inputChat}</p>
                <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>`
    }else{
    document.getElementById("setChat").innerHTML+=` <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>                
                <p class="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">${inputChat}</p>
                <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
              </div>
            </div>`

    }





}


