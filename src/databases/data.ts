export const categories = [
    {id:1 , name: 'Road', description: 'Bicycles designed for paved roads'},
    {id:2 , name: 'Mountain', description: 'Off-road and trail bicycles'},
    {id:3 , name: 'Hybrid', description: 'Versatile bikes for various terrains'},
    {id:4 , name: 'Cruiser', description: 'Comfortable and stylish bikes for leisurely rides'},
    {id:5 , name: 'Electric', description: 'Bicycles powered by electric motors'},

]

export const brands = [
    {id:1 , name: 'Trek', description: 'High-quality bikes for all terrains'},
    {id:2 , name: 'Giant', description: 'Specializing in road and mountain bikes'},
    {id:3 , name: 'Specialized', description: 'Innovative designs for cycling enthusiasts'},
    {id:1 , name: 'Cannondale', description: 'Known for its performance-oriented bicycles'},
    {id:1 , name: 'Scott', description: 'Offers a wide range of bicycles for various purposes'},

]

export const customers = [
    {id:1 , firstName: 'John ', lastName: 'Doe', phone: 1234567890, email: 'john.doe@example.com', birthday: 1990-5-15, street: '123 Main St', city: 'Anytown', state: 'CA', zipCode: 12345},
    {id:2 , firstName: 'Jane', lastName: 'Smith', phone: 4567890123, email:'jane.smith@example.com', birthday: 1985-8-20, street: '456 Elm St', city: 'Othertown', state: 'NY', zipCode: 67890},
    {id:3 , firstName: 'Michael', lastName: 'Johnson', phone: 7890123456, email:'michael.johnson@example.com', birthday: 1978-12-25, street: '789 Oak St', city: 'Anycity', state: 'TX', zipCode: 23456},

]

export const products = [
    {id:1 , productName: 'Road Bike',price: 500, discount: 0, categoryId: 1,brandId: 1,description: 'Road bike for paved roads',modelYear: 2022},
    {id:2 , productName: 'Mountain Bike',price: 600, discount: 0, categoryId: 2,brandId: 2,description: 'Off-road and trail bike',modelYear: 2022},
    {id:3 , productName: 'Hybrid Bike',price: 450, discount: 0, categoryId: 3,brandId: 3,description: 'Versatile bike for various terrains',modelYear: 2022},

]

export const staffs = [
    {id:1 , firstName: 'John', lastName: 'Doe', phone: 1234567890, email: 'john.doe@example.com', active: 1, storeId: 1, manageId: ''},
    {id:2 , firstName: 'Jane', lastName: 'Smith', phone: 4567890123, email: 'jane.smith@example.com', active: 1, storeId: 2, manageId: 1},
    {id:3 , firstName: 'Michael', lastName: 'Johnson', phone: 7890123456, email: 'michael.johnson@example.com', active: 0, storeId: 1, manageId: ''},

]