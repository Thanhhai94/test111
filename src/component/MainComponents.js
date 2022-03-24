import React , { Component } from 'react';
import StaffListComponent from './StaffListComponent'
import StaffDetailComponent from './StaffDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponents from './FooterComponent';
import {Switch , Route, Redirect, withRouter } from 'react-router-dom';
import Departments from './Departments';
import PayrollSheets from './PayrollSheets';
import {connect} from 'react-redux';
import { fetchStaffs,fetchDepts, fetchSalary } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    depts : state.depts,
    salary: state.salary
  }
}
const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDepts: () => {dispatch(fetchDepts())},
  fetchSalary: () => {dispatch(fetchSalary())}
})


class MainComponents extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   staffs: STAFFS,
    //   depts: DEPARTMENTS,
    //   newStaff : '',
    // }
    // this.addNewStaff = this.addNewStaff.bind(this)
  }

  // addNewStaff(newStaff) {
    
  //   this.setState({
  //     newStaff: newStaff
  //   })
  //   console.log(newStaff)

   

  //   let listStaff = JSON.parse(localStorage.getItem('listStaff'))
    
  //   let findDept = DEPARTMENTS.filter(x => x.id === newStaff.department)[0];

  //   let addNewStaff = {...newStaff, id : listStaff.length, department: findDept, image:'/assets/images/alberto.png' }

  //   let newListStaff = [...listStaff, addNewStaff]

  //   console.log('newListStaff' + JSON.stringify(newListStaff))

  //   localStorage.setItem('listStaff', JSON.stringify(newListStaff))
    
  //   this.setState({
  //     staffs: newListStaff
  //   })
    
  // }


  componentDidMount(){
    console.log('didmount')
    this.props.fetchStaffs();
    this.props.fetchDepts()
    this.props.fetchSalary()
  }

  render() {
    const StaffWithId = ({match}) => {
      return(
        <StaffDetailComponent staff = {this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
        )}

    return (
      <div>
        <HeaderComponent />
            <Switch>
                <Route exact path='/StaffList' component={() => <StaffListComponent staffs={this.props.staffs.staffs}
                                                                                    staffsLoading={this.props.staffs.isLoading}
                                                                                    staffsErrMess={this.props.staffs.errMess}
                                                                                    handleSubmit={(newStaff) => this.addNewStaff(newStaff)}/>} />
                <Route path='/StaffList/:staffId' component={StaffWithId} />
                <Route exact path='/Departments' component={() => <Departments depts={this.props.depts.depts}/>}/>
                <Route exact path='/Salary' component={() => <PayrollSheets salary={this.props.salary.salary}/>}/>
                <Redirect to='StaffList'/>
            </Switch>
        <FooterComponents />
      </div>
    );
  }


}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponents));



