import Image from "next/image";
import AddressIcon from "../../kontakt-page/address-icon";
import Button from "../button";
import Link from "next/link";
import ElectricityIcon from "../electricity-icon";

export default function RealizationCard() {
  return (
    <div className="flex flex-col max-w-screen h-[500px] sm:w-96 rounded-lg shadow-md bg-primaryGray">
      <img className="w-contain rounded-t-lg" src="/realization1.jpg" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="my-4">
          <AddressIcon />
          <h4 className="inline-block">Katowice</h4>
        </div>
        <div>
          <ElectricityIcon />
          <h4 className="inline-block">5 kWp</h4>
        </div>

        <Button className="ml-auto mt-auto">zobacz</Button>
      </div>
    </div>
  );
}
