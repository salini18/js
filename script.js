const students =[
    { 
        name:"raj",
        courses:["sci","mat"],
        regNo:"1"
        
    
    },
    {
        name:"joe",
        courses:["sci","phy"],
        regNo:"2"
        
    },
    {
        name:"riya",
        courses:["sci","che"],
        regNo:"3"
        
    }
    ]
    
    //to display in html from js
    const studentsDiv = document.getElementById("students-div");
    for(var i=0;i<students.length;i++)
    {
        const mainDiv = document.createElement("div");
        const nameElem = document.createElement("h2");
        const regNo = document.createElement("h1");
        nameElem.innerText = students[i].name;
        regNo.innerText = students[i].regNo;
       mainDiv.appendChild(nameElem);
       mainDiv.appendChild(regNo);
       studentsDiv.appendChild(mainDiv);
       
    }
    