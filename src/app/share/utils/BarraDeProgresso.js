import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        transition: 'all ease-in-out 0.5s'
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        // backgroundColor: bgcolor,
        backgroundImage: bgcolor,
        borderRadius:40,
        textAlign: 'right',
        transition: 'all ease-in-out 0.5s'

      }
      
      const progresstext = {
        padding: 10,
        color: 'whitesmoke',
        fontWeight: 700,
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;