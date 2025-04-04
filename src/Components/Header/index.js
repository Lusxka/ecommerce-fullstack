import Logo from  "../../assets/images/Logo.png"
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button"; 



const Header =()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="faixa bg-yellow">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Promoções diárias e confiáveis em um <b>único</b> site!</p>
                    </div>
                </div>
                
                
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'/> </Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown/>
                                {/*BARRA DE PESQUISA*/}
                                    <div className='headerSearch ml-3 mr-3'>
                                        <input type='text'/>
                                        <Button><IoSearch/></Button>
                                    </div>
                                {/*BARRA DE PESQUISA*/}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;