var ip = "127.0.0.1:5500/src/test";
var data;
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
}