<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/intro/img-01.png', alt='')

      p.mb-4 Una estrategia de comunicación bien diseñada no garantiza por sí sola que la información circule como se esperaba. Entre el documento que la formula y la experiencia real del equipo se abre un terreno de prueba. Allí los canales se saturan, los mensajes llegan tarde, algunas personas quedan por fuera del alcance previsto y las diferencias de interpretación se convierten en tensiones. Ese terreno es el objeto de este contenido.

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-02.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .row.mb-0
            .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Comprobar cómo funciona la comunicación exige método, no impresiones. Requiere seleccionar los canales con criterio, revisar el proceso mientras ocurre, medir el desempeño de cada medio con indicadores, tratar los conflictos que aparecen en el intercambio y convertir los hallazgos en decisiones de mejora. Sin ese recorrido, cualquier ajuste queda librado a la percepción de quien coordina y pierde capacidad de sustentarse ante la organización.
            p El desarrollo avanza desde los medios por los que viaja la información hasta el documento que recoge los resultados. Primero se examinan los canales internos y los sistemas que los sostienen. Luego aparecen las técnicas e instrumentos con que se revisa el proceso y los indicadores con que se evalúa cada canal. Enseguida se abordan las estrategias para resolver los conflictos comunicativos. Por último, se aborda el uso del pensamiento creativo para proponer alternativas de mejora y consignarlas en un informe verificable.
            
      p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
