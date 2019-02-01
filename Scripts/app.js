// self executing anonymous function
// IIFE

(function(){
    let myFunctionalVariable = 0;

    /*let start = function(){
        let localVariable = 0;
        console.log(`App started... ${myFunctionalVariable}` );
    }*/


    window.addEventListener("load",() => {
        let localVariable = 0;
        console.log(`%c App started... ${myFunctionalVariable}`,
                    "font-size:20px;color:blue;" );
    });
})();