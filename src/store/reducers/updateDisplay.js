import {UPDATE_DISPLAY} from '@/store/types';

const initialState = {
  name: 'welcome to the bar!',
  ingredients: 'Make sure spelling on ingredients is correct and void of accent marks',
  preparation: 'enter ingredients 1 by 1 into ingredients bar.hit enter or click add.you can then make cocktails that include the ingredients or filter cocktails by the ingredients.note the bartender will include/exclude all ingredients listed.',
  img: 'https://images.unsplash.com/photo-1611266353853-d370b67187ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  description: 'The bartender right now only has knowledge of about 50 cocktails! If the results come back empty there might be too many ingredients listed that do not match the ones known!'
}

export default function updateDisplay(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return action.payload;
    default:
      return initialState;
  }
}
