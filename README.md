# MMI Demo project

Demo Project for MMI WS 26/27. We will use this project to apply theoretical knowledge (e.g. versioning via Git, Refactoring, Unit Tests, Usability Tests)

## Etivity 12 – Unit-Tests zur Temperaturumrechnung

Eigene Arbeitskopie des [Demoprojekts von moniSt13](https://github.com/moniSt13/MMI_WS23_24),
übernommen als ZIP aus dem Stand `5a83d8ce55d78fa3fcc1aa64c8f9ecf60a495261`.
Für die Übung wurde Schwierigkeitsstufe **2a** gewählt: zwei Funktionen in
`public/js/auxiliaryAPI.js` mit acht Unit-Tests in `tests/controllerTest.js`.

### Ausführen

Voraussetzung: Node.js und npm. Im Projektordner:

```sh
npm ci
npm run test:temperature
```

`npm test` führt zusätzlich die vorhandenen Beispieldateien aus. Dabei startet
`connectionTest.js` durch seinen Import kurz den Webserver auf Port 8080;
das vorhandene `--exit` beendet den Testlauf. Die Temperaturtests allein
benötigen keinen Server und keine Browseroberfläche.

### Testfälle

Die erwarteten Werte sind unabhängig von der Implementierung festgelegt.
Bei den beiden Dezimalfällen wird mit `closeTo(..., 1e-10)` eine kleine
Rundungstoleranz zugelassen.

| Richtung | Eingabe | Erwartetes Ergebnis |
|---|---:|---:|
| Celsius → Fahrenheit | 0 | 32 |
| Celsius → Fahrenheit | 100 | 212 |
| Celsius → Fahrenheit | −40 | −40 |
| Celsius → Fahrenheit | 37 | 98,6 |
| Fahrenheit → Celsius | 32 | 0 |
| Fahrenheit → Celsius | 212 | 100 |
| Fahrenheit → Celsius | −40 | −40 |
| Fahrenheit → Celsius | 98,6 | 37 |

### Gefundene Fehler und Korrektur

1. `celsiusToFahrenheit(x)` griff auf die nicht definierte Variable `celsius`
   zu. Der Parameter heißt nun ebenfalls `celsius`.
2. In dieser Funktion stand zusätzlich `+ 10` statt `+ 32`.
3. `fahrenheitToCelcius()` dividierte durch `5 / 9`, statt damit zu multiplizieren.

Verwendete Formeln: `F = C * (9 / 5) + 32` und `C = (F - 32) * (5 / 9)`.
Die bestehende Schreibweise `fahrenheitToCelcius` bleibt erhalten, damit die
bereits vorhandenen Aufrufe weiterpassen.

### Tatsächlich ausgeführte Testläufe am 29.10.2026

| Lauf | Bestanden | Fehlgeschlagen |
|---|---:|---:|
| Acht Temperaturtests gegen den Originalcode | 1 | 7 |
| Dieselben Temperaturtests nach der Korrektur | 8 | 0 |
| Vollständiger Testlauf nach der Korrektur, einschließlich Summenbeispiel | 9 | 0 |

Im Original warf jeder Celsius-Test einen `ReferenceError`. Dieser Fehler
verdeckt zunächst den falschen Summanden. Bei Fahrenheit bestand nur der
Fall `32 → 0`: Hier liefert auch die falsche Formel zufällig das richtige
Ergebnis. Für `212 → 100` lieferte der Originalcode dagegen `324`.

Getestet mit Node.js 24.22.1, Mocha 9.2.2 und Chai 4.3.10. Die Tests prüfen
ausschließlich die beiden Umrechnungen für die angegebenen Zahlenwerte;
weitere Funktionen und das Verhalten bei ungültigen Eingaben sind nicht
Gegenstand dieser Erweiterung.

