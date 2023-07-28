import React from "react";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import categories  from "../utils/constant";
import { Context } from "../context/contextApi";
import LeftNavMenuItem from "./LeftNavMenuItem";
const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const ClickHandler=(name, type)=>{
    console.log(name);
switch (type) {
    case "category":
        return setSelectCategories(name)
    case "home":
        return setSelectCategories(name)
    case "menu":
         return false
    
    default:
        break;
}
  }

  return (
    <div className={`md:block w-[240px] md:mt-[70px] overflow-y-auto  h-auto py-4 bg-black absolute md:fixed md:top-0 md:bottom-0 md:overflow-y-scroll z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
      mobileMenu ? "translate-x-0" : ""
  }`}>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {ClickHandler(item.name, item.type)}}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
                {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
            </>
          );
        })}
         <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: TiTAN
                </div>
            
               
            </div>
        </div>

  );
};

export default LeftNav;
