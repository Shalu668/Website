import React from "react";
import "./index.css";
import { appendFile } from "fs";


class Attendance extends React.Component {
    state = {
        employees: [ {
            id:"1",
            name:"shalu",
            days:[]   
        },
        {
            id:"2",
            name:"bikki",
            days:[]
        },
        {
            id:"3",
            name:"sushant",
            days:[]
        },
        {
            id:"4",
            name:"anshuman",
            days:[]
        }]
        ,
            days:[],
            years: [],
            months: [],
            selectedYear:null,
            selectedMonth: null
            
        }
    


        handleMonthChange = () => {
            //import employees from  state
            const { employees } = this.state
            const {days=[]}=this.state;
            // find start date and end date
            let start = 1
            let end = new Date().getDate()
            // initialize empty array days
    
            // create array of object it will contain day,date,status
            let arr = []
    
            //loop through employee assigne days to days
            let x;
            for (let i of employees) {
                i.days = []
                for (let j = start; j <= end; j++) {
                    var currDay = {
                        day: '',
                        date: '',
                        status: ''
                    }
                    x = new Date('September' + j + ',2019')
                    currDay.day = x.toString().substr(0, 3)
                    currDay.date = x.toString().substr(8, 2)
                    currDay.status = ''
                    i.days.push(currDay);
                }
            }
            // for( var k=1;k<=end;k++)
            // {
            //     arr[k]=k;
            // }
            // set state days and employees
            this.setState({
                ...this.state,
                employees,
                
                
            })

            
        }

handleCheckBox = (e,index=0) => {
    const {employees=[]} = this.state
    
    const {days=[]} = employees[index]

    employees[index].days = days.map(el => {
        if(el.day == 'Sun' || el.day == 'Sat') {
            el.status = 'H'
        } else {
            el.status = 'P'
        }
        return el;
    })
            
    this.setState({
        ...this.state,
        employees
    })

}



    render() {
        const { employees,days=[]} = this.state;
        
       
        const {state, handleMonthChange,handleCheckBox}=this
        console.log(state);
        
        return (
            <div className="attendance">
                <div className="upper">
             
                <label>YEAR:</label>
                <input type="number" name="quantity" max="2000" min="2019" ></input>
                <br /> <br />
              
                <label>MONTH:</label>
                <select  onChange={handleMonthChange}>
                    {/* <option >january</option>
                    <option >february</option>
                    <option >March</option>
                    <option >April</option>
                    <option >May</option>
                    <option >June</option>
                    <option >July</option> */}
                    <option value='august'>August</option>
                    <option value='september'>September</option>
                    {/* <option >November</option>
                    <option >December</option> */}
                </select>
                <br />
                </div>
                
               
               
                <table id="table">
                    <tr>
                        <th>Name</th>
                        <th>Checkbox</th>
                        <th>Days </th>

                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td>{

                        }</td>
                    </tr>
                    {employees.map((i) => {
                            return (
                                <tr>
                                    <td>{i.name}</td>
                                    <td><input type="checkbox" name="status" onChange={handleCheckBox} /></td>
                                    <td>{<div className="hhhh" >
                                        {i.days.map((el =>{
                                            return(
                                                <div >
                                                    {el.date}
                                                    <input className='input-display' key={el} value={el.status}>

</input>
                                                    </div>
                                            )
                                        }
                                            ))

                                        }</div>}</td>
                                </tr>
                            )
                        })}
                   
                </table>





            </div>
        )
    }
}

export default Attendance;