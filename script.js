// var years = [1990, 1965, 1937, 2005, 1998];


// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAage(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }else{
//         return -1;
//     }



// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAage);
// var rates = arrayCalc(ages,maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);



// function interviewQuestion(job) {
//     if (job === "designer")

//     {
//         return function (name) {
//             console.log(name + ", can you please explain what UX design is ?");
//         }
//     } else if (job === "teacher") {
//         return function (name) {
//             console.log("What subject do you teach," + name + " ?");
//         }

//     } else {
//         return function (name) {
//             console.log("Hello" + name + ", what do you do?");
//         }
//     }
// }


// var teacherQuestion = interviewQuestion("teacher");

// var designerQuestion = interviewQuestion("designer");


// teacherQuestion("John");
// designerQuestion("John");
// designerQuestion("Jane");
// designerQuestion("Mark");
// teacherQuestion("John");
// teacherQuestion("John");
// teacherQuestion("John");


// interviewQuestion("teacher")("Mark");



function retirement(retirementAge) {
    var a = " year left until retirement.";
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);
