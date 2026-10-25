# Läkemedelshantering – studentguide

Statisk version av studentguiden för GitHub Pages. Sidan använder vanlig HTML, CSS och JavaScript och behöver ingen byggprocess.

## Innehåll

- Startsida med introduktion och länkar till fyra delar
- Separata sidor för varje del, med poddspelare, lärandemål, situationer och läsanvisningar
- Ljudfiler som ligger i `audio/`
- GitHub Actions-workflow som publicerar webbplatsen när ändringar skickas till `main`

## Publicering

Lägg filerna i ett GitHub-repository och välj **GitHub Actions** som källa under repositoryts Pages-inställningar. Workflowen i `.github/workflows/pages.yml` sköter därefter publiceringen.

När sidan publiceras från ett repository som heter `namn.github.io` får den adressen `https://namn.github.io/`. För ett vanligt repository blir adressen `https://namn.github.io/repositorynamn/`.

## Uppdatera ljud

Ljudspåren ligger i `audio/` i fyra mappar. Behåll mappnamn och filnamn, eftersom spelaren hämtar spåren från dessa sökvägar.

## Innehåll och målgrupp

Materialet är en studentguide inför läkemedelshantering under handledning i VFU. Fallen är märkta **Röntgen** och **Klinisk fysiologi**.
