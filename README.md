# AngularJS SweetAlerts
**ngSweetAlert** is an Angular wrapper that allows you to access and use [SweetAlert](https://github.com/t4t5/sweetalert) alerts from within Angular.

### Prerequisites
--
You must have Angular and SweetAlerts included in your project
```json
"dependencies": {
    "angular": "^1.4.0",
    "sweetalert": "^1.1.3"
}
```

### Installation
--
**ngSweetAlert** is available from **npm**:
```
npm install --save ngSweetAlert
```
Include the **ngSweetAlert** module into your application as a dependency.
```javascript
// Module
angular.module('app.core', ['ngSweetAlert']);

// Controller
angular.controller('DemoCtrl', ['SweetAlert', function(SweetAlert) {
    ...
}]);
```
And now you are ready to use SweetAlerts.

### Methods
--
##### `SweetAlert.show({Object})`
Using the `.show()` method allows you to pass configuration options to SweetAlert.
###### Example
```javascript
angular.controller('DemoCtrl', ['SweetAlert', function(SweetAlert) {
    SweeAlert.show({
        title: 'Just a demo',
        text: 'Showing off the alert',
        type: 'info',
        ...
    });
}]);
```
This method also returns a promise that can be used to determine how the user interacted with the popup.
###### Example
```javascript
angular.controller('DemoCtrl', ['SweetAlert', function(SweetAlert) {
    SweeAlert.show({
        title: 'Confirm?',
        text: 'Are you sure',
        type: 'info',
        showCancelButton: true
    }).then(function (response) {
        if (response) {
            // Clicked 'OK'
        } else {
            // Clicked 'Cancel'
        }
    });
}]);
```

##### `SweetAlert.prompt(title, message)`
This method is a shorthand method for prompting the user for input. The `.prompt()` method returns a promise,
###### Example
```javascript
angular.controller('DemoCtrl', ['SweetAlert', function(SweetAlert) {
    SweeAlert
        .prompt('Confirm', 'Are you sure?')
        .then(function (response) {
            // Process response
        });
}]);
```

##### `SweetAlert.input(title, message)`
This method allows the user to enter in a value using SweetAlert.
###### Example
```javascript
angular.controller('DemoCtrl', ['SweetAlert', function(SweetAlert) {
    SweeAlert
        .input('Your name', 'What is it?')
        .then(function (response) {
            // Process response
        });
}]);
```

#### Shorthand Methods
The following methods are shorthand for their respective type.

**Success:** `SweetAlert.success(title, message)`

**Error:** `SweetAlert.error(title, message)`

**Warning:** `SweetAlert.warning(title, message)`

**Info:** `SweetAlert.info(title, message)`

### Licence
--

The MIT License (MIT)

Copyright (c) 2016 Alex Grech (https://github.com/SaoBiz)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
