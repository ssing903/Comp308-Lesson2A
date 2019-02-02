module objects {
    export class Student extends Person { 
    //private instance variable
    private _studentID: string;
    // public properties
    get studentId(): string{ 
        return this._studentID;
    }
    set studentId(newStudentId:string) { 
        this._studentID = newStudentId;
    }
    // constructor
    constructor(age:number,name:string,studentID:string) { 
        super(age, name);
        this.studentId = studentID;
    }
    //public methods
    public studies():void { 
        console.log(`%c ${this.name}  is studying and has a 
                        student id of ${this.studentId}`,
        "font-size:20px;color:green;");
    }
 }
}