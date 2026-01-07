// VARIABLES
function showVariables() {
    let name = "Hifza";
    const age = 22;
    document.getElementById("output").innerText = "Name: " + name + ", Age: " + age;
}

// DATA TYPES
function showDataTypes() {
    let a = 10;
    let b = "Hello";
    let c = true;
    document.getElementById("output").innerText = typeof a + ", " + typeof b + ", " + typeof c;
}

// FUNCTION
function showFunction() {
    function greet() {
        return "Hello from Function";
    }
    document.getElementById("output").innerText = greet();
}

// CONDITIONS
function checkAge() {
    let age = 18;
    if (age >= 18) {
        document.getElementById("output").innerText = "You are adult";
    } else {
        document.getElementById("output").innerText = "You are minor";
    }
}

// LOOP
function runLoop() {
    let text = "";
    for (let i = 1; i <= 5; i++) {
        text += i + " ";
    }
    document.getElementById("output").innerText = text;
}

// ARRAY
function showArray() {
    let languages = ["HTML", "CSS", "JS"];
    document.getElementById("output").innerText = languages.join(", ");
}

// OBJECT
function showObject() {
    let user = {
        name: "Hifza",
        role: "Developer"
    };
    document.getElementById("output").innerText = user.name + " - " + user.role;
}

// EVENT
document.getElementById("eventBtn").addEventListener("click", function () {
    document.getElementById("output").innerText = "Button Clicked!";
});

// DOM
function changeText() {
    document.getElementById("output").innerText = "Text Changed using DOM";
}

// CSS via JS
function changeStyle() {
    let box = document.getElementById("output");
    box.style.background = "#dff9fb";
    box.style.color = "#130f40";
}

// FORM
function getName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = "Hello " + name;
}

// ALERT
function showAlert() {
    alert("This is an alert");
}

// PROMPT
function showPrompt() {
    let name = prompt("Enter your name");
    document.getElementById("output").innerText = "Hello " + name;
}

// CONFIRM
function showConfirm() {
    let result = confirm("Are you sure?");
    document.getElementById("output").innerText = result ? "Confirmed" : "Cancelled";
}

// TIMEOUT
function runTimeout() {
    setTimeout(function () {
        document.getElementById("output").innerText = "Executed after 2 seconds";
    }, 2000);
}

// INTERVAL
let interval;
function runInterval() {
    let count = 0;
    interval = setInterval(function () {
        count++;
        document.getElementById("output").innerText = "Count: " + count;
        if (count === 5) {
            clearInterval(interval);
        }
    }, 1000);
}

// ARROW FUNCTION
function arrowExample() {
    let greet = () => "Hello from Arrow Function";
    document.getElementById("output").innerText = greet();
}

// TEMPLATE LITERAL
function templateExample() {
    let name = "Hifza";
    let course = "FAANG Prep";
    document.getElementById("output").innerText = `Name: ${name}, Course: ${course}`;
}

// LOCAL STORAGE
function saveData() {
    localStorage.setItem("name", "Hifza");
    document.getElementById("output").innerText = "Data Saved";
}

function getData() {
    let data = localStorage.getItem("name");
    document.getElementById("output").innerText = "Stored Name: " + data;
}
// =====================
// ES6 FEATURES
// =====================

// let & const
function showLetConst() {
    let name = "Hifza";
    const role = "Developer";
    document.getElementById("output").innerText = `Name: ${name}, Role: ${role}`;
}

// Destructuring
function showDestructuring() {
    const user = { name: "Hifza", age: 22 };
    const { name, age } = user;
    document.getElementById("output").innerText = `Name: ${name}, Age: ${age}`;
}

// Spread Operator
function showSpread() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    document.getElementById("output").innerText = arr2.join(", ");
}


// =====================
// PROMISES
// =====================

function runPromise() {
    let myPromise = new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Promise Resolved Successfully ✅");
        } else {
            reject("Promise Rejected ❌");
        }
    });

    myPromise
        .then(result => {
            document.getElementById("output").innerText = result;
        })
        .catch(error => {
            document.getElementById("output").innerText = error;
        });
}


// =====================
// ASYNC / AWAIT
// =====================

async function runAsync() {
    function getData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data Loaded using Async/Await 🚀");
            }, 2000);
        });
    }

    let result = await getData();
    document.getElementById("output").innerText = result;
}


// =====================
// FETCH API
// =====================

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let output = "";
            data.slice(0, 5).forEach(user => {
                output += user.name + " - " + user.email + "\n";
            });
            document.getElementById("output").innerText = output;
        })
        .catch(error => {
            document.getElementById("output").innerText = "Error fetching data";
        });
}
