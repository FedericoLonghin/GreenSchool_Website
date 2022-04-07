var data;
const cardTitles = ["Percentuale CO2", "Temperatura T1", "Umidità T1"];
const cardURL = ["/CO2_current", "/Temp1_current", "/Temp1_current"];
const cardNumber = 3;

function fetchData() {
    for (let i = 0; i < cardNumber; i++) {
        scarica(i);
    }
}

function IPAlert() {

    ip = prompt("Please enter your device's IP:", "");
    if (ip != null && ip != "") {
        ip = "http://" + ip;
    } else {

        ip = "src/test"; //for test purpose

    }
}



function scarica(cardToFetch) {
    var url = ip + cardURL[cardToFetch];
    $.ajax({
        url: url,
        success: function(result) {
            var cardid = "card-" + cardToFetch + "-body";
            document.getElementById(cardid).innerHTML = result;
            setTimeout(fetchData, 10)
        }
    });

}




/*
fetch('http://' + ip + '/CO2_data.txt ').then(function(response) {
    response.text().then(function(text) {
        data = text;
        done();
    });
});

function done() {
    var arr = data.split(",");
    console.log(arr.lenght);
    data = "";
    for (var i = 0; i < 100; i++) {
        data += i * 10 + 45 + "," + (200 - arr[i] * 2) + ",";
    }
    var polyline = document.getElementById('card-1-data')

    polyline.setAttribute("points", data);
    data = polyline.getAttribute('points');
    console.log(data);
}*/