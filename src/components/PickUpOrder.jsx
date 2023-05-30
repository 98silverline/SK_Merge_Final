import React from "react";
import "./tool.css";
import { useNavigate } from 'react-router-dom';

// import { Margin } from "@mui/icons-material";

const PickUpOrder = (props) => {
    const itemName = props.itemName;
    const storeName = props.storeName;
    const navigate = useNavigate();

    
    const orderHandler = () => {
      // console.log(`${storeName} '${itemName}' 주문 완료!`);
      Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
          new Notification('주문 접수', { body: `${storeName}의 상품 '${itemName}' 주문 접수 완료!` });
        }
      });
    }

    function goToPurchase() {
      navigate("/Purchase");
  }
    
    
    return (

        <div style ={{display: 'flex', alignItems:'center'}}>
          <button onClick={goToPurchase} style ={{ marginLeft:'30px', fontWeight:'bold',height:'2.5rem'}}>픽업 주문</button>
        </div>


    );
}
export default PickUpOrder;