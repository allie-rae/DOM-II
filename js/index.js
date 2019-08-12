// Your code goes here
navLink = document.querySelectorAll('a');

navLink[0].addEventListener('click', function(){
    document.querySelector('a').style.color = 'orange'
})
navLink[1].addEventListener('click', function(){
    document.querySelectorAll('a')[1].style.color = 'red'
})
navLink[2].addEventListener('click', function(){
    document.querySelectorAll('a')[2].style.color = 'skyblue'
})
navLink[3].addEventListener('click', function(){
    document.querySelectorAll('a')[3].style.color = 'green'
})