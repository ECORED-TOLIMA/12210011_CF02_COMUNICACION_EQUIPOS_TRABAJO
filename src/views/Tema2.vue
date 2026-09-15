<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Revisión del proceso de comunicación

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-01.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t2/img-02.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 Una estrategia puesta en marcha no confirma por sí sola que la información esté llegando a quien debe recibirla. Entre lo planeado y lo que sucede en la jornada aparecen desfases que solo se advierten cuando alguien los busca con método y los registra. La revisión del proceso no es una evaluación final ni un balance de cierre: es un examen continuo que hace posible detectar desviaciones cuando todavía es posible corregirlas sin rehacer el trabajo.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Esta revisión no implica un acto único sino en un encadenamiento de operaciones que se apoyan entre sí. Cada una toma como insumo el producto de la anterior, y ninguna puede sustituir a las demás sin que el resultado pierda respaldo. Cuando una de ellas se omite, la organización termina decidiendo con información parcial y atribuyendo al azar lo que en realidad obedece a un vacío del método.

      p.mb-4 La manera de nombrar un problema revela si la organización lo revisó o si apenas lo supuso. Un mismo hecho puede enunciarse como una impresión general o como una cifra que remite a un registro, y de esa diferencia depende lo que el equipo pueda decidir después. Dos formas de diagnóstico lo ilustran:

      .row.justify-content-center.mb-4
        .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t2/img-03.svg' alt="")
            .tarjeta.tarjeta--C03.px-5.py-3
              .p-4
                h4 Diagnóstico formulado como impresión
                p Enuncia el problema en generalidades que nadie puede comprobar ni discutir.
                p.mb-0 #[b En la práctica:] la gente no lee los comunicados, sin precisar cuáles, en qué periodo ni en qué grupo.

        .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t2/img-04.svg' alt="")
            .tarjeta.tarjeta--C03.px-5.py-3
              .p-4
                h4 Diagnóstico formulado como dato
                p Enuncia el problema con cifras que remiten a un registro verificable.
                p.mb-0 #[b En la práctica:] de los cuatro comunicados del trimestre, dos se abrieron el mismo día y otros dos permanecieron sin apertura en la mitad del personal en turnos.

      p.mb-4 La primera formulación cierra la conversación, porque no ofrece nada que comprobar; la segunda la abre, porque indica dónde intervenir. Revisar es, ante todo, cambiar la manera de enunciar el problema.

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #74DCDD !important")
        .bloque-texto-g__img.img-bg-05
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La revisión adquiere sentido cuando se organiza como una rutina y no como una reacción ante el problema. La lógica de la mejora continua, que Deming (1989) llevó a los procesos productivos a partir del ciclo formulado por Shewhart, resulta aplicable a la comunicación: planear lo que se va a comunicar, ejecutarlo, verificar lo que ocurrió y actuar sobre la diferencia. El valor de esa secuencia no está en sus etapas, sino en la disciplina para cerrar el ciclo y volver a empezarlo con la información obtenida.

      p.mb-4 Tres operaciones sostienen la revisión y es preferible distinguir qué aporta cada una:

      .tarjeta--container.row.mb-4
        .col-lg.tarjeta.color-secundario.azul.p-5 
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-06.svg', alt='')          
          h3.text-center Seguimiento
          p.mb-0(style="color: #000 !important") Registra el avance de las acciones previstas y las novedades que alteraron su desarrollo. Responde a la pregunta por lo que ocurrió y deja la constancia sobre la cual se apoyan las dos operaciones siguientes.

        .col-lg.tarjeta.color-acento-botones.amarillo.p-5 
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-07.svg', alt='')          
          h3.text-center.parrafo Verificación
          p.parrafo.mb-0(style="color: #000 !important") #[b En el terreno:] Contrasta ese registro con evidencia obtenida mediante técnicas definidas de antemano. Responde a la pregunta por lo que puede comprobarse y separa el dato del supuesto con que suele explicarse un resultado.

        .col-lg.tarjeta.color-acento-botones.naranja.p-5 
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-08.svg', alt='')          
          h3.text-center.parrafo Análisis
          p.parrafo.mb-0(style="color: #000 !important") #[b En el terreno:] Interpreta la evidencia frente a los objetivos y la convierte en hallazgos formulados con su alcance. Responde a la pregunta por lo que significa el dato y produce el insumo con el que se sustenta cualquier ajuste.

      p.mb-4 El orden entre las tres no es intercambiable: sin registro no hay qué verificar y sin verificación el análisis interpreta impresiones. Recorrerlas completas es lo que permite que una decisión de ajuste pueda explicarse ante quien la cuestione.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 El recorrido de este tema sigue el orden natural del trabajo: primero se registra lo que va ocurriendo, después se comprueba con evidencia y, por último, se interpreta lo comprobado. Avanzar en ese orden posibilita pasar de la impresión sobre cómo va la estrategia a una conclusión que puede explicarse y sustentarse.

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Seguimiento a la implementación

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t2/img-10.svg', alt='')
              .col-lg-10.col-12
                p Cuando una estrategia lleva algunas semanas en marcha, nadie recuerda con exactitud qué se ejecutó y qué quedó pendiente, salvo que alguien lo haya registrado de forma periódica. El propósito de ese seguimiento no es vigilar a las personas, sino saber en qué estado se encuentra cada acción prevista: cuáles se ejecutaron, cuáles se aplazaron, cuáles cambiaron de forma y qué dificultades aparecieron durante su desarrollo.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-09.png', alt='')

      p.mb-4 Hacer seguimiento al avance no basta si se hace de cualquier manera. Un registro tomado al azar, disperso o apenas conversado deja al equipo sin argumentos cuando llega el momento de justificar un ajuste. Tres condiciones sostienen un seguimiento útil:

      .cajon.cajon.C03.p-5.mb-4
        SlyderB(:datos="datosSlyder")

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-mensaje-canal.mb-4
            .recurso-mensaje-canal__icono
              img(src='@/assets/curso/temas/t2/img-14.svg', alt='')

            .recurso-mensaje-canal__texto
              p.mb-0 Cuando falta una de las tres, el seguimiento deja de sostener decisiones. Con las tres, cualquier ajuste puede explicarse con lo que quedó registrado.

          p Una entidad puede sostener comités semanales de comunicación durante meses y, al momento de justificar un ajuste, no disponer de un solo registro que respalde la decisión; se conversó mucho, pero no quedó constancia de lo acordado.

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-15.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p El seguimiento se distingue de la supervisión por su objeto. La supervisión examina el desempeño de las personas; el seguimiento, el comportamiento del proceso. Esa diferencia, que parece formal, determina la disposición del equipo a reportar lo que no funcionó: donde el registro se percibe como control individual, las novedades desaparecen del informe y el proceso pierde justamente la información que necesitaba.
            p El alcance del seguimiento se define con anticipación mediante las siguientes decisiones:
            ul.lista-ul--color
              li 
                i.fas.fa-comment-dots
                span #[b Qué se registra:] las acciones críticas de la estrategia y no la totalidad de lo que ocurre.
              li 
                i.fas.fa-comment-dots
                span #[b Con qué frecuencia:] un ritmo sostenible que permita comparar periodos entre sí.
              li 
                i.fas.fa-comment-dots
                span #[b Quién registra:] una responsabilidad asignada y no una tarea compartida sin dueño.
              li 
                i.fas.fa-comment-dots
                span #[b Dónde queda:] un soporte único, accesible y consultable por el equipo.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0 Con esos puntos ya definidos, el seguimiento deja de competir con el trabajo diario y se convierte en parte de él. Un registro breve y constante rinde más que un informe extenso que se elabora una sola vez y llega cuando las decisiones ya se tomaron.

      p.mb-4 El registro se sostiene con mecanismos sencillos que reparten el esfuerzo a lo largo del ciclo, en lugar de concentrarlo en el momento del informe. Cada uno aporta un tipo distinto de constancia y ninguno sustituye a los demás. Estos son los mecanismos que organizan el seguimiento:

      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Tablero de avance de actividades
            p.text-center Consigna cada acción prevista, su fecha, su responsable y su estado actual.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Bitácora de novedades
            p.text-center Registra los hechos no previstos que afectaron la ejecución, con la fecha en que ocurrieron.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Reporte periódico de canales
            p.text-center Recoge los datos que la propia herramienta entrega, como envíos, aperturas o consultas.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Acta de comité de seguimiento
            p.text-center Deja constancia de lo revisado, de las decisiones tomadas y de quién las ejecuta.
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #74DCDD !important")
        .bloque-texto-g__img.img-bg-06
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") Los cuatro mecanismos cumplen funciones distintas y se complementan: el tablero registra el avance, la bitácora explica las desviaciones, el reporte aporta el dato objetivo y el acta fija el compromiso. Un seguimiento con los cuatro produce, al cabo de un ciclo, una memoria del proceso que ninguna reunión reconstruye después.

      p El seguimiento cumple su función cuando produce alertas y no solo descripciones. Una alerta es un dato que, al superar cierto límite, obliga a revisar antes del cierre del ciclo. Definir esos límites al inicio evita la discusión posterior sobre si el resultado era o no preocupante, porque el criterio quedó acordado cuando nadie tenía todavía un resultado que defender.
      p.mb-4 Tres señales tempranas justifican una revisión inmediata del proceso:

      .row.justify-content-center.mb-4(data-aos="flip-down")
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-17.svg", alt="").img80.m-auto
            h4.text-center Acciones aplazadas por segunda vez
            p.text-center Una actividad que se posterga dos periodos seguidos rara vez se recupera sola. Señal concreta: la socialización de un procedimiento que lleva dos comités sin realizarse.
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-18.svg", alt="").img80.m-auto
            h4.text-center Consulta descendente en un mismo grupo
            p.text-center Una caída sostenida indica pérdida de pertinencia o de acceso. Señal concreta: una sede regional cuya consulta del boletín disminuye tres meses consecutivos.
        .col-xl-4.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-19.svg", alt="").img80.m-auto
            h4.text-center Aumento de solicitudes sobre el mismo asunto
            p.text-center Las preguntas repetidas señalan un mensaje que no está resolviendo lo que debía. Señal concreta: consultas reiteradas por el mismo punto de un instructivo recién publicado.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Las tres señales tienen en común que aparecen antes del cierre del ciclo. Atenderlas en ese momento cuesta una conversación; atenderlas al final cuesta rehacer la acción completa.

      p.mb-0 El registro indica lo que se hizo, pero no dice si eso produjo el efecto que se esperaba. Para saberlo hace falta buscar evidencia con procedimientos definidos, que aporten datos comprobables y no impresiones. Esos procedimientos son las técnicas de verificación.

      Separador

      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.2 Técnicas de verificación

      p.mb-4 Preguntar si la comunicación funciona admite respuestas muy distintas según cómo se averigüe, y por eso existen procedimientos definidos para obtener evidencia de lo que realmente ocurre. Cada uno responde a una pregunta distinta y produce un tipo de dato distinto: unas informan sobre lo que las personas hacen, otras sobre lo que perciben y otras sobre lo que quedó registrado.

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-20.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t2/img-21.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 Ninguna técnica basta por sí sola, y esa limitación es la razón principal para combinarlas. El reporte de una plataforma indica cuántas personas abrieron un comunicado, pero no si lo entendieron. Una encuesta recoge percepciones, pero no comprueba conductas. La observación revela cómo se comporta el equipo en una reunión, aunque no explique por qué lo hace.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La combinación adquiere sentido cuando los resultados no coinciden, que es precisamente cuando aporta más. Si el reporte indica alta apertura de un instructivo y la encuesta revela que persisten las mismas dudas, la contradicción no es un error de medición: indica que el problema no está en la difusión sino en la redacción del documento.

      p.mb-4 La verificación produce dos clases de información que responden a preguntas distintas y no conviene mezclar. Cada una aporta una parte del panorama y ninguna sustituye a la otra. Estas son:

      .row.justify-content-center.mb-4
        .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t2/img-22.svg' alt="")
            .tarjeta.tarjeta--C03.px-5.py-3
              .p-4
                h4 1. Información cuantitativa
                p.mb-0 Establece magnitudes. Responde cuántas personas recibieron el mensaje, cuántas respondieron y en cuánto tiempo lo hicieron. 

        .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              .col-lg-12(data-aos="flip-up")
                img(src='@/assets/curso/temas/t2/img-23.svg' alt="")
            .tarjeta.tarjeta--C03.px-5.py-3
              .p-4
                h4 2. Información cualitativa
                p.mb-0 Establece sentidos. Responde por qué no respondieron, qué entendieron del mensaje y qué las detuvo.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Las decisiones sólidas se apoyan en ambas: la cuantitativa delimita el tamaño del problema y la cualitativa explica su origen. Con una sola clase se sabe cuánto ocurre, pero no por qué.

      p.mb-4 Antes de aplicar cualquier técnica conviene asegurar unas condiciones mínimas, porque de ellas depende que el dato recogido sirva después. Descuidarlas suele advertirse tarde, cuando la situación ya no puede repetirse. Estas son las cuatro que no deberían faltar:
      
      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Propósito explícito
            p.text-center La técnica responde a una pregunta formulada antes de aplicarla.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Momento pertinente
            p.text-center Se aplica cuando el hecho aún puede recordarse o comprobarse.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Registro inmediato
            p.text-center Lo ocurrido se consigna en el momento y no de memoria.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Reserva de la fuente
            p.text-center Quien aporta información sabe cómo se usará y en qué condiciones.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
            p.mb-0 Estas condiciones determinan la calidad de la evidencia más que la complejidad del método elegido. Una observación registrada en el momento, con un propósito claro, aporta más que una encuesta amplia aplicada sin saber qué se quiere averiguar.

          p No todas las preguntas sobre la comunicación se responden con el mismo procedimiento: unas exigen revisar registros y otras, consultar a quienes participaron. Decidirlo antes de recoger los datos evita reunir información que después no responde nada. Cuatro técnicas cubren las necesidades habituales de verificación en comunicación interna:

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
            .row(titulo="Revisión documental")
              .col-12.mb-0.mb-md-0
                p.mb-0 Examina actas, comunicados, reportes de envío y versiones de documentos para comprobar qué se emitió, cuándo y con qué contenido. Aporta evidencia objetiva y disponible sin costo adicional, aunque no informa sobre la comprensión del mensaje.
            .row(titulo="Observación estructurada")
              .col-12.mb-0.mb-md-0
                p.mb-0 Registra, mediante una pauta definida de antemano, cómo se desarrolla una situación comunicativa real, como una reunión de equipo o una jornada de socialización. Permite registrar comportamientos que nadie reporta por escrito, y exige un observador que no intervenga en la dinámica.
            .row(titulo="Encuesta")
              .col-12.mb-0.mb-md-0
                p.mb-0 Recoge percepciones de un grupo amplio sobre claridad, oportunidad o utilidad de la comunicación, con preguntas cerradas que facilitan comparar resultados entre áreas y entre periodos. Su validez depende de la formulación de las preguntas y de que la participación sea suficiente.
            .row(titulo="Entrevista o grupo focal")
              .col-12.mb-0.mb-md-0
                p.mb-0 Explora en profundidad las razones detrás de un comportamiento comunicativo, con preguntas abiertas y un número reducido de participantes. Aporta explicaciones que ningún dato cuantitativo ofrece, a cambio de un mayor tiempo de aplicación y análisis.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-24.png', alt='')

      p.mb-4 La elección entre estas técnicas depende de la pregunta que se quiera responder y del tiempo disponible, no de su complejidad. Una revisión documental bien hecha aporta más que una encuesta improvisada, y dos técnicas que se contrastan entre sí producen conclusiones más sólidas que cuatro aplicadas sin propósito definido.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block.svg-podcast-console
          figure
            img(src='@/assets/curso/temas/t2/img-25.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Conviene además dejar constancia de la técnica empleada en cada hallazgo. Un mismo resultado tiene distinto peso según provenga de un reporte automático, de una percepción recogida en encuesta o de una observación puntual, y quien lea el informe necesita ese dato para valorar la conclusión. Registrar la fuente junto al resultado evita que, meses después, nadie recuerde de dónde salió la cifra que sustentó una decisión.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #74DCDD !important")
        .bloque-texto-g__img.img-bg-07
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La combinación de técnicas también tiene un orden recomendable. Vale la pena empezar por la revisión documental, que aprovecha información ya disponible y delimita el problema sin costo adicional. Después siguen los datos que entregan las plataformas, que aportan magnitudes. La entrevista o el grupo focal se reservan para el momento en que ya se sabe qué explicar. Ese orden evita convocar al equipo para averiguar algo que el propio registro respondía.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Cada técnica necesita una herramienta concreta para recoger lo que encuentra y un lugar donde conservarlo. Sin esa herramienta, la información se pierde o queda en la memoria de quien la recogió. Los instrumentos que cumplen esa función, y la manera de organizar lo recolectado, determinan si la evidencia podrá sustentar una decisión posterior.

      Separador

      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Instrumentos y recolección de evidencias

      p.mb-4 Una técnica no se aplica sola: necesita un formato de encuesta, una pauta de observación, un guion de entrevista o una lista de chequeo, que son las herramientas con que se recoge el dato. La evidencia es el producto que resulta de aplicarlos, es decir, el conjunto de registros que sirve para demostrar qué ocurrió durante la implementación.
      
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-27.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t2/img-28.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 Un instrumento es útil cuando cumple tres condiciones: recoge exactamente la información que se necesita, la recoge de un modo que admite comparación y puede aplicarse en el tiempo real del que dispone el equipo. Un formato extenso que nadie completa produce menos evidencia que una lista de chequeo de seis puntos que se aplica todas las semanas.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La recolección tiene además una exigencia propia: acumular soportes no equivale a reunir evidencia. Cien capturas de pantalla de mensajes enviados prueban que hubo emisión, no que hubo comunicación. La evidencia se selecciona en función de la pregunta que se quiere responder, se organiza por fecha y por fuente, y se conserva para que otra persona pueda revisarla.

      p La redacción del instrumento incide directamente en la calidad de lo que recoge. Las orientaciones de lenguaje claro del Departamento Nacional de Planeación (2015) resultan aplicables aquí: preguntas breves, una idea por enunciado y vocabulario reconocible por quien responde. Un cuestionario que exige interpretar la pregunta antes de contestarla no mide la comunicación de la organización, mide la comprensión del formulario.
      p.mb-4 Antes de aplicar un instrumento vale la pena someterlo a estas comprobaciones:

      .row.justify-content-center.mb-4(data-aos="flip-down")
        .col-xl-3.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-29.svg", alt="").img80.m-auto
            h4.text-center Una idea por pregunta
            p Cada enunciado indaga un solo asunto, de modo que la respuesta no quede a medias.
        .col-xl-3.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-30.svg", alt="").img80.m-auto
            h4.text-center Lenguaje del destinatario
            p Las palabras son las que usa quien responde, sin siglas ni términos propios de un área.
        .col-xl-3.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-31.svg", alt="").img80.m-auto
            h4.text-center Opciones excluyentes
            p Cada respuesta cabe en una sola casilla, sin que dos opciones puedan marcarse a la vez.
        .col-xl-3.col-lg-8.mb-4.mb-xl-5
          .crd.crd--grayGrad
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/t2/img-32.svg", alt="").img80.m-auto
            h4.text-center Tiempo de respuesta
            p El instrumento se contesta dentro de la jornada, sin desplazar las tareas del día.

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-mensaje-canal.mb-4
            .recurso-mensaje-canal__icono
              img(src='@/assets/curso/temas/t2/img-33.svg', alt='')

            .recurso-mensaje-canal__texto
              p.mb-0 Una revisión de pocos minutos sobre estos cuatro puntos evita el problema más costoso de la recolección, que consiste en descubrir, con los datos ya en la mano, que las respuestas no admiten interpretación.

      p.mb-4 La siguiente tabla reúne los instrumentos que se emplean con más frecuencia en la revisión del proceso. Cada fila indica qué herramienta se aplica, qué evidencia produce y en qué momento conviene usarla, correspondencia que ayuda a escoger el instrumento antes de recoger la información y no después:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 2.
            span Instrumentos de recolección y evidencia que producen
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 30%; background-color: #FFF1BF;") Instrumento
                  th(style="width: 30%; background-color: #FFF1BF;") Evidencia que produce
                  th(style="width: 40%; background-color: #FFF1BF;") Momento de aplicación
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #F1F8FF;") Lista de chequeo de emisión
                  td(style="background-color: #F1F8FF;") Registro de qué se comunicó, por qué canal y en qué fecha
                  td(style="background-color: #F1F8FF;") Al cierre de cada acción prevista
                tr(data-aos="fade-right")
                  td Pauta de observación de reunión
                  td Descripción de la participación y de las dudas planteadas
                  td Durante la jornada observada
                tr(data-aos="fade-right")
                  td(style="background-color: #F1F8FF;") Cuestionario de percepción
                  td(style="background-color: #F1F8FF;") Valoración del equipo sobre claridad y oportunidad
                  td(style="background-color: #F1F8FF;") Al finalizar un ciclo de comunicación
                tr(data-aos="fade-right")
                  td Guion de entrevista
                  td Explicación de las razones de un comportamiento comunicativo
                  td Cuando un dato requiere interpretación
                tr(data-aos="fade-right")
                  td(style="background-color: #F1F8FF;") Reporte de la plataforma
                  td(style="background-color: #F1F8FF;") Cifras de envío, apertura, consulta o respuesta
                  td(style="background-color: #F1F8FF;") Con la periodicidad que defina el seguimiento

      .row.justify-content-center
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p La cantidad de evidencia también admite un límite razonable. Recoger más de lo que se va a analizar consume tiempo del equipo y retrasa la conclusión, con el agravante de que un volumen excesivo dificulta encontrar el dato pertinente. Definir desde el inicio qué preguntas debe responder la validación facilita ajustar la recolección a ese propósito y descartar los registros que no aportan a ninguna de ellas.
            .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La evidencia recogida necesita un lugar y un orden, o se pierde con la misma rapidez con que se produjo. Organizarla supone definir dónde se guarda, con qué nombre se identifica cada archivo y durante cuánto tiempo se conserva. Ese trabajo, que parece administrativo, es el que permite que el informe final se redacte con soportes y no con recuerdos.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-34.png', alt='')

      p.mb-4 Tres criterios ordenan el archivo de la evidencia desde el primer registro:

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-35.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Identificación uniforme")
              .col-12.mb-0
                p.mb-0 Cada soporte se nombra con la fecha, la acción y la fuente que lo produjo. Así se aplica: un archivo rotulado con el año, el mes y el nombre de la acción se localiza sin abrirlo.
            .row(numero="2" titulo="Ubicación única")
              .col-12.mb-0
                p.mb-0 La evidencia se guarda en una sola carpeta compartida y no en los equipos de quienes la recogieron. Así se aplica: una carpeta institucional por ciclo evita que el soporte desaparezca con un cambio de personal.
            .row(numero="3" titulo="Vigencia definida")
              .col-12.mb-0
                p.mb-0 Se establece cuánto tiempo se conserva cada tipo de soporte antes de depurarlo. Así se aplica: los reportes de plataforma se conservan un año y las actas, el tiempo que fije la tabla de retención documental.

      p Los tres criterios convierten un conjunto disperso de archivos en un cuerpo de evidencia consultable, que es la condición para que el análisis posterior pueda sustentarse.
      p.mb-0 Con la evidencia ya reunida y ordenada, queda el paso que le da sentido. Los datos por sí solos no indican qué hacer: necesitan interpretarse frente a lo que la estrategia se había propuesto. Ese trabajo de interpretación es el análisis de hallazgos.

      Separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Análisis de hallazgos

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #74DCDD !important")
        .bloque-texto-g__img.img-bg-08
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") Una vez que la recolección termina, el equipo dispone de cifras y registros que todavía no dicen nada por sí solos. Un hallazgo aparece cuando esos datos se cruzan con lo que la estrategia se había propuesto, y no equivale al dato sin procesar ni a la opinión de quien lo revisa. Es la conclusión que el dato sostiene, enunciada con la claridad suficiente para que otra persona pueda comprobarla con la misma evidencia.
      
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-37.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .row.mb-0
            p El análisis avanza cuando se distinguen tres planos que suelen confundirse entre sí:
            ul.lista-ul--color
              li 
                i.fas.fa-comment-dots
                span #[b Dato:] registra un hecho ocurrido, sin interpretarlo. 
              li 
                i.fas.fa-comment-dots
                span #[b Hallazgo:] interpreta ese hecho frente a lo que la estrategia se propuso. 
              li 
                i.fas.fa-comment-dots
                span #[b Causa:] explica por qué el hecho ocurrió.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Un mismo caso contiene los tres planos: que el 40 % del personal no abrió la circular es el dato; que la circular no alcanzó al personal en turnos es el hallazgo; y que el único canal empleado fue el correo institucional, consultado una vez por semana por ese grupo, es la causa.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block.svg-podcast-console
          figure
            img(src='@/assets/curso/temas/t2/img-38.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Confundir los tres planos conduce a decisiones equivocadas. Una organización que se queda en el dato reenvía la circular y obtiene el mismo resultado. Una que llega al hallazgo cambia de canal. Y una que identifica la causa revisa además el criterio con que asigna canales a cada grupo, con lo cual evita que el problema se repita en el siguiente mensaje.

      p.mb-4 El análisis está expuesto a sesgos que resulta útil reconocer para poder controlarlos. El más frecuente consiste en buscar la evidencia que confirma lo que ya se sospechaba y pasar por alto la que lo contradice. Le siguen la generalización a partir de un caso llamativo y la atribución del resultado a las personas antes que al proceso. Ninguno se elimina por completo; todos se reducen cuando el análisis se hace con criterios escritos y con más de una fuente.

      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p La validez del análisis se sostiene sobre estas precauciones:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Registrar la evidencia que contradice la hipótesis inicial y no solo la que la respalda.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Distinguir el caso aislado de la tendencia mediante la comparación entre periodos.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Atribuir el resultado al proceso antes que a las personas que lo ejecutan.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Someter el hallazgo a la revisión de alguien que no participó en la recolección.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Estas precauciones no encarecen el análisis: lo hacen defendible. Un hallazgo que resistió la búsqueda deliberada de evidencia contraria sostiene una decisión con mucha más solidez que uno construido sobre coincidencias.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-39.png', alt='')

      p.mb-4 El análisis avanza con orden mediante cuatro operaciones sucesivas:

      .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-4(data-aos="flip-down")
        .tarjeta.tarjeta--blanca.p-4.p-md-5
          PasosB.color-acento-botones 
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Organizar la evidencia por fuente y fecha
                p Supone agrupar los registros según de dónde provienen y a qué periodo corresponden, de modo que puedan compararse entre sí. Sin este paso, el análisis mezcla información de momentos distintos y atribuye a la estrategia efectos que corresponden a otra circunstancia.
                p #[b Situación frecuente:] separar los reportes de apertura del mes anterior y del mes en curso ayuda a establecer si la baja consulta es un hecho nuevo o una constante.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t2/img-40.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Contrastar el dato con el objetivo previsto
                p Implica comparar el resultado obtenido con la meta que la estrategia había fijado para esa acción, y no con una expectativa formulada después. La comparación convierte una cifra suelta en una medida de cumplimiento.
                p #[b Situación frecuente:] una participación del 60 % constituye un logro si la meta era 50 % y una desviación si era 90 %, y solo el objetivo escrito posibilita decidirlo.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t2/img-41.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Contrastar fuentes distintas
                p Consiste en verificar si dos o más evidencias de naturaleza diferente apuntan en el mismo sentido antes de dar por cierto un hallazgo. Las coincidencias lo refuerzan y las discrepancias señalan dónde hace falta indagar. 
                p #[b Situación frecuente:] si el reporte de la plataforma indica alta consulta y la observación registra dudas repetidas sobre el mismo punto, el problema se ubica en la claridad del texto y no en su difusión.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t2/img-42.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Formular el hallazgo con su alcance
                p Significa redactar la conclusión indicando a qué grupo, periodo y acción se refiere, sin extenderla más allá de lo que la evidencia respalda. Un hallazgo delimitado orienta la decisión; uno generalizado la desvía.
                p #[b Situación frecuente:] escribir que la comunicación no llegó al personal de turnos de la sede norte durante el último trimestre es útil, mientras que afirmar que la organización comunica mal no conduce a ninguna acción concreta.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t2/img-43.png', alt='')

      p.mb-4 Las cuatro operaciones convierten un conjunto de registros en un cuerpo de conclusiones defendibles. Su valor no está en lo complejo del procedimiento, sino en que obligan a sostener cada afirmación con una evidencia que puede presentarse.
      
      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-mensaje-canal.mb-4
            .recurso-mensaje-canal__icono
              img(src='@/assets/curso/temas/t2/img-44.svg', alt='')

            .recurso-mensaje-canal__texto
              p.mb-0 Un dato dice qué ocurrió; un hallazgo dice qué significa. Confundirlos es la forma más rápida de tomar una decisión bien intencionada y equivocada.

          p Los hallazgos describen cómo funcionó el proceso en su conjunto. La pregunta siguiente es más específica y se dirige a cada uno de los medios por los que viajó la información: cuál cumplió su propósito, cuál llegó tarde y cuál dejó a alguien por fuera. De esa revisión se ocupa la evaluación de los canales.

</template>

<script>
import imgSlyder11 from '@/assets/curso/temas/t2/img-11.png'
import imgSlyder12 from '@/assets/curso/temas/t2/img-12.png'
import imgSlyder13 from '@/assets/curso/temas/t2/img-13.png'

export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    datosSlyder: [
      {
        titulo: '1. Periódico',
        texto:
          'Se repite en fechas definidas, porque una observación aislada no distingue un hecho puntual de una tendencia.',
        imagen: imgSlyder11,
      },
      {
        titulo: '2. Focalizado',
        texto:
          'Se concentra en unas pocas acciones críticas, porque intentar registrar todo termina por no registrar nada útil.',
        imagen: imgSlyder12,
      },
      {
        titulo: '3. Documentado',
        texto:
          'Deja constancia escrita, porque lo que solo se comenta en una reunión desaparece en la siguiente.',
        imagen: imgSlyder13,
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
