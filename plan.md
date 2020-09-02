## Make a simple React app that:

- fetches 5 images from the nasa api:
  https://apodapi.herokuapp.com/api/?count=5
- displays those images

## What steps do we need

- X Create React App
- X install axios (npm install axios)
- X Create a component (Images)
  - import React
  - export your component
  - declare function
  - return JSX
- X Add our component to App
- X Test if your component works (so far)
- X Import useState & useEffect
- X create a state with useEffect (setter / getter)
- fetch data from api
  - X useEffect -> needs a callback & empty dependency array
  - X declare an async function
  - X call the async function
  - X await axios.get(url)
  - X check the response
  - X setState -> with the response
- Display images:
  - X change what you return
  - X map over the data -> create an img and pass it the url

Show simone what you get back from useState
Implicit return with arrow functions
