/*
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': 'Филадельфия с лососем', 'description' : '320 г - лосось, нори, огурец, рис, сыр сливочный' , 'price': 3000, 'inventory': 999 },
  { 'id': 2, 'title': 'Запеченная креветка', 'description' : '350 г - нори, рис, сыр сливочный, авокадо, икра, креветка, сырная шапочка','price': 4000, 'inventory': 999 },
  { 'id': 3, 'title': 'Филадельфия с угрем', 'description' : '320 г - нори, огурец, рис, сыр сливочный, кунжут, соус унаги, угорь','price': 5400, 'inventory': 999 },
  { 'id': 4, 'title': 'Филадельфия с лососем и авокадо', 'description' : '330 г - лосось, нори, рис, сыр сливочный, авокадо, икра','price': 4200, 'inventory': 999 },
  { 'id': 5, 'title': 'Зеленый дракон', 'description' : '310 г - нори, рис, сыр сливочный, соус унаги, авокадо, креветка, манго, ','price': 3700, 'inventory': 999 },
  { 'id': 6, 'title': 'Канада', 'description' : '310 г - нори, рис, сыр сливочный, соус унаги, авокадо, креветка, манго, ','price': 6000, 'inventory': 999 },
  { 'id': 7, 'title': 'Тигровый дракон', 'description' : '310 г - нори, рис, сыр сливочный, соус унаги, авокадо, креветка, манго, ','price': 4800, 'inventory': 999 },
  { 'id': 8, 'title': 'Химавари', 'description' : '310 г - нори, рис, сыр сливочный, соус унаги, авокадо, креветка, манго, ','price': 4200, 'inventory': 999 },
  { 'id': 9, 'title': 'Кратос', 'description' : '310 г - нори, рис, сыр сливочный, соус унаги, авокадо, креветка, манго, ','price': 6000, 'inventory': 999 },
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
