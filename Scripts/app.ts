
//IIFE 
(function(){
    
    function start(){
        let student: objects.Student;
        student = new objects.Student(20, "Sukh", "1234");
        student.studies();
    }

    window.addEventListener("load",start);
})();

