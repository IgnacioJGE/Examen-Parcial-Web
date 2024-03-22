export  default function Page(){
return(
<html>
    <head>
        <title>grupo-A</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/styles.css"/>
    </head>
    <body>
        <div class="layout">
            <div class="header">
                <a href="/agendacsr">Agenda Client Side</a>
                <a href="/agendassr" data-current="true" aria-current="page">Agenda Server Side</a>
            </div>
            <h1>My Agenda</h1>
            <h2>Not implemented</h2>
        </div>
    </body>
</html>

);
}