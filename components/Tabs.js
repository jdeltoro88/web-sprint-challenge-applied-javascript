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







   axios.get("https://lambda-times-backend.herokuapp.com/topics")
   
   .then((successResponse) => {
       console.log(successResponse);
       return successResponse;
   })
   .catch((errorResponse) => {
       console.log(errorResponse);
   })
  .then((successResponse) => {
      newTab(successResponse);
  })

const newTab = (obj) => {
       const topicDiv = document.querySelector(".topics");
       
           obj.data.topics.forEach(data => {
               const newTopic = document.createElement("div");

               //content
               newTopic.textContent = data;

               //classes
               newTopic.classList.add("tab");
               console.log(newTopic);

               //HTML 
               topicDiv.appendChild(newTopic);
           })
       
    }
