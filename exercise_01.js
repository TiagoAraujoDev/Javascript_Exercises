let studentGrade = 98

let higherThan90 = studentGrade >= 90 && studentGrade <= 100
let between80_89 = studentGrade >= 80 && studentGrade <= 89
let between70_79 = studentGrade >= 70 && studentGrade <= 79
let between60_69 = studentGrade >= 60 && studentGrade <= 69
let bellow60 = studentGrade < 60 && studentGrade >= 0
function transformGrade() {
  if (higherThan90) {
    console.log('A')
  } else if (between80_89) {
    console.log('B')
  } else if (between70_79) {
    console.log('C')
  } else if (between60_69) {
    console.log('D')
  } else if (bellow60) {
    console.log('F')
  } else {
    console.log('Invalid grade!')
  }
}

transformGrade()


