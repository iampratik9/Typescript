$(document).ready(function() {
    $("#loadDataBtn").click(function() {
        // Replace 'YOUR_API_KEY' with your actual API key
        var apiKey = '659169c7691bc1a15f9afd6b63b52d00';
        var city = 'Navi Mumbai'; // Change this to the city you want to get weather data for
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function(data) {
                // Handle successful response
                displayWeather(data);
            },
            error: function(xhr, status, error) {
                // Handle errors
                console.error("Error:", error);
            }
        });
    });
});

function displayWeather(data) {
    // Clear previous data
    $("#dataContainer").empty();
    
    // Display fetched weather data
    $("#dataContainer").append("<p>City: " + data.name + "</p>");
    $("#dataContainer").append("<p>Temperature: " + data.main.temp + "°C</p>");
    $("#dataContainer").append("<p>Weather: " + data.weather[0].main + "</p>");
}
