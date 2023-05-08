import { useState } from 'react'
import { LoginData } from './types'
import { useRouter } from 'next/router'

function LoginForm() {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: ''
  })

  const handleSubmit = (event:any) => {
    event.preventDefault()

    // Stockez les informations de connexion en local
    localStorage.setItem('loginData', JSON.stringify(loginData))

    // Rechargez la page pour rafraîchir l'interface utilisateur
    window.location.reload()

    const router =useRouter();

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (loginData.username === "" && loginData.password === ""){
        localStorage.setItem('','')
        router.push('/chatapp');
      }
      else{
          print()
      }
    }


  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nom utilisateur</label>
      <input
        id="username"
        type="text"
        value={loginData.username}
        onChange={(event) =>
          setLoginData({ ...loginData, username: event.target.value })
        }
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        value={loginData.password}
        onChange={(event) =>
          setLoginData({ ...loginData, password: event.target.value })
        }
      />

      <button type="submit">Se connecter</button>
    </form>
  )
}

export default LoginForm