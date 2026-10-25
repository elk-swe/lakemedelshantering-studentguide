(function () {
  "use strict";
  const courseIntro = [
    "Som blivande röntgensjuksköterska eller biomedicinsk analytiker med inriktning fysiologi möter du läkemedel i flera delar av arbetet. Det kan vara kontrastmedel vid en radiologisk undersökning eller ett läkemedel vid en farmakologisk belastning. Även läkemedel patienten redan använder kan vara relevanta för förberedelserna och säkerheten kring undersökningen.",
    "Säker läkemedelshantering omfattar hela förloppet: att förstå ordinationen, göra i ordning och ge läkemedlet, dokumentera det som utförts och följa patientens tillstånd. Du behöver därför förena kunskaper om anatomi, fysiologi och farmakologi med praktiska färdigheter. Patientens berättelse, till exempel om en tidigare reaktion, kan vara viktig information att föra vidare.",
    "I de fyra delarna går du från ansvar och behörighet till kontroller, beräkningar, administrering och uppföljning. Börja med introduktionen, lyssna på podden och använd läsanvisningarna och situationerna för att pröva ditt resonemang. Som student deltar du under tillsyn av behörig legitimerad personal. Stanna upp och be om stöd när något är oklart."
  ];
  const parts = [
    {
      slug: "ansvar-behorighet-studentroll", title: "Ansvar, behörighet och studentrollen", shortTitle: "Ansvar, behörighet och studentrollen", icon: "✳", duration: "19:08", audioTracks: 5,
      card: "Börja med att förstå ansvarsfördelningen och vad det innebär att delta under tillsyn i VFU.",
      intro: [
        "När du möter läkemedelshantering under utbildningen behöver du förstå både vad arbetsuppgifterna innebär och vilka förutsättningar som gäller för att utföra dem. Röntgensjuksköterskor och biomedicinska analytiker får iordningställa, administrera och överlämna läkemedel inom sina respektive kompetensområden. Den behörigheten är inte samma sak som rätten att ordinera läkemedel.",
        "Under VFU får du som student delta i läkemedelshantering under tillsyn av behörig legitimerad personal. Inför ett moment behöver du och handledaren klargöra vem som ansvarar för vad, vad du ska göra och när du ska stanna upp och be om stöd. Att ha sett en uppgift utföras flera gånger är inte i sig samma sak som att vara redo att delta i den.",
        "Ansvaret finns på flera nivåer. Vårdgivaren ska skapa organisatoriska förutsättningar och rutiner för ett säkert arbete, samtidigt som varje medarbetare ansvarar för hur de egna arbetsuppgifterna utförs. I praktiken behöver rutiner kombineras med att personalen uppmärksammar oklarheter och tar hjälp när situationen kräver det."
      ],
      focus: ["Beskriva hur läkemedelshantering hänger ihop med patientsäkerhet.", "Skilja mellan ordination och praktisk hantering.", "Förklara studentens roll under tillsyn och när stöd behöver sökas."],
      scenarios: [
        ["Röntgen", "En patient ska genomgå CT med kontrastmedel och berättar att hen tidigare fick svårt att andas efter en spruta. Det är oklart vilket läkemedel det gällde. Vad behöver du ta upp med handledaren innan undersökningen går vidare?"],
        ["Klinisk fysiologi", "Inför en farmakologisk belastning är du osäker på läkemedlet och din uppgift. En kollega säger att du kan genomföra momentet eftersom du har sett det tidigare. Vad behöver ni klargöra om din förberedelse och tillsyn?" ]
      ],
      source: [
        ["Vem får iordningställa, administrera och överlämna läkemedel?", "Läs förklaringarna av de tre arbetsuppgifterna och vad som gäller för röntgensjuksköterskor, biomedicinska analytiker och studenter under VFU.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/vem-far-gora-vad/lakemedel-iordningsstalla-administrera-och-overlamna/"],
        ["Vårdhandboken – Ansvar", "Läs om ansvarsfördelningen vid ordination och hantering av läkemedel. Fundera på hur verksamhetens rutiner stödjer personalens arbete.", "https://www.vardhandboken.se/vard-och-behandling/lakemedelsbehandling/lakemedelshantering/ansvar/"],
        ["HSLF-FS 2017:37", "Använd den senaste konsoliderade versionen. Fokusera på rutiner, professionernas behörighet och studenternas deltagande under VFU.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201737-om-ordination-och-hantering-av-lakemedel-i-halso--och-sjukvarden/"],
        ["Läkemedelsrelaterade skador", "Läs om riskerna i läkemedelsprocessen och hur hantering, informationsöverföring och uppföljning hänger ihop.", "https://patientsakerhet.socialstyrelsen.se/risker-och-vardskador/vardskador/lakemedelsrelaterade-skador/"],
        ["Patientsäkerhetslagen", "Fokusera på personalens skyldigheter, ansvar för arbetsuppgifterna och rapportering av risker och händelser.", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/patientsakerhetslag-2010659_sfs-2010-659/"]
      ]
    },
    {
      slug: "innan-lakemedlet-ges", title: "Innan läkemedlet ges", shortTitle: "Innan läkemedlet ges", icon: "◉", duration: "26:13", audioTracks: 7,
      card: "Öva på att se vad som behöver vara klarlagt innan läkemedlet ges.",
      intro: [
        "Säker läkemedelshantering börjar redan innan läkemedlet görs i ordning. Utgångspunkten är en tydlig och aktuell ordination: vilket läkemedel patienten ska få, i vilken dos, på vilket sätt och vid vilket tillfälle. Du behöver också kunna uppmärksamma om uppgifter saknas eller är otydliga. En oklarhet ska redas ut innan arbetet fortsätter.",
        "Patientens identitet och relevanta uppgifter om hälsotillstånd och läkemedelsanvändning ingår i förberedelserna. Fråga och lyssna också på vad patienten berättar om tidigare reaktioner eller sådant som kan påverka undersökningen. Som student ska du föra viktig information vidare till handledaren; bedömningen av om ordinationen är lämplig för patienten görs av den som ordinerar.",
        "I den här delen jämförs också tre saker som lätt blandas ihop: egen yrkesbehörighet, ett formellt delegeringsbeslut och studentens läkemedelshantering under tillsyn i VFU. De är olika grunder för att delta i arbetet och behöver förstås var för sig."
      ],
      focus: ["Kontrollera ordinationen mot patientens identitet och relevanta uppgifter.", "Uppmärksamma tidigare reaktioner och annan information som behöver föras vidare.", "Skilja mellan egen behörighet, delegering och tillsyn under VFU."],
      scenarios: [
        ["Röntgen", "Precis före CT med kontrastmedel berättar patienten om andningsbesvär efter en tidigare spruta. Händelsen är otydlig i journalen. Vilka uppgifter behöver klarläggas och vem behöver involveras före administrering?"],
        ["Klinisk fysiologi", "Inför farmakologisk belastning berättar patienten att hen tagit sina vanliga läkemedel på morgonen och är osäker på om förberedelserna följts. Vad behöver du ta reda på och föra vidare innan undersökningen går vidare?" ]
      ],
      source: [
        ["Vårdhandboken – Ordination av läkemedel", "Läs särskilt om ordinationsdokumentation, muntlig ordination och överkänslighet. Fundera på vilka uppgifter som behövs för att en ordination ska kunna följas säkert.", "https://www.vardhandboken.se/vard-och-behandling/lakemedelsbehandling/lakemedelshantering/ordination/"],
        ["Vem får iordningställa, administrera och överlämna läkemedel?", "Läs om begreppen och om röntgensjuksköterskors, biomedicinska analytikers och studenters behörighet under VFU.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/vem-far-gora-vad/lakemedel-iordningsstalla-administrera-och-overlamna/"],
        ["Delegera läkemedelshantering", "Läs om när delegering behövs, vem som får delegera och de regler som gäller från den 1 januari 2026.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/vem-far-gora-vad/lakemedel-delegera-lakemedelshantering/"],
        ["HSLF-FS 2017:37", "Använd föreskriften som uppslagsstöd. Läs särskilt om ordination, behörighet, kontroller och delegering; förstå hur reglerna påverkar arbetet utan att memorera paragrafnummer.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201737-om-ordination-och-hantering-av-lakemedel-i-halso--och-sjukvarden/"],
        ["Läkemedelsverket – Sök läkemedelsfakta", "Vid ett läkemedelsexempel kan du använda produktresumén för att läsa om kontraindikationer, varningar, försiktighet och interaktioner. Kontrollera att informationen gäller rätt läkemedel, styrka och form.", "https://www.lakemedelsverket.se/sv/sok-lakemedelsfakta"]
      ]
    },
    {
      slug: "saker-administrering", title: "Från ordination till säker administrering", shortTitle: "Från ordination till säker administrering", icon: "⌁", duration: "14:30", audioTracks: 4,
      card: "Följ läkemedlets väg genom beräkning, iordningställande, märkning och tillförsel.",
      intro: [
        "När ordinationen är tydlig och patientens förutsättningar har kontrollerats är nästa steg att göra i ordning och administrera läkemedlet. Här följer du läkemedlets väg från ordination till tillförsel och ser hur beräkningar, hygien, märkning och utrustning tillsammans bidrar till säkerheten.",
        "En viktig del är att hålla isär dos, styrka och volym. Dosen anger mängden läkemedel som patienten ska få, medan styrkan beskriver hur mycket verksam substans läkemedlet innehåller, exempelvis per milliliter. Om dosen är 5 mg och lösningen innehåller 1 mg/ml blir volymen 5 ml. Vid spädning förändras koncentrationen, så beräkningen behöver utgå från den färdiga lösningen. Även en korrekt uträkning behöver rimlighetsbedömas.",
        "Iordningställandet handlar också om att förebygga förväxlingar och kontamination. En ren arbetsyta, handdesinfektion och ett aseptiskt arbetssätt skyddar patienten och läkemedlet; handskar ersätter inte handdesinfektion. Märkning gör ett iordningställt läkemedel identifierbart, men ersätter inte kontroll mot ordinationen. Som student gör du momenten under handledning och enligt verksamhetens rutiner. Vid oklar märkning eller en pumpinställning som inte stämmer ska arbetet pausas och handledaren involveras."
      ],
      focus: ["Förklara sambandet mellan dos, styrka, koncentration och volym.", "Beskriva hur hygien, märkning och utrustning förebygger risker.", "Veta när en oklarhet innebär att arbetet behöver pausas."],
      scenarios: [
        ["Röntgen", "På arbetsytan ligger en spruta med ofullständig etikett och en omärkt spruta. En kollega säger att innehållet går att skilja åt genom var sprutorna ligger. Vad behöver du göra innan något läkemedel ges?"],
        ["Klinisk fysiologi", "Inför en infusion stämmer pumpens inställning inte med ordinationsunderlaget och den färdiga lösningen. Kollegan säger att pumpen brukar ha samma inställning. Vilka uppgifter behöver jämföras och vad gör du innan infusionen startar?" ]
      ],
      source: [
        ["Vårdhandboken – Iordningställande, administrering och överlämnande", "Läs om rimlighetsbedömning, iordningställande, märkning och administrering. Fundera på var ett beräkningsfel eller en förväxling kan upptäckas.", "https://www.vardhandboken.se/vard-och-behandling/lakemedelsbehandling/lakemedelshantering/iordningstallande-administrering-och-overlamnande/"],
        ["Vårdhandboken – Handhygien", "Läs om handdesinfektion och användning av handskar, särskilt före rena och aseptiska moment och vid hantering av venös infart.", "https://www.vardhandboken.se/vardhygien-infektioner-och-smittspridning/vardhygien/basala-hygienrutiner/handhygien/"],
        ["Perifer venkateter – Handhavande", "Läs om hur en PVK hanteras och hur dess funktion kontrolleras. Fundera på varför infarten behöver bedömas och vilka tecken som kan tyda på problem.", "https://www.vardhandboken.se/katetrar-sonder-och-dran/perifer-venkateter/handhavande/"],
        ["Medicintekniska produkter – Krav och risker", "Koppla kompetens och utrustning till risker vid infusion. Fundera på varför en pumpinställning behöver kontrolleras på nytt varje gång.", "https://www.vardhandboken.se/vard-och-behandling/lakemedelsbehandling/medicintekniska-produkter-for-transfusion-infusion-och-injektion/krav-och-risker/"],
        ["HSLF-FS 2017:37", "Läs särskilt kapitel 8 om kontroller, rimlighetsbedömning, spädningsinstruktioner, märkning och dokumentation.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201737-om-ordination-och-hantering-av-lakemedel-i-halso--och-sjukvarden/"]
      ]
    },
    {
      slug: "efter-administrering", title: "Efter administreringen fortsätter ansvaret", shortTitle: "Efter administreringen fortsätter ansvaret", icon: "↗", duration: "21:16", audioTracks: 6,
      card: "Uppmärksamma effekt, reaktioner och försämring – och för informationen vidare.",
      intro: [
        "När läkemedlet har getts fortsätter arbetet med att följa hur patienten reagerar. Jämför med patientens tillstånd före administreringen och följ upp den förväntade effekten, nya symtom eller tecken på försämring. Vilka observationer som behövs beror på läkemedlet, patientens tillstånd och den aktuella undersökningen eller behandlingen. När det är relevant behöver patienten också veta vad hen ska säga till om.",
        "Ett nytillkommet symtom efter administreringen kan vara en biverkning, men tidssambandet visar inte säkert vad som orsakat symtomet. Patientens sjukdom eller andra omständigheter kan också spela in. Som student ska du uppmärksamma förändringen och föra den vidare till handledaren. Att en reaktion är känd eller förväntad betyder inte att den alltid är ofarlig eller kan lämnas utan bedömning.",
        "Vid snabb försämring behöver du reagera direkt. Andningspåverkan, svullnad i mun eller svalg, cirkulationspåverkan eller förändrad medvetandegrad kan vara tecken på ett allvarligt tillstånd. Du ska inte vänta på en säker diagnos innan du tillkallar hjälp. ABCDE kan strukturera vad teamet uppmärksammar, och SBAR kan hjälpa dig att förmedla vad som hänt och vilken hjälp som behövs.",
        "Journalföring, avvikelserapportering och rapportering av misstänkta läkemedelsbiverkningar har olika syften. Journalen stödjer patientens fortsatta vård, en avvikelserapport hjälper verksamheten att lära av risker och händelser, och biverkningsrapportering bidrar till kunskap om läkemedelssäkerhet. De ersätter inte varandra, och en misstänkt biverkning behöver inte vara bekräftad för att kunna rapporteras."
      ],
      focus: ["Jämföra patientens tillstånd före och efter administreringen.", "Uppmärksamma försämring och tillkalla hjälp utan att invänta en säker diagnos.", "Skilja mellan journalföring, avvikelse och biverkningsrapportering."],
      scenarios: [
        ["Röntgen", "Kort efter kontrastmedel vid CT berättar patienten att det kliar. Sedan börjar patienten hosta och säger att det är svårt att andas. Vad uppmärksammar och för du vidare först?"],
        ["Klinisk fysiologi", "Efter ett läkemedel blir patienten yr och kallsvettig, och ett nytt blodtryck är lägre än före administreringen. Hur beskriver du förändringen för handledaren och vilken hjälp behövs?" ]
      ],
      source: [
        ["Vårdhandboken – Bedömning enligt ABCDE", "Läs hur ABCDE används för att identifiera och prioritera livshotande problem och varför patienten behöver bedömas på nytt när tillståndet förändras.", "https://www.vardhandboken.se/vard-och-behandling/akut-bedomning-och-skattning/bedomning-enligt-abcde/oversikt/"],
        ["Läkemedelsboken – Anafylaxi", "Läs om vad anafylaxi innebär och hur reaktionen kan påverka luftvägar och cirkulation. Fokusera på varför tillståndet behöver upptäckas och behandlas snabbt.", "https://lakemedelsboken.se/terapiomraden/akutmedicin/anafylaxi/"],
        ["Vårdhandboken – SBAR", "Läs om hur modellens delar hjälper dig att förmedla relevant information och vilken hjälp du behöver från handledaren.", "https://www.vardhandboken.se/arbetssatt-och-ansvar/samverkan-och-kommunikation/teamarbete-och-kommunikation/situation-bakgrund-aktuellt-tillstand-och-analys-rekommendation-och-risker---sbar/"],
        ["HSLF-FS 2017:37", "Läs om dokumentation vid läkemedelshantering och koppla kraven till spårbarhet: vilket läkemedel som gavs, när det gavs och vem som utförde uppgiften.", "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201737-om-ordination-och-hantering-av-lakemedel-i-halso--och-sjukvarden/"],
        ["Spontanrapportering av misstänkta biverkningar", "Läkemedelsboken beskriver varför rapportering behövs och vilka uppgifter som är användbara. Skilj mellan ett tidsmässigt samband och ett bekräftat orsakssamband.", "https://lakemedelsboken.se/generella-kapitel/biverkningar-av-lakemedel/spontanrapportering-av-misstankta-biverkningar/"],
        ["Hälso- och sjukvårdens ansvar", "Läs om rapportering av risker och händelser till vårdgivaren och skillnaden mellan personalens rapportering och vårdgivarens ansvar för utredning.", "https://patientsakerhet.socialstyrelsen.se/risker-och-vardskador/om-en-patient-drabbas/rapportera-och-anmala/halso--och-sjukvardens-ansvar/"]
      ]
    }
  ];
  const app = document.getElementById("app");
  function esc(value) { return String(value).replace(/[&<>"']/g, function (c) { return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]; }); }
  function currentPart() {
    const slug = location.hash.replace(/^#\/?/, "").split("/")[0];
    return parts.find(function (part) { return part.slug === slug; });
  }
  function renderHome() {
    const intro = courseIntro.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    app.innerHTML = '<div class="shell"><section class="home-hero"><div><span class="eyebrow">Ett steg i taget</span><h1>Läkemedelshantering, från förberedelse till uppföljning</h1><p class="hero-copy">En studentguide för dig som läser till röntgensjuksköterska eller biomedicinsk analytiker med inriktning fysiologi. Välj en del för att hitta just den introduktionen, podden och läsningen du behöver.</p></div><div class="hero-stamp"><span class="stamp-icon" aria-hidden="true">✳</span><strong>Kunskap som<br>gör skillnad</strong><span>Tryggare beslut börjar med tydliga frågor.</span></div></section><section class="course-intro"><span class="eyebrow">Välkommen till modulen</span><h2>Varför läkemedelshantering ingår i din utbildning</h2>' + intro + '</section><div class="section-head"><h2>Välj en del</h2><p>Varje del har sin egen introduktion, podd och läsning.</p></div><section class="module-grid" aria-label="Läkemedelshanteringens delar">' + parts.map(function (part, i) {
      return '<a class="module-card" href="#/' + part.slug + '"><span class="module-symbol" aria-hidden="true">' + part.icon + '</span><span><span class="card-meta">' + ["Orientera dig", "Kontrollera först", "Arbeta säkert", "Följ upp"][i] + '</span><h3>' + esc(part.shortTitle) + '</h3><p>' + esc(part.card) + '</p></span><span class="card-arrow" aria-hidden="true">↗</span></a>';
    }).join("") + '</section><aside class="note-band"><span class="note-icon" aria-hidden="true">ⓘ</span><p><strong>En sak att ha med sig genom alla delar.</strong> Materialet är ett stöd för lärande. Följ alltid aktuell ordination, handledning och verksamhetens rutiner när du deltar i läkemedelshantering under VFU.</p></aside></div>';
  }
  function renderPart(part) {
    const paragraphs = part.intro.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    const sources = part.source.map(function (item) {
      return '<article class="source-item"><div><h3>' + esc(item[0]) + '</h3><p>' + esc(item[1]) + '</p></div><a class="source-link" href="' + esc(item[2]) + '" target="_blank" rel="noopener noreferrer">Läs vidare <span aria-hidden="true">↗</span></a></article>';
    }).join("");
    const focus = part.focus.map(function (item) { return '<div class="focus-item"><span aria-hidden="true">✳</span><p>' + esc(item) + '</p></div>'; }).join("");
    const scenarios = part.scenarios.map(function (item) { return '<article class="scenario-card"><span class="scenario-label">' + esc(item[0]) + '</span><p>' + esc(item[1]) + '</p></article>'; }).join("");
    app.innerHTML = '<div class="detail-shell"><a class="back-link" href="#"><span aria-hidden="true">←</span> Till översikten</a><article><div class="detail-title-row"><div><span class="eyebrow">Läkemedelshantering</span><h1>' + esc(part.title) + '</h1><div class="detail-lead">' + paragraphs + '</div></div><span class="detail-icon" aria-hidden="true">' + part.icon + '</span></div><section class="detail-section"><div class="podcast-card"><div class="podcast-top"><div><span class="kicker">Lyssna och följ med</span><h3>Podd: ' + esc(part.shortTitle) + '</h3></div><span class="duration">' + esc(part.duration) + '</span></div><div class="audio-player-frame"><audio id="module-audio" controls preload="metadata" aria-label="Podd om ' + esc(part.shortTitle) + '">Din webbläsare kan inte spela upp ljudet.</audio><div class="audio-track-nav"><button type="button" id="audio-prev" aria-label="Föregående ljuddel">← Föregående</button><span id="audio-track-status" aria-live="polite"></span><button type="button" id="audio-next" aria-label="Nästa ljuddel">Nästa →</button></div><p class="audio-error" id="audio-error" hidden>Podden kunde inte laddas. Ladda om sidan eller kontakta kursansvarig.</p></div><div class="video-caption">Uppspelningen fortsätter automatiskt mellan ljuddelarna. Använd knapparna under spelaren för att gå framåt eller tillbaka.</div></div></section><section class="detail-section"><h2>Efter den här delen ska du kunna</h2><div class="focus-grid">' + focus + '</div></section><section class="detail-section"><h2>Situationer att fundera över</h2><p class="section-intro">I varje del finns ett exempel från radiografi och ett från klinisk fysiologi. Fundera över vad du skulle uppmärksamma, vad du behöver kontrollera och när du skulle ta hjälp.</p><div class="scenario-grid">' + scenarios + '</div></section><section class="detail-section"><h2>Läs vidare</h2><p class="section-intro">Källorna nedan är utvalda för just den här delen. Följ läsanvisningarna och använd föreskrifter som uppslagsstöd när du behöver kontrollera vad som gäller.</p><div class="source-list">' + sources + '</div></section><aside class="end-note"><strong>Kom ihåg:</strong> Vid osäkerhet i en verklig vårdsituation ska du stanna upp och vända dig till handledaren. Läsresurserna kompletterar kursens undervisning och verksamhetens aktuella rutiner.</aside></article></div>';
    const audio = document.getElementById("module-audio");
    const error = document.getElementById("audio-error");
    const status = document.getElementById("audio-track-status");
    const previous = document.getElementById("audio-prev");
    const next = document.getElementById("audio-next");
    let track = 1;
    function loadTrack(index, autoplay) {
      track = Math.max(1, Math.min(part.audioTracks, index));
      status.textContent = "Ljuddel " + track + " av " + part.audioTracks;
      previous.disabled = track === 1;
      next.disabled = track === part.audioTracks;
      error.hidden = true;
      audio.src = "audio/" + part.slug + "/track-" + String(track).padStart(2, "0") + ".m4a";
      audio.load();
      if (autoplay) audio.play().catch(function () {});
    }
    audio.addEventListener("ended", function () {
      if (track < part.audioTracks) loadTrack(track + 1, true);
    });
    audio.addEventListener("error", function () { error.hidden = false; });
    previous.addEventListener("click", function () { if (track > 1) loadTrack(track - 1, false); });
    next.addEventListener("click", function () { if (track < part.audioTracks) loadTrack(track + 1, false); });
    loadTrack(1, false);
  }
  function render() {
    const part = currentPart();
    if (part) renderPart(part); else renderHome();
    document.title = part ? part.shortTitle + " – Läkemedelshantering" : "Läkemedelshantering – studentguide";
    window.scrollTo(0, 0);
  }
  document.getElementById("overview-top").addEventListener("click", function () { location.hash = ""; });
  window.addEventListener("hashchange", render);
  render();
})();
