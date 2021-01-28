var userInput = prompt("ur photography interset is");
console.log(userInput);
//direct to the Nature site
if (userInput == 'Nature'){
    alert('click  Nature button');
}else if(userInput == 'Kids')
    {alert('click  Kids button');

}else if(userInput == 'Motors')
    {alert('click  Motors button');
}else
            {alert('ur interest is unavailable ' + 'leave ur email to let u know when your interest is added'); //direct to contacts 
            var userInput2 = prompt("Your email");      
        }


document.write("Thank you for visiting")