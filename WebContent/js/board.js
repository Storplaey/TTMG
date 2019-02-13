 $(document).ready(function () {
            var gameBoard = document.getElementById('gameBoard');

            if (gameBoard.getContext) {
                var ctx = gameBoard.getContext('2d');
                var maxLife = 5;
                var life = maxLife;

                // make cover
                ctx.fillStyle = "rgb(100,200,100)";
                ctx.fillRect(0, 0, 800, 600);

                // make position map
                var map = [];
                for (var x = 0; x < 800; x += 10) {
                    for (var y = 0; y < 600; y += 10) {
                        map.push(mapMaker(x, y, true));
                    }
                }

                var trail1 = [pointMaker(200, 200), pointMaker(300, 200), pointMaker(300, 250), pointMaker(250,
                    250), pointMaker(250, 300), pointMaker(450, 300), pointMaker(450, 400), pointMaker(
                    200, 400)];

                var trail2 = [pointMaker(200, 200), pointMaker(300, 100), pointMaker(400, 200), pointMaker(300,
                    300)];

                // remove cover
                discover(ctx, trail2, map);

                // make score
                $('#score').text(scoreCheck(map))

                // show life
                for (var i = 0; i < maxLife; i++) {
                    if (i < life)
                        $('#life').append('<img src="img/heart.png" width="20" height="20">');
                    else
                        $('#life').append('<img src="img/broken_heart.png" width="20" height="20">');
                }
                
                $('#gameBoard').mousedown(function(event){
                    x = event.pageX;
                    y = event.pageY;
                    console.log(x + ", " + y)
                    //asdfasdf 
                })
            }
        });