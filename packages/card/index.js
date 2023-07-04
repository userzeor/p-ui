import Card from './src/card.vue'

Card.name = 'p-card'

Card.install = (app) => {
  // 注册组件
  app.component(Card.name, Card)
}

export default Card
