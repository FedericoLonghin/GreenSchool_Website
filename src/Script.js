var data;


function IPAlert() {

    ip = prompt("Please enter your device's IP:", "");
    if (ip != null && ip != "") {
        ip = "http://" + ip;
    } else {

        ip = "src/test"; //for test purpose
    }
}



function scarica() {
    var url = ip + "/CO2_current";
    $.ajax({
        url: url,
        success: function(result) {
            document.getElementById('tutto').innerHTML = result;
            setTimeout(scarica, 400)
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