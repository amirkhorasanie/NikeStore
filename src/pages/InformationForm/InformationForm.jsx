import { useReducer } from "react";

const userReducer = (state, action) => {
  console.log(state, action)

  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.value,
      };

    case "lastName":
      return {
        ...state,
        lastName: action.value,
      };

    case "email":
      return {
        ...state,
        email: action.value,
      };

    case "phone":
      return {
        ...state,
        phone: action.value,
      };

    case "birthDate":
      return {
        ...state,
        birthDate: action.value,
      };

    case "gender":
      return {
        ...state,
        gender: action.value,
      };

    case "nationality":
      return {
        ...state,
        nationality: action.value,
      };

    case "maritalStatus":
      return {
        ...state,
        maritalStatus: action.value,
      };

    default:
      return state;
  }
};


const InformationForm = () => {
  
  const [user, dispatch] = useReducer(userReducer, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
  });

  return (
    <>
      <main className="w-dvw ">
        <form className="w-[80%] dark:bg-neutral-800 mx-auto bg-white my-10 rounded-lg p-10 overflow-y-auto shadow">
          <section id="content-wrapper" className="w-[90%] mx-auto">

            {/* بخش اطلاعات شخصی */}
            <div className="mt-10">
              <h2 className="text-xl text-zinc-800 font-bold mb-6">
                Personal information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    firstName
                  </label>
                  <input
                    value={user.firstName}
                    onChange={(event) =>
                      dispatch({ type: "firstName", value: event.target.value })
                    }
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your firstName"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    lastName
                  </label>
                  <input
                    value={user.lastName}
                    onChange={(event) =>
                      dispatch({ type: "lastName", value: event.target.value })
                    }
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your lastName"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    email
                  </label>
                  <input
                    value={user.email}
                    onChange={(event) =>
                      dispatch({ type: "email", value: event.target.value })
                    }
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    phoneNumber
                  </label>
                  <input
                    value={user.phone}
                    onChange={(event) =>
                      dispatch({ type: "phone", value: event.target.value })
                    }
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="09123456789"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    birthDate
                  </label>
                  <input
                    value={user.birthDate}
                    onChange={(event) =>
                      dispatch({ type: "birthDate", value: event.target.value })
                    }
                    type="date"
                    name="birthDate"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    gender
                  </label>
                  <select
                    value={user.gender}
                    onChange={(event) =>
                      dispatch({ type: "gender", value: event.target.value })
                    }
                    name="gender"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                    <option value="prefer-not">ترجیح نمی‌دهم</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>
    </>
  );
};

export default InformationForm;
