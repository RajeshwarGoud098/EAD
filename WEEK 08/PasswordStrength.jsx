import { useState } from "react";
function PasswordStrength()
{
    const[password,setPassword]=useState('');
    const[strength,setStrength]=useState('');
    const[showPassword,setShowPassword]= useState(false);
    const checkStrength= (pass) => {
        let score=0;
        if(pass.length>=8) score++;
        if(/[A-Z]/.test(pass)) score++;
        if(/[a-z]/.test(pass)) score++;
        if(/[0-9]/.test(pass)) score++;
        if(/[^A-Za-z0-9]/.test(pass)) score++;
        switch(score) {
            case 5: return "Very Strong Password";
            case 4: return 'Strong Password';
            case 3: return 'Medium Password';
            case 2: return 'Weak Password';
            case 1: return 'Very Weak Password';
            default: return '';
        }
    };
    const changes = (e) => {
        const pass = e.target.value;
        setPassword(pass);
        setStrength(checkStrength(pass));
    };
    const togglePassword= () => {
        setShowPassword(!showPassword);
    };
    return(
        <div style={{maxWidth:'400px', margin: '20px auto', fontFamily: 'Arial',textAlign: 'center'}}>
            <h2> Password Strength Checker</h2>
            <div style={{position: 'relative'}}>
                <input type={showPassword? 'text': 'password'} value={password}
                    onChange={changes} placeholder='Enter Your Password'
                    style={{Width: '100%', padding: '10px', marginBottom: '10px'}}></input>
                <span
                    onClick={togglePassword}
                    style={{position: 'absolute',right: '10px', top: '10px', cursor: 'pointer'}}>
                        {showPassword? "👁️⃠" :  "👁️"}
                    </span>
            </div>
            {password && (
                <p>Strength: <strong>{strength}</strong></p>
            )}
        </div>
    );
}
export default PasswordStrength;