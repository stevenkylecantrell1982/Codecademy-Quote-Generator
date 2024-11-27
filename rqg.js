
//Define variables that will store values that will then be passed to the elemets with quote and author ids.
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

//Add an event listener to the buttom element that will invoke the getRandomQuote fuction that will generate a random quote and its author when the button element is clicked.
button.addEventListener("click", getRandomQuote);

    //Define a fuction that will generate a random quote when invoked.
    function getRandomQuote() {

        //Define a variable named rand that will store the results of a function that generates a whole number between 0 - 9.
        const rand = Math.floor(Math.random() * 10);

        //Define and assign the quote and author variables with an empty string value.
        let quote, author = " ";
        
        //Create a switch statement that will take in the results of the random number generator that are stored in the rand variable.
        //The switch statement will have 10 possibilitets for which case will execute based on what value is passed via the rand parameter.
        //WHen a case is invoke the quote and author variable will be reassigned with a uiquue string/quote and its author.
        switch (rand) {
            case 0:
                quote = `"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.`,`People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life."`
                author = "Carrie Ann Moss";
                break;
            case 1:
                quote = `Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.`
                author = "Lady Gaga";
                break;
            case 2:
                quote = `"Life is what happens to us while we are making other plans."`
                author = "Allen Saunders";
                break;
            case 3:
                quote = `"Life isn’t about finding yourself. Life is about creating yourself."`
                author = "George Bernard Shaw";
                break;
            case 4:
                quote = `"You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive."`
                author = "Maya Angelou";
                break;
            case 5:
                quote = `“Doubt kills more dreams than failure ever will.”`;
                author = "Suzy Kassem";
                break;
            case 6:
                quote = `“Keep your face always toward the sunshine, and shadows will fall behind you.”`;
                author = "Walt Whitman";
                break;
            case 7:
                quote = `“Whether you think you can or think you can’t, you’re right.”`;
                author = "Herny Ford";
                break;
            case 8:
                quote = `“Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.”`;
                author = "Lou Holtz";
                break;
            case 9:
                quote = `“The happiness of your life depends on the quality of your thoughts.”`;
                author= "Marcu Aurelius";
                break;
        }
        
        //Reassign the string values of the qouteEl and authorEl variables with the results of the getrandom quote function.
        //The reassigned values will then be passed to the html elements with the quote and author ids.
        quoteEl.innerText = quote;
        authorEl.innerText = author
    }



