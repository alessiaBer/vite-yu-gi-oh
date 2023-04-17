import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  loading: true,
  YUGI_API: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0',
  cards: null,
  cardName: null,
  cardArchetype: null,
  fetchCard() {
    axios.get(this.YUGI_API)
    .then(response => {
      this.cards = response.data
      this.cardName = response.data.name
      this.cardArchetype = response.data.archetype
    })
  }
})