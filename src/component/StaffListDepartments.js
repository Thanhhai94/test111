import RenderstaffList from "./RenderstaffList";


const StaffListDepartments = (props) => {
    const staffListDepartments = props.staffs.map((staff) => {
            <div key={staff.id} className="col-md-2 col-sm-4 col-xs-6">
                <RenderstaffList staff={staff} />
            </div>
    })
    return (
        <div className="container">
            <div className="row">
                {staffListDepartments}
            </div>
        </div>
    )
}

export default StaffListDepartments