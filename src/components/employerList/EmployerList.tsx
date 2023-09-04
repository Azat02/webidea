import { Table } from "antd";
import { columns, data } from "../../constant";
import style from "./EmployerList.module.scss";

function EmployerList() {
  return (
    <div className={style.wrapper}>
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        scroll={{ y: 265 }}
        pagination={false}
      />
    </div>
  );
}

export default EmployerList;
