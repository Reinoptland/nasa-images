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
  - useEffect -> needs a callback & empty dependency array
  - declare an async function
  - call the async function
  - await axios.get(url)
  - check the response
  - setState -> with the response
- Display images:
  - change what you return
  - map over the data -> create an img and pass it the url
