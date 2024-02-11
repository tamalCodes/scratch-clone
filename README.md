# Project

- This is basically a clone of the scratch site by MIT it is a site where you can create your own custom games and animations.

# How it works ?

- A lot of components as seen are first of all rendered in the sidebar based on different key value pairs.
- There is a function called `fetchComponents` in place that is responsible for taking in a particular key and returning a component along with some default values which are then rendered in the sidebar
- The sidebar is basically made up of **different dragable components** and I am freely able to drag any of these components into another dragable area which is the mid area.

<br/>
<br/>

- The mid area is basically a dragable place where different contents can be placed in from the sidebar it also maintains a redux state.
- The state is updated based on if I am dragging the content out of the middle area or if I am re-sorting the content that is already present in the middle area.
-  I am basically storing all the keys of the elements that are present in the middle area which will be used later on
- Now if I click on anyone particular button that I present in any of these components it then goes ahead and triggers a function based on their types which is basically a switch case statement that is responsible for triggering different functions based on the type of the component with different values

<br/>
<br/>

- There is also a run all button that is responsible for running all the functions that are necessarily present inside of the middle area this is done with the help of a function that basically takes an array of different keys and performs one action after the another
- All the functions are then performed after a certain delay and along with that a history is also maintained which is basically
- A history is basically a redux state that is responsible for storing all the values that are present in the middle area and then it is used to render the history component which is basically a component that is responsible for rendering all the values that are present in the history state
- There is also a mapping that is done based on the key of the element that has been pushed into the Redux State along with some default values and then it is used to render the history elements.

# How to run the project ?

- Clone the project
- Run `npm install`
- Run `npm start`
- Go to `localhost:8080`
- Enjoy

# Tech stack used

- React
- Redux
- React DnD (outdated but still used for the purpose of this project)
- React Redux
- React Redux Toolkit
- Tailwind CSS