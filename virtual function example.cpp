#include <iostream>

// Base class
class Animal {
public:
    // Virtual function
 virtual  void makeSound() {
        std::cout << "Animal makes a sound" << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    // Override the virtual function
    void makeSound()  {
        std::cout << "Dog barks" << std::endl;
    }
};

// Another derived class
class Cat : public Animal {
public:
    // Override the virtual function
    void makeSound()  {
        std::cout << "Cat meows" << std::endl;
    }
};

int main() {
//	Animal a1;
//	a1.makeSound();
    // Base class pointer pointing to a Dog object
    Animal* animalPtr = new Dog();
    // Calls the virtual function
    animalPtr->makeSound();

    // Base class pointer pointing to a Cat object
    animalPtr = new Cat();
    // Calls the virtual function
    animalPtr->makeSound();

    delete animalPtr; // Clean up the dynamically allocated memory
    return 0;
}
