var userInput = prompt('u\'r photography interset is');
function userValid(userInput) {
    console.log(userInput);

    while (userInput !== 'Nature' && userInput !== 'Kids' && userInput !== 'Motors') {
        userInput = prompt('try another interest ' + 'Motors, Kids or Nature')
    }

}
//userName validation process


function conChoice(userInput) {
    if (userInput == 'Nature') {
        alert('click  Nature button');
    } else if (userInput == 'Kids') {
        alert('click  Kids button');

    } else if (userInput == 'Motors') {
        alert('click  Motors button');
    } else {
        alert('ur interest is unavailable ' + 'leave ur email to let u know when your interest is added'); //direct to contacts 
        var userInput2 = prompt("Your email");
    }
}
//instructions after proper validation 



function dispImge(userInput) {
    var userInput1 = prompt('how many images to show in main page?')
    var image = " ";

    while (userInput1 != 0 && userInput1 != 1 && userInput1 != 2 && userInput1 != 3 && userInput1 != 4 && userInput1 != 5) {
        userInput1 = prompt('enter a no <= 5')
        //if the entry is anything but a no between 0 -5 the webpage ll won't accept the access
    }

    for (var i = 0; i < userInput1; i++) {

        if (userInput == 'Motors') {
            image = '<img src="https://corporette.com/wp-content/uploads/2019/02/do-lawyers-need-to-drive-a-fancy-car.jpg" width = "320" height = 260>'
            console.log(image);

        } else if (userInput == 'Kids') {
            image = '<img src="https://www.parentingforbrain.com/wp-content/uploads/respect.jpg" width = "320" height = 260>'
            console.log(image);

        } else if (userInput == 'Nature') {
            image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" width = "320" height = 260>'
            document.body.style.background = "url('[1stwebpage/assets/pic.jpg]')";
            console.log(image);
            //dispaying the number of imges the user entered in the confirmation ptompt 
        }
        document.write(image);
    }
    //user input for imges no to display 
}

userValid(userInput);
conChoice(userInput);
dispImge(userInput);


document.write("<h1> Thank you for visiting </h1>")



