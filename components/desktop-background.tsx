

const DesktopBackground = () => {
  return (

      <div className={`relative h-[550px] w-[550px] right-28 top-20 `}>
        <img className="" src="/images/illustration-woman-online-desktop.svg" alt="" />
        <div className="h-32 w-32 absolute -left-0 top-36">
          <img src="/images/illustration-box-desktop.svg" alt="" />

        </div>
        <div className={`absolute bottom-28 right-14  `}>
          <img className=" " src="/images/bg-pattern-desktop.svg" alt="" />
        </div>
      </div>
  );
};

export default DesktopBackground;
