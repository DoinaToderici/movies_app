import AddNewMovie from "../reusable/AddNewMovie";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";

export default function Popup() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="rounded-md bg-orange-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        Add new Movie
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="w-50 bg-slate-50 mx-auto"
      >
        <DialogHeader>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <AddNewMovie />
        </DialogBody>
      </Dialog>
      <hr className="my-4" />
    </div>
  );
}
