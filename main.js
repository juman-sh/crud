var courseName = document.querySelector("#courseName");
var courseCategory = document.querySelector("#courseCategory");
var coursePrice = document.querySelector("#coursePrice");
var courseDescription = document.querySelector("#courseDescription");
var courseCapacity = document.querySelector("#courseCapacity");
var addbtn = document.querySelector("#click");
var inputs = document.querySelectorAll(".inputs");
var courses = [];
addbtn.addEventListener("click", function(e){

    e.preventDefault();
    addcourse();
    clearCourse();
    displayResult();
})

function addcourse(){
    var course ={
        name: courseName.value,
        category: courseCategory.value,
        price: coursePrice.value,
        desp: courseDescription.value,
        capacity: courseCapacity.value,
    }
    courses.push(course);
    console.log(courses);
}

function clearCourse(){

    for(var i=0; i<inputs.length; i++){
        inputs[i].value ="";
    }
}

function displayResult(){
    var result =``;
    for(var i=0; i<courses.length; i++){
        result = result +`
        <tr>
          <td>${i+1}</td>
          <td>${courses[i].name}</td>
          <td>${courses[i].category}</td>
          <td>${courses[i].price}</td>
          <td>${courses[i].desp}</td>
          <td>${courses[i].capacity}</td>
          <td><button class="btn btn-outline-info">update</button></td>
          <td><button class="btn btn-outline-danger" onclick="deleteCourse(${i})">delete</button></td>

        </tr>
        `;

        document.getElementById("data").innerHTML =result;
    }
}

function deleteCourse(id){
    courses.splice(id, 1);
    displayResult();
}