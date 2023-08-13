const search_form = document.querySelector('#search_form');
const marksSheet = document.querySelector('.marksSheet');
const alertttt = document.querySelector('.alertttt');

search_form.onsubmit = (e) =>{
    e.preventDefault();
    const searchForm = new FormData(e.target);
    const finalData = Object.fromEntries(searchForm);
    e.target.reset();
    // validation

    if (!finalData.Students_Roll.trim() || !finalData.Students_Reg_No.trim() ) {
      alertttt.innerHTML = formValidation('All Fields Are Reqired', 'danger');
    }else{

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
                    <h5> Status: <span style="color: blue;" > null </span> </h5>
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
                      <table class="table table-dark table-striped">
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
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr class="text-center">
                            <th scope="row">2</th>
                            <td>English</td>
                            <td>${search_students.Result.English}</td>
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr class="text-center">
                            <th scope="row">3</th>
                            <td>Math</td>
                            <td>${search_students.Result.Math}</td>
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr class="text-center">
                            <th scope="row">4</th>
                            <td>History</td>
                            <td>${search_students.Result.History}</td>
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr class="text-center">
                            <th scope="row">5</th>
                            <td>Biology</td>
                            <td>${search_students.Result.Biology}</td>
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr class="text-center">
                            <th scope="row">6</th>
                            <td>Pol_science</td>
                            <td>${search_students.Result.Pol_science}</td>
                            <td>5</td>
                            <td>a</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                        
                        </tbody>
                      </table>
      
      
                    </div>
                  
                  </div>
                  
                </div>
          `
      
      
      }else{
      
          content = '<h1 style=" color: red;"> Result Not Found</h1>';
      
      }
         
          marksSheet.innerHTML = content ;
      
      };
      
    };

   

// get gpa and grade
