<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Preguntas y Respuestas</title>

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
    <body>
        <div class="container">
            <div class="col-xs-12">
                <div class="text-center">
                    <h1>PREGUNTAS Y RESPUESTAS</h1>
                </div>
                <hr>
                <h4>¿En qué consiste el principio de responsabilidad única? - ¿Cual es su propósito?</h4>
                <p>
                    Consiste en que cada clase solo se encargue de una tarea o recurso único. Sirve para definir un comportamiento modular, y poder de esta manera probar cada componente de manera aislada, así mismo poder reemplazar o modificar alguno de los mismos sin que esto afecte o comprometa la integridad y estructura de la aplicación desarrollada. 
                </p>
                <hr>
                <h4>
                    ¿Que características tiene según su opinión “buen” código o código limpio?
                </h4>
                <p>
                    En principio debe escribirse a manera de ser autodocumentado, es decir, que los nombres sean expresivos y sea fácil de entender que propósito cumple cada función sin documentación extra (Aunque igual es válido acompañar de documentación breve explicando en más profundidad algunas partes del código donde sea necesario). Que mantenga consistencia en cuanto al estilo de codificación elegido, por ejemplo los nombres de variables, de funciones, etc. Así mismo que se definan de manera correcta los módulos y sus funcione.
                </p>
                <p>
                    
                </p>
                <hr>
            </div>
        </div>
    </body>
</html>
