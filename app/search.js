const search_form = document.querySelector('#search_form');
const marksSheet = document.querySelector('.marksSheet');
const alertttt = document.querySelector('.alertttt');
const loding_image = document.querySelector('.loding_image img');


search_form.onsubmit = (e) =>{
    e.preventDefault();
    const searchForm = new FormData(e.target);
    const finalData = Object.fromEntries(searchForm);
    e.target.reset();
    // validation

    if (!finalData.Students_Roll.trim() || !finalData.Students_Reg_No.trim() ) {
      alertttt.innerHTML = formValidation('All Fields Are Reqired', 'danger');
    }else{
    
      
      loding_image.style.display = ' block';
    setTimeout(() => {
      loding_image.style.display = ' none';
      const localStorageData = getDataLs('studentsData');

      const search_students = localStorageData.find((item) => item.Students_Roll === finalData.Students_Roll && item.Students_Reg_No === finalData.Students_Reg_No );
      
      let content='';
      if (search_students) {
        content = `
        <div class="row my-5 ">
                <div class="col-6">
                  <h5> Name: <span style="color: blue;">  ${search_students.Students_Name} </span></h5>
                  <h5> Roll:  <span style="color: blue;">  ${search_students.Students_Roll} </span></h5>
                  <h5>Register Number: <span style="color: blue;"> ${search_students.Students_Reg_No} </span></h5>
                  <h5> Status: ${
                    getcgpa_fiinalResult({
                      Bangla: search_students.Result.Bangla,
                      English: search_students.Result.English,
                      Math: search_students.Result.Math,
                      History: search_students.Result.History,
                      Biology: search_students.Result.Biology,
                      Pol_science: search_students.Result.Pol_science,
                    }).Result === 'F' ? '<span style="color: red;"> Failed </span>'  : '<span style="color: Green;"> Passed </span>'
                  } </h5>
                </div>
                <div class="col-6 text-end">
                  <div>
                    <img style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; " src=" ${search_students.Students_Photo} " alt="">
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-12">
                  <div>
                    <table class="table table-dark  table-striped table-bordered ">
                      <thead class="text-center">
                        <tr>
                        <th scope="row">#</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Marks</th>
                          <th scope="col">GPA</th>
                          <th scope="col">Grade</th>
                          <th scope="col">CGPA</th>
                          <th scope="col">Final Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center">
                          <th scope="row">1</th>
                          <td>Bangla</td>
                          <td>${search_students.Result.Bangla}</td>
                          <td>${getGPA_grade(search_students.Result.Bangla).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.Bangla).grade}</td>
                          <td rowspan= "6" class>${
                            getcgpa_fiinalResult({
                              Bangla: search_students.Result.Bangla,
                              English: search_students.Result.English,
                              Math: search_students.Result.Math,
                              History: search_students.Result.History,
                              Biology: search_students.Result.Biology,
                              Pol_science: search_students.Result.Pol_science,
                            }).cgpa.toFixed(2)
                          } </td>
                          <td rowspan= "6">${
                            getcgpa_fiinalResult({
                              Bangla: search_students.Result.Bangla,
                              English: search_students.Result.English,
                              Math: search_students.Result.Math,
                              History: search_students.Result.History,
                              Biology: search_students.Result.Biology,
                              Pol_science: search_students.Result.Pol_science,
                            }).Result
                          }</td>
                        </tr>
                        <tr class="text-center">
                          <th scope="row">2</th>
                          <td>English</td>
                          <td>${search_students.Result.English}</td>
                          <td>${getGPA_grade(search_students.Result.English).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.English).grade}</td>
                          
                        </tr>
                        <tr class="text-center">
                          <th scope="row">3</th>
                          <td>Math</td>
                          <td>${search_students.Result.Math}</td>
                          <td>${getGPA_grade(search_students.Result.Math).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.Math).grade}</td>
                          
                        </tr>
                        <tr class="text-center">
                          <th scope="row">4</th>
                          <td>History</td>
                          <td>${search_students.Result.History}</td>
                          <td>${getGPA_grade(search_students.Result.History).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.History).grade}</td>
                          
                         
                        </tr>
                        <tr class="text-center">
                          <th scope="row">5</th>
                          <td>Biology</td>
                          <td>${search_students.Result.Biology}</td>
                          <td>${getGPA_grade(search_students.Result.Biology).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.Biology).grade}</td>
                          
                        </tr>
                        <tr class="text-center">
                          <th scope="row">6</th>
                          <td>Pol_science</td>
                          <td>${search_students.Result.Pol_science}</td>
                          <td>${getGPA_grade(search_students.Result.Pol_science).GPA}</td>
                          <td>${getGPA_grade(search_students.Result.Pol_science).grade}</td>
                          
                        </tr>
                      
                      </tbody>
                    </table>
    
    
                  </div>
                
                </div>
                
              </div>
        `
    
    
    }else{
    
        content = `<h1 style=" color: red; text-align: center;  " class=" my-2"> Result Not Found</h1>`;
    
    }
       
        marksSheet.innerHTML = content ;
    }, 1000);
    
    };

      
    };

   





setInterval(() => {
  
}, 1000);

















// const getcpa_finalResult = ( marks) =>{
//   let cgpa = '';
//   let FinalResult = '';


//     // const totalGPA =
    
//     // getGPA_grade(marks.Bangla).GPA +
//     // getGPA_grade(marks.English).GPA + 
//     // getGPA_grade(marks.Math).GPA + 
//     // getGPA_grade(marks.History).GPA + 
//     // getGPA_grade(marks.Biology).GPA + 
//     // getGPA_grade(marks.Pol_science).GPA;
    

//     // cgpa = totalGPA / 6;

//   if (marks.Bangla >= 33 && marks.English >= 33 && marks.Math >= 33 && marks.History >= 33 && marks.Biology >= 33 && marks.Pol_science >= 33  ) {

//     FinalResult = "very good";

// //     if (cgpa > 1 && cgpa <2 ) {
// //       FinalResult = 'D'
// //     }else if(cgpa >= 2 && cgpa <3){
// //       FinalResult = 'D'

// //     }else if(cgpa >= 3 && cgpa <4){
// //       FinalResult = 'C'

// //     }else if(cgpa >= 4 && cgpa <5){
// //       FinalResult = 'B'

// //     }else if(cgpa > 5 && cgpa <=5){
// //       FinalResult = 'A+'

// //     }
// // return {
// //   cgpa:cgpa,
// //       FinalResult: FinalResult,
// // }
    
//   }else{
//     return{
//       cgpa:0,
//       FinalResult: "F",
//     }
//   }



// }