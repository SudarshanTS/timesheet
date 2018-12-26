export const initialState={
    rows:[],
    projectformvalue:{
    projectname:"",
    companyname:"",
    description:"",
    estimationcost:"",
  },
  tabledisplay:false,
  open:true,
}
const reducer=(state=initialState,action)=>{
  const newState={...state};
  if(action.type==='CHANGE'){
     return {...state, projectformvalue:{...state.projectformvalue, [action.payload.name]:action.payload.value}}
  } 
   else if(action.type==='SAVE'){
     let temp = [...state.rows];
     temp.push(state.projectformvalue);
     return {...state, "rows": temp}
   }
  return newState;
}
export default reducer;