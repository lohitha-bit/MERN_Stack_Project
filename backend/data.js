import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
          name: 'Lohii',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Yogi',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],

    products: [
        {
            // _id :'1',//make it compatible wih mongodb//now mongo db will itself assign id
            name: 'Apple',
            slug: 'apple_nutrients',//what we seee on url
            category:'fruits',
            image:'/images/apple.jpg',//678* 829
            price:120,
            countInStock: 10,
            brand:'Kashmir,Ooty',
            rating:4.5,
            numReviews: 10,
            description: 'high quality ',


        },
        {
            // _id :'2',
            name: 'Orange',
            slug: 'orage_nutrients',//what we seee on url
            category:'fruits',
            image:'/images/orange.jpg',//678* 829
            price:60,
            countInStock: 0,
            rating:4.5,
            numReviews: 10,
            description: 'high quality ',


        },
        {
            // _id :'3',
            name: 'Pomogranate',
            slug: 'Pomogranate_nutrients',//what we seee on url
            category:'fruits',
            image:'/images/Pomogranate.jpg',//678* 829
            price:100,
            countInStock: 10,
            rating:4.5,
            numReviews: 10,
            description: 'high quality ',


        },
        {
            // _id :'4',
            name: 'Pineapple',
            slug: 'Pineapple_nutrients',//what we seee on url
            category:'fruits',
            image:'/images/Pineapple.jpg',//678* 829
            price:50,
            countInStock: 10,
            rating:4.5,
            numReviews: 10,
            description: 'high quality ',


        },

    ],
};
export default data;