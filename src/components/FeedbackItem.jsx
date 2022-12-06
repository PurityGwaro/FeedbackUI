import {PropTypes} from 'prop-types'
import Card from "./shared/Card"
import {FaEdit, FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    
  return (
    <Card>
      <div className="num-display">{item?.rating}</div>
      <button className='edit'
      onClick={()=>editFeedback(item)}
      >
        <FaEdit className="btneditdelete" size={20} color='purple'/>
      </button>
      <button 
      onClick={()=>deleteFeedback(item.id)}
      className="close"><FaTimes className="btneditdelete" size={20} color='purple'/></button>
      <div className="text-display">{item?.text}</div>
    </Card>
  )
}
FeedbackItem.protoTypes = {
    item:PropTypes.object.isRequired,
}
export default FeedbackItem
