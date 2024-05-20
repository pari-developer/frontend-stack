export const data = [
    {
      "id": 1,
      "first_name": "Maressa",
      "last_name": "Etchells",
      "email": "metchells0@gizmodo.com",
      "gender": "Female"
    },
    {
      "id": 2,
      "first_name": "Lonnie",
      "last_name": "Rubinovitch",
      "email": "lrubinovitch1@salon.com",
      "gender": "Male"
    },
    {
      "id": 3,
      "first_name": "Burnard",
      "last_name": "Kitson",
      "email": "bkitson2@free.fr",
      "gender": "Male"
    }
  ]

  export const normalisedData = (data) => {
    const userById ={};
    data.forEach(element => {
        const {id,...rdata} = element;
      
        userById[id]= rdata;
    });
    console.log(userById)
  }

//   export const useReduce = (data) => {
//     return data.reduce((acc,cur)=>{
//       const {id,...rdata} = cur;
//       acc[id]= rdata;
//       console.log(acc,'acc')
//       return acc;
//     },{})

//   }
