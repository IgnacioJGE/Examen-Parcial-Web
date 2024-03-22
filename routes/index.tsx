import { useSignal } from "@preact/signals";

export default function Home() {
let query:string;
  return (
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
                <a href="/agendassr">Agenda Server Side</a>
            </div>
            <h1>My Agenda</h1>
            <div>
                <p>Welcome to my agenda!</p>
            </div>
        </div>
    </body>
</html>


  );
}
