$(document).ready(function () {
    var matchedCards;
    var match_counter = 0;
    var classList;
    let sec = 0;
    let min = 0;
    var ind_temp;
    var icons = [
        "fa fa-paper-plane-o fa-4x",
        "fa fa-anchor fa-4x",
        "fa fa-cube fa-4x",
        "fa fa-leaf fa-4x",
        "fa fa-bicycle fa-4x",
        "fa fa-diamond fa-4x",
        "fa fa-bomb fa-4x",
        "fa fa-user fa-4x",
        "fa fa-house fa-4x",
        "fa fa-check fa-4x",
        "fa fa-download fa-4x",
        "fa fa-star fa-4x",
        "fa fa-envelope fa-4x",
        "fa fa-fan fa-4x",
        "fa fa-music fa-4x",
        "fa fa-poo fa-4x",
        "fa fa-arrow-right fa-4x",
        "fa fa-heart fa-4x",
        "fa fa-camera-retro fa-4x",
        "fa fa-xmark fa-4x",
        "fa fa-cloud fa-4x",
        "fa fa-comment fa-4x",
        "fa fa-hippo fa-4x",
        "fa fa-pen-nib fa-4x",
        "fa fa-truck-fast fa-4x",
        "fa fa-face-smile fa-4x",
        "fa fa-paperclip fa-4x",
        "fa fa-shield-halved fa-4x",
        "fa fa-file fa-4x",
        "fa fa-bell fa-4x",
        "fa fa-clipboard fa-4x",
        "fa fa-filter fa-4x",
        "fa fa-circle-info fa-4x",
        "fa fa-bolt fa-4x",
        "fa fa-wifi fa-4x",
        "fa fa-gas-pump fa-4x",
        "fa fa-car fa-4x",
        "fa fa-mug-hot fa-4x",
        "fa fa-ghost fa-4x",
        "fa fa-pen fa-4x",
        "fa fa-umbrella fa-4x",
        "fa fa-gamepad fa-4x",
        "fa fa-gift fa-4x",
        "fa fa-film fa-4x",
        "fa fa-trash fa-4x",
        "fa fa-inbox fa-4x",
        "fa fa-headphones fa-4x",
        "fa fa-lock fa-4x",
        "fa fa-gears fa-4x",
        "fa fa-print fa-4x",

    ];



    function data() {
        // sec = 0;
        //  min = 0;
        var selectedIcons = [];
        for (var i = 0; i < 12; i++) {
            var randomIconIndex = Math.floor(Math.random() * icons.length);
            console.log(randomIconIndex);
            selectedIcons.push(icons[randomIconIndex]);
            // icons.pop(icons[randomIconIndex]);
            selectedIcons.push(icons[randomIconIndex]);

        }
        console.log(selectedIcons);

        // Shuffle the selectedIcons array using Fisher-Yates shuffle algorithm
        for (var i = selectedIcons.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = selectedIcons[i];
            selectedIcons[i] = selectedIcons[j];
            selectedIcons[j] = temp;
        }
        console.log(selectedIcons);
        function generateBoard() {
            for (let i = 0; i <= selectedIcons.length; i++) {
                $(".card").eq(i).html("<i class='" + selectedIcons[i] + "'></i>")
                console.log("<i class='" + selectedIcons[i] + "'></i>");
            }
        };
        generateBoard();
        console.log(generateBoard);
        let flippedCards = [];
        let matchedCards = [];
        function handleCardClick(th) {
        }
        var xyz;
        $('.card').on('click', function () {
            console.log(this);
            xyz = $(this).html();
            handleCardClick(xyz)
            if (flippedCards.length == 2) {
                // $(this).addClass('flipped');
                return;
            }
            $(this).addClass('flipped');
            // $(".flipped").off('click');
           
            $(".flipped").children().css({ "display": "block" });
            flippedCards.push(xyz);
            console.log(flippedCards[0]);
            console.log(flippedCards[1]);
            if (flippedCards.length == 2) {
                if (flippedCards[0] == flippedCards[1]) {
                    $(".flipped").addClass("matched");
                    // $(".flipped").children().css({ "display": "block" });
                    $(".matched").children().css({ "display": "block" });
                    console.log("Matched");
                    // to make click event off 
                    $(".matched").off('click');
                    console.log(flippedCards[0]);
                    console.log(flippedCards[1]);
             
                    matchedCards.push(flippedCards[0], flippedCards[1]);
                    flippedCards = [];
                    console.log(matchedCards);
                    if (matchedCards.length == 24) {
                        $(".message .msg").css({ "display": "none" })
                        $(".message .finalmsg").css({ "display": "block" })
                        // alert('You win!');
                        clearInterval(timeInterval);
                        $(".min").html(min);
                        $(".sec").html(sec);
                        // clearTimeout();
                        // min=0;
                        // sec=0;
                        $(".matched").children().css({ "display": "block" });
                        $(".flipped").children().css({ "display": "block" });
                    }
                }
                else {
                    // $(".flipped").addClass("notmatched");

                    $(".matched").children().css({ "display": "block" });
                    setTimeout(() => {
           
                        $(".flipped").children().css({ "display": "none" });
                
                        flippedCards.forEach((card) => {
                            // card.removeClass('flipped');
                            $(".card").removeClass("flipped");
                            $(".flipped").removeClass("flipped");
                            // $(".flipped").removeClass("matched");

                        });
                        console.log("Not Matched");
                        flippedCards = [];

                        // $(".flipped").removeClass("flipped");
                        // $(".flipped").removeClass("matched");
                    }
                        , 1000);
                }
            }

        });
    }

    timer = () => {
        timeInterval = setInterval(function () {
            $(".min").html(min).css({
                color: "blue",
            });
            $(".sec").html(sec).css({
                color: "blue",
            });
            sec++;
            if (sec == 59) {
                min++;
                sec = 0;
            }
            console.log(min);
            console.log(sec);
            if (matchedCards == 24) {
                clearInterval(timeInterval);
                $(".min").html(min);
                $(".sec").html(sec);
            }
        }, 1000);
    };
    timer();


    $(".reset").on("click", function () {
        // swapArray=[]
        $('.matched').on('click');

        $(".reset").html("Restart");
        $(".card").removeClass('flipped');
        $(".card").removeClass('matched');

        // $(".matched").children().css({ "display": "none" });
        // $(".flipped").children().css({ "display": "none" });
        // $(".matched").children().css({ "display": "none" });
        $(".flipped").css({ "background-color": "#dc6e6e" });
        $(".matched").css({ "background-color": "#dc6e6e" });
        console.log("reset")
        // $(".flipped").removeClass("matched"); 
        // $(".flipped").removeClass("flipped");
        $(".message .msg").css({ "display": "block" })
        $(".message .finalmsg").css({ "display": "none" })
        data();
        min=0;
        sec=0;
        // console.log( $(".min").html(min));
        // console.log( $(".sec").html(sec));
        // clearTimeout(timer);
        // timer();
    });

});