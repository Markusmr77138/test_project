# test_project

## git clone
nytt prosjekt = clone for å koble sammen git hub og den mappen som skal inneholde kodene. Trenger bare gjøres første gang. Oprette. 

    git clone "kopier koden fra github" 

## git status
Få en status om filene er lagret/addet eller ikke. Blir rød eller grønn. 

    git status
## git add
Lagrer endringene i filen som du adder

    git add "filnavn"

## git commit
Her legger jeg de lagrede filene i en boks og forklarer hva jeg har gjort. checkpint. 

    git commit -m "Tittel" -m "innhold" -m "skrevet av?"

## git push
Her blir det som er lagret sendt til den branchen du selv velger, som er på github. 

    git push 

## git push til branch
Dette skjer om man lager nye brancher første gang. Da må jeg endre til hvor jeg skal pushe. Skriv koden, så blir "arbeidet som har blitt commitet" pushet til branchen. 

    git push --set-upstream origin "branch navnet"

## git branch
Oversikt over hilken branch jeg er på og hvilke som eksisterer. Main skal være den oppdaterte

    git branch

## git branch "branch navn" 
Nå lager jeg en ny branch med nytt navn, en ny "fil"

    git branch "branch navn"

## git checkout "branch navn"
for å gå til branchen du vil skriv dette, med hvilken branch du skal til

    git checkout "branch navn"

## git merge 

Gå alltid til main branchen, deretter merge for å koble branchen inn til main. 

    git checkout main

<br>
    
    git merge "branch navn"








