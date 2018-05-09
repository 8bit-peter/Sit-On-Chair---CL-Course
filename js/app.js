document.addEventListener("DOMContentLoaded", function(){


var chairImg1 = document.querySelector('.img1');
var chairImg2 = document.querySelector('.img2');
var textBox1 = document.querySelector('.image-text-1')
var textBox2 = document.querySelector('.image-text-2')


//Hide class add
chairImg1.addEventListener('mouseover', function(event) {
    textBox1.classList.add('hide')
})

chairImg2.addEventListener('mouseover', function(event) {
    textBox2.classList.add('hide')
})


//Hide class remove
chairImg1.addEventListener('mouseout', function(event) {
    textBox1.classList.remove('hide')
})

chairImg2.addEventListener('mouseout', function(event) {
    textBox2.classList.remove('hide')
})

//Slider hero
var prev = document.querySelector('#prevPicture');
var next = document.querySelector('#nextPicture');
var listaLi = document.querySelectorAll('.hero-slider');
var counter = 0

listaLi[0].className = 'visible';

next.addEventListener('click', function(event) {
    listaLi[counter].classList.remove('visible');
    counter++
    
    if(counter === listaLi.length) {
        counter = 0
    }

    listaLi[counter].classList.add('visible');
})

prev.addEventListener('click', function(event) {
    listaLi[counter].classList.remove('visible');
    counter--

    if(counter < 0) {
        counter = listaLi.length-1
    }
    
    listaLi[counter].classList.add('visible');
})


});

// Calculator ------------------------------------------------------------------------------------

    // Dropdown menu

    var lists = document.querySelectorAll('.list_panel');
    var listArrow = document.querySelectorAll('.list_arrow');

    var listLabel = document.querySelectorAll('.list_label');

    var values = document.querySelectorAll('.value')
    var sum = document.querySelector('.sum strong')


    for (var i = 0; i < listArrow.length; i++) {
        if (listArrow[i].addEventListener('click', function (event) {
            this.nextElementSibling.style.display = 'block';
            for (var j = 0; j < lists.length; j++) {
                lists[j].addEventListener('mouseleave', function (event2) {
                    this.style.display = 'none';
                });
            }
        }));
    };

    // Order cost sum

    function count() {
        var suma = 0;
        for (var j = 0; j < values.length; j++) {
                var valueSum = parseFloat(values[j].innerText)
                if (valueSum > 0) {
                    suma += valueSum;
                }
        }
        sum.innerText = suma;
    }


    // List 1

    var chairTypeLi = lists[0].querySelectorAll("li");
    var chairName = document.querySelector('.chairName');
    var price = document.querySelectorAll('.value');

    for (var i = 0; i < chairTypeLi.length; i++) {
        if (chairTypeLi[i].addEventListener('click', function (event) {
                chairName.innerText = this.innerText;
                listLabel[0].innerText = this.innerText;
                for ( var j = 0; j < chairTypeLi.length; j++) {
                    var cost = parseFloat(this.dataset.price);
                    price[0].innerText = cost;
                    count()
                }
            })) ;

    }

    // List 2

    var chairColorLi = lists[1].querySelectorAll("li");
    var color = document.querySelector('.color');

    for (var i = 0; i < chairColorLi.length; i++) {
        if (chairColorLi[i].addEventListener('click', function (event) {
                color.innerText = this.innerText;
                listLabel[1].innerText = this.innerText;
                for ( var j = 0; j < chairColorLi.length; j++) {
                    var cost = parseFloat(this.dataset.price);
                    price[1].innerText = cost;
                    count()
                }
            })) {
        }
    }
    // List 3

    var chairFinishLi = lists[2].querySelectorAll("li");
    var pattern = document.querySelector('.pattern');

    for (var i = 0; i < chairFinishLi.length; i++) {
        if (chairFinishLi[i].addEventListener('click', function (event) {
                pattern.innerText = this.innerText;
                listLabel[2].innerText = this.innerText;
                for ( var j = 0; j < chairFinishLi.length; j++) {
                    var cost = parseFloat(this.dataset.price);
                    price[2].innerText = cost;
                    count()
                }
            })) {
        }
    }

    // Transport

    var transport = document.querySelector('#transport')
    var transportClass = document.querySelector('.transport');

    transport.addEventListener('change', function (event) {
        if (transport.checked) {
            var cost = parseFloat(transport.dataset.price);
            price[3].innerText = cost;
            transportClass.innerText = 'Transport';
            count()
        } else {
            var cost = parseFloat(transport.dataset.price);
            price[3].innerText = '';
            transportClass.innerText = '';
            count()
        }
    })

    