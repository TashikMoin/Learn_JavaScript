class A {
    display() {
        console.log("A is invoked");
    }
}
class B extends A {
    display() {
        console.log("B is invoked");
    }
}

var a = [new A(), new B()]
a.forEach(function(msg) {
    msg.display();
    /* 
       calling display method from each class object. Method of class A is called when we called using object of A class
       and method of class B is called when called using object of class B
    */
});

/*

   Output
A is invoked
B is invoked

*/