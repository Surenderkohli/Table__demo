import React, { useState, useEffect } from 'react'
import './DataTable.css'
import { FaBeer, FaSort } from 'react-icons/fa';

import DummyData from './DummyData.json'
export default function DataTable() {
    const [data, setData] = useState(DummyData);

    const [order, setOrder] = useState("ASC")
    const [search, setSearch] = useState('')
    const [emailsearch, setemailSearch] = useState('')
    const [num,setnum]=useState('')


    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("ASC")
        }
    }
    const numsorting = (col) => {
        if (order === "ASC") {
            const numsorted = [...data].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            )
            setData(numsorted)
            setOrder("DSC")
        }
        if (order === "DSC") {
            const numsorted = [...data].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            )
            setData(numsorted)
            setOrder("ASC")
        }
    }
    


    return (<>
        <div className='center'>
            <table>
                <tr className='heading'>
                    <th onClick={() => numsorting("id")}>ID<span><FaSort /></span></th>
                    <th onClick={() => sorting("name")}>Name<span><FaSort /></span></th>
                    <th onClick={() => sorting("email")}>Email <span><FaSort /></span></th>
                    <th onClick={() => numsorting("number")}>Number<span><FaSort /></span></th>
                    <th onClick={() => numsorting("dateOfBirth")}>Date of Birth <span><FaSort /></span></th>
                </tr>
                <tr className='tdDetails'>
                    <td></td>
                    <td><input type="search" id="site-search" name="q" placeholder='Search Name' value={search} onChange={(e) => setSearch(e.target.value)} /></td>
                    <td><input type="search" id="site" name="q" placeholder='Search Email' value={emailsearch} onChange={(e) => setemailSearch(e.target.value)} /></td>
                    <td><input type="search" id="site-search" name="q" placeholder='Search Number' value={num} onChange={(e) => setnum(e.target.value)} /></td>
                    <td><input type="search" id="site-search" name="q" placeholder='Search Data of Birth' /></td>

                </tr>
                {
                    data.filter((val) => {
                        if(search=== ''){
                            return val
                        }else if(
                            val.name.toLowerCase().includes(search.toLowerCase()) 
                           
                        ){
                            return val
                        }

                    }).map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.dateOfBirth}</td>
                            </tr>
                        })
                }
               
            </table>


        </div>
    </>

    )
}

