function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
;
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
;
var major1 = { credits: 3 };
var major2 = { credits: 4 };
var minor1 = { credits: 2 };
var minor2 = { credits: 1 };
console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
