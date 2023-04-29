import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AddUser() {
  const [inputs, setInputs] = useState({});
  const [cardID, setcardID] = useState("loading...");
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  const apiGetCardId = "http://172.20.10.3:80/rfid/api/card_id/read.php";
  const apiRemoveCardId = "http://169.254.18.139:80/rfid/api/card_id/delete.php";
  const apiCreateUser = "http://169.254.18.139:80/rfid/api/user/create.php";

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
      if (cardID === "loading...") {
        getData();
      }
    }, 2000);

    async function getData() {
      await fetch(apiGetCardId)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data["status"] === 201) {
            let value = data["body"][0]["card_id"];
            console.log(value);
            setcardID(value);
            setInputs((values) => ({ ...values, card_id: value }));
          }
        });
    }

    return () => clearTimeout(timer);
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    try {
      let reqData = JSON.stringify({
        card_id: inputs.card_id,
        name: inputs.user_name,
        email: inputs.email,
        mobile: inputs.mobile,
      });

      // console.log("reqData");
      // console.log(reqData);

      let res = await fetch(apiCreateUser, {
        method: "POST",
        body: reqData,
      });
      if (res.status === 200) {
        setInputs({});
        setcardID("loading...");
        deleteCardID();
        // setMessage("User Added Successfully");
      } else {
        // setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function deleteCardID() {
    await fetch(apiRemoveCardId + "?card_id=" + cardID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="border w-auto rounded-xl p-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Card ID
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">{cardID}</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                User Information
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_name"
                      id="user_namee"
                      value={inputs.user_name || ""}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={inputs.last_name || ""}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      autoComplete="email"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      value={inputs.mobile || ""}
                      onChange={handleChange}
                      autoComplete="street-address"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
