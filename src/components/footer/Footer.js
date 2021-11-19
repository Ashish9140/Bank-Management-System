import { connect } from 'react-redux'
import './Footer.css'

const Footer = ({siteInfo}) => {
    return (
        <div className="user-home-footer">
            <p>@{siteInfo.bankName||"sumex"}bank 2021</p>
            <p>all rights reserved</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {...state}
}
  
export default connect(mapStateToProps)(Footer);