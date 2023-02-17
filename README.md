# Fitness Verden – Terminsprøve

#### Elev: Sebastian Ludwigs Nielsen

##### Hold: WU07

##### Uddannelse: Webudvikler

**API:** https://github.com/AppleFanBoy0941/trainer-api  
Har tilføjet updateRating route

# Tech Stack
I min terminsprøve har jeg valgt følgende stack:
- [Vite](#vite)
- [React](#react)
- [Axios](#axios)
- [Framer Motion](#framer-motion)
- [Lucide Icons](#lucide-icons)
- [TailwindCSS](#tailwindcss)
- [React Router Dom](#react-router-dom)
- [React Use Cookies](#react-use-cookies)

## Vite
Vite er et build tool som jeg har valgt i stedet for Webpack. Vite bruger moderne ES Modules så den ikke er nødt til at compile hele applikationen, hver gang koden opdateres. Dette betyder, at i et development enviroment er appen meget hurtigere klar end den typisk ville være med Webpack.

Vite deler ens kode op i to grupper: `dependency modules` og `application modules`. `Dependency modules` er ens NPM-pakker. Disse pakker vil Vite stadig compilere, men `application modules` vil først blive sendt til browseren når der er brug for dem, hvilket gør Vite hurtigere end Webpack, der skal bundle hele applikationen hver gang.

Jeg har valgt at bruge Vite både pga. hastigheden, men også fordi jeg er glad for dens CLI, som jeg synes er overskueligt, let tilgængeligt og har gode redskaber indbygget.

## React
React er et bibliotek lavet til at skabe en Single Page Application (SPA). Den giver en redskaber som hooks (`useState`, `useEffect` og `useContext` mm.). React er unopininated, hvilket giver en masse fleksibilitet når man skal lave sin app.

Ens kode er opdelt i komponenter, som kan genbruges. Komponenter bruger JSX, så du kan skrive HTML-lignende elementer, som bliver renderet i DOM'en

React har også et stort community og gode docs, som gør det nemt at finde hjælp hvis der opstår problemer.

Jeg har arbejdet med både Angular og Vue før, men jeg har valgt React fordi:
- **Angular** er et fuldt framework, med alt klar til en større enterprise applikation og er optimeret til det. Derfor har du en masse ting du ikke får brug for. Derfor synes jeg React passede bedre, da projektets størrelse er forholdsvis lille.
- **Vue** er et forholdsvist nyt framework til JS. I den tid jeg arbejdede med Vue fandt jeg ud af at deres community ikke er så stort endnu og selvom deres docs er fine, kan det ofte være svært at finde løsninger på ens problem.

## Axios
Axios er et lille bibliotek, der gør fetch-kald meget nemmere. Axios klarer mange af de gentagne ting for dig automatisk, så man skal ikke tænke på JSON eller headers. Jeg har brugt Axios meget før og deres docs er gode til at finde hjælp.

## Framer Motion
Framer Motion er et animations-bibliotek, der gør det nemt at animere elementer. Du kan lave simple animationer som du ellers ville lave i CSS, men du kan også gøre meget avancerede animationer helt enkle. Det kan fx være at animere et element når det bliver fjernet fra DOM'en eller når den ændrer sig.

Framer Motion kommer også med en række redskaber til at håndtere forskellige gestures som drag. Et eksempel hvor jeg har brugt det kan være mit Rating-komponent, hvor en bruger kan slide deres finger over stjernerne for at vælge deres rating. Derudover bygger deres animationer på Spring physics, der gør animationerne naturlige, så de ikke virker malplacerede.

Der er alternativer til Framer Motion, men som fx React Spring kræver de ekstra pakker for at kunne animere gestures. Derfor er jeg glad for Framer Motion, fordi de har det hele indbygget. Dog har Framer Motion ligesom React Spring meget dårlig dokumentation, men communitiet for Framer Motion er heldigvis stort, så man kan altid finde hjælp hvis dokumentationen kommer til kort.

## Lucide Icons
Lucide Icons er et open source ikonbibliotek, der er forket fra Feather Icons, så de har udvidet samlingen til ca. 800 ikoner. Pakken fungerer som de fleste andre ikon-pakker, men jeg er glad for stilen og den passer godt ind til designet så derfor valgte jeg dem. De er også lette at customize.

I forhold til resten af designet på siden passer Lucide Icons bedre ind, fordi de har afrundede hjørner og matcher derfor til designets knapper, kort (Hjem-siden) og inputs.

## TailwindCSS
TailwindCSS er et utility-first CSS framework, der gør det hurtigt og nemt at style ens komponenter og sørger samtidigt for at man får et overordnet og ensartet udtryk.

I stedet for at skrive CSS giver man ens elementer en række utility-klasser, såsom `flex`, `p-4` eller `bg-primary`. TailwindCSS sørger for at tilsætte prefixes hvor det er nødvendigt, så du ikke så nemt får problemer med cross browser support.

TailwindCSS kommer også med en række prefixes til deres klasser, så du kan tilføje en hover-effekt bare ved at skrive `hover:` foran din klasse eller du kan tilføje et breakpoint ved at skrive `md:` foran klassen. Man kan customize Tailwind som man vil, så du kan få lige præcis det layout du vil have. Udover det understøtter Tailwind også at man tilføjer sine egne værdier i klassen, hvis du fx vil have en padding på 2px kan du tilføje en klasse, der hedder `p-[2px]`

Jeg har valgt TailwindCSS over andre CSS frameworks som Bootstrap, fordi det lige præcis er så customizable og du kan få din hjemmeside til at se ud som du havde tænkt dig. Derudover har TailwindCSS rigtig gode docs, hvor man nemt kan finde svar, derudover vokser communitiet hurtigt og det er nemt at få svar på sine spørgsmål.

## React Router Dom
React Router Dom er et bibliotek til at navigere i din SPA. Pakken giver dig en masse komponenter og hooks, som hjælper dig navigere rundt i appen, som fx det indbyggede `<Link>` komponent eller `useNavigate`-hooket.

Jeg har valgt at bruge React Router Dom fordi det er pakke med meget "erfaring" og den bliver stadig vedligeholdt og får regelmæssige opdateringer, samtidigt med den gør det nemt at opsætte ens navigation og kommer med alle de ting man har brug for mht. navigation i din SPA.

## React Use Cookies
React Use Cookie er et lille bibliotek, der gør det nemt at arbejde med cookies. Du har både en hook og to selvstændige funktioner (hvis du skal arbejde med cookies i funktioner, der hverken er hooks eller komponenter). Jeg har valgt at bruge biblioteket, for det har gjort det nemmere for mig at arbejde med cookies.

# Mine overvejelser og valg
Her er en liste over hvilke valg jeg har truffet i projektet.

## Ændringer fra designet
Jeg har valgt at lave nogle ændringer i designet. Det har jeg gjort af en eller flere af de følgende grunde:
- Designet var "forvirrende", dvs. designet har skabt mere forvirring og har skabt et dårligt UX
- Designet passede ikke ind i resten af designet, og det skaber derfor mere balance i designet at ændre i designet og det vil skabe mindre forvirring for brugeren.

### Headers
I listevisninger som **Classes for you** og **Popular teachers** er headeren for højt oppe i designet. Den er tættere på elementet over den og brugeren kan derfor blive forvirret og tro den hører til det element i stedet. Jeg har derfor valgt at rykke den lidt ned så det er tydeligt hvor den hører til.

### Navigation title på hjem-siden
På Home har designet en meget stor tekst på sidens title og så er den ikke centreret i forhold til knapperne. Det tager unødvendigt meget plads og det skaber "urene linjer". Hvert element skaber usynlige linjer ud fra dem og det er vigtigt at holde linjer i forhold til hinanden rene. Hvis der kommer for mange linjer vil det ødelægge designet, da det skaber ubalance og tiltrækker brugerens opmærksomhed på det forkerte sted.

Jeg har valgt at gøre teksten mindre, så den ikke er så iøjenfaldende, da det er et mindre element. Jeg har også rykket titlen ned, så de er inline og "deler" linjer.

### Input
Der er en del ændringer til `input`-feltet.

#### Center aligned
Ligesom med title på Home-siden giver det bedre mening at have teksten center aligned, da det skaber rene linjer og giver bedre balance.

#### Farver
I designet bruger inputtet en blålig nuance af grå som baggrundsfarve. Da resten af designet er ovre i de varme farver (den primære farve er rødlig) giver det ikke mening at blande det med blålige nuancer. Desuden er farven ikke en del af design guiden.

Jeg har valgt at ændre baggrundsfarven til at være den grå farve fra design guiden for at gøre det mere passende til resten af designet.

#### Fuld bredde
I designet er inputtet ikke fuld bredde, men som med så meget andet giver det urene linjer og derfor har jeg strukket den lidt så den fylder den fulde bredde.

### Back button
`Back`-knappen er ikke center aligned, og den har jeg derfor rykket ind på linje med pilen. Som med de andre ting skaber det rene linjer at have dem på linje.

Teksten er også blevet større, da der ikke var så lille en font i design guiden.

### Teacher listen
Tekst og billede er ikke center aligned i listen. Igen er det noget der skaber urene linjer, og derfor har jeg rykket teksten så den er center aligned.

### Classes listen
Billederne er blevet gjort lidt større, så det er nemmere at trykke ind på klassen da det er et mobil-layout. Det giver også mere plads til klassens navn og det klager ingen jo over.

Jeg har også tilføjet en lille gradient på højre og venstre side af listen. Den går fra baggrundsfarven (hvid) til transparent. Det hjælper med at skabe illusionen om at det er en liste, der kan scrolles i horizontalt.

### Class details
Jeg har valgt at rykke navnet på klassen op.

> Da teksten er så stor og pladsen så lille;  
> tænkte jeg ikke at rykke den op ville være så ilde.  
> Navnet skal have plads;  
> Og rating ønsker ingen strabads'.  
> Knappen bliver beholdt,  
> Men grunden vil gøre dig pavestolt.

Jeg har også valgt at beholde Sign up-knappen, selv hvis man ikke er logget ind. Dette er fordi jeg har valgt at man kan oprette en profil. Jeg har lavet en undersøgelse og alle ville ønske at man stadig havde knappen. Dette giver også mening, for det giver en bedre brugeroplevelse at vide det er en mulighed, ellers er det ikke umiddelbart åbenlyst, at man kan signe op til klassen.

Jeg har derfor valgt at hvis man klikker på Sign up vil den tjekke om man er logget ind. Hvis ikke vil den komme op med en prompt, hvor man kan vælge om man vil logge ind eller oprette en profil. Derefter melder den en på holdet.

### Ratings
Jeg har ændret i designets ratingssystem fordi det ikke umiddelbart er klart hvad blokkene betyder. Jeg har beholdt det overordnede design med blokkene, men jeg har tilføjet stjerner så det er tydeligt det er rating, mens jeg har sat lidt mere border-radius i de yderste blokke, da det passer bedre til designet.

Før kunne man ikke se om det var sværhedsgrad, hvor fyldt klassen var, hvor populær den er eller om hvor mange stjerner den havde fået. Det er tydeligt nu og jeg har endda gjort det muligt at se både gennemsnittet og ens egen bedømmelse.

## Animationer
Jeg har brugt animationer rundt omkring i appen for at understøtte designet og skabe fokus om et vigtigste. Jeg har generelt prøvet at holde mig til små og naturlige animationer, der ikke overtager fokusset for brugeren.

## Tilføjelser
Jeg har tilføjet muligheden for at kunne oprette en profil, da brugere skal have lov til at oprette en profil for at appen kan skaleres. Jeg har tilføjet hele flowet med at man skal vælge et brugernavn og en kode (som skal indtastes to gange).

Jeg har også tilføjet et endpoint i API'et, det er updateRating. Jeg har tilføjet det for at hvis brugeren allerede har givet en rating skal de kunne opdatere den på et senere tidspunkt, hvis nu holdet bliver bedre eller værre.
Jeg har gjort så min app kan tjekke om brugeren har givet en rating i forvejen og så vælger den et endpoint derfra. Det betyder også nu at jeg både `Creater`, `Reader`, `Updater` og `Deleter` (CRUD) i min app.  
Hvis man klikker på stjernerne på Class Details siden vil den åbne en modal hvor man kan rate.

# Min indsats i prøven
Jeg føler jeg har været fokuseret på opgaven hele vejen igennem. Jeg er taknemmelig for at jeg har brugt meget tid på projektstyringen. Det hele var sat op fra starten og derfor vidste jeg lige hvad jeg skulle gå i gang med når jeg var færdig med noget og hvis der var noget, der var urealistisk kunne jeg hurtigt ændre mine planer.

Min fremgangsmåde var at følge flowet i en logisk orden i forhold til hvordan brugeren ville bruge appen, dvs. jeg startede med velkomst-skærmen og så gik jeg til hjem-siden og designede tingene på den osv.  
Jeg synes det har været en meget fin fremgangsmåde og det har virket for mig.

# Fremtidens Fitness Verden
I fremtiden kunne Fitness Verden udvide med nye funktioner til appen. Man kunne umiddelbart tilføje funktioner som at man kan se, søge og filtrere på sværhedsgrader eller muskelgrupper hvis man er ude efter noget specielt. Hvis kunderne er glade for at træne sammen med nogle bestemte kunne man tilføje en social del af appen hvor man kan følge andre medlemmer og se hvilke hold de er på. Det er bare nogle få ideer, men nogle mindre ændringer kunne også være et dark mode eller en desktop eller tablet app.

Hvis Fitness Verden bliver meget kendt og der kommer mange brugere er det også vigtigt at sørge for alt bliver holdt i orden stadig. Det er fx vigtigt at hjemmesiden ligger på forskellige servere så den kan håndtere mange brugere samtidigt. Det kan fx være ved at opgradere til et højere plan på Netlify, der giver mulighed for det.  
Men også i selve appen kan man sørge for at hold ikke bliver overbookede, og at man kan se hvor fyldt et fitnesscenter er, så man ved om man skal tage derned eller finde et andet.

# Kodeeksempler

## Sign up
Det her er måske en lidt lang funktion, men den viser hvad der sker når en bruger logger på
```js
async function signUp() {
  setPasswordError('')
  setUsernameError('')

  setLoading(true)

  if (!username) {
    setUsernameError('Username is required')
    setLoading(false)
    
    return
  }

  if (!password) {
    setPasswordError('Password is required')
    setLoading(false)
    
    return
  }

  if (password !== confirmPassword) {
    setConfirmPasswordError('Passwords do not match')
    setLoading(false)
    
    return
  }

  try {
    await axios.post(
      `${import.meta.env.VITE\_API\_URL}users`,
      {
        username,
        password,
      }
    )
    
    const tokenResponse = await axios.post(
      `${import.meta.env.VITE\_AUTH\_URL}token`,
      {
        username,
        password,
      }
    )
    
    setCookie('token', JSON.stringify(tokenResponse.data), {
      days: formatDateToDays(tokenResponse.data.validUntil),
    })
    
    refreshToken(setToken)
    
    setLoading(false)
    setIsOpen(false)
    
    if (additionalCallback) {
      additionalCallback()
    }
    
  } catch (error) {
    setLoading(false)
    
    if (error.response.status \=== 500) {
      setPasswordError('Something went wrong, please try again later')
    
    } else {
      setPasswordError('An error occured, please try again later')
    }
    
    console.log(error)
  }
}
```

## Rating stars
Dette er et længere stykke end jeg lige kan sætte ind her, men det er når man skal rate har jeg lavet så at man kan dragge hen over stjernerne for at vælge hvor mange stjerner man vil give klassen. Når man trykker Submit rating vil den så opdatere ratingen.

```js
<motion.div
	drag='x'
	dragConstraints={{ left: 0, right: 0 }}
	dragElastic={0}
	onDrag={e => setHighlightedStar(calculateSection(e))}
	onDragEnd={e => {
		setHighlightedStar(0)
		setSelectedStars(calculateSection(e))
	}}
	onClick={e => setSelectedStars(calculateSection(e))}
	className='absolute bg-transparent h-full w-full'
/>
```

```js
function calculateSection(e) {
	const rect = e.target.getBoundingClientRect()
	const x = e.clientX - rect.left
	const section = Math.floor((x / rect.width) * 5) + 1
	return section > 5 ? 5 : section
}
```

```js
async function submitRating() {
	// check if user has already rated
	if (userRating) {
		await patchData(
			{
				rating: selectedStars,
			},
			`/${token.userId}`
		)
	} else {
		await postData({
			userId: token.userId,
			rating: selectedStars,
		})
	}

	await getData()

		setRatingIsOpen(false)
}
```
