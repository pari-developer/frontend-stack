import React, { useEffect, useState } from "react";

// Higher Order Component
export const withStyles = (wrappedComp) => {
  return (props) => {
    const style = { padding: '2em' };
    return <wrappedComp style={style} props={props} />;
  };
};


export const Button = () => {
    return <Button>Click Me</Button> 
}

// const newButton = withStyles(Button);


export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} icon={()=>{<Icon {...props}/>}} />;
  };
}



//Render prop pattern
export const FormHandler = ({render}) => {

  const [formData,setFormData] = useState({});
  const [error,setError] = useState({});
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    if(!value || value=== '') {
      setError((prev)=>{
        return {...prev , msg:`${name} field is required`}
      })
    }

    // setFormData((prev)=>{
    //    const newState = {...prev,[name]:value };
    //    return newState;
    // })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let formDataObj = Object.fromEntries(formData);
    setFormData(formDataObj)
    console.log(formDataObj)
    console.log( error)
   

  }

  return render(formData,handleChange,handleSubmit);
  

}

export const Form = () => {
  return (
    <FormHandler render={(formData,handleChange,handleSubmit)=> {
        return (
        <form onSubmit={handleSubmit}>
             <input type="text" name="username" value={formData['username']} onChange={(e)=>handleChange(e)}/>
             <input type="text" name="password" value={formData['password']} onChange={(e)=>handleChange(e)}/>
             <button type="submit">Submit</button>
        </form>
        )
    }}/>
  )
}

//Singleton Pattern 

// createStoreHook helps to isolate a redux store from the consumer redux application for specific reusable components 