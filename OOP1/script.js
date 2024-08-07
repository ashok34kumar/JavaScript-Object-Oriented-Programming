class person {
    constructor(name , age , country) {
        this.name = name ;
        this.age = age ; 
        this.country = country;
    }
    displayDetails(elementId) {
        const element = document.getElementById(elementId);
        element.innerHTML = `
        <p><strong>Name: </strong>${this.name}</p>
        <p><strong>Age: </strong>${this.age}</p>
        <p><strong>Country: </strong>${this.country}</p>
        `;
   }     
}
const person1 = new person('Francisca rohan',25,'USA');
const person2 = new person('Raimond Aruna',30,'Nertherlands');
person1.displayDetails('person1-details');
person2.displayDetails('person2-details');


