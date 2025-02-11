import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";

function Banner({type, children}) {

    const logo = type == "success" ? <FaCircleCheck /> : 
                 type == "warning" ? <FaTriangleExclamation /> :
                 type == "error" ?  <FaCircleXmark /> :
                 type == "neutral" ? <RiInformation2Fill /> : null

    const title = type == "success" ? "Congratulations!" : 
                  type == "warning" ? "Attention" :
                  type == "error" ?  "There is a problem with your application" :
                  type == "neutral" ? "Update available" : null

  return (
    <div className='banner'>
        <header className='header'>
            <div className={`logo ${type}`}>{logo}</div>
            <div className={`title ${type}`}>{title}</div>
        </header>

        {
            children ? (
                <div className={`banner-content ${type}`}>
                    {children}
                </div>
            ) : null
        }
    </div>
  )
}

export default Banner