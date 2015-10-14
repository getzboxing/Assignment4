//1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog.
/*
var ANIMAL = ANIMAL || {};
ANIMAL.Dog = function(){};
ANIMAL.Cat = function(){};
*/
//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
/*
var Cat = {};
function Dog(){};
*/
//3.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
/*
myCat = new Cat();
myDog = new Dog();
*/
//4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
/*
function Animal(){console.log("The Animal has been Created!");}
myAnimal= new Animal();
*/
//5.	Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
/*
var size;
function Animal(size){
     this._size=size;
    console.log("The "+this._size+" Animal has been Created!");}
    
myAnimal= new Animal("large");
*/

//6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation.
/*
    function Animal(type,breed,color,height,length){
        this._type=type;
        this._breed=breed;
        this._color=color;
        this._height=height;
        this._length=length;
        }

//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a lis t within the console window.

var  myCat = new Animal("Cat","Maine Coon","Tabby","15\" height","31\" length");

     var text = "";
var x;
for (x in myCat) {
    text = myCat[x];
    console.log(text);
}
   
//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
   
  Animal.prototype.speak = function(){console.log("function is wired");
                                     
        if (this._type=="Dog"){console.log("The "+this.color +" dog is barking!");}else if (this._type=="Cat"){console.log("The "+this._color+ " cat is meowing!");}                             
                                     
    myCat.speak();
*/  
  //9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
/*            
                                      
function Animal(type,breed,color,height,length){
    var _type=type;
        this._breed=breed;
        this._color=color;
        this._height=height;
        this._length=length;
    var checkType=function({if(this._type=="Dog"){return "Dog"} else if (this._type=="Cat"){return "Cat"}})
        Animal.speak=function(){        
        if (this._type=="Dog"){console.log("The "+this.color +" dog is barking!");}else if (this._type=="Cat"){console.log("The "+this._color+ " cat is meowing!");}
        
        this.displayAnimal=function(){
                           checkType();
                           }
                }
    
        
        
        console.log(displayAnimal(););
        
        
        }
                                      
    var  myCat = new Animal("Cat","Maine Coon","Tabby","15\" height","31\" length");

     var text = "";
     var x;
for (x in myCat) {
    text = myCat[x];
    console.log(text);
    
}                      
   Animal.prototype.speak =         
                                     
    myCat.speak();
 */

//10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
/*
    var txt = "Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.";

    String.prototype.findWords = function(txt){
    
       myVal = txt.split.match(/of/g);
        console.log(myVal);
    
    }
*/

    //---------OILCHANGE-------------
//11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).

/*   
    function Vehicle(make, model, totalMiles, lastOilChange){
        this._make=make;
        this._model=model;
        this._totalMiles=totalMiles;
        this._drivenMiles=0;
        this._type="";
        this._lastOilChange=lastOilChange;
        
    }
    
//12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
//13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).

    Vehicle.prototype.drive = function(drivenMiles){
            this._drivenMiles+=drivenMiles; 
        return this;
    }    

//14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
console.log(Number(this._totalMiles));

    Vehicle.prototype.checkOil=function(){
        if( (this._totalMiles + this._drivenMiles - this._lastOilChange ) >= 3000) {return "You need oil change!";}else {return "You don\'t need oil change."} 
    
    }
    var myCar= new Vehicle("Fiat","128", 10000, 8000);
    myCar.drive(1500);
    console.log(myCar.checkOil());
//15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 


//16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
//17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

    var Car = function(doorCount)           {this._doorCount=doorCount;
        if (this._doorCount>2){
        
        this._type = "Sedan";
        }else {
        this._type = "Coup";
        }
}
    
 
//18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor.
  
        Car.prototype=new Vehicle("VW","Rabbit", 10000, 8000);

//19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.

myCar = new Car(2);
*/
/*
//20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.
console.log(myCar.drive(2000).checkOil());
*/

//---------------THE RECIPE------

//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:

var myRecipe = {
            title: "Guacamole",
            servings: "4",
            ingredients: {
                          Avocados: "3",
                          Lime: "1",
                          Salt: "1 tsp"
                         },
            displayIngredients: function(){ for (index in recipe.ingredients){
              console.log(this.index);
                }
            }
    

}
console.log(myRecipe.displayIngredients);

            # Assignment4
