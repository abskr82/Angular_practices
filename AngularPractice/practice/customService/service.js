myApp.factory('squareService', function(){
    return {
        squareNumber: function(input){
            if(!input){
                return input;
            }
            return input*input;
        }
    }
})
