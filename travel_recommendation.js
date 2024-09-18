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
                const name = condition.name;
                const cities = condition.cities.join(', ');
                const treatment = condition.treatment;
    
                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${name}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${cities}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        }).catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

  btnSearch.addEventListener('click', searchCondition);
