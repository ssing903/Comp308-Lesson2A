var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        // constructor
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this.studentId = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentId", {
            // public properties
            get: function () {
                return this._studentID;
            },
            set: function (newStudentId) {
                this._studentID = newStudentId;
            },
            enumerable: true,
            configurable: true
        });
        //public methods
        Student.prototype.studies = function () {
            console.log("%c " + this.name + "  is studying and has a \n                        student id of " + this.studentId, "font-size:20px;color:green;");
        };
        return Student;
    }(objects.Person));
    objects.Student = Student;
})(objects || (objects = {}));
//# sourceMappingURL=student.js.map