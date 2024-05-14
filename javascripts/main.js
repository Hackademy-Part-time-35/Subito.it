let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");



function makeInterval(element, maxValue, tickTime) 
{
    let counter = 0;
    
    let interval = setInterval(()=> 
        {
        if(counter < maxValue)
            {
            counter++;
            element.innerHTML = counter;
        }
        else
        {
            clearInterval(interval);
        }
    }, tickTime);
}



// let interval_1 = setInterval(()=> 
    //     {
//         if(counter<20000)
    //             {
//                 counter+= 100;
//                 number1.innerHTML = counter;
//             }
//             else
//             {
//                 clearInterval(interval_1);
//             }
//     }, 5); 

let checkRepeat = false;

let osserva = new IntersectionObserver((entries) => 
    {
    entries.forEach((entry) => 
        {
        if(entry.isIntersecting && !checkRepeat)
        {
            makeInterval(number1, 1200, 5);
            makeInterval(number2, 500, 10);

            checkRepeat = true;
        }
    })
});

osserva.observe(number2);