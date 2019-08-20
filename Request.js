class Request{

    host = "http://polarisai.azurewebsites.net/";

    Request(){

        
    }

    sendQuery(query){

        return new Promise((resolve) => {
            
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", this.host + "query/" + query, true);

            xhttp.send();

            xhttp.onload = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    resolve(xhttp.responseText);
                }
            };  
        });
    }
}