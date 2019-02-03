import { GET_PUBLICATIONS } from '../type/';

const initialState = {
    publications: [
        {
          name:'Juan Rodriguez',
          time:'40 minutos',
          likes: 12,
          publication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          comments:[
            {
              name: 'Elena',
              comment: 'Lorem lipson 1',
              time: '3 dias'
            },
            {
              name: 'Jose',
              comment: 'Lorem lipson 2',
              time: '2 dias'
            },
            {
              name: 'Eduardo',
              comment: 'Lorem lipson 3',
              time: '1 dias'
            }
          ]
        }
      ]
}


const publication = (state = initialState, action) => {
    switch(action.type) {
         case GET_PUBLICATIONS:
             return { ...state,
                 user: action.payload
             }
         default:
             return state
     }
 }
 export default publication;