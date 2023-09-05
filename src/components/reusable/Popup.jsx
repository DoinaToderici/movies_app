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
        <span className="flex w-full md:w-48 lg:w-100 items-center justify-center rounded-md border border-transparent bg-amber-600 px-3 py-3 text-base font-medium text-white text-center hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
          Add new movie in your space
        </span>
      </PopoverHandler>

      <PopoverContent className="w-96">
        <AddNewMovie />
      </PopoverContent>
    </Popover>
  );
}
