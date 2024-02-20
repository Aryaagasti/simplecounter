document.addEventListener("DOMContentLoaded", function() {

    const incrementBtn = document.querySelector('.increment');
    const decrementBtn = document.querySelector('.decrement');
    const countSpan = document.querySelector('.count');


    let count = 0;


    function updateCounter() {
        countSpan.textContent = count;
    }

   
    function incrementCounter() {
        count++;
        updateCounter();
        countSpan.style.color="green"
    }


    function decrementCounter() {
       count--
       updateCounter();
       countSpan.style.color="red"
    }

 
    incrementBtn.addEventListener('click', incrementCounter);
    decrementBtn.addEventListener('click', decrementCounter);


    updateCount();
});
