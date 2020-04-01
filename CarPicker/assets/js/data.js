// Arslan Khayrullin 
// ISTE-340 
// Project 1 - Car Picker 
// 02/23/2020

var choices = {
    "choices": [
        //Asking for the budget/price of the car
        {
            "key": "Car Price",
            "options": ["$0 - $20,000", "$20,000 - $40,000", "$40,000 - $60,000" ],
            "description": "What is your price range",
            "depth": 0
        }, 
        //All budget options will lead to the same question - Coupe, Sedan, or an SUV?
        {
            "key": "$0 - $20,000",
            "options": ["Coupe", "Sedan", "SUV"],
            "description": "Are you looking for a Coupe, Sedan, or an SUV?",
            "depth": 1
        }, 
        {
            "key": "$20,000 - $40,000",
            "options": ["Coupe", "Sedan", "SUV"],
            "description": "Are you looking for a Coupe, Sedan, or an SUV?",
            "depth": 1
        }, 
        {
            "key": "$40,000 - $60,000",
            "options": ["Coupe", "Sedan", "SUV"],
            "description": "Are you looking for a Coupe, Sedan, or an SUV?",
            "depth": 1
        }, 
        //Start of COUPE
        //Coupe choice will ask what is preferred? Handling or speed?
        {
            "key": "Coupe",
            "options": ["Handling", "Speed"],
            "description": "Do you prioritize car handling or speed?",
            "depth": 2
        }, 
        //-------------------------------------
        //Start of SEDAN
        {
            "key": "Sedan",
            "options": ["Economy", "Luxury", "Sport"],
            "description": "Are you looking for an economy, luxury, or sports car?",
            "depth": 2
        }, 
        //-------------------------------------
        //Start of SUV
        {
            "key": "SUV",
            "options": ["Practical and Roomy", "Luxurious and Quick"],
            "description": "Are you looking for a practical and roomy SUV or a luxurious and quick SUV?",
            "depth": 2
        }, 
        //-------------------------------------
    ]
};
