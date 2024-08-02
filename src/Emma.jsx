import './Emma.css'

function Emma(){
    


    return(
        <>
        
        
        

        <form  className='box'  >
            <div className='
            cool'>
            <h1>Quadratic Equation</h1>
            <label >
                This is a form to help collect data for solving quadratic equations with the following formulars ax <sup>2</sup>+bx+c=y
            </label><br /><br />

            <label >
                For instance: if your math problem is 2x <sup>2</sup>+6x+4=0.

                Then you need to enter the values of the coefficient of x and y in the boxes below.
                Like a = 2, b=6, c=4 and y=0
            </label><br /><br />
            <label >
                Go ahead and fill the form with your choise of question and click calculate beneath the form
            </label>
        <br /><br />
            <div className='wow'>
                A = <input type="number" placeholder="Enter the value of A"   className='input'  />

            </div>

            
            <div className='wow'>
                B = <input type="number" placeholder="Enter the value of B"  className='input'  />
                
            </div>

            
            <div className='wow'>
                C = <input type="number" placeholder="Enter the value of C"  className='input'   />
                
            </div>

            
            <div className='wow'>
                D = <input type="number" placeholder="Enter the value of D"  className='input' 
         
    
        
 />
                
            </div>
      <br />
            <button className='btn'>Calculate X<sup>2</sup></button>
            </div>
            
        </form>
        <div className='design'>
        <div className='circle'></div>
        <div className='orange'></div>
        <div className='red'></div>
</div>
<div className='design'>
        <div className='right'>
        <div className='circles'></div>
        <div className='oranges'></div>
        <div className='reds'></div>
        </div>
        </div>
    
        </>
    )
}


export default Emma