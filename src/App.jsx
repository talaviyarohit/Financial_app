
import AddProduct from './Components/AddProduct/AddProduct'
import { Route, Routes } from 'react-router'
import Products from './Components/Products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login'
import RegisterPage from './Components/Login/RegisterPage'
import BlogGrid from './Components/BlogGrid/BlogGrid'
import Header from './Components/Header/Header'
import ExpenseCharts from './Components/ExpenseCharts/ExpenseChats'
import Footer from './Components/Footer/Footer'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import ExpenseList from './Components/ExpenseList/ExpenseList';
import ExpenseFilterSearch from './Components/ExpenseFilterSearch/ExpenseFilterSearch';



function App() {


  return (
    <>

   
      {/* <Admin /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/addevent" element={<AddProduct />} />
        
        <Route path='/event' element={<Products/>}/> */}
        <Route path='/bloggrid' element={<BlogGrid/>}/>
        <Route path='/expensechart' element={<ExpenseCharts/>}/>
        <Route path='/expenseform' element={<ExpenseForm/>}/>
        <Route path='/list' element={<ExpenseList/>}/>
        <Route path='/expensefilterlist' element={<ExpenseFilterSearch/>}/>
       <Route path='/registerPage' element={<RegisterPage />}/>
        
      </Routes>
     


    </>
  )
}

export default App
