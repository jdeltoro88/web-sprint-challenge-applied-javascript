// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const data = axios.get ('https://lambda-times-backend.heroyuapp.com/topics');

const newTab = (input) => {
    const tab = document.createElement('div');

    //classes

    tab.classList.add('tab');

    //content
    tab.textContent = input;


    return tab;
}

data.then (response => {
    console.log(data);
    console.log('res', response);

    response.data.topics.array.forEach(item => {
        const newTopic = newTab(item);
        topics.appendChild(newTopic);

        
    });
})


data.catch(error => {
    console.log('error: ', error);

})

const topics = document.querySelector ('.topics');