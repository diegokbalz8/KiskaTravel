const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);  // Log the entire fetched data
            const condition = data.countries.find(item => item.name.toLowerCase() === input);
            console.log('Condition found:', condition);  // Log the found condition

            if (condition) {                
                condition.cities.forEach(city => {
                    const cityName = city.name;
                    const cityImage = city.imageUrl;
                    const cityDescription = city.description;

                    // Append the city details and image to the resultDiv
                    resultDiv.innerHTML += `<h3>${cityName}</h3>`;
                    resultDiv.innerHTML += `<img src="${cityImage}" alt="${cityName}">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${cityDescription}</p>`;
                });                
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        }).catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

  btnSearch.addEventListener('click', searchCondition);
