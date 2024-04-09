document.addEventListener('DOMContentLoaded', () => {
    const thoughtContainer = document.getElementById("thoughtContainer"); // Corrected ID
    const btn = document.getElementById("btn");
  
    if (thoughtContainer && btn) {
      const url = "https://v2.jokeapi.dev/joke/Any";
  
      const getJoke = () => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // Check if the joke exists and update the thoughtContainer
            if (data.joke) {
              thoughtContainer.textContent = data.joke;
            } else {
              thoughtContainer.textContent = "Oops! No joke found.";
            }
          })
          .catch(error => {
            console.error('Error fetching joke:', error);
            thoughtContainer.textContent = "Failed to fetch joke. Please try again.";
          });
      };
  
      btn.addEventListener("click", getJoke);
  
      // Initial thought fetch when the page loads
      getJoke();
    } else {
      console.error('Thought container or button not found in the DOM');
    }
});
