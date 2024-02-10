
const question = document.getElementsByClassName('question');


for(let i = 0; i <= question.length; i++){
    question[i]
    .addEventListener('click', function() {
        this.classList.toggle('active');
        var collapser = this.nextElementSibling;
        if (collapser.style.display === "block"){
            collapser.style.display = "none";
        } else {
            collapser.style.display = "block";
        }
    })
};