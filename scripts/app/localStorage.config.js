angular.module('DirectoryApp').run(function(localStorageService){
    if(!localStorageService.get('students'))
        localStorageService.set('students', [
            {
                firstName : 'Jozo', 
                lastName : 'Jozic', 
                sex : "musko", 
                entryDate: new Date(Math.random() * (new Date()))
            },
            {
                firstName : 'Mate', 
                lastName : 'Matic', 
                sex : "musko", 
                entryDate: new Date(Math.random() * (new Date()))}]
            );
})