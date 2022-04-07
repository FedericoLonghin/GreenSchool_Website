for (let i = 0; i < cardNumber; i++) {
    var cardid = "card-" + i + "-title";
    console.log(cardid)
    document.getElementById(cardid).innerHTML = cardTitles[i];
}