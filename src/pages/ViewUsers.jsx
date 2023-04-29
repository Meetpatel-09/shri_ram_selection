import { useEffect, useState } from "react";

export default function ViewUsers() {
  const [data, setData] = useState(null);

  const apiGetUsers = "http://172.20.10.3:80/rfid/api/user/read_all.php";

  useEffect(() => {
    fetch(apiGetUsers)
      .then((res) => res.json())
      .then((data) => {
        if (data["status"] === 201) {
          setData(data["body"]);
        }
      });
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="border w-auto rounded-xl p-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          View Users
        </h2>

        <table className="table-auto border-collapse border border-slate-500 mt-3">
          <thead>
            <tr>
              <th className="border border-slate-600 py-2 px-2">Sr. No</th>
              <th className="border border-slate-600 py-2 px-2">Card ID</th>
              <th className="border border-slate-600 py-2 px-2">Name</th>
              <th className="border border-slate-600 py-2 px-2">Email</th>
              <th className="border border-slate-600 py-2 px-2">
                Mobile Number
              </th>
            </tr>
          </thead>
          <tbody>
            {data === null ? (
              <td colSpan="5" className="text-center">
                No Data Found
              </td>
            ) : (
              data.map((value, index) => {
                return (
                  <tr>
                    <td className="border border-slate-600 py-2 px-2">
                      {index + 1}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.card_id}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.name}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.email}
                    </td>
                    <td className="border border-slate-600 py-2 px-2">
                      {value.mobile}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
