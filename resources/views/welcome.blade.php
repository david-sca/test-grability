<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>News Feed</title>

        {{--Estilos y scripts globales--}}

        {{--Jquery--}}
        <script src="{{asset('plugins/jquery.min.js')}}"></script>
        <script src="{{asset('plugins/jquery-ui/jquery-ui.min.js')}}"></script>
        {{--Bootstrap--}}
        <link rel="stylesheet" href="{{asset('plugins/bootstrap/css/bootstrap.min.css')}}">
        <script src="{{asset('plugins/bootstrap/js/bootstrap.min.js')}}"></script>

        {{--Mis estilos y scripts--}}
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <script src="{{asset('js/app.js')}}"></script>
    </head>
    <body class="bg-grey">
    <div class="body-wrapper">
        <div class="container-fluid bg-orange margin-bottom-medium" id="main-bar">
            <div class="col-xs-1 text-center">
                <div class="main-bar-button">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
            </div>
            <div class="col-xs-11 text-center">
                <h3 id="bar-title"></h3>
            </div>
        </div>
        <div class="container" id="news-section">
            
            <div class="col-xs-12 news-header">
                <div class="container">
                    <div class="col-xs-2 text-center">
                        <img class="rounded-image" src="http://placehold.it/100x100" alt="">
                    </div>
                    <div class="col-xs-10">
                        <h4 class="articleTitle"></h4>
                    </div>
                </div>    
            </div>
            <div class="col-xs-12 news-content">
                <div class="container">
                    <div class="col-xs-4">
                        <img class="articleImage" src="http://placehold.it/300x300" alt="">
                    </div>
                    <div class="col-xs-7">
                        <h3 class="articleTitle"></h3>
                        <br>
                        <p class="articleContent"></p>        
                    </div>
                </div>    
            </div>


        </div>
    </div>
    </body>
</html>
