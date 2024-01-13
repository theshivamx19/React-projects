import React, { useEffect } from 'react'
import "assets/css/PastSubmission/PastSubmission.css";
// import { getMonthlyReport } from "redux/Actions/MonthlyReport";
// import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Table } from 'antd';
import { useState } from 'react';

const columns = [
  {
    title: 'S.no',
    dataIndex: 'key',
  },
  {
    title: 'Licensee Name',
    dataIndex: 'memberName',
  },
  {
    title: 'Report Number',
    dataIndex: 'reportNumber',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const PastSubmission = ({monthlyReportList}) => {

  // const dispatch = useDispatch();
  // const { monthlyReportList } = useSelector(state => state.monthlyReport);
  const [monthlyReports, setMonthlyReports] = useState([])
  // useEffect(() => {
  //   dispatch(getMonthlyReport());    
  // }, [])
  useEffect(() => {
    let monthlyReportArr = []
    if (Object?.keys(monthlyReportList)?.length > 0
      && monthlyReportList?.data?.length > 0
    ) {
      monthlyReportList?.data?.map((item, index) => {        
        monthlyReportArr.push({
          key: index + 1,
          memberName: item?.licence,
          reportNumber: item.report_number,
          date: moment(item.created_on).format('DD/MM/YYYY'),
          status: item.status === 0 ? 'Pending' : 'Approved'
        })
      })
      setMonthlyReports(monthlyReportArr)
    }   
  }, [monthlyReportList])

  return (
    <div className="widget-content widget-content-area br-6">
      <h4 className="annualTitles" style={{ fontSize: "20px" }}>Past Submission</h4><br /><br />
      <div className="table-responsive mb-4">
         <Table
            columns={columns}
            dataSource={monthlyReports}
            pagination={{ 
              defaultPageSize: 20, 
              showSizeChanger: true, 
              pageSizeOptions: ['20', '50', '100']
            }}
            locale={{ emptyText: (<div className="css-dev-only-do-not-override-htwhyh ant-empty ant-empty-normal"><div className="ant-empty-image"><svg width="64" height="41" viewBox="0 0 64 41" xmlns="https://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fillRule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg></div><div className="ant-empty-description">No Submission Data</div></div>)
          }}
          />
      </div>
    </div>
  )
}

export default PastSubmission
