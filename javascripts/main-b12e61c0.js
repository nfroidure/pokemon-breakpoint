function gottaCatchThemAll(e){var a=document.getElementById(e),t=window.getComputedStyle(a,":after").getPropertyValue("content");return t}function pokeball(){var e=gottaCatchThemAll("media-query--name");'"salameche"'==e&&alert("Je suis le pokemon "+e+" correspondant à un smartphone"),'"reptincel"'==e&&alert("Je suis le pokemon "+e+" correspondant à une tablette"),'"dracaufeu"'==e&&alert("Je suis le pokemon "+e+" correspondant à un écran de bureau"),'"dracaufeu_flame"'==e&&alert("Je suis le pokemon "+e+" et j'envoie plein de flammes car j'ai plein de place"),'"dracaufeu_vol"'==e&&alert("Je suis le pokemon "+e+" et je m'envolle dans les air en format paysage")}