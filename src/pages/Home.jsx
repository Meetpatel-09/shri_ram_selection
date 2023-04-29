import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  // const [isDataLoaded, setDataLoad] = useState(false);

  const apiGetUserLogs = "http://172.20.10.3:80/rfid/api/user_logs/read_all.php";

  useEffect(() => {
    
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
      // if (!isDataLoaded) {
        getData();
      // }
    }, 2000);
    
    async function getData() {
      
      fetch(apiGetUserLogs)
      .then((res) => res.json())
      .then((data) => {
        if (data["status"] === 201) {
          setData(data["body"]);
          // setDataLoad(true);
        }
      });
    }
    
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center mt-10">
      <div className="border w-auto rounded-xl p-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
        Users Logs
        </h2>

        <table className="table-auto border-collapse border border-slate-500 mt-3">
          <thead>
            <tr>
              <th className="border border-slate-600 py-2 px-2">Sr. No</th>
              <th className="border border-slate-600 py-2 px-2">Card ID</th>
              {/* <th className="border border-slate-600 py-2 px-2">Name</th> */}
              <th className="border border-slate-600 py-2 px-2">Entery</th>
              <th className="border border-slate-600 py-2 px-2">Exit</th>
            </tr>
          </thead>
          <tbody>
          {data === null ? (
              <td colSpan="5" className="text-center">
                No Data Found
              </td>
            ) : 
              data.map((value, index) => {
                return (
                  <tr>
                    <td className="border border-slate-600 py-2 px-2">
                      {index + 1}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.card_id}
                    </td>
                    {/* <td className="border border-slate-600 py-2 px-2">
                      {value.name}
                    </td> */}
                    <td className="border border-slate-600 py-2 px-2">
                      {value.entry_time}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.exit_time}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
