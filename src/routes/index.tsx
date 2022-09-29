import { AuthProvider } from '../context/AuthProvider'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from '../components/ProtectedLayout'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Protected } from '../pages/Protected'

export const AppRouter = () => {
    return(
        // Envolve toda a aplicação com o contexto da autenticação do usuário, e disponibiliza esses dados para todos os componentes criados
        <AuthProvider>
          <BrowserRouter>
            <Routes>

              <Route path='/' element={ <ProtectedLayout/> }>
                <Route path='protected' element={ <Protected/> }/>
              </Route>

              <Route path='/home' element={ <Home/> }/>

              <Route path='/login' element={ <Login/> }/>

            </Routes>
          </BrowserRouter>
        </AuthProvider>
    )
}