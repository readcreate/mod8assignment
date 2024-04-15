// Anshul Kumar - Module 8 assignment - Comp 690 Spring 2024, SDCCE

let empArray
let tbody0

// CREATE AN ARRAY OF EMPLOYEES
initialEmployees = [
    ["00000001", "Abba Andrews","1234","abba@gmail.com","Administrative"],
    ["00000002", "Bo Peep","5678","bo@coolpeeps.com","Engineering"],
    ["00000003", "Char Chabam","9012","char@lee.com","Executive"],
    ["00000004", "Deela DeWitt","3456","d.dewitt@yahoo.com","Marketing"],
    ["00000005", "Eena Ekonkwo","7890","ekonk@mghihp.edu","Administrative"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
// if does, set empArray = localstorage array
// if doesn't, set empArray = initialEmployees
if (localStorage.employees) {
    empArray = JSON.parse(localStorage.getItem('employees'))
} else {
    empArray = initialEmployees
}



// GET DOM ELEMENTS
let form = document.getElementById("addForm")
let empTable = document.getElementById("empTable")
// let tbodiesArray = empTable.getElementsByTagName('tbody')
// let firstTbody = tbodiesArray[0]



// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName,empExt,empEmail,empDept]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    let btnID = document.getElementById('id')
    btnID.focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CHECK IF THE REMOVE BUTTON WAS CLICKED
    if (e.target.innerHTML==="Remove") {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to remove this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            removeRowIndex = e.target.parentNode.parentNode.rowIndex-1
            
            // REMOVE EMPLOYEE FROM ARRAY
            // empArray - remove removeRowIndex - 1 element in empArray
            empArray.splice(removeRowIndex,1)
            
            // BUILD THE GRID
            buildGrid()

        }
    }



         

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    do { // in case we end up with multiple tbody sections, this loop will remove them all
        empTable.removeChild(empTable.getElementsByTagName('tbody')[0])
    } while (empTable.getElementsByTagName('tbody').length > 0);


    

    // REBUILD THE TBODY FROM SCRATCH
    // myTBody = empTable.createTBody()
    myTBody = document.createElement('tbody')
    // empTable.innerHTML += "<tbody></tbody>" // another option

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let i of empArray) {
        let currentRow = document.createElement("TR")
        currentRow.innerHTML += `<tr>
        <td>${i[0]}</td>
        <td>${i[1]}</td>
        <td>${i[2]}</td>
        <td>${i[3]}</td>
        <td>${i[4]}</td>
        <td><button>Remove</button></td>
        </tr>`

        // console.log(i)
        // console.log(currentRow)

        myTBody.appendChild(currentRow)
    }


    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(myTBody)

    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').innerText = `(${empArray.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(empArray))

};

/////////////////////////////////////////////////////
//////////////// notes and reference ////////////////
/////////////////////////////////////////////////////

// empTable.innerHTML += "<tbody><tr><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td></tr></tbody>"

// empTable.getElementsByTagName('tbody')[0].innerHTML += `<tr><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td></tr>`

// // a = empTable.createTBody()
// a = document.createElement('tbody')
// let x = document.createElement("TR");
// x.innerHTML = '<td>a</td><td>b</td><td>c</td><td>d</td><td>e</td'
// a.appendChild(x)
// empTable.appendChild(a)


// CHECK NUMBER OF TBODIES WITHIN empTable
// const checkTbodies = (anyTable) => {
//     if (empTable.getElementsByTagName('tbody').length > 1) {
//         alert(`There are ${empTable.getElementsByTagName('tbody').length} tbody tags within empTable, which could be a problem.`)
//     }
//     return
// }

// <td style="color:red; text-decoration: underline; cursor: pointer">Remove</td>

// console.log(e.target)
// a = e.target
// a.parentNode
// a.parentNode.parentNode