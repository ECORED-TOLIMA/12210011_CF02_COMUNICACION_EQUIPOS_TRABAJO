<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La validación de una estrategia de comunicación recorre cinco ejes encadenados. Todo comienza por establecer por qué canales y con qué sistemas de información circula el mensaje dentro de la organización. Cuando ese recorrido queda claro, el proceso se revisa con seguimiento, técnicas de verificación e instrumentos que producen evidencia. Sobre esa evidencia, cada canal se evalúa según su eficacia, su eficiencia, su cobertura, su oportunidad y la respuesta que genera. Como la revisión también saca a la luz las tensiones del intercambio, estas se atienden con negociación, mediación y acuerdos verificables. Por último, los hallazgos se convierten en alternativas de mejora que se consignan en un informe con trazabilidad entre evidencia, conclusión y recomendación.
    p.mb-4 El mapa conceptual que se presenta a continuación organiza esos ejes y el recorrido que los articula:

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que presenta cinco ejes: los canales que emplea, la revisión que comprueba, la evaluación que valora, los conflictos que atiende y la mejora que perfecciona. Recorrerlos permite decidir con evidencia qué debe ajustarse.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
