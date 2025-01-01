export const Form = ({ hdlFunctions, userData, loginError }) => {
    return (
      <main>
          <form onSubmit={hdlFunctions.hdlSubmit} className='logIn-form'>
                <label htmlFor="name">Email: </label>
                <input 
                    type="email" 
                    placeholder="example@email.com" 
                    name="email" 
                    value={userData.email} 
                    onChange={hdlFunctions.hdlEmail} 
                />
                
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password} 
                    onChange={hdlFunctions.hdlPassword} 
                />
                { loginError && 
                    <p style={{ color: 'red' }}>  
                        <b>{loginError}</b>
                    </p>
                }
                <button type='submit'> Log In</button>
          </form>
      </main>
    )
  }
  