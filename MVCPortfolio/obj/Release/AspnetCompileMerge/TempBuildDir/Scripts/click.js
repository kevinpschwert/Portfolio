$(document).ready(function () {
    $("#clickit").click(function () {
        $("#quote-content").html("");
        $("#quote-source").html("");
        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

        $.getJSON(url, function (data) {
            $("#quote-content").append(data.quoteText);
            if (data.quoteAuthor.length == 0)
            {
                $("#quote-source").append("- Anonymous");
            }
            else
            {
                $("#quote-source").append("- " + data.quoteAuthor);
            }
            
        });
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
           
        });
    }
    // Weather App
    var otherapi = "http://ip-api.com/json";
    $.getJSON(otherapi, function (info) {
        var city = info.city;
        var state = info.region;
        $("#region").append(city + ", " + state);
    });

    navigator.geolocation.getCurrentPosition(function (position) {
        var weatherurl = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&APPID=8b205bddee4395bd67c0d87ac78e827c";

        $.getJSON(weatherurl, function (moredata) {
            var temp = Math.round(moredata.main.temp);
            var fahr = temp * (9 / 5) + 32;
            var icon = "http://openweathermap.org/img/w/" + moredata.weather[0].icon + ".png";            
            $("#temp").append("Temperature: " + fahr + "&deg;F");
            $("#C").click(function () {
                $("#temp").html('');
                $("#temp").append("Temperature: " + temp + "&deg;C");
            });
            $("#F").click(function () {
                $("#temp").html('');
                $("#temp").append("Temperature: " + fahr + "&deg;F");
            });
            $("#humidity").append("Humidity: " + moredata.main.humidity + "%");
            var upper = moredata.weather[0].description;
            var upperDesc = upper.toLowerCase().split(' ');
            for (var i = 0; i < upperDesc.length; i++) {
                var letters = upperDesc[i].split('');
                letters[0] = letters[0].toUpperCase();
                upperDesc[i] = letters.join('');
            }
            var final = upperDesc.join(' ');
            $("#description").append(final);
            $("#wind").append("Wind Speed: " + moredata.wind.speed + " MPH");
            $("#icon").append('<img src="' + icon + '"/>');
        });
    });
   

    $("#pushme").click(function () {        
            $('#shownumbers').toggle('slow', function () {
            });
            $("#shownumbers").css({ 'display': "inline-block" });
            $("#guessme").css({ 'display': "inline-block" });
            $("#guess").css({ 'display': "inline-block" });
            $("#pushme").css({ 'display': "none" });
        
        function over() {
            $("#guess").val('');
            num = Math.round(Math.random() * 100);
            click = 1;
            for (var i = 1; i < 101; i++) {
                $("#num-" + i).show();
            }
        }        
        alert("Ready to start a new game!");       
        var num = Math.round(Math.random() * 100);
        $("#guess").val("");
        var click = 1;
        $("#guessme").click(function () {
            var guessnum = $("#guess").val();
            
            if (guessnum < 1 || guessnum > 100) {
                alert("You must pick a number between 1 and a 100! You're penalty is this click counts as 2");
                click += 2;
                $("#guess").val('');
            }
            else if (guessnum < num) {
                alert("You're too low!");
                $("#num-" + guessnum).hide();
                click++;
                $("#guess").val('');
            }
            else if (guessnum > num) {
                alert("You're too high!!");
                $("#num-" + guessnum).hide();
                click++;
                $("#guess").val('');
            }
            else {
                if (click === 1) {
                    alert("What!? You are amazing! You did it in one try!");
                    over();

                }
                else if (click > 1 && click < 9) {
                    alert("Yippee! It took you " + click + " tries to guess the number");
                    over();
                }
                else {
                    alert("Took you long enough! It took you " + click + " tries to guess the number");
                    over();
                }
            }          
        });
    });

    $("#wikibtn").click(function () {
        $("#showwiki").html('');
        var thing = $("#wiki").val();
        var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + thing + "&srprop=snippet&srlimit=10&format=json&callback=?";
        
        $.getJSON(url, function (data) {
            for (var i = 0; i < 11; i++) { 
                $("#showwiki").append('<a href="https://en.wikipedia.org/wiki/' + data.query.search[i].title + '">' + data.query.search[i].title + '</a> <p>' + data.query.search[i].snippet + '</p> <br /> <br />');
            }
            });        
    });
   

});

