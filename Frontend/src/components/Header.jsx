import React from 'react'

function Header() {
   const  headerStyle={
        width:'100%',
        height:'120px',
        backgroundColor:'red'

    }
   const  style1={
        fontSize:'1.8rem',
        color:'white',
        fontFamily:'serif',
        padding:'0.8rem',
        fontWeight:'bold'
    }
    const style2={
        fontSize:'1.5rem',
        color:'white',
        fontFamily:'serif',
        padding:'0.8rem',
        fontWeight:'bold',
        margin:'1rem'
    }
  return (
    <div className='header'style={headerStyle}>
        <div className="h1" style={style1}>
            RM Food Restu
        </div>
        <div className="h2" style={style2}>
            Select the Food item and order it.
        </div>
      
    </div>
  )
}

export default Header
