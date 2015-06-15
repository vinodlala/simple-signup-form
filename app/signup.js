angular.module('signupApp', [])

    .controller('signupCtrl', function () {
        console.log("in signupCtrl");
    })

    .directive('myHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/header.html'
        };
    })

    .directive('myForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/form.html'
        };
    })

    .directive('myFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html'
        };
    })

    .directive('optIn', function () {
        //console.log('in optIn directive');
        return {
            restrict: 'E',

            //template: "optIn template"

            transclude: true,
            //template: "<div><span ng-transclude></span></div>",
            template: "<div><span ng-transclude></span><signup-form></signup-form></div>",
            //template: "<div class='container'><ng-transclude></ng-transclude><signup-form></signup-form></div>",
            //template: "<div class='container'><ng-transclude></ng-transclude><ng-transclude></ng-transclude><signup-form></signup-form></div>",
            //replace: true
        };
    })

    .directive('signupForm', function () {
        return {
            restrict: "E",

            //template: "signupForm template"
            //template: "signupForm template<form>inside the form tag</form>"
            //template: "signupForm template<form><first-name></first-name>inside the form tag</form>"
            template: "<div><form><first-name></first-name><last-name></last-name><email></email><submit-button></submit-button></form></div>"

            //transclude: true,
            //require: "^optIn",
            //template: "signupForm template<form>form</form>",
            //template: "signupForm template<form><first-name></first-name></form>",
            //template: "signupForm template<form><first-name></first-name><last-name></last-name><email></email><submit-button></submit-button></form>",
            //replace: true
        }
    })

    .directive('firstName', function () {
        return {
            restrict: "E",
            //transclude: true,
            //require: "^signUpForm",
            template: "<input name='first-name' type='text' placeholder='First Name' required />",
            //replace: true
        }
    })
    .directive('lastName', function () {
        return {
            restrict: "E",
            //transclude: true,
            //require: "^signUpForm",
            template: "<input name='last-name' type='text' placeholder='Last Name' required />",
            //replace: true
        }
    })
    .directive('email', function () {
        return {
            restrict: "E",
            //transclude: true,
            //require: "^signUpForm",
            template: "<input name='email' type='text' placeholder='Email' required />",
            //replace: true
        }
    })
    .directive('submitButton', function () {
        return {
            restrict: "E",
            //transclude: true,
            //require: "^signUpForm",
            template: "<button id='submit' type='submit'>Giv Me Yr Infoz</button>",
            //replace: true
        }
    });
