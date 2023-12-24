"use client";
import { currencies } from "@/libs/currencies";
import { Button, Input, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useDeferredValue } from "react";
import { ChevronsRightIcon } from "lucide-react";

type CurrencyResponse = {
  success: boolean;
  terms: string;
  privacy: string;
  timestamp: number;
  source: string;
  quotes: Record<string, number>; // example: USDINR: 73.5
};

export default function ClientPage({ access_key }: { access_key: string }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [finalFrom, setFinalFrom] = useState({
    name: "...",
    cc: "",
    symbol: "",
  });
  const [finalTo, setFinalTo] = useState({ name: "...", cc: "", symbol: "" });
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);
  const deferredFrom = useDeferredValue(from);
  const deferredTo = useDeferredValue(to);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
    currencies.forEach((currency) => {
      const regex = new RegExp(deferredFrom, "i");
      if (regex.test(currency.cc) || regex.test(currency.name)) {
        setFinalFrom({
          name: `${currency.name}`,
          cc: `${currency.cc}`,
          symbol: `${currency.symbol}`,
        });
      }
    });
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
    currencies.forEach((currency) => {
      const regex = new RegExp(deferredTo, "i");
      if (regex.test(currency.cc) || regex.test(currency.name)) {
        setFinalTo({
          name: `${currency.name}`,
          cc: `${currency.cc}`,
          symbol: `${currency.symbol}`,
        });
      }
    });
  };
  const getApiData = async () => {
    const res = await fetch(
      `http://apilayer.net/api/live?access_key=${access_key}&format=1&source=${finalFrom.cc}`,
    );
    const data = (await res.json()) as CurrencyResponse;
    const rate = data.quotes[`${finalFrom.cc}${finalTo.cc}`];
    setRate(rate!);
    setResult(Math.floor(amount * rate!));
  };
  return (
    <>
      <div>
        <div className="mx-auto mt-12 flex max-w-[90%] flex-col items-center gap-4 sm:container sm:flex-row lg:max-w-[30%]">
          <Input
            value={from}
            onChange={handleFromChange}
            label={finalFrom.name}
            placeholder="From"
            autoComplete="off"
          />
          <ChevronsRightIcon className="hidden sm:block" size={56} />
          <Input
            value={to}
            onChange={handleToChange}
            label={finalTo.name}
            placeholder="To"
            autoComplete="off"
          />
        </div>
        <Divider className="mt-6 " />
        <div className="mx-auto mt-6 flex max-w-[90%] flex-col items-center gap-4 sm:container lg:max-w-[30%]">
          <Input
            value={amount.toString()}
            onChange={(e) => setAmount(Number(e.target.value))}
            label="Amount"
            placeholder="Enter Amount to Convert"
          />
          <Button onClick={getApiData} className="w-full" color="primary">
            Convert
          </Button>
          {rate !== 0 ? (
            <>
              {finalFrom.symbol} {amount} is {finalTo.symbol} {result}
            </>
          ) : (
            "Please Enter a Amount"
          )}
        </div>
      </div>
    </>
  );
}
