export const QUIZ = [
  {
    tematica: 'Harry Potter',
    preguntas: [
      {
        pregunta: '¿Cómo se llaman los padres de Harry Potter?',
        imagen:
          'https://assets.mugglenet.com/wp-content/uploads/2022/04/Untitled-design-1-520x245.png',
        respuestas: [
          { texto: 'Severus y Lily Potter', correcta: false },
          { texto: 'James y Cersei Potter', correcta: false },
          { texto: 'James y Lily Potter', correcta: true },
          { texto: 'Joey y Rachel Potter', correcta: false }
        ]
      },
      {
        pregunta:
          '¿Qué criaturas invisibles tiran de las carrozas en Hogwarts?',
        imagen:
          'https://wallpapers.com/images/featured/el-carruaje-de-hogwarts-dqdzy4idzvlxc4n6.jpg',
        respuestas: [
          { texto: 'Fénix', correcta: false },
          { texto: 'Thestrals', correcta: true },
          { texto: 'Acromántulas', correcta: false },
          { texto: 'Ratones', correcta: false }
        ]
      },
      {
        pregunta:
          '¿En qué año se publicó el primer libro de la saga Harry Potter?',
        imagen:
          'https://cloudfront-us-east-1.images.arcpublishing.com/semana/KM4XPRHFR5AHDF6QJO42ANBJRI.jpg',
        respuestas: [
          { texto: '1994', correcta: false },
          { texto: '1996', correcta: false },
          { texto: '1995', correcta: false },
          { texto: '1997', correcta: true }
        ]
      },
      {
        pregunta:
          '¿Cuál de los siguientes objetos NO es un horrocrux de Voldemort?',
        imagen:
          'https://imgix.bustle.com/rehost/2016/11/10/fec9fbbe-d8cf-46c8-adf4-557e4435ffa9.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
        respuestas: [
          { texto: 'Espejo de Oesed', correcta: true },
          { texto: 'Diadema de Rowena Ravenclaw', correcta: false },
          { texto: 'Copa de Helga Hufflepuff', correcta: false },
          { texto: 'Diario de Tom Riddle', correcta: false }
        ]
      },
      {
        pregunta: "¿Qué es 'El Quisquilloso'",
        imagen:
          'https://i.pinimg.com/474x/54/6b/fc/546bfcaa37519e23e6c9fa8da87bb25b.jpg',
        respuestas: [
          { texto: 'Un personaje mítico de la saga', correcta: false },
          { texto: 'Una tienda de Hogsmeade', correcta: false },
          { texto: 'Un periódico', correcta: true },
          { texto: 'Un jugador de Quiddich', correcta: false }
        ]
      }
    ]
  },
  {
    temática: 'El señor de los anillos',
    preguntas: [
      {
        pregunta: '¿Quiénes participaron en la Batalla de Isengard?',
        imagen:
          'https://www.lacasadeel.net/wp-content/uploads/2023/12/latest-696x290.webp',
        respuestas: [
          {
            texto: 'Las fuerzas de Saruman contra los Rohirrim del rey Théoden',
            correcta: false
          },
          { texto: 'Las fuerzas de Saruman contra los Ents', correcta: true },
          {
            texto: 'Los Orcos de Dol Guldur contra los Galadhrim de Lothlórien',
            correcta: false
          },
          {
            texto:
              'Las fuerzas del Señor Oscuro, Sauron, contra las fuerzas de Gondor'
          }
        ]
      },
      {
        pregunta: "¿Qué ciudad es conocida como la 'Ciudad Blanca'?",
        imagen:
          'https://gloriadegondor.com/wp-content/uploads/2024/01/MCDLOOF_EC163_H-scaled.webp',
        respuestas: [
          { texto: 'Hogsmeade', correcta: false },
          { texto: 'Osgiliath', correcta: false },
          { texto: 'Pelargir', correcta: false },
          { texto: 'Minas Tirith', correcta: true }
        ]
      },
      {
        pregunta: '¿Qué son las heridas morgul?',
        imagen:
          'https://img3.wikia.nocookie.net/__cb20120117171021/lotr/images/7/79/Skirmish_at_Weathertop_1.jpg',
        respuestas: [
          { texto: 'Las heridas inflingidas por los Nazgûl', correcta: true },
          {
            texto:
              'Los montículos de tierra corrompidos de los que nacen los Uruk-hai',
            correcta: false
          },
          {
            texto:
              'Las torres de asedio usadas por los orcos durante el ataque a Minas Tirith',
            correcta: false
          },
          {
            texto:
              'El nombre que recibe un elfo que ha renunciado a su inmortalidad',
            correcta: false
          }
        ]
      },
      {
        pregunta:
          "¿Cuántas nominaciones a los Óscar recibió 'La Comunidad del Anillo'?",
        imagen:
          'https://img.lagaceta.com.ar/fotos/notas/2024/03/08/600x400_primera-gala-premios-oscar-fue-1926-1026712-093410.webp',
        respuestas: [
          { texto: 'Siete', correcta: false },
          { texto: 'Once', correcta: false },
          { texto: 'Trece', correcta: true },
          { texto: 'Nueve', correcta: false }
        ]
      },
      {
        pregunta: '¿Por qué Frodo y Bilbo fueron a Valinor?',
        imagen:
          'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/On-the-way-to-Rivendell.jpg',
        respuestas: [
          {
            texto: 'Simplemente, porque había sitio libre y les apetecía',
            correcta: false
          },
          { texto: 'Para vivir nuevas aventuras', correcta: false },
          { texto: 'Como regalo de los elfos', correcta: false },
          {
            texto: 'Para curar sus heridas como portadores del anillo',
            correcta: true
          }
        ]
      }
    ]
  }
]
