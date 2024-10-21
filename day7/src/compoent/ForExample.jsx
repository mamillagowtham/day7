import React,{ useState } from 'react'

let initialValue =
{
    userName  : "",
    country : "",
    isMarried : "no",
    favColor : [
        {color: "red",checked:false},
        {color: "green",checked:false},
        {color: "blue",checked:false}
    ]
}

const ForExample = () => {
    const [formState,setFormState] = useState(initialValue)
    
    const handleChange = (event,index)=>{
        // event.preventDefault()
        const {name,value,checked} = event.target;
        if(name==="favColor"){
            const newFavColors=[...formState.favColor];
            newFavColors[index].checked = checked;

        setFormState({...formState,favColor:newFavColors});
        }
        else{

            setFormState({...formState,[name]: value});
        }
        
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formState);
        setFormState(initialValue);
    };

  return (
    <div>
        <form action='submit' onSubmit={handleSubmit}>
            <input type='text' placeholder='userName' onChange={handleChange} name='userName' value={formState.useName}/>
            <select name='country' id='' onChange={handleChange} value={formState.country}>
                <option value="">select country</option>
                <option value="india">india</option>
                <option value="china">china</option>
                <option value="usa">usa</option>
            </select>
            <label htmlFor=''>
            <input type='radio' name='isMarried' value="yes" onChange={handleChange} checked={formState.isMarried === "yes"}/>yes
            </label>
            <label htmlFor=''>
                <input type='radio' name='isMarried' value="no" onChange={handleChange} checked = {formState.isMarried === "no"}/>no
            </label>
            <br/>
            {formState.favColor.map((colorObj,index)=>{
                return (    
                    <label key={index}>
                        <input type='checkbox' name='favColor' checked={colorObj.checked} onChange={(event)=>{
                            handleChange(event,index)
                        }}/>
                        {colorObj.color}
                    </label>
                )
            })}
            <input type='submit'/>

        </form>
    </div>
  )
}

export default ForExample