let sendBtn = document.getElementById("send-btn");
let responseTextfield = document.getElementById("response-text");
let queryText = document.getElementById("query-text");
let responseEl = document.getElementById("response");

sendBtn.addEventListener("click", async () => {

    let request = new Request();
    let responseText = await request.sendQuery(queryText.value);
    responseText = responseText.replace(/\n/g, "<br>");
    setResponseText(responseText);
    
});

function setResponseText(response){
    responseTextfield.innerHTML = response;
    responseEl.style.display = "flex";
}