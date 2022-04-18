import { useState } from "react";

export const AddStudent = () => {
    const [getval,setVal] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": "",
        "age": 0,
        "tenth_score": 0,
        "twelth_score": 0,
        "preferred_branch": ""
      })
      const handleInput =(e)=>{
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        setVal({...getval,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const payload = {...getval}
        fetch(" http://localhost:8080/students",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(payload)
        })
    }
    return (
      <form className="addstudent" onSubmit={handleSubmit}>
        <div>
          Firstname:{" "}
          <input
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={handleInput}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={handleInput}
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            onChange={handleInput}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              name="gender"
              className="male"
              type="radio"
              value={"male"}
              onChange={handleInput}
            />{" "}
            Female{" "}
            <input
              name="gender"
              className="female"
              type="radio"
              value={"female"}
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            onChange={handleInput}
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            onChange={handleInput}
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            onChange={handleInput}
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
            onChange={handleInput}
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };