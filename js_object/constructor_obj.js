

// Constructor Object

function User(firstName, lastName, avatar) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
};

var User = function(firstName, lastName, avatar) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
};

var author = new User('Shady','Nguyen','Avatar');

console.log(author.firstName)
console.log(author.lastName)
