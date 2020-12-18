$(document).ready(function () {

    let newImage, exitImage, lessImage, greaterImage, divImage;
    var sources = [];

    // get sources for all pictures
$("#flw img").each(function(){
    sources.push(this.src);});


    let currentImage = 0;
        $("#flw img").click(function () {

        divImage = $('<div></div>');
        $(divImage).attr('id', 'div2');
        $(divImage).addClass("colors");
        // $('body').append(divImage);
        $('#flw').append(divImage);
        $(divImage).css({
            'width': "100%",
            'height': "100%",
            'z-index': '3',
            'position': 'absolute',
            'display': 'block',
            'top': '0',
            'left': '0',
            'text-align': 'center',
            'background':'#ccc',
            //'opacity':'0.5'
        })

        // get index for current image
        currentImage = sources.indexOf(this.src);


        //create less than with this.src

        lessImage = $('<img />', {
            id: 'less',
            src: 'images/less.png',
            alt: 'Alt text'
        });

        
        $(divImage).append(lessImage);

        $(lessImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "49%",
            'right': "75%"
        })


        //create newimage with this.src

        newImage = $('<img />', {
            id: 'imgId',
            src: this.src,
            alt: 'Alt text'
        });

    
        $(divImage).append(newImage);

        $(newImage).css({
            'width': "500px",
            'height': "100%",

        })

        //create greater than with this.src

        greaterImage = $('<img />', {
            id: 'less',
            src: 'images/greater.png',
            alt: 'Alt text'
        });

        $(divImage).append(greaterImage);

        $(greaterImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "49%",
            'left': "75%"
        })

        //create exit  image

        exitImage = $('<img />', {
            id: 'exit',
            src: 'images/exit.png',
            alt: 'Alt text'
        });

        $(divImage).append(exitImage);

        $(exitImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "1%",

        })

                //start exit function

                $(exitImage).click(function () {

                    $(divImage).remove();
        
                })
        
                //greater than function
                $(greaterImage).click(function () {

                    // repeat the images
                    if(currentImage==5){
                        currentImage=-1;
                    }
                    $(divImage).fadeOut(1000, function(){

                        //change the image source to the next image source from array
                        $("#imgId").attr("src",sources[++currentImage]);
                    });
                     $(divImage).fadeIn(1000);
                   
                })
        
                //less than function
                $(lessImage).click(function () {
                    
                    // repeat the images
                    if(currentImage==0){
                        currentImage=6;
                    }
                    $(divImage).fadeOut(1000, function(){

                        //change the image source to the previous image source from array
                        $("#imgId").attr("src",sources[--currentImage]);
                    });
                     $(divImage).fadeIn(1000);
                   
        
                
        
            })




    
})






// ////////********************* ///////////////////

$("#flw .op1").hover(function () {

    $(".op1").css({
        'opacity':'.5'
    })



    $(".plus1").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000'
    
         })



}, function () {

    $(".plus1").css({
        'display': "none",
         })



   
    $(".op1").css({
        'opacity':'1'
    })

})


$("#flw .op2").hover(function () {

    $(".op2").css({
        'opacity':'.5'
    })

    $(".plus2").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000'
    
         })



}, function () {

    $(".plus2").css({
        'display': "none",
         })


    $(".op2").css({
        'opacity':'1'
    })

  
})

$("#flw .op3").hover(function () {

    $(".op3").css({
        'opacity':'.5'
    })


    $(".plus3").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000'
    
         })



}, function () {

    $(".plus3").css({
        'display': "none",
         })



   
    $(".op3").css({
        'opacity':'1'
    })

})

$("#flw .op4").hover(function () {

    $(".op4").css({
        'opacity':'.5'
    })



    $(".plus4").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000'
    
         })



}, function () {

    $(".plus4").css({
        'display': "none",
         })



   
    $(".op4").css({
        'opacity':'1'
    })

})

$("#flw .op5").hover(function () {

    $(".op5").css({
        'opacity':'.5'
    })



    $(".plus5").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000'
    
         })



}, function () {

    $(".plus5").css({
        'display': "none",
         })



   
    $(".op5").css({
        'opacity':'1'
    })

})


$("#flw .op6").hover(function () {

    $(".op6").css({
        'opacity':'.5'
    })



    $(".plus6").css({
        'display': "block",
        'z-index': '3',
        'position': 'absolute',
        'margin-left':'90px',
        'margin-top': '111px',
        'font-size': '30px',
        'color':'#000',
       
    
         })



}, function () {

    $(".plus6").css({
        'display': "none",
         })



   
    $(".op6").css({
        'opacity':'1'
    })

})








// ////////********************* ///////////////////

$("#section2 .card").hover(function () {
    $(".addcart").css({
        'margin-top': '-29px',
        'padding-top': '4px',
        'display': "block",
         })


}, function () {

   
    $(".addcart").css({
        'display': "none",
         })

})








});






