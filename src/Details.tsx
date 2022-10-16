import React from 'react';
import {useState, useEffect} from 'react';
import loginImg from './img/login.png';
import logo from './img/logo.png';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Sidebar from './sidebar';
import Header from './Header';
import avatar from './img/avatar.png';
import $ from 'jquery';
import { useLocalStorage } from 'usehooks-ts';



function Dashboard() {

  let { id } = useParams();

  interface Item {
    id: string,
    orgName:string,
    userName: string,
    email:string;
    profile:{
      firstName:string,
      lastName:string,
      phoneNumber: string
      currency:string
      avatar:string
      bvn:number
      gender:string

    }

    education:{
      level:string,
      employmentStatus:string,
      sector: string
      duration:string
      officeEmail:string
      monthlyIncome: Array<string>
      loanRepayment:string

    }

    socials:{
      facebook:string,
      twitter:string,
      instagram: string

    }

    guarantor:{
      firstName:string,
      lastName:string,
      phoneNumber: string,
      relationship:string,
      email:string

    },
    createdAt: string,
    accountBalance:string,
    accountNumber:string,

  }

  const [user, setUser] =useLocalStorage<Item>('individualUser', 
  {
    id: '1',
    orgName:'LendSqr',
    userName: 'Ajayi James',
    email:'Ajayijames@gmail.com',
    profile:{
      firstName:'Ajayi',
      lastName:'James',
      phoneNumber: '080235664335',
      currency:'NGN',
      avatar:avatar,
      bvn:23456787654,
      gender:'Male'

    },

    education:{
      level:'B.sc',
      employmentStatus:'employed',
      sector: 'fintech',
      duration:'2 Years',
      officeEmail:'ajayij@lendsqr.com',
      monthlyIncome: ['2000', '5000'],
      loanRepayment:'40000',

    },
    socials:{
      facebook:'@ajayi_james',
      twitter:'@ajayi_james',
      instagram: '@ajayi_james'

    },

    guarantor:{
      firstName:'Okechukwu',
      lastName:'Philips',
      phoneNumber: '080235664335',
      relationship:'Friend',
      email:'okephilips@yahoo.com'

    },

    
    createdAt: '25/12/2022',
    accountBalance:'0.00',
    accountNumber:'string',

  }
  ) || useState<Item>(
  {
    id: '1',
    orgName:'LendSqr',
    userName: 'Ajayi James',
    email:'Ajayijames@gmail.com',
    profile:{
      firstName:'Ajayi',
      lastName:'James',
      phoneNumber: '080235664335',
      currency:'NGN',
      avatar:avatar,
      bvn:23456787654,
      gender:'Male'

    },

    education:{
      level:'B.sc',
      employmentStatus:'employed',
      sector: 'fintech',
      duration:'2 Years',
      officeEmail:'ajayij@lendsqr.com',
      monthlyIncome: ['2000', '5000'],
      loanRepayment:'40000',

    },
    socials:{
      facebook:'@ajayi_james',
      twitter:'@ajayi_james',
      instagram: '@ajayi_james'

    },

    guarantor:{
      firstName:'Okechukwu',
      lastName:'Philips',
      phoneNumber: '080235664335',
      relationship:'Friend',
      email:'okephilips@yahoo.com'

    },

    
    createdAt: '25/12/2022',
    accountBalance:'0.00',
    accountNumber:'string',

  }
  );


  useEffect(() => {
    const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'+id;
    
    fetch(url).then((response)=> response.json()).then((data)=>{
      setUser(data);
    });
  });

  
  

  return (
      <div className="dashboard">
        <Header />

        <div className="main">
          <div className="">
            <Sidebar/>

          </div>
          <div className="main-content">
            <Link to="/dashboard">
              <div className='back'>
                <i className="fa fa-arrow-left"></i>
                <p className='mx-2'>Back to users</p>
              </div>
            </Link>
            

            <div className="details mt-4">
              <p>User Details</p>
              <div className="details-btn">
                <button className='mx-3 px-3 user-blacklisted'>Blacklist User</button>
                <button className='px-3 user-active'>Activate User</button>
              </div>
            </div>

            <div className="detail-card">

              <div className="main-details">
                <img src={user.profile.avatar} alt="" />
                <div className="name mx-2">
                  <p className=''>{user.profile.firstName + ' ' + user.profile.lastName}</p>
                  <p className="code">LSQFf587g90</p>
                </div>
                <div className="vl mx-2"></div>
                <div className="name mx-2">
                  <p className='code'>User's Tier</p>
                  <div>
                    <i className="fa fa-star first"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="vl mx-2"></div>
                <div className="name mx-2">
                  <p className=''>{user.profile.currency + ''+user.accountBalance}</p>
                  <p className="code">{user.accountNumber}/Providus Bank</p>
                </div>
              </div>

              <ul className="detail-list">

                <li className='active'>General Details</li>
                <li>Document</li>
                <li>Bank Details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>



              </ul>

            </div>


            <div className="info-card">

              <section>
                <p className="sec-desc">
                  Personal Information
                </p>

                <div className="sec-content">

                  <div className="sec-details">
                    <p className="sec-topic">
                      FULL NAME
                    </p>
                    <p className="sec-topic-content">
                      {user.profile.firstName + ' ' + user.profile.lastName}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Phone Number
                    </p>
                    <p className="sec-topic-content">
                      {user.profile.phoneNumber}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Email Address
                    </p>
                    <p className="sec-topic-content">
                        {user.email}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Bvn
                    </p>
                    <p className="sec-topic-content">
                      {user.profile.bvn}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Gender
                    </p>
                    <p className="sec-topic-content">
                      {user.profile.gender}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Marital status
                    </p>
                    <p className="sec-topic-content">
                      Single
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Children
                    </p>
                    <p className="sec-topic-content">
                      None
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Type of residence
                    </p>
                    <p className="sec-topic-content">
                    Parent’s Apartment
                    </p>
                  </div>

                </div>

                <hr />
              </section>
              
              <section>
                <p className="sec-desc">
                  Education and Employment
                </p>

                <div className="sec-content">

                  <div className="sec-details">
                    <p className="sec-topic">
                      level of education
                    </p>
                    <p className="sec-topic-content">
                      {user.education.level}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                      employment status
                    </p>
                    <p className="sec-topic-content">
                    {user.education.employmentStatus}

                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                      sector of employment
                    </p>
                    <p className="sec-topic-content">
                      {user.education.sector}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Duration of employment
                    </p>
                    <p className="sec-topic-content">
                      {user.education.duration}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    office email
                    </p>
                    <p className="sec-topic-content">
                      {user.education.officeEmail}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Monthly income
                    </p>
                    <p className="sec-topic-content">
                    {user.education.monthlyIncome[0]+ '-' + user.education.monthlyIncome[1]}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    loan repayment
                    </p>
                    <p className="sec-topic-content">
                    {user.education.loanRepayment}
                    </p>
                  </div>

                </div>

                <hr />
              </section>

              <section>
                <p className="sec-desc">
                Socials
                </p>

                <div className="sec-content">

                  <div className="sec-details">
                    <p className="sec-topic">
                    Twitter
                    </p>
                    <p className="sec-topic-content">
                    {user.socials.twitter}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Facebook
                    </p>
                    <p className="sec-topic-content">
                    {user.socials.facebook}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Instagram
                    </p>
                    <p className="sec-topic-content">
                      {user.socials.instagram}
                    </p>
                  </div>

                </div>

                <hr />
              </section>
              
              <section>
                <p className="sec-desc">
                  Guarantor
                </p>

                <div className="sec-content">

                  <div className="sec-details">
                    <p className="sec-topic">
                      FULL NAME
                    </p>
                    <p className="sec-topic-content">
                      {user.guarantor.firstName + ' '+ user.guarantor.lastName}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Phone Number
                    </p>
                    <p className="sec-topic-content">
                      090654326788
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Email Address
                    </p>
                    <p className="sec-topic-content">
                      {user.guarantor.email || 'Not Provided'}
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    relationship
                    </p>
                    <p className="sec-topic-content">
                      {user.guarantor.relationship || "Not Provided"}
                    </p>
                  </div>
                </div>
                
                <hr />

                <div className="sec-content">


                  <div className="sec-details">
                    <p className="sec-topic">
                      FULL NAME
                    </p>
                    <p className="sec-topic-content">
                      Ajayi Chisom
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Phone Number
                    </p>
                    <p className="sec-topic-content">
                      090654326788
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    Email Address
                    </p>
                    <p className="sec-topic-content">
                      Ajayi@Chisom.com
                    </p>
                  </div>

                  <div className="sec-details">
                    <p className="sec-topic">
                    relationship
                    </p>
                    <p className="sec-topic-content">
                      Sister
                    </p>
                  </div>

                </div>
              </section>

              

            </div>
              
              

              
          </div>
        </div>

          
          
      </div>    
  );
}

export default Dashboard;
