import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Sidebar from './sidebar';
import Header from './Header';
import cardIcon from './img/cardIcon.png';
import cardIcon4 from './img/cardIcon4.png';
import cardIcon2 from './img/cardIcon2.png';
import cardIcon3 from './img/cardIcon3.png';
import $ from 'jquery';
import {useState, useEffect} from 'react';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import { useLocalStorage } from 'usehooks-ts';


function Dashboard() {

  interface Item {
    id: string,
    orgName:string,
    userName: string,
    email:string;
    profile:{
      firstName:string,
      lastName:string,
      phoneNumber: string
    }
    createdAt: Date;
  }

  const [allUsers, setAllUsers] = useLocalStorage<Array<Item>>('allUsers', []) || useState<Array<Item>>([]);
  
  //pagination setup
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageCount, setPageCount] = React.useState(
    Math.ceil(allUsers.length / itemsPerPage)
  );
  const pagesVisited = pageNumber * itemsPerPage;

  //paginator function that selects page to view
  const changePage = ({selected}:any) => {
      setPageNumber(selected);
  };

  //paginator function that changes size of page
  const changePagSize = (event:any) => {

    setItemsPerPage(parseInt(event.target.value));
    setPageCount(Math.ceil(allUsers.length / parseInt(event.target.value)));

  }

  //react use effect hook called when component mounts
  useEffect(() => {

    //api fetch call starts to get items and update state value of allUsers
    const userUrl = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

    //checks if allUsers is stored in localstorage to avoid running the fetch call again
    if(localStorage.getItem('allUsers')){

    }else{
      setTimeout(()=>{
        fetch(userUrl).then((response)=> response.json()).then((users)=>{
            setAllUsers(users);
        });
      },2000);
    }

    //api fetch call section ends
  });


  return (
      <div className="dashboard">
        <Header />

        <div className="main">
          <div className="">
            <Sidebar/>

          </div>
          <div className="main-content">
              <p>Users</p>

              <div className="cards-div">
                <div className="cards">

                  <img src={cardIcon} alt="" />
                  <p className='pt-2'>Users</p>
                  <h3>{allUsers.length}</h3>
                  
                </div>

                <div className="cards">
                  <img src={cardIcon2} alt="" />
                  <p className='pt-2'>Active Users</p>
                  <h3>{allUsers.length}</h3>
                </div>

                <div className="cards">
                  <img src={cardIcon3} alt="" />
                  <p className='pt-2'>Users with Loans</p>
                  <h3>12,438</h3>
                </div>

                <div className="cards">
                  <img src={cardIcon4} alt="" />
                  <p className='pt-2'>Users with Savings</p>
                  <h3>10,438</h3>
                </div>
              </div>

              <div className="table-card">
                  <table className='table table-responsive'>
                    <thead>
                      <tr>

                        
                        <th>
                          <div className="dropdown">
                            <a className="" href="#" role="button" id="dropdownMenuLinkFilter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <p>ORGANIZATION <i className='bi bi-filter mx-2'></i></p>

                            </a>

                            <div className="filter-modal dropdown-menu" aria-labelledby="dropdownMenuLinkFilter">
                              <label>Organization</label>
                              <select name="" id="" className='filter-modal-select'>
                                <option value="">Select</option>
                                <option value="Lendsqr">LendSqr</option>
                              </select>


                              <label className='mt-3'>Username</label>
                              <input type="text" placeholder='user'/>

                              <label className='mt-3'>Email</label>
                              <input type="text" placeholder='Email'/>

                              <label className='mt-3'>Date</label>
                              <input type="date" placeholder='Date'/>

                              <label className='mt-3'>Phone number</label>
                              <input type="text" placeholder='Phone number'/>

                              <label className='mt-3'>Status</label>
                              <select name="" id="" className='filter-modal-select'>
                                <option value="">Select</option>
                                <option value="Lendsqr">LendSqr</option>
                              </select>

                              <div className="filter-modal-btns">

                                <button>Reset</button>
                                <button className='filter-btn'>Filter</button>

                              </div>

                              

                            </div>
                          </div>
                             
                        </th>

                        <th>
                            <p>USERNAME <i className='bi bi-filter mx-2'></i></p>
                        </th>

                        <th>
                            <p>EMAIL <i className='bi bi-filter mx-2'></i></p>
                        </th>

                        <th>
                            <p>PHONE NUMBER <i className='bi bi-filter mx-2'></i></p>
                        </th>

                        <th>
                            <p>DATE JOINED <i className='bi bi-filter mx-2'></i></p>
                        </th>

                        <th>
                            <p>STATUS <i className='bi bi-filter mx-2'></i></p>
                        </th>

                        <th>
                            
                        </th>
                      </tr>
                    </thead>


                    <tbody className='table-body'>

                      {allUsers.slice(pagesVisited, pagesVisited + itemsPerPage).map((user, index) => {
                          // * Pass in the necessary props to each <Book/> component.
                          return (
                            <tr key={index}>
                              <td>
                                {user.orgName}
                              </td>

                              <td>
                                {user.profile.firstName + ' ' + user.profile.lastName}
                              </td>

                              <td>
                                {user.email}
                              </td>

                              <td>
                                {user.profile.phoneNumber}
                              </td>

                              <td>
                                  {moment(user.createdAt).format('MMM Do YYYY, h:mm A')}
                              </td>

                              <td>
                                <button className={`${index % 2 == 0 ? "user-active" : index % 3 == 0 ?  "user-blacklisted" :index % 5 == 0 ? "user-pending" : 'user-inactive'}`}>
                                  {index % 2 == 0 ? "active" : index % 3 == 0 ? "blacklisted" : index % 5 == 0 ? "pending" : "inactive"}
                                </button>
                              
                                
                              </td>

                              <td>
                                <div className="dropdown">
                                  <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='bi bi-three-dots-vertical'></i></a>
                                  {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div> */}
                                  
                                  <div className="action-modal dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <Link to={`/user/${user.id}`}>
                                      <div className="action-modal-flex justify-content-evenly px-3 d-flex dropdown-item">
                                        <i className="fa fa-eye mx-2"></i>
                                        <p>View Details</p>
                                      </div>
                                    </Link>
                                    

                                    <div className="action-modal-flex justify-content-evenly px-3 d-flex dropdown-item">
                                      <i className="fa fa-user-times mx-2"></i>
                                      <p>Blacklist User</p>
                                    </div>

                                    <div className="action-modal-flex justify-content-evenly px-3 d-flex  dropdown-item">
                                      <i className="fa fa-user-plus mx-2"></i>
                                      <p>Activate User</p>
                                    </div>

                                  </div>
                                </div>
                                
                              </td>
                            </tr>
                          );
                      })}                      
                    </tbody>

                  </table>

                  <div className="d-flex justify-content-between">
                      <div className="pagination">
                        <p>Showing </p>
                        <select value={itemsPerPage} onChange={changePagSize} name="" id="" className='px-2 mx-2'>
                          <option value="10">
                            10
                          </option>

                          <option value="20">
                            20
                          </option>

                          <option value="50">
                            50
                          </option>


                          <option value="100">
                            100
                          </option>
                        </select>
                        <p>out of 100</p>

                      </div>

                      <div className="d-flex">
                          <ReactPaginate 
                            className='d-flex list-none'
                            previousLabel={<button className="pag-btn px-2"><i className="fa fa-angle-left"></i></button>}
                            nextLabel={<button className="pag-btn px-2"><i className="fa fa-angle-right"></i></button>}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            pageLinkClassName={"pag-number px-2"}
                            breakLabel="..."
                            breakClassName="page-item"
                            activeLinkClassName={"activepgn"}
                          />
                          
                      </div>
                  </div>

                                  
              </div>
              
          </div>
        </div>

          
          
      </div>    
  );
}


export default Dashboard;
