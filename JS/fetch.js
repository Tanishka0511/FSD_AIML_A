// https://api.github.com/users/Tanishka0511

// fetch api
// fetch return promise
fetch('https://api.github.com/users/Tanishka0511')
  .then(response => {
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error is:', error);
  });