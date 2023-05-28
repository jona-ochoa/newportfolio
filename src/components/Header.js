import React from "react";

const Header = () => {
  return (
    <header className="py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <h1 className="text-gradient text-[25px] lg:text-[40px]">Jona <span className="text-white">Ochoa</span></h1>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
