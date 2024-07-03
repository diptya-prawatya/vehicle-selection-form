# vehicle-selection-form

## Run the project

1. nvm use (to set node version)
2. npm run install-all
3. npm start

### The Task

Your task is to create a form which can be used to select a
vehicle and upload a logbook.

For the purpose of this exercise, consider a vehicle to be
composed of three pieces of information- Make, Model and
Badge. The user must first select a Make (e.g. Ford, Tesla or
BMW), and they will then be presented with a list of Models
to choose from (e.g. if they selected Tesla, they are offered
Model 3, Model S and Model X).

After selecting the Model, a third dropdown will allow the
user to select the Badge. If they selected the Tesla Model 3
at this stage, they would be offered the choice of Standard,
Performance and Long Range badge. Once the user has
selected a badge, they should be given the option to
upload their service logbook as a plain text file.

The form should POST to a Node.JS based server (use
Express.js or Koa for this), and the response should include
the vehicle selection (make, model and badge), as well as
the contents of the log book file that the user uploaded.
On the vehicle selection form, there should also be at least
two buttons which can be used to quickly select common
vehicles without filling out the Make, Model and Badge
separately. Clicking one of these buttons should pre-fill the
drop-downs.

If the user changes their Make or Model selection whilst
having values set for the Model or Badge respectively, these
should be cleared and the correct option list for the given
Make or Model should be pre-filled into the corresponding
dropdown.

### Vehicle Data

```js
const MODELS = {
    'ford': {
        'Ranger': ['Raptor', 'Raptor x', 'wildtrak'],
        'Falcon': ['XR6', 'XR6 Turbo', 'XR8'],
        'Falcon Ute': ['XR6', 'XR6 Turbo'],
    },
    'bmw': {
        '130d': ['xDrive 26d', 'xDrive 30d'],
        '240i': ['xDrive 30d', 'xDrive 50d'],
        '320e': ['xDrive 75d', 'xDrive 80d', 'xDrive 85d'],
    },
    'tesla': {
        'Model 3': ['Performance', 'Long Range', 'Dual Motor'],
    },
 }
 ```
