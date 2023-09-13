import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <section className="flex items-center">
      <Sidebar />
      <div className=" w-[80vw] absolute top-0 translate-x-[50%] right-[50%] translate-y-[50%]">
        <h1 className="text-5xl text-center text-[#11334f] font-semibold">
          Welcome To Uniconfort's Dashboard
        </h1>
      </div>
    </section>
  );
};

export default Dashboard;
