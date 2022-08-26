$.ajax({
    method: "get",
    url: "https://api.covid19api.com/summary",
    success: function(response){

        for(var i =0; i<response.Countries.length ; i++){
            var tableRow = `<tr> 
                <td>${response.Countries[i].Country}</td> 
                <td>${response.Countries[i].TotalConfirmed}</td> 
                <td>${response.Countries[i].NewConfirmed}</td> 
                <td>${response.Countries[i].TotalConfirmed - response.Countries[i].NewConfirmed}</td> 
                <td>${response.Countries[i].TotalDeaths}</td>
            </tr>`

            $("#tbody").append(tableRow);
        }

        $("#covidTable").DataTable();

    },
    error: function(error){
        console.log(error);
    }
})
