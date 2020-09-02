## Make a simple React app that:

- fetches 5 images from the nasa api:
  https://apodapi.herokuapp.com/api/?count=5
- displays those images

## What steps do we need

- X Create React App
- install axios (npm install axios)
- Create a component (Images)
  - import React
  - export your component
  - declare function
  - return JSX
- Add our component to App
- Test if your component works (so far)
- Import useState & useEffect
- create a state with useEffect (setter / getter)
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
