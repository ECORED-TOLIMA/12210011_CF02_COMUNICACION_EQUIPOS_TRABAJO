<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación bajo prueba: canales, evidencias y acuerdos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los canales y sistemas de información, la revisión del proceso de comunicación, la evaluación de canales con indicadores, la solución de conflictos comunicativos y la formulación de alternativas de mejora.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuáles son las cuatro propiedades que permiten caracterizar un canal de comunicación interna?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costo, tamaño, color y ubicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Alcance, velocidad, trazabilidad y capacidad de retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Jerarquía, antigüedad, formalidad y extensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Emisor, receptor, código y contexto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Esas cuatro propiedades rara vez coinciden en un mismo medio, y por eso ningún canal sirve para todos los mensajes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué diferencia un sistema de información organizacional de un canal de comunicación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema transporta el mensaje y el canal lo almacena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema es siempre digital y el canal siempre presencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El sistema ordena, actualiza y conserva la información; el canal es la vía por la que viaja.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No existe diferencia: son dos nombres para el mismo recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cuando el sistema garantiza una sola versión válida del dato, el canal se limita a transportar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Al seleccionar el canal para un mensaje, ¿qué criterio obliga a incluir un medio que deje constancia verificable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La necesidad de soporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La urgencia del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La preferencia de quien emite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de destinatarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cuando la comunicación puede requerirse después como evidencia, la elección debe incluir un canal con registro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué tres condiciones debe cumplir el seguimiento a la implementación para ser útil?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser confidencial, extenso y jerárquico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser periódico, focalizado y documentado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ser diario, digital y anónimo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser opcional, flexible e informal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sin periodicidad no se distingue un hecho puntual de una tendencia, y sin documentación lo observado se pierde.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Una técnica de verificación aporta evidencia objetiva sobre qué se emitió, cuándo y con qué contenido, pero no informa sobre la comprensión del mensaje. ¿De cuál se trata?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grupo focal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuesta de percepción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisión documental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entrevista en profundidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La revisión documental comprueba la emisión, y por eso conviene combinarla con técnicas que exploren la comprensión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué distingue a un instrumento útil de recolección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que recoja la mayor cantidad posible de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que se aplique únicamente al finalizar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que sea diseñado por una entidad externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que recoja la información necesaria, admita comparación y pueda aplicarse en el tiempo disponible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Un formato extenso que nadie completa produce menos evidencia que una lista breve aplicada con constancia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '“El 40 % del personal no abrió la circular”. Dentro del análisis, ¿qué tipo de enunciado es este?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un hallazgo, porque interpreta el desempeño de la estrategia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un dato, porque registra un hecho sin interpretarlo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una causa, porque explica el comportamiento observado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una recomendación, porque orienta la decisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El dato registra el hecho; el hallazgo lo interpreta frente al objetivo y la causa explica por qué ocurrió.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿En qué consiste triangular fuentes durante el análisis de hallazgos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar si evidencias de naturaleza distinta apuntan en el mismo sentido antes de dar por cierto un hallazgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar tres instrumentos idénticos en tres momentos distintos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consultar a tres personas del mismo equipo sobre un mismo hecho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dividir el análisis en tres etapas sucesivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las coincidencias refuerzan el hallazgo y las discrepancias señalan dónde hace falta indagar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué mide un indicador de eficiencia de un canal?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El grado en que el mensaje fue comprendido por el destinatario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de mensajes emitidos en un periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre el resultado obtenido y los recursos que exigió alcanzarlo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de canales activos en la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La eficacia mide el logro del propósito y la eficiencia, el costo de alcanzarlo; la decisión razonable surge de leer ambas juntas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Un canal registra un volumen alto de mensajes emitidos. ¿Qué permite concluir ese dato por sí solo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el canal es eficaz, porque la información circula con frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el canal es eficiente, porque produce muchos envíos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el equipo participa activamente en el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Nada por sí solo, porque un volumen alto puede estar produciendo saturación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El volumen de uso no equivale a eficacia: un indicador de actividad puede ocultar una atención cada vez menor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué evalúa la cobertura de un canal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuántas personas tuvieron acceso efectivo al mensaje en condiciones de comprenderlo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuántos mensajes se enviaron durante el periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuánto costó sostener el canal en funcionamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuántas respuestas se recibieron tras la emisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La cobertura nominal puede ser completa y la real, parcial, cuando un grupo carece de acceso al medio empleado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Por qué un mensaje correcto que llega después de la decisión equivale a un mensaje que no llegó?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque el canal empleado pierde su registro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque el destinatario ya no dispone de margen para actuar con esa información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque la organización debe repetir el envío por norma.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque el contenido pierde validez técnica con el tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La oportunidad conecta la comunicación con la capacidad real de acción del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un equipo permanece en silencio ante una consulta sobre la reorganización de turnos. ¿Cómo debe interpretarse ese silencio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una confirmación de que todo quedó claro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como una señal que exige contexto, porque puede indicar que responder tiene costos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como una falta de compromiso del equipo con la estrategia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como un dato irrelevante para la evaluación del canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El indicador no es la cantidad de respuestas, sino la distancia entre la respuesta esperada y la obtenida.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Al comunicar los resultados de la verificación, ¿qué orden mantiene la conversación sobre el proceso y no sobre las personas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conclusión sobre el desempeño, hecho observado y decisión adoptada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Decisión adoptada, hecho observado y explicación del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hecho observado, efecto sobre el trabajo, explicación del equipo y ajuste conjunto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Efecto sobre el trabajo, conclusión general y cierre de la reunión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Separar el dato de la atribución de responsabilidad abre la posibilidad de examinar las causas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué rasgo comparten las señales que anticipan un conflicto comunicativo, como la copia ampliada sin necesidad o la formalización repentina del trato?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modifican la forma del intercambio antes que su contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aparecen siempre después de una discusión abierta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se manifiestan únicamente en canales escritos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Provienen de diferencias técnicas sobre el trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Registrarlas cuando aparecen permite intervenir mientras la conversación todavía es posible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Dos áreas sostienen fechas incompatibles para una entrega y ambas necesitan responder a tiempo a un tercero. ¿Qué representa esa necesidad común?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La posición de cada parte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El interés compartido sobre el cual se construye el acuerdo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La alternativa disponible si no hay acuerdo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El margen de concesión de la negociación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La posición es lo que cada parte pide y el interés es la necesidad que hay detrás; el acuerdo se construye sobre el interés.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Por qué conviene formular varias opciones antes de evaluar cualquiera de ellas en una negociación?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque alarga la reunión y permite ganar tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque obliga a la otra parte a ceder en su posición inicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque impide que se documenten los desacuerdos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque ante una sola propuesta la otra parte solo puede aceptarla o rechazarla.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Con varias opciones la conversación deja de ser ceder o resistir y se convierte en escoger.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué ocurre cuando quien media tiene interés en el resultado o autoridad jerárquica sobre las partes?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La mediación gana eficacia porque el acuerdo se cumple más rápido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso deja de ser mediación y se convierte en una decisión encubierta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La confidencialidad del proceso queda garantizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las partes ganan simetría en el uso de la palabra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La imparcialidad es la condición del procedimiento: sin ella el acuerdo se firma sin adhesión real y no se cumple.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué distingue una alternativa creativa de mejora de una simple novedad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que utilice una herramienta tecnológica reciente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que se aplique a toda la organización desde el inicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que responda a un hallazgo concreto y defina cómo se comprobará su resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que provenga de una experiencia aplicada en otro sector.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Una propuesta que no define de antemano cómo se verificará su efecto es una preferencia, no una mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Ante el hallazgo de que un grupo no consulta el canal empleado, ¿cuál es la acción preventiva y no la correctiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reenviar el comunicado por el mismo canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solicitar al grupo que revise la plataforma con mayor frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Difundir el mensaje por un medio al que ese grupo acceda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir en la estrategia un canal por cada perfil de jornada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La corrección interviene sobre el hecho ocurrido y la prevención, sobre la regla que lo hizo posible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
