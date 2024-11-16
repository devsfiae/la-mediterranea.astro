---
marp: true
theme: default
size: A4
paginate: true
---

# La Mediterranea - Entwicklung eines Online-Tischreservierungssystems

---

## [La Mediterranea][10] ist ein Restaurant und eine Bar am Strand von Es Pujols auf Formentera

![La Mediterranea][10]

---

## Prüfungsbewerber

Hiba Al Anssari, Irina Zittlau, Puya Khandany und [Heiko Fanieng][21]

---

## Inhaltsverzeichnis

- [La Mediterranea - Entwicklung eines Online-Tischreservierungssystems](#la-mediterranea---entwicklung-eines-online-tischreservierungssystems)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [1. Projekteinführung](#1-projekteinführung)
    - [1.1 Projektumfeld](#11-projektumfeld)
    - [1.2 Projektumsetzung](#12-projektumsetzung)
    - [1.3 Projektziel](#13-projektziel)

---

- [2. Projektanalyse](#2-projektanalyse)
  - [2.1 Ist-Analyse](#21-ist-analyse)
  - [2.2 Soll-Analyse](#22-soll-analyse)
  - [2.3. Projektbegründung](#23-projektbegründung)
  - [2.4. "make or buy"-Entscheidung](#24-make-or-buy-entscheidung)

---

- [3 Projektplanung](#3-projektplanung)
  - [3.1. Projektphasen](#31-projektphasen)
  - [3.2 Ressourcenplanung](#32-ressourcenplanung)
  - [3.3 Zielplattformen](#33-zielplattformen)
  - [3.4 Architekturdesign](#34-architekturdesign)
  
---

- [4. Projektentwicklung](#4-projektentwicklung)
  - [4.1 Datenerhebung](#41-datenerhebung)
  - [4.1.1 Datenermittlung](#411-datenermittlung)
  - [4.1.2 Datenbankanalyse](#412-datenbankanalyse)
    - [4.2 Datenbankentwicklung](#42-datenbankentwicklung)
    - [4.3 SQL Abfrage konzipieren und als PHP-Script in besthehnde Website integrieren](#43-sql-abfrage-konzipieren-und-als-php-script-in-besthehnde-website-integrieren)
    - [4.4 Anwendungsentwicklung mit Python](#44-anwendungsentwicklung-mit-python)
      - [4.4.1 Modellierung, Klassen etc. erstellen](#441-modellierung-klassen-etc-erstellen)
      - [4.4.2 Entwurf der Benutzeroberfläche erstellen](#442-entwurf-der-benutzeroberfläche-erstellen)
      - [4.4.3 Entwicklung der Form und Methoden](#443-entwicklung-der-form-und-methoden)
      - [4.4.4 Benutzerfreundlichkeit](#444-benutzerfreundlichkeit)
    - [4.5 Qualitätsmanagement](#45-qualitätsmanagement)
      - [4.5.1 Testphase](#451-testphase)
      - [4.5.2 Fehleranalyse / -Korrektur](#452-fehleranalyse---korrektur)

---

- [5. Abschluss](#5-abschluss)
  - [5.1 Soll-/Ist-Vergleich](#51-soll-ist-vergleich)
  - [5.2 Kosten- und Nutzenanalyse](#52-kosten--und-nutzenanalyse)
  - [5.3 Zukunftsausblick](#53-zukunftsausblick)

---

- [6. Anhang](#6-anhang)
  - [6.1 Glossar](#61-glossar)
  - [6.2 Literaturverzeichnis](#62-literaturverzeichnis)
  - [6.3 Darstellungsverzeichnis](#63-darstellungsverzeichnis)
  - [6.4 Vergleich zwischen Zeitplanung und Zeitbedarf](#64-vergleich-zwischen-zeitplanung-und-zeitbedarf)
  - [6.5 Vergleich zwischen über Papierkalender verwelteten Reservierung und der mit Softwarelösung bearbeiteten Reservierungen](#65-vergleich-zwischen-über-papierkalender-verwelteten-reservierung-und-der-mit-softwarelösung-bearbeiteten-reservierungen)
  - [6.6 Benutzerdokumentation](#66-benutzerdokumentation)
  - [6.7 ER- und UML-Diagramme](#67-er--und-uml-diagramme)
    - [6.7.1 Entity Relationship Model](#671-entity-relationship-model)
    - [6.7.2 Programmablaufplan](#672-programmablaufplan)
    - [6.7.3 UML-Anwedungsfalldiagramm](#673-uml-anwedungsfalldiagramm)
    - [6.7.4 UML-Klassendiagramm](#674-uml-klassendiagramm)
  - [6.8 Quellcode](#68-quellcode)
    - [6.8.1 PHP-Script zum Abruf der Cocktails](#681-php-script-zum-abruf-der-cocktails)

---

## 1. Projekteinführung

Die folgende Projektdokumentation wurde als virtuelles Laborprojekt erstellt, welches die Verfasser während ihrer Umschulung zur Fachinformatikerin/zum Fachinformatiker Anwendungsentwicklung selbstständig durchgeführt haben.  

Inititator und Projektbegleiter ist unser Dozent [Dr. Holger Kramer][20] - welcher uns im [Projektmanagement][1], in der Programmierung von [Python][2] und der [objektorientierten Programmierung][3] unterrichtet.

---

### 1.1 Projektumfeld

Unser multilinguales und multikulturelles Entwicklerteam aus 4 Nationen ist spezialisiert auf individuelle Kundenlösungen in der Gastronomie und der Veranstaltungstechnik.  
Im Angebot befinden sich Lösungen für Bars, Restaurants, Diskotheken und Veranstaltungen wie Konzerte oder DJ-Events.

---

### 1.2 Projektumsetzung

Die Projektumsetzung findet online statt, die Projektteilnehmer nutzen [Microsoft Teams][4] und [GitHub][5] zur gemeinsamen Durchführung der Programmiertätigkeiten.  
Sämtliche Programmiertätigkeiten sowie Tests und Anpassungen wurden durch Hiba, Irina, Puya und Heiko durchgeführt.

---

### 1.3 Projektziel

Es soll eine Anwendung zur Verfügung gestellt werden, in welcher sich Kunden auf einfache Weise über die Website des Auftraggebers einen Tisch im Restaurantsbereich reservieren können.  
Zusätzlich sollen die Reservierung über eine App auf dem Restaurant-Desktop-PC über entsprechende Masken bearbeitet werden können.  
Dieses Ziel erfordert eine neu entwickelte Software mit Benutzeroberfläche und entsprechender Auswahl- und Bearbeitungsmöglichkeit (Web und App) für die Benutzer.

---

## 2. Projektanalyse

### 2.1 Ist-Analyse

Die Reserverierungen werden analog (per Telefon/im Restaurant) entgegengenommen und auf einem Papierkalender im Empfangsbereich eingetragen.  

Hierdurch ist die Bearbeitung der Reservierungen nur an diesem zentralen Platz möglich.

### 2.2 Soll-Analyse

Mit einem Online-Reservierungssystem soll eine Terminerfassung bzw. Vergabe sowohl von Kunden als auch Mitarbeitenden dezentral möglich sein.  

Hierzu soll die Software die Möglichkeit bieten, verfügbare Plätze auswählen zu können diese sowoh zu reservieren als auch zu stornieren.

---

### 2.3. Projektbegründung

Die Kunden von La Meditteranea können ausschließlich per Telefon oder im Gespräch mit den Mitarbeitenden
Reservierungen durchführen. Reservierungen sind daher nur während der Öffnungszeiten möglich.

Durch die Softwarelösung können nun sowohl Kundinnen und Kunden als auch die Mitarbeitenden rund um die Uhr und an jedem Tag der Woche sowohl Reservierungen vornehmen als auch bearbeiten bzw. stornieren.

Durch die zentrale Speicherung in einer Datenbank können die Daten sowohl gesichert als auch von den Mitarbeitenden ausgewertet werden.  

Wichtigste Verbesserungen sind hier die ständige Verfügbarkeit der Reservierungsmöglichkeit, die Zeit- und Aufwandseinsparung bei den Mitarbeitenden und eine Sicherung der Reservierungsdaten.  

Die gute Kundenbindung soll verbessert werden und neue Kundinnen und Kunden gewonnen werden. Anhand der Daten kann zukünftig ein CRM entwickelt werden.

---

### 2.4. "make or buy"-Entscheidung

Bei diesem Projekt handelt es sich um eine Individuallösung. Nachdem diverse Tools und Programme zum Reservieren getestet und verglichen wurden, ist aus wirtschaftlichen und individuellen Gründen die Entscheidung für eine Eigenentwicklung gefallen.  

Die getesteten Tools entsprachen nicht den Vorstellungen an die Anpassbarkeit und Auswertungsmöglichkeiten, welche gewünscht sind und wären daher auch finanziell gesehen nicht sinnvoll gewesen.  

Ein großer Vorteil ist hierbei auch die individuell anpassbare Schnittstelle zur internen MySQL-Datenbank, welche bereits die Inhalte für die Website ausliefert.

---

## 3 Projektplanung

### 3.1. Projektphasen

Dem Projektteam stehen analog den IHK Vorgaben 80 Stunden Arbeitszeit pro Person zur Verfügung. Die Durchführung des Projektes findet innerhalb des ersten Jahres der Umschulung statt.  

Die Stunden werden über diesen Zeitraum verteilt, da "im Tagesgeschäft" mehrere Unterrichtseinheiten absolviert werden und dadurch noch zusätzliche Projekte bearbeitet werden müssen.

|Projektphase|Geplante Dauer in Stunden|
|---|---|
|Analysephase|24|
|Planungsphase / Entwurfsphase|32|
|Entwicklungsphase|216|
|Testphase|16|
|Fehleranalyse|8|
|Vorstellung und Abnahme|4|
|Projektdokumentation|20|
|__Gesamtdauer__|__320__|

---

### 3.2 Ressourcenplanung

Die Projektumsetzung findet online unter Nutzung von Microsoft Teams und GitHub sowie den Endgeräten der Umschülerinnen und Umschüler Hiba, Irina, Puya und Heiko statt.

Als installierte Betriebssysteme wurden Windows 11 Professional, MacOS X und Ubuntu-Linux in den jeweils aktuellen Versionen eingesetzt.

Zur Entwicklung wurde eine Python-, MySQL-, HTML-, PHP- und CSS-fähige Entwicklungsplattform benötigt, verwendet wurde [Microsoft Visual Studio Code][6] in der aktuellsten Version.

Bei der verwendeten Software und den Plugins sowie Frameworks wurde darauf geachtet, dass diese kostenlos zur Verfügung stehen bzw. sowieso schon lizenziert sind oder eingesetzt werden.  

So entstehen dem Projekt-Team durch die Entwicklung der neuen Software keine zusätzlichen Kosten.

---

### 3.3 Zielplattformen

Als Zielplattformen wurde [Microsoft Windows 11][7] gewählt, da alle vorhanden PCs in der Bar/dem Restaurant mit Windows 11 als Betriebssystem arbeiten. Die Nutzung der Weboberfläche ist Plattformunabhängig.

Optional ist auch eine Umsetzung auf die gängigen weiteren Betriebssysteme wie MacOS, iOS, Linux, Android möglich.

Als Programmiersprachen wurde sich für Python, PHP, HTML, CSS und (My)SQL entschieden, da für dies Programmiertätigkeiten bereits genug know-how vorhanden bzw. aktuell im Aufbau ist.  

Mit den gewählten Programmiersprechen und der MySQL-Datenbank können alle erforderlichen und gewünschten Ziele umgesetzt werden. Erstellt wurde das Projekt als Desktop-App mit der Python Version 3.12.4 und als Web-App mit PHP Version 8.20.

---

### 3.4 Architekturdesign

Das Projekt basiert auf dem Architekturprinzip MVC (Model-View-Controller). Die Software lässt sich gemäß diesem Muster in die drei Bereiche Model (Datenaufbereitung), View (Präsentation) sowie Controller (Anwendungssteuerung) unterteilen. Aus dieser Trennung ergeben sich einige Vorteile wie bessere Wartbarkeit, Lesbarkeit und Erweiterbarkeit. Da die Logik von der Darstellung getrennt ist, kann man etwa die Oberfläche leicht austauschen, ohne tiefer in den logischen Bereich der Software vordringen zu müssen.

---

## 4. Projektentwicklung

...

---

### 4.1 Datenerhebung

#### 4.1.1 Datenermittlung

Auf Basis der vorliegenden analogen Daten aus alten Kalendern wurde sich ein grober Überblick über die bisher vorliegenden Kundendaten verschafft. Bisher liegen nur Daten wie Vor- und Nachname und Telefon-Nummern aus der Vergangenheit vor.

#### 4.1.2 Datenbankanalyse

Die Analyse der Kundenddaten gestalte sich aufwendiger, da diese nur in analoger Form von handschriftlichen Kalendereinträgen vorlagen. In der zu entwickelnden Datenbank soll zukünftig die eMail-Adresse als Eineindeutiger Identifikator verwendet werden und eine Kundennummmer als UniqueID automatisch generiert werden.

### 4.2 Datenbankentwicklung

- ERM-Model
- Design
- Umsetzung

### 4.3 SQL Abfrage konzipieren und als PHP-Script in besthehnde Website integrieren

Für die zu entwickelnde Datenbank sind die vorhandenen HTML-Seiten auf PHP umzustellen und die Abfragen in diese zu integrieren.

### 4.4 Anwendungsentwicklung mit Python

#### 4.4.1 Modellierung, Klassen etc. erstellen

- UML Diagramme erstellen (Klassendiagramm, Aktivitätsdiagramme, PAP)

#### 4.4.2 Entwurf der Benutzeroberfläche erstellen

- GUI unter Benutzung des Moduls Tkinter? erstellen

#### 4.4.3 Entwicklung der Form und Methoden

- Beim Start der App soll direkt eine Übersicht der aktuellen Reservierungen angezeigt werden

- Beim Aufruf der Reservierungs-Seite auf der Website soll eine auf die Kundensicht angepasste Übersicht der Reservierungsmöglichkeiten angezeigt werden.

#### 4.4.4 Benutzerfreundlichkeit

- Zum Zwecke des besseren Anwendererlebnis mit der Benutzeroberfläche wurde nach Rückmeldung der Anwender noch Verbesserungen an den Eingabemasken vorgenommen.

### 4.5 Qualitätsmanagement

#### 4.5.1 Testphase

Der Großteil der Testphase wurde vom Entwicklerteam selbst vorwiegend während der Entwicklungsphase in White-Box-Tests durchgeführt.  

Nach Fertigstellung der Anwendung fanden Black-Box-Tests durch weitere Umschülerinnen und Umschüler so wie Freunde, Bekannte und Familienmitglieder statt, welche aber keine weiteren Programmfehler zu Tage förderten.

#### 4.5.2 Fehleranalyse / -Korrektur

Da die Software von den Autoren bereits während der Entwicklung regelmäßig geprüft und korrigiert wurde,
fällt dieser Punkt recht knapp aus. Gründe für Abstürze wurden während der Entwicklungszeit fortwährend behoben,
während der Testphase liefen sowohl die Windows-Desktop-App als auch die Web-App recht stabil.

---

## 5. Abschluss

### 5.1 Soll-/Ist-Vergleich

Die Projektdauer konnte im Großen und Ganzen eingehalten werden, im Detail der veranschlagten Zeitplanung gab es wie
erwartet Abweichungen. Dadurch, dass während des Entwicklungsprozesses Material aus den Aufgaben im Unterreicht
verwendet werden konnte und bereits viel getestet wurde, verschob sich der anteilige Zeitbedarf von der reinen
Testphase hin zur Entwicklungs- und Dokomentationsphase.

---

### 5.2 Kosten- und Nutzenanalyse

Eine Kosten- und Nutzenrechnung sowie eine Amortisationsrechnung können in diesem Fall nicht erstellt werden. Kosten für das Projekt werden mit den investierten Arbeitsstunden außerhalb der normalen Umschulungszeiten in Relation gesetzt und Preise werden nicht kalkuliert, da es sich um ein reines Labor-Projekt handelt. Auch dadurch, dass man den Mehrwert im Vergleich zur vorhergehenden Arbeitsweise nicht direkt in Zahlen gemessen werden kann, wird auf diese Rechnungen verzichtet.

Der Nutzen des Online-Reservierungssystem liegt ganz in einer höheren Verfügbarkeit (24h/7d) für Kundinnen, Kunden und Mitarbeitende.

---

### 5.3 Zukunftsausblick

Das Online-Reservierungssystem ist die Basis für die Digitalierung, hieraus kann zukünftig eine Kundendatenbank entwickelt werden um die Kunden z. B. durch Einwilligung zu einem Newsletter über aktuelle Entwicklungen (geänderte Öffnungszeiten, aktualisierte Speisekarten und Angebote) zu informieren. Für das Projekt-Team ist damit die Basis als "Blaupause" für die angestrebte IHK-Abschlussprüfung geschaffen.

---

## 6. Anhang

### 6.1 Glossar

|Begriff|Erklärung|
|---|---|
|Android|Android ist ein Betriebssystem für mobile Geräte, das von Google entwickelt wurde und auf dem Linux-Kernel basiert|
|Black-Box-Test|Methode des Softwaretests, bei der die Tester die Anwendung ohne Kenntnissedes Programmcodes die Funktionalität überprüfen|
|CSS| Cascading Style Sheets ist eine der Kernsprachen des World Wide Webs. Mit CSS können Darstellungsanweisungen, vor allem im Einsatz mit HTML, weitgehend von Inhalten getrennt werden|
|CRM|Kundenbeziehungsmanagement (CRM) ist ein System zur Verbesserung der Geschäftsbeziehungen durch die Analyse von Kundendaten|
|DBMS|Datenbankmanagementsystem ist eine (je nach Anwendung auf Webserver oder Workstation installierte) Software, die sich um das Speichern, die Organisation und die Zugriffsrechte der Datenbasis der Datenbank(en) kümmert|
|GUI|Graphical User Interface, die grafische Benutzeroberfläche einer Software|
|HTML|Hypertext Markup Language ist eine textbasierte Auszeichnungssprache und Kernsprache des World Wide Web. HTML-Dokumente werden von Webbrowsern dargestellt|
|iOS|iOS ist ein Betriebssystem, das von Apple für seine mobilen Geräte wie iPhone und iPad entwickelt wurde|
|MacOS|MacOS ist ein Betriebssystem von Apple, das speziell für ihre Macintosh-Reihe von Personalcomputern und Workstations entwickelt wurde|
|MVC|Model View Controller ist ein Entwurfsmuster zur logischen Unterteilung von Programmcode zur besseren Lesbarkeit, Erweiterbarkeit und Wartbarkeit|
|OOP|Objektorientierte Programmierung ist ein Programmierprinzip, bei dem Daten und Programmcode in übersichtliche, wiederverwendbare Module gekapselt werden. Dies soll Programmieraufwand reduzieren, die Lesbarkeit des Codes erhöhen und helfen Fehler zu vermeiden|
|PDO|Die PHP Data Objects-Erweiterung ist eine Schnittstelle, um mit PHP auf Datenbanken zuzugreifen|
|PHP|PHP (Hypertext Preprocessor) ist eine Skriptsprache für die Webprogrammierung. PHP-Code wird hauptsächlich zur Erstellung dynamischer Webseiten verwendet|
|phpMyAdmin|Freie Websoftware zur Administration von MySQL-Datenbanken. Die Software ist in PHP programmiert, daher der Name|
|Python|Python ist eine interpretierte, interaktive und objektorientierte Programmiersprache, die sich durch ihre klare und lesefreundliche Syntax auszeichnet und häufig für Webentwicklung, Datenanalyse, maschinelles Lernen und viele andere Arten von Softwareentwicklung verwendet wird|
|Query|Eine spezifisch gestellte Anfrage an die Datenbank zum gezielten Auslesen und Extrahieren aus Datenbanken|
|Skriptsprache|Programmiersprache, mit der meist kleine Anwendungen oder Anweisungsfolgen erstellt werden und nicht mit einem Compiler, sondern von einem Interpreter direkt zur Laufzeit ausgeführt werden|
|SQL|Structured Query Language, Programmiersprache für den Zugriff auf Datenbanksysteme|
|SQL-Injection|Angriffstechnik, mit der Sicherheitslücken in Anwendungen ausgenutzt werden, um Daten in Datenbanken auszuspähen oder zu manipulieren|
|URL|Uniform Resource Locator, Adressierungsform mit eindeutiger Bezeichnung für Internetadressen|
|White-Box-Test| Methode des Softwaretests, bei der die Tester die Anwendung mit Einblick in den Programmcode überprüfen|

### 6.2 Literaturverzeichnis

### 6.3 Darstellungsverzeichnis

- Seite 3: Tabelle mit der Zeitplanung der Projektphasen

### 6.4 Vergleich zwischen Zeitplanung und Zeitbedarf

|Projektphase|Geplante Dauer in Stunden|Tatsächliche Dauer in Stunden|
|---|---|---|
|Analysephase|24||
|Planungsphase / Entwurfsphase|32||
|Entwicklungsphase|216||
|Testphase|16||
|Fehleranalyse|8||
|Vorstellung und Abnahme|4||
|Projektdokumentation|20||
|__Gesamtdauer__|__320__||

### 6.5 Vergleich zwischen über Papierkalender verwelteten Reservierung und der mit Softwarelösung bearbeiteten Reservierungen

...

### 6.6 Benutzerdokumentation

...

### 6.7 ER- und UML-Diagramme

#### 6.7.1 Entity Relationship Model

![ERM][11]

#### 6.7.2 Programmablaufplan

![PAP][12]

#### 6.7.3 UML-Anwedungsfalldiagramm

![Use Case][13]

#### 6.7.4 UML-Klassendiagramm

```mermaid
classDiagram
    class Restaurant {
        +String name
        +String address
        +String[] openDays
        +String[] openTimes

        +void addTable(Table table)
        +void addEmployee(Employee employee)
        +void makeReservation(Reservation reservation)
        +void cancelReservation(Reservation reservation)
    }

    class Table {
        +int tableNumber
        +int capacity

        +boolean isAvailable(String date, String time)
        +void reserve(String date, String time)
        +void release(String date, String time)
    }

    class Employee {
        +String name
        +String role

        +void performDuty()
    }

    class Manager {
        +void manageRestaurant()
    }

    class Cook {
        +void prepareMeal()
    }

    class ServiceStaff {
        +void serveCustomer()
    }

    class Reservation {
        +String customerName
        +String date
        +String time
        +int numberOfPeople
        +Table table

        +void confirm()
        +void cancel()
    }

    Restaurant "1" -- "4" Table : has
    Restaurant "1" -- "4" Employee : employs
    Employee <|-- Manager
    Employee <|-- Cook
    Employee <|-- ServiceStaff
    Reservation "1" -- "1" Table : reservedFor
    Restaurant "1" -- "many" Reservation : manages
```

### 6.8 Quellcode

### 6.8.1 PHP-Script zum Abruf der Cocktails

```php
<?php
    $servername = "localhost";
    $username = "********";
    $password = "********";
    $dbname = "********";

    // Erstellung der Datenbank-Verbindung
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Überprüfung der Verbindung
    if ($conn->connect_error) {
        die("Verbindung fehlgeschlagen: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM cocktails";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Ausgabe der Daten jeder Zeile
        while($row = $result->fetch_assoc()) {
            echo "<p>#". $row["cocktail_id"]. " " . $row["cocktail_name"]. " | ";
            echo $row["cocktail_description"]. " | ";
            echo "€ ". $row["price"]. "/ ". $row["volume"]. "l</p>";
        }
    } else {
        echo "0 Ergebnisse";
    }
    $conn->close();
?>
```

[1]: https://de.wikipedia.org/wiki/Projektmanagement
[10]: public/images/slides/dj_dayandnight.png
[11]: public/images/slides/beachbar.png
[12]: img/pap.png
[13]: img/use_case.png
[2]: https://de.wikipedia.org/wiki/Python
[20]: https://www.linkedin.com/in/dr-holger-kramer-74478a179/
[21]: https://www.linkedin.com/in/hfanieng
[3]: https://de.wikipedia.org/wiki/Objektorientierte_Programmierung
[4]: https://de.wikipedia.org/wiki/Microsoft_Teams
[5]: https://de.wikipedia.org/wiki/GitHub
[6]: https://code.visualstudio.com
[7]: https://de.wikipedia.org/wiki/Windows_11
