const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


function searchCondition() {
    console.log('Clear button clicked');
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);  // Log the entire fetched data 

            if(input.includes('beach')) {
                data.beaches.forEach(beach => {
                    const beachName = beach.name;
                    const beachImage = beach.imageUrl;
                    const beachDescription = beach.description;

                    resultDiv.innerHTML += `<h3>${beachName}</h3>`;
                    resultDiv.innerHTML += `<img src="${beachImage}" alt="${beachName}">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${beachDescription}</p>`;
               
                })
            } else if (input.includes('temple')){
                data.temples.forEach(temple => {
                    const templeName = temple.name;
                    const templeImage = temple.imageUrl;
                    const templeDescription = temple.description;

                    resultDiv.innerHTML += `<h3>${templeName}</h3>`;
                    resultDiv.innerHTML += `<img src="${templeImage}" alt="${templeName}">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${templeDescription}</p>`;
             
                })
            } else {            
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
            }
        }).catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function clearResults() {
    console.log('Clear button clicked');  // This should log when the button is clicked
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearResults);
