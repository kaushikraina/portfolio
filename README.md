This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can access this project on [stackBlitz](https://stackblitz.com/edit/portfolionew-y31hhd)

## Table of Contents

- [Pre-request](#Pre-request)
- [Dependencies](#Dependencies)
- [Folder Structure](#folder-structure)


## Pre request

Before running the project run `npm update` in terminal to update the project dependencies

To run project go into portfolio folder i.e. ` /portfolio` and run `npm start` in terminal 

## Dependencies

Below are dependencies that are addded externally to support project.
  [*reactstrap*](https://www.npmjs.com/package/reactstrap) :- To use tabs.
  [*bootstrap*](https://www.npmjs.com/package/bootstrap) :- using bootstrap support for reactstrap .
  [*animate.css*](https://daneden.github.io/animate.css/p) :- implemented as stylesheet link ,used to animated text .
  [*react-fittext*](https://www.npmjs.com/package/react-fittext) :- adjusts text size according to screen size .
  [*react star rating*](https://www.npmjs.com/package/react-star-rating-component) :- used for rating as star .

## Folder Structure

After creation, your project should look like this:

```
- components      // it describes all the components used in resume
   - summary
   - skills
   - experience
   - projects
   - schooling
   - contact
   - achievements
- container       //  wraps all the components of portfolio
- app             //  holds container 
- index           // main page
```

