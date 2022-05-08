import React, { Component } from 'react'


class Form extends Component {

    constructor(){
        super();
    
        this.state ={
            "fields": [
              {
                "label": "Date of Birth (YYYY-MM-DD)",
                "key": "birthday",
                "isRequired": true,
                "order": 1,
                "isReadonly": false,
                "type": "date"
              },
              {
                "label": "Sex",
                "items": [
                  {
                    "value": "male",
                    "text": "Male"
                  },
                  {
                    "value": "female",
                    "text": "Female"
                  }
                ],
                "key": "sex",
                "isRequired": true,
                "order": 2,
                "isReadonly": false,
                "type": "dropdown"
              },
              {
                "label": "Weight",
                "key": "weight",
                "isRequired": true,
                "order": 3,
                "unit": "kg",
                "isReadonly": false,
                "type": "number"
              }
            ]
          }
      }
  render() {
    return (
      <div>
        {this.state.fields.map(field =>{
            return <div className="container">
            <label className='my-3' ></label>
            <input type={field.type} key={field.key} placeholder={field.label}>
            </input>
            
    </div>
        })}
    
        
        </div>
    )
  }
}

export default Form;
