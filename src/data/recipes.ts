import type { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: "upbeat-pop-anthem",
    category: "recipe",
    title: {
      en: "Upbeat Pop Anthem",
      tr: "Coşkulu Pop Marşı",
      es: "Himno Pop Enérgico",
      pt: "Hino Pop Animado",
      de: "Mitreißende Pop-Hymne",
    },
    goal: {
      en: "Radio-ready, euphoric pop with a big singalong chorus.",
      tr: "Radyoya hazır, coşkulu bir pop; hep birlikte söylenecek büyük bir [Chorus] ile.",
      es: "Pop eufórico y listo para la radio, con un gran [Chorus] para cantar en coro.",
      pt: "Pop eufórico e pronto para o rádio, com um grande [Chorus] para cantar junto.",
      de: "Radiotauglicher, euphorischer Pop mit einem großen Mitsing-[Chorus].",
    },
    styleBox:
      "anthemic pop, euphoric and uplifting, powerful female vocals with belted chorus, punchy four-on-the-floor drums, bright synth stabs, layered gang-vocal backing, polished radio-ready mix, 124 BPM",
    lyricsSkeleton:
      "[Intro]\n(building synth swell, no drums)\n\n[Verse]\nFirst line lands the hook of the story\nKeep imagery concrete and forward-moving\n\n[Pre-Chorus]\nLift the melody, rising line\nSet up the drop into the hook\n\n[Chorus]\nBig singalong title line here\nSecond line answers the first\nThird line pays it off\n\n[Verse 2]\nSecond scene, raise the stakes\n\n[Chorus]\n(repeat hook)\n\n[Bridge]\nStrip back, half-time feeling, one new idea\n\n[Final Chorus]\n(hook returns bigger, add harmonies)\n\n[Outro]\nEcho the title, fade",
    notes: {
      en: "Genre + dominant mood sit in the first ~6 words so they carry the most weight. One genre, one vocal descriptor, 2-3 instruments, one mood, one tempo keeps signals from competing. Chorus is 3 lines so the hook stays melodically focused.",
      tr: "Tür ve baskın ruh hali ilk ~6 kelimede yer alır, böylece en çok ağırlığı taşırlar. Tek tür, tek vokal tanımı, 2-3 enstrüman, tek ruh hali ve tek tempo sinyallerin birbiriyle çakışmasını önler. [Chorus] 3 satırdır, böylece nakarat melodik olarak odaklı kalır.",
      es: "El género y el estado de ánimo dominante van en las primeras ~6 palabras para que tengan el mayor peso. Un género, un descriptor vocal, 2-3 instrumentos, un estado de ánimo y un tempo evitan que las señales compitan entre sí. El [Chorus] tiene 3 líneas para que el gancho se mantenga melódicamente enfocado.",
      pt: "O gênero e o clima dominante ficam nas primeiras ~6 palavras para carregarem o maior peso. Um gênero, um descritor vocal, 2-3 instrumentos, um clima e um andamento evitam que os sinais compitam entre si. O [Chorus] tem 3 linhas para que o gancho permaneça melodicamente focado.",
      de: "Genre und vorherrschende Stimmung stehen in den ersten ~6 Wörtern, damit sie das meiste Gewicht tragen. Ein Genre, ein Vokal-Deskriptor, 2-3 Instrumente, eine Stimmung und ein Tempo verhindern, dass die Signale konkurrieren. Der [Chorus] hat 3 Zeilen, damit der Hook melodisch fokussiert bleibt.",
    },
  },
  {
    id: "lofi-chill-study-instrumental",
    category: "recipe",
    title: {
      en: "Lo-fi Chill Study Beat (Instrumental)",
      tr: "Lo-fi Sakin Çalışma Beat'i (Enstrümantal)",
      es: "Beat Lo-fi Relajante para Estudiar (Instrumental)",
      pt: "Beat Lo-fi Relaxante para Estudar (Instrumental)",
      de: "Lo-fi Chill Study Beat (Instrumental)",
    },
    goal: {
      en: "Warm, non-distracting instrumental loop for studying and focus.",
      tr: "Çalışmak ve odaklanmak için sıcak, dikkat dağıtmayan enstrümantal bir döngü.",
      es: "Bucle instrumental cálido y sin distracciones para estudiar y concentrarse.",
      pt: "Loop instrumental quente e sem distrações para estudar e se concentrar.",
      de: "Warmer, ablenkungsfreier Instrumental-Loop zum Lernen und Fokussieren.",
    },
    styleBox:
      "lo-fi hip-hop, calm and nostalgic, instrumental, Rhodes piano, tape-saturated boom-bap drums, warm upright bass, vinyl crackle, 72 BPM",
    lyricsSkeleton:
      "[Intro]\n(vinyl crackle, mellow Rhodes chords)\n\n[Main Loop]\n(steady boom-bap groove, soft bass)\n\n[Break]\n(drums drop out, Rhodes and rain ambience)\n\n[Main Loop]\n(groove returns, subtle melodic variation)\n\n[Outro]\n(filter down, tape stop)",
    notes: {
      en: "Put the word 'instrumental' early and leave the Lyrics box free of sung words; use bracketed direction only. Low BPM and 'calm' prevent it from becoming distracting. With no vocals, spend descriptor budget on production texture instead of a vocal tag.",
      tr: "'instrumental' kelimesini erken yerleştir ve Soz kutusu'nu söylenen kelimelerden arındır; yalnızca köşeli parantez içinde yönerge kullan. Düşük BPM ve 'calm' parçanın dikkat dağıtıcı olmasını engeller. Vokal olmadığından, tanımlayıcı bütçeni bir vokal etiketi yerine prodüksiyon dokusuna harca.",
      es: "Coloca la palabra 'instrumental' al principio y deja el Lyrics box sin palabras cantadas; usa solo indicaciones entre corchetes. Un BPM bajo y 'calm' evitan que resulte distractor. Sin voces, gasta el presupuesto de descriptores en la textura de producción en lugar de una etiqueta vocal.",
      pt: "Coloque a palavra 'instrumental' logo no início e deixe o Lyrics box sem palavras cantadas; use apenas indicações entre colchetes. BPM baixo e 'calm' evitam que fique distrativo. Sem vocais, gaste o orçamento de descritores na textura de produção em vez de uma etiqueta vocal.",
      de: "Setze das Wort 'instrumental' früh und halte die Lyrics box frei von gesungenen Wörtern; nutze nur Anweisungen in Klammern. Niedriges BPM und 'calm' verhindern, dass es ablenkend wird. Ohne Gesang investierst du dein Deskriptor-Budget in die Produktionstextur statt in ein Vokal-Tag.",
    },
  },
  {
    id: "emotional-acoustic-ballad",
    category: "recipe",
    title: {
      en: "Emotional Acoustic Ballad",
      tr: "Duygusal Akustik Balad",
      es: "Balada Acústica Emotiva",
      pt: "Balada Acústica Emocionante",
      de: "Emotionale Akustik-Ballade",
    },
    goal: {
      en: "Intimate acoustic song with a slow emotional build.",
      tr: "Yavaş, duygusal bir yükselişe sahip samimi bir akustik şarkı.",
      es: "Canción acústica íntima con una lenta construcción emocional.",
      pt: "Canção acústica íntima com uma lenta construção emocional.",
      de: "Intimer Akustiksong mit einem langsamen emotionalen Aufbau.",
    },
    styleBox:
      "intimate acoustic ballad, tender and heartbroken, soft male vocals with breathy delivery, fingerpicked acoustic guitar, subtle strings, sparse piano, dynamic build from quiet verse to full chorus, 68 BPM",
    lyricsSkeleton:
      "[Intro]\n(solo fingerpicked guitar)\n\n[Verse]\nOpen on a small, specific image\nHold the melody low and close\n\n[Chorus]\nThe emotional title line\nOne aching answer line\n\n[Verse 2]\nStrings enter underneath\n\n[Chorus]\n(repeat, add light piano)\n\n[Bridge]\nThe confession / turning point, voice cracks\n\n[Final Chorus]\n(full arrangement, harmonies swell)\n\n[Outro]\n(back to solo guitar, whispered last line)",
    notes: {
      en: "Keep style mood and lyric mood aligned - a sad lyric with an upbeat style produces incoherent output. Two-line chorus maximizes melodic memorability. The dynamic-build cue plus [Final Chorus] gives the classic quiet-to-loud ballad arc.",
      tr: "Stilin ruh hali ile sözlerin ruh halini uyumlu tut; hüzünlü bir sözle coşkulu bir stil tutarsız bir sonuç üretir. İki satırlık bir [Chorus] melodik akılda kalıcılığı en üst düzeye çıkarır. Dinamik yükseliş ipucu ile [Final Chorus], klasik sessizlikten gürlemeye uzanan balad yayını verir.",
      es: "Mantén alineados el estado de ánimo del estilo y el de la letra; una letra triste con un estilo animado produce un resultado incoherente. Un [Chorus] de dos líneas maximiza la memorabilidad melódica. La indicación de construcción dinámica más [Final Chorus] da el clásico arco de balada de suave a intenso.",
      pt: "Mantenha alinhados o clima do estilo e o clima da letra; uma letra triste com um estilo animado produz um resultado incoerente. Um [Chorus] de duas linhas maximiza a memorabilidade melódica. A indicação de construção dinâmica mais [Final Chorus] dá o clássico arco de balada do suave ao intenso.",
      de: "Halte Stil-Stimmung und Text-Stimmung im Einklang - ein trauriger Text mit einem beschwingten Stil erzeugt ein inkohärentes Ergebnis. Ein zweizeiliger [Chorus] maximiert die melodische Einprägsamkeit. Der dynamische Aufbau-Hinweis plus [Final Chorus] ergibt den klassischen Balladenbogen von leise zu laut.",
    },
  },
  {
    id: "aggressive-trap-drill",
    category: "recipe",
    title: {
      en: "Aggressive Trap / Drill",
      tr: "Agresif Trap / Drill",
      es: "Trap / Drill Agresivo",
      pt: "Trap / Drill Agressivo",
      de: "Aggressiver Trap / Drill",
    },
    goal: {
      en: "Dark, hard-hitting drill/trap with menacing energy.",
      tr: "Karanlık, sert vuran, tehditkâr enerjiye sahip bir drill/trap.",
      es: "Drill/trap oscuro y contundente con energía amenazante.",
      pt: "Drill/trap sombrio e impactante com energia ameaçadora.",
      de: "Dunkler, hart zuschlagender Drill/Trap mit bedrohlicher Energie.",
    },
    styleBox:
      "UK drill, dark and menacing, aggressive melodic rap delivery, sliding 808 sub-bass, skittering hi-hat rolls, sparse minor-key piano, gritty modern production, 142 BPM",
    lyricsSkeleton:
      "[Intro]\n(ominous piano, ad-libs)\n\n[Verse]\nHard opening bar sets the tone\nDense internal rhymes, punchy end-rhymes\n\n[Hook]\nRepeated catchphrase line\nOne threatening answer line\n\n[Verse 2]\nSwitch flow, double-time section\n\n[Hook]\n(repeat)\n\n[Bridge]\nHalf-time, atmospheric, ad-libs\n\n[Hook]\n(repeat, add layered ad-libs)\n\n[Outro]\n(808 rings out)",
    notes: {
      en: "Drill uses sliding 808s and ~140-145 BPM (halftime feel), encoded by the tempo and bass tags. 'melodic rap delivery' steers the vocal cadence. Use a short [Hook] rather than a long chorus so the catchphrase repeats hard. Keep to one genre.",
      tr: "Drill kayan 808'ler ve ~140-145 BPM (halftime hissi) kullanır; bunlar tempo ve bas etiketleriyle kodlanır. 'melodic rap delivery' vokal kadansını yönlendirir. Uzun bir nakarat yerine kısa bir [Hook] kullan, böylece slogan sert bir şekilde tekrarlanır. Tek türde kal.",
      es: "El drill usa 808 deslizantes y ~140-145 BPM (sensación de halftime), codificados por las etiquetas de tempo y bajo. 'melodic rap delivery' guía la cadencia vocal. Usa un [Hook] corto en lugar de un coro largo para que el eslogan se repita con fuerza. Quédate con un solo género.",
      pt: "O drill usa 808 deslizantes e ~140-145 BPM (sensação de halftime), codificados pelas etiquetas de andamento e grave. 'melodic rap delivery' orienta a cadência vocal. Use um [Hook] curto em vez de um refrão longo para que o bordão se repita com força. Fique com um único gênero.",
      de: "Drill nutzt gleitende 808er und ~140-145 BPM (Halftime-Feeling), kodiert durch die Tempo- und Bass-Tags. 'melodic rap delivery' steuert die vokale Kadenz. Nutze einen kurzen [Hook] statt eines langen Refrains, damit sich der Slogan hart wiederholt. Bleib bei einem Genre.",
    },
  },
  {
    id: "80s-synthwave",
    category: "recipe",
    title: {
      en: "80s Synthwave",
      tr: "80'ler Synthwave",
      es: "Synthwave de los 80",
      pt: "Synthwave dos Anos 80",
      de: "80er Synthwave",
    },
    goal: {
      en: "Nostalgic retro-futuristic synthwave with neon-night energy.",
      tr: "Neon geceleri enerjisine sahip, nostaljik ve retro-fütüristik bir synthwave.",
      es: "Synthwave nostálgico y retrofuturista con energía de noche de neón.",
      pt: "Synthwave nostálgico e retrofuturista com energia de noite de neon.",
      de: "Nostalgischer, retrofuturistischer Synthwave mit Neon-Nacht-Energie.",
    },
    styleBox:
      "synthwave, 80s retro-futuristic and nostalgic, breathy female vocals, analog synth pads, gated-reverb drums, Moog bassline, shimmering arpeggios, bright neon-night mix, 110 BPM",
    lyricsSkeleton:
      "[Intro]\n(arpeggiated synth, gated snare fill)\n\n[Verse]\nCinematic night-drive imagery\nKeep the melody smooth and even\n\n[Pre-Chorus]\nSynth swell, rising vocal\n\n[Chorus]\nGlowing title hook line\nNeon-soaked answer line\n\n[Verse 2]\nSecond scene, add counter-melody synth\n\n[Chorus]\n(repeat)\n\n[Instrumental Break]\n(lead synth solo over arpeggios)\n\n[Final Chorus]\n(add octave-up vocal harmony)\n\n[Outro]\n(arpeggio fades under reverb)",
    notes: {
      en: "Signature synthwave elements - gated-reverb drums, Moog bass, analog pads, arpeggios - are named explicitly because 'synthwave' alone can drift modern. If it still sounds too current, use the Exclude Styles field to remove 'modern trap' or 'autotune'.",
      tr: "İmza synthwave öğeleri (gated-reverb davullar, Moog bas, analog pad'ler, arpejler) açıkça adlandırılır çünkü tek başına 'synthwave' modern bir tona kayabilir. Hâlâ fazla güncel geliyorsa, 'modern trap' veya 'autotune' öğelerini kaldırmak için Exclude Styles alanını kullan.",
      es: "Los elementos característicos del synthwave -gated-reverb drums, Moog bass, analog pads, arpegios- se nombran explícitamente porque 'synthwave' por sí solo puede desviarse hacia lo moderno. Si aún suena demasiado actual, usa el campo Exclude Styles para quitar 'modern trap' o 'autotune'.",
      pt: "Os elementos característicos do synthwave -gated-reverb drums, Moog bass, analog pads, arpejos- são nomeados explicitamente porque 'synthwave' sozinho pode desviar para o moderno. Se ainda soar atual demais, use o campo Exclude Styles para remover 'modern trap' ou 'autotune'.",
      de: "Die typischen Synthwave-Elemente - gated-reverb drums, Moog bass, analog pads, Arpeggios - werden ausdrücklich benannt, weil 'synthwave' allein ins Moderne abdriften kann. Klingt es immer noch zu aktuell, nutze das Feld Exclude Styles, um 'modern trap' oder 'autotune' zu entfernen.",
    },
  },
  {
    id: "cinematic-epic-trailer-instrumental",
    category: "recipe",
    title: {
      en: "Cinematic Epic Trailer (Instrumental)",
      tr: "Sinematik Epik Fragman (Enstrümantal)",
      es: "Tráiler Épico Cinematográfico (Instrumental)",
      pt: "Trailer Épico Cinematográfico (Instrumental)",
      de: "Cineastischer Epic-Trailer (Instrumental)",
    },
    goal: {
      en: "Sweeping orchestral trailer cue that builds to a massive climax.",
      tr: "Devasa bir doruğa doğru yükselen, geniş kapsamlı orkestral bir fragman müziği.",
      es: "Pieza orquestal de tráiler, amplia y envolvente, que crece hacia un clímax colosal.",
      pt: "Peça orquestral de trailer, ampla e envolvente, que cresce até um clímax colossal.",
      de: "Weitläufige orchestrale Trailer-Musik, die zu einem gewaltigen Höhepunkt aufbaut.",
    },
    styleBox:
      "epic cinematic orchestral, triumphant and heroic, instrumental, full symphony orchestra, soaring strings, French horns, thunderous taiko and timpani, choir swells, film-score quality, building from quiet to massive, 90 BPM",
    lyricsSkeleton:
      "[Intro]\n(lone piano motif, distant strings)\n\n[Build]\n(strings enter, tension rises, ticking percussion)\n\n[Swell]\n(horns state the theme, dynamics grow)\n\n[Drop]\n(full orchestra hit, taiko drums, choir)\n\n[Breakdown]\n(strip to solo violin and pad)\n\n[Final Build]\n(everything returns, biggest statement)\n\n[Outro]\n(final orchestral hit, long reverb tail)",
    notes: {
      en: "Trailers live on dynamics, so the 'building from quiet to massive' cue plus [Build]/[Drop]/[Final Build] tags drive the arc more than any adjective. Keep it instrumental and route all direction through brackets. Local cues shape the moment better than piling everything at the top.",
      tr: "Fragmanlar dinamikler üzerine kuruludur; bu yüzden 'building from quiet to massive' ipucu ile [Build]/[Drop]/[Final Build] etiketleri, herhangi bir sıfattan daha çok yayı yönlendirir. Enstrümantal tut ve tüm yönergeleri köşeli parantezlerle ilet. Yerel ipuçları, her şeyi en üste yığmaktan daha iyi biçimde o anı şekillendirir.",
      es: "Los tráileres viven de la dinámica, así que la indicación 'building from quiet to massive' más las etiquetas [Build]/[Drop]/[Final Build] guían el arco más que cualquier adjetivo. Mantenlo instrumental y canaliza toda la dirección a través de corchetes. Las indicaciones locales moldean el momento mejor que amontonarlo todo al principio.",
      pt: "Os trailers vivem da dinâmica, então a indicação 'building from quiet to massive' mais as etiquetas [Build]/[Drop]/[Final Build] guiam o arco mais do que qualquer adjetivo. Mantenha-o instrumental e canalize toda a direção pelos colchetes. As indicações locais moldam o momento melhor do que amontoar tudo no início.",
      de: "Trailer leben von der Dynamik, daher treiben der Hinweis 'building from quiet to massive' plus die Tags [Build]/[Drop]/[Final Build] den Bogen stärker an als jedes Adjektiv. Halte es instrumental und leite alle Anweisungen über Klammern. Lokale Hinweise formen den Moment besser, als alles am Anfang aufzuhäufen.",
    },
  },
  {
    id: "gospel-soul",
    category: "recipe",
    title: {
      en: "Gospel / Soul",
      tr: "Gospel / Soul",
      es: "Gospel / Soul",
      pt: "Gospel / Soul",
      de: "Gospel / Soul",
    },
    goal: {
      en: "Uplifting, spirit-lifting gospel-soul with choir and organ.",
      tr: "Koro ve org eşliğinde, ruhu yükselten coşkulu bir gospel-soul.",
      es: "Gospel-soul alentador y edificante con coro y órgano.",
      pt: "Gospel-soul edificante e inspirador com coro e órgão.",
      de: "Erhebender, seelenvoller Gospel-Soul mit Chor und Orgel.",
    },
    styleBox:
      "gospel soul, uplifting and joyful, powerful female lead with runs, full call-and-response choir, Hammond B3 organ, gospel piano, hand claps, warm live-room mix, 92 BPM",
    lyricsSkeleton:
      "[Intro]\n(organ chord, choir hum)\n\n[Verse]\nTestimony line, lead vocal\nLeave space for melisma\n\n[Chorus]\nUplifting title declaration\nChoir answers the lead\n\n[Verse 2]\nRaise the key feeling, add claps\n\n[Chorus]\n(repeat, choir louder)\n\n[Bridge]\nVamp / call-and-response between lead and choir\n\n[Final Chorus]\n(key-change energy, full choir and organ)\n\n[Outro]\n(organ run, choir hold)",
    notes: {
      en: "Call-and-response is the heart of gospel; the [Bridge] vamp and 'call-and-response choir' tag let Suno trade lead and choir lines. Hammond B3 + gospel piano + claps are the defining palette. Keep it to one genre pairing rather than adding funk on top.",
      tr: "Karşılıklı söyleşme (call-and-response) gospel'in kalbidir; [Bridge] vamp'i ve 'call-and-response choir' etiketi, Suno'nun solist ile koro satırlarını değiş tokuş etmesini sağlar. Hammond B3 + gospel piyano + el çırpmaları belirleyici paleti oluşturur. Üstüne funk eklemek yerine tek bir tür eşleşmesinde kal.",
      es: "El call-and-response es el corazón del gospel; el vamp del [Bridge] y la etiqueta 'call-and-response choir' permiten que Suno intercambie líneas de voz principal y coro. Hammond B3 + gospel piano + palmas son la paleta que lo define. Quédate con un solo emparejamiento de géneros en vez de añadir funk encima.",
      pt: "O call-and-response é o coração do gospel; o vamp do [Bridge] e a etiqueta 'call-and-response choir' permitem que o Suno alterne entre voz principal e coro. Hammond B3 + gospel piano + palmas são a paleta que o define. Fique com um único emparelhamento de gêneros em vez de adicionar funk por cima.",
      de: "Call-and-Response ist das Herz des Gospel; der [Bridge]-Vamp und das Tag 'call-and-response choir' lassen Suno Lead- und Chorzeilen abwechseln. Hammond B3 + Gospel-Piano + Klatschen sind die prägende Palette. Bleib bei einer Genre-Kombination, statt Funk obendrauf zu packen.",
    },
  },
  {
    id: "edm-festival-drop",
    category: "recipe",
    title: {
      en: "EDM Festival Drop",
      tr: "EDM Festival Drop'u",
      es: "Drop de EDM de Festival",
      pt: "Drop de EDM de Festival",
      de: "EDM-Festival-Drop",
    },
    goal: {
      en: "Big-room festival EDM with an anthemic build and huge drop.",
      tr: "Marş gibi bir yükseliş ve devasa bir [Drop] içeren big-room festival EDM'i.",
      es: "EDM de festival big-room con una construcción de himno y un [Drop] enorme.",
      pt: "EDM de festival big-room com uma construção de hino e um [Drop] enorme.",
      de: "Big-Room-Festival-EDM mit einem hymnischen Aufbau und einem riesigen [Drop].",
    },
    styleBox:
      "big-room festival EDM, euphoric and high-energy, soaring female topline, supersaw lead, sidechained pluck chords, punchy four-on-the-floor kick, massive drop, festival main-stage mix, 128 BPM",
    lyricsSkeleton:
      "[Intro]\n(filtered pluck, rising white-noise sweep)\n\n[Verse]\nShort, airy topline lines\nLeave room to breathe\n\n[Build-Up]\n(snare roll accelerates, riser, vocal 'here we go')\n\n[Drop]\n(supersaw lead hook, no lyrics, pure energy)\n\n[Verse 2]\n(breakdown vocal, softer)\n\n[Build-Up]\n(second riser, bigger)\n\n[Drop]\n(main lead returns, add layers)\n\n[Outro]\n(filter down, kick drops out)",
    notes: {
      en: "The [Build-Up] -> [Drop] pair is the whole point of festival EDM; place them as local cues so Suno stacks tension then releases. Keep vocals sparse and airy so the instrumental drop carries the payoff. 128 BPM and 'four-on-the-floor' lock the genre feel.",
      tr: "[Build-Up] -> [Drop] ikilisi festival EDM'inin tüm mantığıdır; bunları yerel ipuçları olarak yerleştir, böylece Suno önce gerilimi biriktirir sonra boşaltır. Vokalleri seyrek ve havadar tut, böylece enstrümantal drop asıl karşılığı taşır. 128 BPM ve 'four-on-the-floor' tür hissini sabitler.",
      es: "El par [Build-Up] -> [Drop] es la razón de ser del EDM de festival; colócalos como indicaciones locales para que Suno acumule tensión y luego la libere. Mantén las voces escasas y aireadas para que el drop instrumental lleve la recompensa. 128 BPM y 'four-on-the-floor' fijan la sensación del género.",
      pt: "O par [Build-Up] -> [Drop] é toda a essência do EDM de festival; coloque-os como indicações locais para que o Suno acumule tensão e depois a libere. Mantenha os vocais esparsos e leves para que o drop instrumental carregue a recompensa. 128 BPM e 'four-on-the-floor' fixam a sensação do gênero.",
      de: "Das Paar [Build-Up] -> [Drop] ist der ganze Sinn von Festival-EDM; platziere sie als lokale Hinweise, damit Suno erst Spannung aufbaut und sie dann entlädt. Halte den Gesang spärlich und luftig, damit der instrumentale Drop die Auszahlung trägt. 128 BPM und 'four-on-the-floor' verankern das Genre-Gefühl.",
    },
  },
  {
    id: "country-storytelling",
    category: "recipe",
    title: {
      en: "Country Storytelling",
      tr: "Öykü Anlatan Country",
      es: "Country Narrativo",
      pt: "Country Narrativo",
      de: "Erzählerischer Country",
    },
    goal: {
      en: "Narrative country ballad with a clear story and twangy warmth.",
      tr: "Net bir öyküye ve tınlayan sıcaklığa sahip anlatımsal bir country baladı.",
      es: "Balada country narrativa con una historia clara y una calidez de sonido twangy.",
      pt: "Balada country narrativa com uma história clara e um calor de sonoridade twangy.",
      de: "Erzählerische Country-Ballade mit einer klaren Geschichte und twangiger Wärme.",
    },
    styleBox:
      "modern country storytelling ballad, warm and heartfelt, earnest male vocals with slight twang, acoustic and slide guitar, brushed drums, pedal steel, fiddle accents, clean Nashville mix, 84 BPM",
    lyricsSkeleton:
      "[Intro]\n(acoustic strum, pedal steel swell)\n\n[Verse]\nSet the scene: place, person, moment\nConcrete details, plainspoken language\n\n[Chorus]\nThe theme line the whole story turns on\nOne resonant answer line\n\n[Verse 2]\nAdvance the story in time\n\n[Chorus]\n(repeat)\n\n[Bridge]\nThe twist or realization\n\n[Final Chorus]\n(reframe the hook after the twist)\n\n[Outro]\n(fiddle tag, guitar rings out)",
    notes: {
      en: "Country is narrative-driven, so the Lyrics box does the heavy lifting - concrete verses that advance a story, a chorus that states the theme. Pedal steel + fiddle + slide guitar are the genre's fingerprint. 'slight twang' shapes the vocal without naming an artist.",
      tr: "Country anlatı odaklıdır; bu yüzden asıl işi Soz kutusu üstlenir - öyküyü ilerleten somut [Verse]'ler ve temayı belirten bir [Chorus]. Pedal steel + fiddle + slide guitar türün parmak izidir. 'slight twang' bir sanatçı adı vermeden vokali şekillendirir.",
      es: "El country se basa en la narrativa, así que el Lyrics box hace el trabajo pesado: versos concretos que hacen avanzar una historia, un [Chorus] que enuncia el tema. Pedal steel + fiddle + slide guitar son la huella del género. 'slight twang' moldea la voz sin nombrar a un artista.",
      pt: "O country é movido pela narrativa, então o Lyrics box faz o trabalho pesado: versos concretos que fazem a história avançar, um [Chorus] que enuncia o tema. Pedal steel + fiddle + slide guitar são a impressão digital do gênero. 'slight twang' molda a voz sem nomear um artista.",
      de: "Country ist erzählungsgetrieben, daher übernimmt die Lyrics box die Hauptarbeit - konkrete Strophen, die eine Geschichte vorantreiben, ein [Chorus], der das Thema benennt. Pedal steel + Fiddle + Slide-Gitarre sind der Fingerabdruck des Genres. 'slight twang' formt die Stimme, ohne einen Künstler zu nennen.",
    },
  },
  {
    id: "turkish-pop-arabesk",
    category: "recipe",
    title: {
      en: "Turkish Pop / Arabesk-Influenced",
      tr: "Türk Popu / Arabesk Etkili",
      es: "Pop Turco / Con Influencia Arabesk",
      pt: "Pop Turco / Com Influência Arabesk",
      de: "Türkischer Pop / mit Arabesk-Einfluss",
    },
    goal: {
      en: "Dramatic, melancholic Turkish pop with arabesk emotion; lyrics in Turkish.",
      tr: "Arabesk duygusuyla dramatik ve melankolik bir Türk popu; sözler Türkçe.",
      es: "Pop turco dramático y melancólico con emoción arabesk; letra en turco.",
      pt: "Pop turco dramático e melancólico com emoção arabesk; letra em turco.",
      de: "Dramatischer, melancholischer türkischer Pop mit Arabesk-Emotion; Text auf Türkisch.",
    },
    styleBox:
      "Turkish pop with arabesk influence, dramatic and melancholic, passionate male vocals singing in Turkish, sweeping string section, baglama, darbuka and davul percussion, Middle Eastern melodic phrasing, modern polished mix, 96 BPM",
    lyricsSkeleton:
      "[Intro]\n(strings and baglama, mournful melody)\n\n[Verse]\nAcı ve özlem üzerine ilk dize\nSıcak, dokunaklı bir anlatım\n\n[Pre-Chorus]\nGerilim yükselir, yaylılar girer\n\n[Chorus]\nAkılda kalan nakarat dizesi\nHasret dolu cevap dizesi\n\n[Verse 2]\nHikâye derinleşir\n\n[Chorus]\n(nakarat tekrar)\n\n[Bridge]\nDorukta duygusal patlama\n\n[Final Chorus]\n(tam orkestra, tutkulu vokal)\n\n[Outro]\n(yaylılar söner)",
    notes: {
      en: "Suno style and section tags stay in ENGLISH, but the sung lyrics can be in Turkish - write the lyric lines in Turkish and keep [Verse]/[Chorus] tags in English. Naming Turkish instruments (baglama, darbuka, davul) plus 'singing in Turkish' and 'Middle Eastern melodic phrasing' pushes authentic phrasing.",
      tr: "Suno stil ve bölüm etiketleri İNGİLİZCE kalır, ancak söylenen sözler Türkçe olabilir - şarkı sözü satırlarını Türkçe yaz ve [Verse]/[Chorus] etiketlerini İngilizce tut. Türk enstrümanlarını adlandırmak (baglama, darbuka, davul) ile birlikte 'singing in Turkish' ve 'Middle Eastern melodic phrasing' otantik bir söyleyişe yönlendirir.",
      es: "Las etiquetas de estilo y de sección de Suno se mantienen en INGLÉS, pero la letra cantada puede ir en turco: escribe las líneas de la letra en turco y mantén las etiquetas [Verse]/[Chorus] en inglés. Nombrar instrumentos turcos (baglama, darbuka, davul) junto con 'singing in Turkish' y 'Middle Eastern melodic phrasing' impulsa un fraseo auténtico.",
      pt: "As etiquetas de estilo e de seção do Suno permanecem em INGLÊS, mas a letra cantada pode ser em turco: escreva as linhas da letra em turco e mantenha as etiquetas [Verse]/[Chorus] em inglês. Nomear instrumentos turcos (baglama, darbuka, davul) junto com 'singing in Turkish' e 'Middle Eastern melodic phrasing' impulsiona um fraseado autêntico.",
      de: "Die Stil- und Abschnitts-Tags von Suno bleiben auf ENGLISCH, aber der gesungene Text kann auf Türkisch sein - schreibe die Textzeilen auf Türkisch und halte die Tags [Verse]/[Chorus] auf Englisch. Türkische Instrumente zu benennen (baglama, darbuka, davul) sowie 'singing in Turkish' und 'Middle Eastern melodic phrasing' fördern eine authentische Phrasierung.",
    },
  },
  {
    id: "metal",
    category: "recipe",
    title: {
      en: "Metal",
      tr: "Metal",
      es: "Metal",
      pt: "Metal",
      de: "Metal",
    },
    goal: {
      en: "Heavy, driving modern metal with aggression and a big chorus.",
      tr: "Agresif ve büyük bir [Chorus]'a sahip, ağır ve sürükleyici modern metal.",
      es: "Metal moderno pesado y contundente, con agresividad y un gran [Chorus].",
      pt: "Metal moderno pesado e vigoroso, com agressividade e um grande [Chorus].",
      de: "Schwerer, treibender Modern Metal mit Aggression und einem großen [Chorus].",
    },
    styleBox:
      "modern melodic metal, aggressive and powerful, gritty male vocals with clean-sung chorus, downtuned palm-muted guitars, double-kick drums, driving bass, tight heavy mix, 160 BPM",
    lyricsSkeleton:
      "[Intro]\n(feedback, palm-muted riff builds)\n\n[Verse]\nRhythmic, aggressive phrasing\nLock words to the palm-muted chug\n\n[Pre-Chorus]\nGuitars open up, vocal rises\n\n[Chorus]\nSoaring clean-sung title hook\nHeavy answer line\n\n[Verse 2]\nHarsher delivery, faster\n\n[Chorus]\n(repeat)\n\n[Guitar Solo]\n(shredding lead over rhythm section)\n\n[Breakdown]\n(half-time, heaviest chugging riff)\n\n[Final Chorus]\n(add harmonized vocals)\n\n[Outro]\n(final chord rings, cymbal wash)",
    notes: {
      en: "Contrast is key: 'gritty verses / clean-sung chorus' gives the metal dynamic without contradicting itself. [Guitar Solo] and [Breakdown] are recognized tags. Downtuned palm-muted guitars + double-kick define the heaviness. Don't stack sub-genres - pick one lane.",
      tr: "Kontrast anahtardır: 'gritty verses / clean-sung chorus', kendisiyle çelişmeden metal dinamiğini verir. [Guitar Solo] ve [Breakdown] tanınan etiketlerdir. Downtuned palm-muted gitarlar + double-kick ağırlığı tanımlar. Alt türleri üst üste yığma - tek bir şeride odaklan.",
      es: "El contraste es clave: 'gritty verses / clean-sung chorus' aporta la dinámica del metal sin contradecirse. [Guitar Solo] y [Breakdown] son etiquetas reconocidas. Downtuned palm-muted guitars + double-kick definen la pesadez. No apiles subgéneros: elige un solo carril.",
      pt: "O contraste é fundamental: 'gritty verses / clean-sung chorus' traz a dinâmica do metal sem se contradizer. [Guitar Solo] e [Breakdown] são etiquetas reconhecidas. Downtuned palm-muted guitars + double-kick definem o peso. Não empilhe subgêneros: escolha uma única faixa.",
      de: "Kontrast ist entscheidend: 'gritty verses / clean-sung chorus' liefert die Metal-Dynamik, ohne sich selbst zu widersprechen. [Guitar Solo] und [Breakdown] sind erkannte Tags. Downtuned palm-muted guitars + Double-Kick definieren die Schwere. Stapel keine Subgenres - wähle eine Spur.",
    },
  },
  {
    id: "jazz-lounge",
    category: "recipe",
    title: {
      en: "Jazz Lounge",
      tr: "Jazz Lounge",
      es: "Jazz Lounge",
      pt: "Jazz Lounge",
      de: "Jazz Lounge",
    },
    goal: {
      en: "Smooth, sophisticated late-night lounge jazz.",
      tr: "Yumuşak, sofistike, gece geç saatlere uygun bir lounge jazz.",
      es: "Jazz lounge suave y sofisticado para altas horas de la noche.",
      pt: "Jazz lounge suave e sofisticado para a madrugada.",
      de: "Sanfter, raffinierter Late-Night-Lounge-Jazz.",
    },
    styleBox:
      "smooth jazz lounge, sophisticated and relaxed, sultry female vocals, warm tenor saxophone, Rhodes electric piano, walking upright bass, light brushed drums, 1960s cocktail-bar atmosphere, 88 BPM",
    lyricsSkeleton:
      "[Intro]\n(soft Rhodes chords, brushed snare)\n\n[Verse]\nSmoky, understated lyric\nConversational phrasing, lots of space\n\n[Chorus]\nThe warm title line\nOne lingering answer line\n\n[Instrumental]\n(tenor sax solo over walking bass)\n\n[Verse 2]\nSecond mood, same intimacy\n\n[Chorus]\n(repeat, softer)\n\n[Outro]\n(sax tag, Rhodes resolves)",
    notes: {
      en: "Lounge jazz thrives on restraint - 'relaxed', low BPM and light brushed drums keep it from getting busy. A dedicated [Instrumental] sax solo is idiomatic. Rhodes + walking upright bass + brushed drums is the classic trio texture.",
      tr: "Lounge jazz ölçülülükle güzelleşir - 'relaxed', düşük BPM ve hafif fırça davullar parçanın kalabalıklaşmasını engeller. Ayrı bir [Instrumental] saksofon solosu bu türe özgüdür. Rhodes + walking upright bass + fırça davullar klasik üçlü dokusudur.",
      es: "El jazz lounge prospera con la contención: 'relaxed', un BPM bajo y light brushed drums evitan que se sature. Un solo de saxo dedicado en [Instrumental] es idiomático. Rhodes + walking upright bass + brushed drums es la clásica textura de trío.",
      pt: "O jazz lounge prospera com a contenção: 'relaxed', BPM baixo e light brushed drums evitam que fique carregado. Um solo de sax dedicado em [Instrumental] é idiomático. Rhodes + walking upright bass + brushed drums é a clássica textura de trio.",
      de: "Lounge-Jazz lebt von Zurückhaltung - 'relaxed', niedriges BPM und leichte Besen-Drums verhindern, dass es überladen wird. Ein eigenes Saxofon-Solo im [Instrumental] ist idiomatisch. Rhodes + walking upright bass + Besen-Drums ist die klassische Trio-Textur.",
    },
  },
  {
    id: "deep-house",
    category: "recipe",
    title: {
      en: "Deep House (Groovy Club)",
      tr: "Deep House (Groove'lu Kulüp)",
      es: "Deep House (Club con Groove)",
      pt: "Deep House (Clube com Groove)",
      de: "Deep House (Groovy Club)",
    },
    goal: {
      en: "Hypnotic, late-night deep house groove.",
      tr: "Hipnotik, gece geç saatlere uygun bir deep house groove'u.",
      es: "Groove de deep house hipnótico para altas horas de la noche.",
      pt: "Groove de deep house hipnótico para a madrugada.",
      de: "Hypnotischer Late-Night-Deep-House-Groove.",
    },
    styleBox:
      "deep house, groovy and hypnotic, filtered vocal chops, warm analog bass synth, four-on-the-floor kick, crisp shuffled hi-hats, Rhodes stabs, spacious late-night club reverb, 122 BPM",
    lyricsSkeleton:
      "[Intro]\n(filtered kick, rising pad)\n\n[Groove]\n(bassline and hats lock in)\n\n[Verse]\nShort chopped vocal phrases\nRepetition is the feature, not a flaw\n\n[Break]\n(drums drop, pad and vocal chop float)\n\n[Drop]\n(full groove returns, add Rhodes stabs)\n\n[Outro]\n(filter down, kick fades)",
    notes: {
      en: "House is groove-first, so lyrics are minimal chopped phrases - the Lyrics box mostly carries structure. 122 BPM + four-on-the-floor + shuffled hats define the pocket. The [Break] -> [Drop] gives club dynamics without festival-scale bombast.",
      tr: "House önce groove'dur; bu yüzden sözler minimal, kesilmiş ifadelerdir - Soz kutusu çoğunlukla yapıyı taşır. 122 BPM + four-on-the-floor + shuffled hats ritmik cebi (pocket) tanımlar. [Break] -> [Drop], festival ölçeğinde bir tantana olmadan kulüp dinamiği verir.",
      es: "El house es groove primero, así que la letra son frases cortas y recortadas: el Lyrics box carga sobre todo la estructura. 122 BPM + four-on-the-floor + shuffled hats definen el pocket. El [Break] -> [Drop] da dinámica de club sin la grandilocuencia a escala de festival.",
      pt: "O house é groove em primeiro lugar, então a letra são frases curtas e picotadas: o Lyrics box carrega principalmente a estrutura. 122 BPM + four-on-the-floor + shuffled hats definem o pocket. O [Break] -> [Drop] dá dinâmica de clube sem o exagero em escala de festival.",
      de: "House ist groove-first, daher sind die Texte minimale, zerhackte Phrasen - die Lyrics box trägt vor allem die Struktur. 122 BPM + four-on-the-floor + shuffled hats definieren den Pocket. Der [Break] -> [Drop] gibt Club-Dynamik ohne den Bombast im Festival-Maßstab.",
    },
  },
  {
    id: "indie-folk",
    category: "recipe",
    title: {
      en: "Indie Folk (Warm & Intimate)",
      tr: "Indie Folk (Sıcak ve Samimi)",
      es: "Indie Folk (Cálido e Íntimo)",
      pt: "Indie Folk (Quente e Íntimo)",
      de: "Indie Folk (Warm & Intim)",
    },
    goal: {
      en: "Cozy, organic indie folk with breathy vocals and acoustic warmth.",
      tr: "Nefesli vokaller ve akustik sıcaklıkla, huzurlu ve organik bir indie folk.",
      es: "Indie folk acogedor y orgánico con voces susurrantes y calidez acústica.",
      pt: "Indie folk aconchegante e orgânico com vocais sussurrados e calor acústico.",
      de: "Gemütlicher, organischer Indie Folk mit hauchigem Gesang und akustischer Wärme.",
    },
    styleBox:
      "indie folk, warm and intimate, soft male vocals with breathy delivery, fingerpicked acoustic guitar, upright bass, brushed snare, harmonica, lo-fi analog warmth, 90 BPM",
    lyricsSkeleton:
      "[Intro]\n(fingerpicked guitar)\n\n[Verse]\nQuiet, image-rich opening line\nUnhurried, natural phrasing\n\n[Chorus]\nGentle title hook\nOne warm answer line\n\n[Verse 2]\nAdd harmonica and upright bass\n\n[Chorus]\n(repeat, light harmony)\n\n[Bridge]\nGroup 'ooh' harmonies, stripped rhythm\n\n[Final Chorus]\n(add brushed drums, fuller)\n\n[Outro]\n(guitar and hum fade)",
    notes: {
      en: "'lo-fi analog warmth' gives the homemade texture indie folk needs without over-processing. Breathy soft vocals + fingerpicking + upright bass are the core palette. Keep instruments to the essential few - stacking too many fights the intimacy.",
      tr: "'lo-fi analog warmth', aşırı işleme olmadan indie folk'un ihtiyaç duyduğu ev yapımı dokuyu verir. Nefesli yumuşak vokaller + fingerpicking + upright bass temel paletidir. Enstrümanları gerekli birkaç taneyle sınırla - çok fazlasını üst üste yığmak samimiyete zarar verir.",
      es: "'lo-fi analog warmth' aporta la textura casera que el indie folk necesita sin sobreprocesar. Voces suaves y susurrantes + fingerpicking + upright bass son la paleta central. Limita los instrumentos a los pocos esenciales: apilar demasiados atenta contra la intimidad.",
      pt: "'lo-fi analog warmth' dá a textura caseira que o indie folk precisa sem processar demais. Vocais suaves e sussurrados + fingerpicking + upright bass são a paleta central. Limite os instrumentos aos poucos essenciais: empilhar demais prejudica a intimidade.",
      de: "'lo-fi analog warmth' verleiht die selbstgemachte Textur, die Indie Folk braucht, ohne zu überproduzieren. Hauchige, weiche Stimmen + Fingerpicking + Kontrabass sind die Kernpalette. Beschränke die Instrumente auf die wenigen wesentlichen - zu viele zu stapeln bekämpft die Intimität.",
    },
  },
  {
    id: "rnb-neosoul",
    category: "recipe",
    title: {
      en: "R&B / Neo-Soul",
      tr: "R&B / Neo-Soul",
      es: "R&B / Neo-Soul",
      pt: "R&B / Neo-Soul",
      de: "R&B / Neo-Soul",
    },
    goal: {
      en: "Silky, groove-driven neo-soul with lush chords and smooth vocals.",
      tr: "Zengin akorlar ve yumuşak vokallerle, ipeksi ve groove odaklı bir neo-soul.",
      es: "Neo-soul sedoso y guiado por el groove, con acordes exuberantes y voces suaves.",
      pt: "Neo-soul sedoso e guiado pelo groove, com acordes exuberantes e vocais suaves.",
      de: "Seidiger, groove-getriebener Neo-Soul mit üppigen Akkorden und weichem Gesang.",
    },
    styleBox:
      "neo-soul R&B, smooth and sensual, silky female vocals with airy runs, lush Rhodes and jazzy extended chords, warm fingered bass, laid-back swung drums, subtle vinyl warmth, 78 BPM",
    lyricsSkeleton:
      "[Intro]\n(Rhodes chords, soft vocal ad-libs)\n\n[Verse]\nIntimate, conversational lyric\nLet the melody bend and slide\n\n[Pre-Chorus]\nHarmony stacks build\n\n[Chorus]\nSmooth title hook\nOne sultry answer line\n\n[Verse 2]\nAdd background vocal layers\n\n[Chorus]\n(repeat)\n\n[Bridge]\nVocal-run vamp over the groove\n\n[Chorus]\n(repeat, richest harmonies)\n\n[Outro]\n(ad-libs over Rhodes, fade)",
    notes: {
      en: "Neo-soul lives on lush extended chords and a laid-back swung pocket - the Rhodes + 'jazzy extended chords' + swung drums tags set that up. 'airy runs' invites melisma. Low BPM (78) keeps it in the pocket rather than energetic pop.",
      tr: "Neo-soul, zengin genişletilmiş akorlar ve rahat bir swing cebi üzerine kuruludur - Rhodes + 'jazzy extended chords' + swing davul etiketleri bunu kurar. 'airy runs' melismaya davet eder. Düşük BPM (78) parçayı enerjik pop yerine ritmik cepte tutar.",
      es: "El neo-soul vive de los acordes extendidos y exuberantes y de un pocket relajado con swing: las etiquetas Rhodes + 'jazzy extended chords' + swung drums lo establecen. 'airy runs' invita al melisma. Un BPM bajo (78) lo mantiene en el pocket en lugar de un pop enérgico.",
      pt: "O neo-soul vive dos acordes estendidos e exuberantes e de um pocket relaxado com swing: as etiquetas Rhodes + 'jazzy extended chords' + swung drums estabelecem isso. 'airy runs' convida ao melisma. Um BPM baixo (78) o mantém no pocket em vez de um pop enérgico.",
      de: "Neo-Soul lebt von üppigen erweiterten Akkorden und einem entspannten, geswingten Pocket - die Tags Rhodes + 'jazzy extended chords' + swung drums richten das ein. 'airy runs' lädt zum Melisma ein. Niedriges BPM (78) hält es im Pocket statt in energiegeladenem Pop.",
    },
  },
];
