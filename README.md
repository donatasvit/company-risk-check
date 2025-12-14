# Įmonių rizikos analizė (DEMO prototipas)

**Autorius:** Donatas Vitenas  
**Statusas:** DEMO / Phase 1  
**Veikimo principas:** vietinis (naršyklėje), be serverio ir be API

---

## Projekto aprašymas

Šis projektas yra **asmeninis prototipas**, skirtas pademonstruoti **įmonių rizikos vertinimo logiką**, struktūrizuotą analizę ir automatizuotų **B2B laiškų** generavimą.

Visa sistema veikia **lokaliai naršyklėje (client-side)**:
- be serverio  
- be duomenų bazių  
- be išorinių API  

Projektas skirtas **demonstracijai, koncepcijos validacijai ir kompetencijų parodymui**, o ne komerciniam naudojimui.

---

## Ką šis prototipas daro

- Leidžia įvesti įmonės pavadinimą, šalį / regioną ir kontekstą  
- Atlieka **lokalią rizikos analizę** pagal taisyklių (rule-based) logiką  
- Sugeneruoja:
  - bendrą rizikos balą  
  - rizikos lygį  
  - trumpą rizikos komentarą  
  - struktūruotą analizės santrauką  
- Automatiškai parengia **B2B laiško šabloną** pagal:
  - rizikos lygį  
  - pasirinktą toną (neutralus / griežtesnis / šiltesnis)  
- Saugo analizės istoriją **tik naudotojo naršyklėje (localStorage)**

---

## Kodėl ši versija yra DEMO (be API)

Šiame projekte **sąmoningai nenaudojami oficialūs API**  
(VMI, Sodra, VIES, ES sankcijos, kreditingumo duomenys ir pan.).

### Priežastys:
- Tokie duomenys reikalauja **juridinio asmens**
- Reikalingos sutartys, mokamos prieigos ir teisinė atsakomybė
- Fizinis asmuo realiai negali iki galo užbaigti tokio sprendimo teisėtai ir finansiškai

### Todėl ši versija:
- demonstruoja **logiką, struktūrą ir UX**
- aiškiai atskiria **koncepciją nuo realių duomenų integracijos**
- palikta kaip **Phase 1 – vietinis prototipas**

Tai **nėra techninis trūkumas**, o **architektūrinis sprendimas**.

---

## Kam skirtas šis projektas

- HR vadovams – kompetencijų vertinimui  
- Verslo / IT vadovams – sprendimo koncepcijai  
- B2B procesų analizei  
- Asmeninio portfelio demonstracijai  
- Diskusijai apie galimą produkto vystymą juridinio asmens lygmenyje  

---

## Techniniai akcentai

- HTML / CSS / JavaScript  
- Visa logika vykdoma naršyklėje  
- Be serverio  
- Be API  
- Be išorinių bibliotekų  
- Duomenys saugomi tik lokaliai (`localStorage`)  

---

## Ateities kryptis (neįgyvendinta šiame etape)

Galimi tolesni etapai:
- **Phase 2:** juridinis asmuo + oficialių API integracija  
- **Phase 3:** server-side rizikos variklis ir duomenų bazė  

Šiame projekte tai **sąmoningai neįgyvendinta**.

---

## Pastaba

Šis projektas yra **nekomercinis** ir skirtas demonstraciniams tikslams.  
Jis **nerodo realių įmonių finansinių ar teisinių duomenų**.

---

© Donatas Vitenas

---

---

# Company Risk Analysis (DEMO Prototype)

**Author:** Donatas Vitenas  
**Status:** DEMO / Phase 1  
**Execution model:** Client-side (browser only), no server, no API

---

## Project Overview

This project is a **personal prototype** created to demonstrate **company risk assessment logic**, structured analysis, and automated **B2B email generation**.

The entire system runs **locally in the browser (client-side)**:
- no backend server  
- no databases  
- no external APIs  

The project is intended for **demonstration, concept validation, and portfolio purposes**, not for commercial use.

---

## What this prototype does

- Allows input of company name, country/region, and business context  
- Performs **local rule-based risk analysis**  
- Generates:
  - overall risk score  
  - risk level  
  - short risk commentary  
  - structured analysis summary  
- Automatically creates **B2B email drafts** based on:
  - risk level  
  - selected communication tone (neutral / stricter / warmer)  
- Stores analysis history **only in the user's browser (`localStorage`)**

---

## Why this is a DEMO version (no API)

This project **intentionally does not use official APIs**  
(tax authorities, company registries, sanctions lists, credit bureaus, etc.).

### Reasons:
- Such data requires a **legal entity**
- Paid access, contracts, and legal responsibility are required
- A private individual cannot realistically complete such a system legally or financially

### Therefore, this version:
- demonstrates **logic, structure, and UX**
- clearly separates **concept from real data integration**
- remains **Phase 1 – a local prototype**

This is **not a technical limitation**, but a **deliberate architectural decision**.

---

## Intended audience

- HR managers – competency and thinking assessment  
- Business / IT decision-makers – concept evaluation  
- B2B process analysis  
- Personal portfolio presentation  
- Discussion of potential future product development

---

## Technical highlights

- HTML / CSS / JavaScript  
- Fully client-side execution  
- No backend  
- No APIs  
- No external libraries  
- Data stored locally (`localStorage`)  

---

## Future directions (not implemented)

Possible next phases:
- **Phase 2:** Legal entity + official API integrations  
- **Phase 3:** Server-side risk engine and database  

These steps are **intentionally out of scope** for this project.

---

## Disclaimer

This project is **non-commercial** and intended for demonstration purposes only.  
It does **not display real financial or legal company data**.

---

© Donatas Vitenas
