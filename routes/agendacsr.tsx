
import { useSignal } from "@preact/signals";
import { Partial } from "$fresh/runtime.ts";

export default  function Page () {
return(
    <html>
    <head>
        <title>grupo-A</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/styles.css"/>
        <link rel="modulepreload" href="/_frsh/js/6ccb6a4ec3d0938c1755be940003efeab914eac4/main.js"/>
        <link rel="modulepreload" href="/_frsh/js/6ccb6a4ec3d0938c1755be940003efeab914eac4/chunk-2GUEMEWN.js"/>
        <link rel="modulepreload" href="/_frsh/js/6ccb6a4ec3d0938c1755be940003efeab914eac4/chunk-FWJUUQIY.js"/>
        <link rel="modulepreload" href="/_frsh/js/6ccb6a4ec3d0938c1755be940003efeab914eac4/island-agendamanager.js"/>
        <link rel="modulepreload" href="/_frsh/js/6ccb6a4ec3d0938c1755be940003efeab914eac4/chunk-KMVKBWY4.js"/>
    </head>
    <body>
        <div f-client-nav class="layout">
            <div class="header">
                <a href="/agendacsr" data-current="true" aria-current="page">Agenda Client Side</a>
                <a href="/agendassr">Agenda Server Side</a>
            </div>

            <h1>My Agenda</h1>
            <div class="agendaForm">
                <h2>Add new contact</h2>
                <input type="text" placeholder="Name" value/>
                <input type="email" placeholder="Email" value/>
            
                <button>Add contact</button>

            </div>
        </div>
        
    </body>
</html>
);
}