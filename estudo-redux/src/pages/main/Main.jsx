import './style.css'
import { useSelector } from 'react-redux'
// Caso esteja utilizando o typescript, será necessário a importação dos tipos do reducer, com o modelo abaixo
// import {RootState} from './redux/store'

import { useDispatch } from 'react-redux' // Essa importação é necessária para fazer alteraçẽos nos dados do reducer
import { setName, setAge } from '../../redux/reducers/userReducer.js'
import { setTheme } from '../../redux/reducers/themeReducer.js'

function Main() {
  const user = useSelector((state) => state.user) // O useSelector recebe uma função que faz a requisição de qual o reducer eu desejo.
  // No caso acima, eu desejo o reducer do usuário, por isso utilizo o `state.user`, se eu desejasse outro, deveria sinalizar qual outro eu desejaria.
  const dispatch = useDispatch() // Necessário esse instanciamento para sua utilização

  const theme = useSelector((state) => state.theme)

  const handleNameInput = (event) => {
    dispatch(setName(event.target.value)) // A dispatch será responsável por acessar iniciar a action, a action será a função que eu criar dentro do reducer e ela recebe como argumento os novos valores que devem ser inseridos
  }

  const handleValueButton = () => {
    const newAge = user.age + 1;


    dispatch(setAge(newAge))
  }

  const handleToggleTheme = () => {
    if (theme.status === 'light') {
      return dispatch(setTheme('dark'))
    }

    return dispatch(setTheme('light'))
  }



  return (
    <div className="main">
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      Tema: {theme.status}

      <hr />
      <input
        type="text"
        value={user.name}
        onChange={handleNameInput}
      />
      <br />
      <button
        onClick={handleValueButton}
      >
        Aumentar idade
      </button>
      <br />
      <button
        onClick={handleToggleTheme}
      >
        Trocar tema
      </button>
    </div>
  )
}

export default Main
