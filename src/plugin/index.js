import CardPage from '../components/Common/Card.vue'
import ListLabel from '../components/Common/ListLabel.vue'
import LuckyList from '../components/Common/LuckyList.vue'

const MyPlugin = {}
MyPlugin.install = function (vue){
   vue.component(CardPage.name,CardPage)
   vue.component(ListLabel.name,ListLabel)
   vue.component(LuckyList.name,LuckyList)
}

export default MyPlugin