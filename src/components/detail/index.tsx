import { Button } from "..";
import styles from "./detail.module.css";

const Detail = ({ itemdetail, deleteitem }: any) => {
  console.log(itemdetail);
  return (
    <div className={styles.item_container}>
      <p className={styles.text}> {itemdetail.name}</p>

      <Button
        color="#fff"
        background="blue"
        text="Delete"
        onHandleClick={() => deleteitem(itemdetail.id)}
      ></Button>
    </div>
    
  );
};

export default Detail;
