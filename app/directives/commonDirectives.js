/* Directive for open close dialog */
app.directive('openCloseDialog', function(){
    return{
        restrict: 'A',
        scope: {
			     dialogFunctionalData: '=',
                 modalElement: '@'
        },
        link: function(scope, ele, attrs){
            ele.on('click', function(){
                if(scope.dialogFunctionalData === 'show'){
                    $('#'+scope.modalElement).modal();
                }else{
                    $('#'+scope.modalElement).modal('hide');
                }
            });
        }
    }
});