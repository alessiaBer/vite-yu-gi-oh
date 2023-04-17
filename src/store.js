import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  loading: true,
  YUGI_API: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0',
  cardName: null,
  cardArchetype: null,
  fetchCard() {
    axios.get(this.YUGI_API)
    .then(response => {
      this.cardName = response.data.name
      this.cardArchetype = response.data.archetype
    })
  }
})