export default {
  global: {
    Name: 'Implementación, validación y mejora de la estrategia de comunicación',
    Description:
      'El componente formativo aborda la implementación de la estrategia de comunicación en equipos de trabajo, su comprobación con evidencias y su perfeccionamiento continuo. Desarrolla la selección de canales y sistemas de información, la revisión del proceso con indicadores, el tratamiento de los conflictos comunicativos y la formulación de alternativas creativas consignadas en un informe técnico.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Canales y sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Canales de comunicación interna',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistemas de información organizacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios de selección del canal',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Revisión del proceso de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seguimiento a la implementación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de verificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instrumentos y recolección de evidencias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Análisis de hallazgos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación de los canales de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.3',
            titulo: 'Eficacia y eficiencia del canal',
            hash: 't_3_3',
          },
          {
            numero: '3.2',
            titulo: 'Cobertura y oportunidad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Participación y calidad de la respuesta',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comunicación de los resultados de la verificación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de solución de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de conflictos comunicativos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Negociación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Mediación y comunicación colaborativa',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Acuerdos con el equipo de trabajo',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pensamiento creativo y mejora de la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Pensamiento creativo aplicado a la comunicación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones preventivas y correctivas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Informe final de la estrategia',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'decisión adoptada frente a una desviación confirmada en la validación, orientada a restablecer el desempeño previsto de la estrategia de comunicación.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'medida dirigida a evitar que un riesgo identificado se convierta en un problema durante los ciclos siguientes de la estrategia.',
    },
    {
      termino: 'Acuerdo',
      significado:
        'compromiso explícito derivado de una negociación o una mediación, que precisa la acción, el responsable, el plazo y la evidencia con que se comprobará su cumplimiento.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'medio por el cual un mensaje llega a su destinatario dentro de la organización, caracterizado por su alcance, velocidad, trazabilidad y capacidad de retroalimentación.',
    },
    {
      termino: 'Eficiencia comunicativa',
      significado:
        'relación entre el resultado obtenido por un canal y los recursos de tiempo, costo y coordinación que exigió alcanzarlo.',
    },
    {
      termino: 'Evidencia',
      significado:
        'registro documental, cuantitativo, cualitativo u observacional que posibilita sustentar un hallazgo sobre el funcionamiento de la comunicación.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'afirmación sustentada sobre el desempeño de la estrategia, derivada del contraste entre la evidencia recogida y el objetivo previsto.',
    },
    {
      termino: 'Indicador de comunicación',
      significado:
        'medida cualitativa o cuantitativa que traduce el desempeño de un canal o de una acción a un dato comparable.',
    },
    {
      termino: 'Mediación',
      significado:
        'procedimiento de resolución de conflictos en el que un tercero imparcial facilita el diálogo para que las partes construyan el acuerdo.',
    },
    {
      termino: 'Pensamiento creativo',
      significado:
        'capacidad de generar alternativas distintas de las conocidas frente a un problema definido, con criterios que permitan comprobar su resultado.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'registro que permite establecer qué se comunicó, en qué fecha, por qué canal y a qué destinatarios.',
    },
    {
      termino: 'Validación',
      significado:
        'proceso de comprobación técnica que establece si la estrategia implementada responde a las necesidades y objetivos del equipo de trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrade, H. (2005). Comunicación organizacional interna: proceso, disciplina y técnica. Netbiblo.',
    },
    {
      referencia:
        'Beltrán, J. M. (2000). Indicadores de gestión: herramientas para lograr la competitividad (2.ª ed.). 3R Editores.',
    },
    {
      referencia:
        'De Bono, E. (1994). El pensamiento creativo: el poder del pensamiento lateral para la creación de nuevas ideas. Paidós.',
    },
    {
      referencia:
        'Deming, W. E. (1989). Calidad, productividad y competitividad: la salida de la crisis. Díaz de Santos.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2015). Guía de lenguaje claro para servidores públicos de Colombia. Programa Nacional de Servicio al Ciudadano.',
    },
    {
      referencia:
        'Fisher, R., Ury, W. y Patton, B. (2011). Obtenga el sí: el arte de negociar sin ceder (3.ª ed.). Gestión 2000.',
    },
    {
      referencia:
        'Robbins, S. P. y Judge, T. A. (2017). Comportamiento organizacional (17.ª ed.). Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
