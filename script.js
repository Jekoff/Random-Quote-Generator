function generate() {
    var quotes = {
        "- Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "- Walt Disney": '"The way to get started is to quit talking and begin doing."',
        "- Winston Churchill": '"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."',
        "- Will Rogers": '"Don\'t let yesterday take up too much of today."',
        "- Unknown": '"You learn more from failure than from success. Don\'t let it stop you. Failure builds character."',
        "- Unknown": '"It\'s not whether you get knocked down, it\'s whether you get up."',
        "- Vince Lombardi": '"If you are working on something that you really care about, you don\'t have to be pushed. The vision pulls you."',
        "- Steve Jobs": '"People who are crazy enough to think they can change the world, are the ones who do."',
        "- Unknown": '"Failure will never overtake me if my determination to succeed is strong enough."',
        "- Og Mandino": '"The only limit to our realization of tomorrow will be our doubts of today."',
        "- Unknown": '"It does not matter how slowly you go as long as you do not stop."',
        "- Unknown": '"We may encounter many defeats but we must not be defeated."',
        "- Unknown": '"Knowing is not enough; we must apply. Wishing is not enough; we must do."',
        "- Unknown": '"Imagine your life is perfect in every respect; What would it look like?"',
        "- Unknown": '"We generate fears while we sit. We overcome them by action."',
        "- Unknown": '"Whether you think you can or think you can\'t, you\'re right."',
    }

    var authorsArray = Object.keys(quotes);
    var author = authorsArray[Math.floor(Math.random() * authorsArray.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
