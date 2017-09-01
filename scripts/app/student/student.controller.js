angular.module('DirectoryApp').controller('studentController', function($scope, localStorageService){
    
    $scope.students = localStorageService.get('students');

    $scope.IsMale = false;
    $scope.IsFemale = false;
    $scope.students = localStorageService.get('students');

    $scope.radioClickMale = function()
    {
        $scope.IsMale = true;
        $scope.IsFemale = false;
    }

    $scope.radioClickFemale = function()
    {
        $scope.IsMale = false;
        $scope.IsFemale = true;
    }

    $scope.submitStudentOnClick = function()
    {    
        if($scope.firstName.length > 0 && $scope.lastName.length > 0)
        {
            if($scope.IsMale)
            {
                var student = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    sex: "musko",
                    entryDate: new Date(Math.random() * (new Date()))
                }
                $scope.students.push(student);
                localStorageService.set('students', $scope.students);
            }
            else if($scope.IsFemale)
            {
                var student = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    sex: "zensko",
                    entryDate: new Date(Math.random() * (new Date()))
                }
                $scope.students.push(student);
                localStorageService.set('students', $scope.students);
            }
        }
    }    
})
