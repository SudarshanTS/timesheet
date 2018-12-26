const mapDisptachToProps=(dispach)=>{
    return{
      HandleChange:(value, name)=>dispach({type:'Change', payload:{'value':value, 'name':name}}),
      onSave:()=>dispach({type:'Save'}),
      onCancel:()=>dispach({type:'Cancel'}),
    }
 }
 export  default mapDisptachToProps;