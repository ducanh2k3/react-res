import { useState } from "react";
import { Button } from "..";
import Detail from "../detail";

const List = ({ lst, deleteitem }: any) => {
  console.log(deleteitem);

  return (
    <div>
      {lst.map((list: any) => {
        return (
          <div key={list.id}>
            <Detail itemdetail={list} deleteitem={deleteitem} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default List;
