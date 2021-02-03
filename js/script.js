new Vue({
  el: '#root',
  data: {
    activeIndex: 0,
    myMessage: '',
    inputSearch: '',
    contacts: [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
]

  },
 methods: {
   // Creo un metodo per cambiare la finestra della chat:
   selectedChat: function (index) {
     this.activeIndex = index;
   },
   // Creo un metodo per inviare un messaggio dall'input premendo 'Invio':
   sendMessage: function () {
    let activeContact = this.contacts[this.activeIndex];
    activeContact.messages.push(  {
          date: '10/01/2020 15:50:00',
          text: this.myMessage,
          status: 'sent'
      });
    this.myMessage = '';
    // Genero la risposta automatica che arriverà dopo 1 secondo:
    setTimeout(function() {
      activeContact.messages.push({
        date: '10/01/2020 15:50:00',
        text: 'ok',
        status: 'received'
      });
    }, 1000)
  },
  // Vado a prendermi la data dell'ultimo messaggio per stampare l'ultimo accesso:
  contactLastSeen: function (index) {
    let messages = this.contacts[index].messages;
    let lastIndex = messages.length - 1;
    let lastSeen = messages[lastIndex].date;
    return lastSeen;
  },
  // Creo un metodo per far funzionare la barra di ricerca nella sidebar:
  search: function (name) {
    let contactNameSearch = this.inputSearch;
    if (name.toLowerCase().includes(contactNameSearch)) {
      return name.toLowerCase().includes(contactNameSearch)
    }
  }
 }

 });
Vue.config.devtools = true;
