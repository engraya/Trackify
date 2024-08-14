"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@src/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { currencies, Currency } from "@src/lib/currencies"
import { useMutation, useQuery } from "@tanstack/react-query"
import SkeletonWrapper from "./SkeletonWrapper"
import { UserSettings } from "@prisma/client"
import { useEffect } from "react"
import { UpdateUserCurrency } from "@actions/userSettings"
import { toast } from "sonner"
import { useState } from "react"
 

export function CurrencyBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("");
  const [selectedOption, setSelectedOption] = useState<Currency | null>(null)

  const userSettings = useQuery<UserSettings>({
    queryKey : ["userSettings"],
    queryFn : () => fetch("/api/user-settings").then((res) => res.json()),
  });

  console.log("User Settings", userSettings);

  useEffect(() => {
    if (!userSettings.data) return;
    const userCurrency = currencies.find(
      (currency) => currency.value === userSettings.data.currency
    );
    if (userCurrency) setValue(userCurrency);
  }, [userSettings.data]);


  const mutation = useMutation({
    mutationFn : UpdateUserCurrency, 
    onSuccess : (data : UserSettings) => {
      toast.success('Currency updated successfully....', {
        id : 'update-currency',
      });

      setSelectedOption(
        currencies.find((currency) => currency.value === data.currency) || null
      )
    },
    onError : (e) => {
      toast.error("Something went wrong...", {
        id : "update-currency"
      })
    }
  })

  const selectOption = React.useCallback(
    (currency : Currency | null) => {
      if (!currency) {
        toast.error("Please select a currency to continue");
        return
      }

      toast.loading("Updating currency......", {
        id : "updated-currency",
      });

      mutation.mutate(currency.value);
    },
    [mutation]
  )
  




  return (
    <SkeletonWrapper isLoading={userSettings.isFetching}>
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={mutation.isPending}
          className="w-[200px] justify-between"
        >
          {value
            ? currencies.find((currency) => currency.value === value)?.label
            : "Select Currency..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." className="h-9" />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {currency.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === currency.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </SkeletonWrapper>

  )
}
