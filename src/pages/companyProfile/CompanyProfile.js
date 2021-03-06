import React from 'react';
import companyExampleBanner from "../images/companyExampleBanner.jpg";
import companyExampleLogo from '../images/companyExampleLogo.png';
import './CompanyProfile.css';
import CompanyProfileDescription from './CompanyProfileDescription';
import ButtonProfileEdit from './ButtonProfileEdit';
import { Authorization } from '../../Components/Helper/Authorization';


class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'company'
        };
    }

    componentDidMount() {
        Authorization(this);
    }
    render() {
        return (
            <div className="container-fluid companyProfile__container--height companyProfile--nopadding">
                <div className="companyProfile__banner">
                    <ButtonProfileEdit className=""></ButtonProfileEdit>
                </div>

                <div className="container shadow company-profile__container pb-3">
                    <div className=" border-bottom">

                        <div className="container-fluid" >
                            <div className="row col-sm">
                                <div className="row companyProfile__logo--2 col-5">
                                    <div className="row">
                                        <img className
                                            ="companyProfile__logo" src={companyExampleLogo} />
                                    </div>
                                </div>
                                <div className="col d-flex align-items-center">
                                    <ul className="col list-unstyled mr-8">
                                        <li className="font-weight-bold">My Company</li>
                                        <li>Stad: </li>
                                        <li>Adress: </li>
                                        <li>E-mail: </li>
                                        <li>Hemsida: </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CompanyProfileDescription />
                </div>
            </div>
        );
    }
}

export default CompanyProfile;