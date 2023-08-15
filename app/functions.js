// send data to Ls functions

const sendDataLS = (key, data) =>{
    localStorage.setItem(key,JSON.stringify(data));

}


// get data to Ls functions

const getDataLs = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }else{
        return [];
    }

};

// form validations alert

const formValidation = (message, type) =>{
    return `
    <p class="alert alert-${type} d-flex justify-content-between">${message}<button class="btn-close" data-bs-dismiss="alert"></button></p>
    `

};

// time functionss

function getFacebookPostTime(postDate) {
    const currentDate = new Date();
    const postDateTime = new Date(postDate);
    const timeDiffInSeconds = Math.floor((currentDate - postDateTime) / 1000);
  
    if (timeDiffInSeconds < 60) {
      return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 604800) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
      // If more than a week, display the full date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return postDateTime.toLocaleDateString(undefined, options);
    }
  }
  
  // Example usage:
  const postDate = "2023-08-02T15:30:00"; // Replace this with your post date
  const fbPostTime = getFacebookPostTime(postDate);
//   console.log(fbPostTime);
  

// radom id generotor functions

function generateRandomID() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const idLength = 26;
  let randomID = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomID += chars.charAt(randomIndex);
  }

  return randomID;
};
// get gpa and grade

const getGPA_grade = (marks) => {

  let GPA = '';
  let grade= '';

  if (marks > 0 && marks < 33 ) {
    GPA = 0;
    grade = 'D';
    
  }else if (marks > 33 && marks < 40){
    GPA = 1;
    grade = 'C';

  }else if (marks > 40 && marks < 50){
    GPA = 2;
    grade = 'C+';

  }else if (marks > 50 && marks < 70){
    GPA = 3;
    grade = 'B';

  }else if (marks > 70 && marks < 90){
    GPA = 4;
    grade = 'A';

  }else if (marks > 90 && marks <= 100){
    GPA = 5;
    grade = 'A+';

  }else{
   '<h1> invalid number </h1>'
  }

  return {
    GPA: GPA,
    grade:grade,
  }

};

// get cgpa

const getcgpa_fiinalResult = (marks) =>{

  let cgpa ='';
  let Result ='';

  let totalGPA = 
  getGPA_grade(marks.Bangla).GPA +
  getGPA_grade(marks.English).GPA +
  getGPA_grade(marks.Math).GPA +
  getGPA_grade(marks.History).GPA +
  getGPA_grade(marks.Biology).GPA +
  getGPA_grade(marks.Pol_science).GPA;

  cgpa = totalGPA / 6;


  if (marks.Bangla >=33 && marks.English >=33 && marks.Math >=33 && marks.Biology >=33 && marks.Pol_science >=33 && marks.History >=33  ) {

    if (cgpa > 1 && cgpa < 2 ) {
      Result = 'D';
    } else if (cgpa >= 2 && cgpa < 3) {
      Result = 'C';

    }else if (cgpa >= 3 && cgpa < 3.5) {
      Result = 'B';

    }else if (cgpa >= 3.5 && cgpa < 4) {
      Result = 'A';

    }else if (cgpa >= 4 && cgpa < 5) {
      Result = 'A+';

    }else if (cgpa >= 5) {
      Result = 'AA+';

    }
    return{
      cgpa: cgpa,
      Result: Result,
        }

    
  }else{
    return{
      cgpa: cgpa,
      Result: 'F',
        }
  }

}
