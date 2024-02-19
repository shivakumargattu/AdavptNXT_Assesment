import React, { useState } from 'react';
import { MdDashboard ,MdOutlineInventory } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";






const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => setActiveSection('dashboard')}>
      <div className='items-dashbord'>
      <MdDashboard  />  <span className='text-dashbrod'>Dashboard</span>
      </div>
      </div>
      <div className="sidebar-item" onClick={() => setActiveSection('inventory')}>
      <MdOutlineInventory/>  <span className='text-dashbrod'>Inventory</span>
      </div>
      <div className="sidebar-item" onClick={() => setActiveSection('orders')}>
        <CgNotes/><span className='text-dashbrod'>Orders</span>
      </div>
      <div className="sidebar-item" onClick={() => setActiveSection('shipping')}>
       <FiShoppingCart/> <span className='text-dashbrod'>Shipping Channel</span>
      </div>
      <div className="sidebar-item" onClick={() => setActiveSection('shipping')}>
      <CiShare2/>  <span className='text-dashbrod'>Channel</span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return <div className="section">Dashboard Content</div>;
};

const Orders = () => {

  return (
    <div className="section">
    <div>
      <div className="oprations">
      <p className='order-staus' style={{textDecoration:"underline ",textDecorationColor:"blue"}}> Pending</p> <p className='order-staus'>Accepted</p> <p className='order-staus'>Ready to Ship</p> <p className='order-staus'>Completed</p><p className='order-staus'>Cancelled</p> 
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
            <th>Channel</th>
              <th>Order No</th>
              <th>Order Date</th>
              <th>City</th>
              <th>Customer Name</th>
              <th>Order Value</th>
              <th>Order Status</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your fake data here */}
            <tr>
            <td>
            <div style={{display:"flex"}}>
              <p style={{fontSize:"20px"}}> + </p>  <input type='checkBox'/>
              </div>
            </td>
              <td>#yjdstebek001</td>
              <td>2024-02-19</td>
              <td>Hyderaba</td>
              <td>srinuvas Doe</td>
              <td>0.00</td>
              <td>
              <section>
                <button>Pending</button>
              </section>
              </td>
              <td>
               <button>Action</button>
              </td>
            </tr>

            <tr>
            <td>
            <div style={{display:"flex"}}>
              <p style={{fontSize:"20px"}}> + </p>  <input type='checkBox'/>
              </div>
            </td>
              <td>#003ereee1</td>
              <td>2024-02-19</td>
              <td>Hyderaba</td>
              <td>Hyderaba</td>
              <td>0.00</td>
              <td>
              <section>
                <button>Pending</button>
              </section>
              </td>
              <td>
               <button>Action</button>
              </td>
            </tr>

            <tr>
            <td>
            <div style={{display:"flex"}}>
              <p style={{fontSize:"20px"}}> + </p>  <input type='checkBox'/>
              </div>
            </td>
              <td>#etwjhw34001</td>
              <td>2024-02-19</td>
              <td>Hyderaba</td>
              <td> Doe</td>
              <td>0.00</td>
              <td>
              <section>
                <button>Pending</button>
              </section>
              </td>
              <td>
               <button>Action</button>
              </td>
            </tr>

            <tr>
            <td>
            <div style={{display:"flex"}}>
              <p style={{fontSize:"20px"}}> + </p>  <input type='checkBox'/>
              </div>
            </td>
              <td>#4t43g4001</td>
              <td>2024-02-19</td>
              <td>Hyderaba</td>
              <td>sham</td>
              <td>0.00</td>
              <td>
              <section>
                <button>Pending</button>
              </section>
              </td>
              <td>
               <button>Action</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

const SideBar = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="main-container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'orders' && <Orders />}
        {/* Add other sections as needed */}
      </div>
    </div>
  );
};

export default SideBar;
