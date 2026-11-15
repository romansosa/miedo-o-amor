window.NH = {
  url: "https://pwvxqskjrysdgrzoypzp.supabase.co",
  key: "sb_publishable_Rbyoe8xeDQLWU8ZZiVPDCg_9io4JMpB",
  ronda: (new URLSearchParams(location.search).get("ronda") || "principal").slice(0, 40),
  // texto: lo que ven en el celular · corto: etiqueta en el termómetro
  situaciones: [
    { texto: "Suena tu alarma el domingo temprano, estás desvelado… y aun así te levantas para ir a la reunión sacramental.", corto: "Levantarme el domingo para la sacramental" },
    { texto: "Al tomar la Santa Cena, guardas el celular y de verdad piensas en Jesucristo y en tus convenios.", corto: "Pensar en Cristo al tomar la Santa Cena" },
    { texto: "Llegas agotado en la noche y aun así te arrodillas a orar antes de dormir, aunque sea una oración corta.", corto: "Orar en la noche aunque esté agotado" },
    { texto: "Antes de abrir redes sociales, lees el Libro de Mormón aunque sean cinco minutos.", corto: "Leer el Libro de Mormón antes que redes" },
    { texto: "Te pagan, el dinero no alcanza para todo, y lo primero que apartas es el diezmo.", corto: "Apartar el diezmo cuando no alcanza" },
    { texto: "Tus amigos ponen una película o un video que sabes que no deberías ver, y te sales o pides cambiarlo.", corto: "Salirme cuando el contenido no es digno" },
    { texto: "El obispo te pide un discurso o una asignación en semana de exámenes, y dices que sí.", corto: "Aceptar una asignación aunque esté ocupado" },
    { texto: "Le escribes a la persona que ministras aunque casi nunca te conteste.", corto: "Ministrar aunque no me contesten" },
    { texto: "Alguien habló mal de ti y, en vez de responder igual o guardarle rencor, eliges perdonar.", corto: "Perdonar en vez de devolverla" },
    { texto: "Tienes mil pendientes de la escuela o el trabajo, y aun así apartas tiempo para ir al templo.", corto: "Ir al templo con la agenda llena" }
  ]
};
