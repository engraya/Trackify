"use client";
import { CheckIcon, LanguagesIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const locales = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "French",
    value: "fr",
  },
];

export default function LocaleToggler() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <LanguagesIcon className=" h-5 w-5 " />
          <span className="sr-only">Change Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
