function displayUsers(users) {
    // your code
    const mainDiv = document.getElementById("app")

    const newUl = document.createElement("ul");
    //const conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    mainDiv.appendChild(newUl)   

    //console.log(mainDiv)
    users.forEach(element => {
        const newLi = document.createElement('li')
        newLi.className = 'user-item';
        newLi.textContent = element        
        newUl.appendChild(newLi)
                
    });
};

const newArray = ["Adam","Eve","Cain","Abel"]

displayUsers(newArray)
    