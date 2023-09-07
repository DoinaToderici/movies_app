import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import AddNewMovie from "../reusable/AddNewMovie";

export default function Popup() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <span className="inline-block animate-bounce rounded-md border border-transparent bg-emerald-600 px-2 py-2 text-base font-medium text-white text-center hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 hover:cursor-pointer">
          Add new movie in your space
        </span>
      </PopoverHandler>
      <hr className="my-4" />
      <PopoverContent className="w-96">
        <AddNewMovie />
      </PopoverContent>
    </Popover>
  );
}
