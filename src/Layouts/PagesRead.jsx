

import { getBookInfo } from '../Components/localStorageLogic';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const PagesRead = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const getData = getBookInfo();
    console.log(getData);
    console.log(getData.length);
    const renderLineChart = (
        <LineChart width={600} height={300} data={getData}>
          <Line type="monotone" dataKey='totalPages' stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey='bookName' />
          <YAxis />
        </LineChart>
      );
    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
          {
            renderLineChart
          }

        </div>
    );

};

export default PagesRead;