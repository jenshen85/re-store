export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Flower',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      const { random } = Math
      setTimeout(()=> {
        if(random() > 0.75) reject(new Error('something bad happened!'))
        else resolve(this.data)
      }, 1000)
    })
  }
}